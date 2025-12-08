import React, { useState } from "react";

const initialForm = { name: "", email: "", message: "" };
const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:4000";

export default function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", message: "Please fill out every field." });
      return;
    }

    setIsSending(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch(`http://localhost:4000/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Failed to send message.");
      }

      setStatus({
        type: "success",
        message: "Message sent! I'll get back to you soon.",
      });
      setFormData(initialForm);
    } catch (err) {
      console.error("Email send failed:", err);
      setStatus({
        type: "error",
        message: err.message || "Something went wrong. Please try again.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen py-20 px-6 sm:px-10 text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black to-black/90" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 left-10 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">
            Get in touch
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-white/90 mt-3">
            Let's build something together
          </h2>
          <p className="text-gray-400 mt-4">
            Drop a message and it will land in my inbox instantly.
          </p>
        </div>

        <div className="glass rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/10 shadow-2xl">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <label className="flex flex-col gap-2 text-sm text-white/80">
                Name
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/40"
                  placeholder="Your name"
                  required
                />
              </label>

              <label className="flex flex-col gap-2 text-sm text-white/80">
                Email
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/40"
                  placeholder="you@example.com"
                  required
                />
              </label>
            </div>

            <label className="flex flex-col gap-2 text-sm text-white/80">
              Message
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 resize-none"
                placeholder="Tell me about your project or idea..."
                required
              />
            </label>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <button
                type="submit"
                disabled={isSending}
                className="
                  inline-flex items-center justify-center
                  px-6 py-3 rounded-xl
                  bg-white text-black font-semibold
                  hover:-translate-y-px transition-transform
                  disabled:opacity-60 disabled:cursor-not-allowed
                "
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>

              {status.message && (
                <span
                  className={`text-sm ${
                    status.type === "success"
                      ? "text-green-300"
                      : status.type === "error"
                      ? "text-red-300"
                      : "text-white/70"
                  }`}
                >
                  {status.message}
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

