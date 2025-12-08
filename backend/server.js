import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import slowDown from "express-slow-down";
import validator from "validator";
import { Resend } from "resend";

dotenv.config();

const app = express();

// -----------------------------------------------------
// CONFIG
// -----------------------------------------------------
const PORT = process.env.PORT || 4000;
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "jainamcode@gmail.com";

// Warn if missing API key
if (!RESEND_API_KEY) console.warn("Warning: RESEND_API_KEY missing.");

const resend = new Resend(RESEND_API_KEY || "missing_key");

// -----------------------------------------------------
// GLOBAL MIDDLEWARES
// -----------------------------------------------------
app.use(cors());

// Security headers
app.use(helmet());

// Request size limit
app.use(express.json({ limit: "10kb" }));

// Basic health check
app.get("/health", (_req, res) => res.json({ status: "ok" }));

// -----------------------------------------------------
// RATE LIMITING
// -----------------------------------------------------
const contactLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 5, // max 5 requests per minute per IP
  message: { error: "Too many requests. Try again later." },
});

const contactSlowdown = slowDown({
  windowMs: 60 * 1000,
  delayAfter: 3,
  delayMs: () => 500, // new v2 behavior
});

// -----------------------------------------------------
// HELPER: Anti-spam honeypot
// -----------------------------------------------------
function isSpam(req) {
  return req.body.hiddenField !== undefined && req.body.hiddenField !== "";
}

// -----------------------------------------------------
// CONTACT ENDPOINT (Protected)
// -----------------------------------------------------
app.post("/api/contact", contactLimiter, contactSlowdown, async (req, res) => {
  try {
    const { name, email, message, hiddenField } = req.body || {};

    // -----------------------------------------------------
    // Honeypot spam trap
    // -----------------------------------------------------
    if (isSpam(req)) {
      return res.status(400).json({ error: "Spam detected" });
    }

    // -----------------------------------------------------
    // Validate required fields
    // -----------------------------------------------------
    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ error: "Name, email, and message are required." });
    }

    // -----------------------------------------------------
    // Strict validation
    // -----------------------------------------------------
    if (!validator.isEmail(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    if (name.length < 2 || name.length > 50) {
      return res.status(400).json({ error: "Invalid name length" });
    }

    if (message.length < 10 || message.length > 2000) {
      return res.status(400).json({ error: "Message must be 10–2000 chars" });
    }

    // Prevent HTML/script injection
    const safeMessage = validator.escape(message);

    // -----------------------------------------------------
    // API key check
    // -----------------------------------------------------
    if (!RESEND_API_KEY || RESEND_API_KEY === "missing_key") {
      return res.status(500).json({
        error: "Email API key not configured.",
      });
    }

    // -----------------------------------------------------
    // SEND MAIL
    // -----------------------------------------------------
    const result = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: TO_EMAIL,
      subject: `Portfolio contact from ${name}`,
      reply_to: email,
      html: `
          <div style="font-family: Arial, sans-serif;">
            <p><strong>Name:</strong> ${validator.escape(name)}</p>
            <p><strong>Email:</strong> ${validator.escape(email)}</p>
            <p><strong>Message:</strong></p>
            <p>${safeMessage.replace(/\n/g, "<br/>")}</p>
          </div>
        `,
    });

    return res.json({ success: true, id: result?.id });
  } catch (error) {
    console.error("Contact API Error:", error);
    return res.status(500).json({
      error: error?.message || "Internal server error.",
    });
  }
});

// -----------------------------------------------------
// GLOBAL ERROR HANDLER (prevents crashes)
// -----------------------------------------------------
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ error: "Unexpected server error" });
});

// -----------------------------------------------------
// START SERVER
// -----------------------------------------------------
app.listen(PORT, () => {
  console.log(`Contact server running on http://localhost:${PORT}`);
});
