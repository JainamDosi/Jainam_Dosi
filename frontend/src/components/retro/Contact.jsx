import React from 'react';

const Contact = () => {
    return (
        <section className="py-40 px-6 bg-retro-dark text-retro-bg text-center relative overflow-hidden" id="contact">
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDsLU5NsiVCefeyV1rY3bDjxROVKHWwBtsDtzOj2ZPdpB1zxB-7nYAgDKbd_EhtGR0AgqqMZDUD_aiCo20EgAMbdVhM8d4sp4ON8hFVhEYGb5YrooE8gQPre16GuhiYO3HxjLG1ug0PmCqTj-rMS71lP2G17bhMrm_6FPmUj9DksPPk2xW-o2AWVT7wqVvh1nCtDE7du4QH8IUjK5WRPz_jFbkgpxxp8SF_lAqr38iYOrWUU2WAsJtv5XhO_A6upKt0a89jEoXKwIy6')" }}></div>
            <div className="relative z-10 max-w-4xl mx-auto space-y-12">
                <h2 className="font-retro text-2xl md:text-3xl text-mustard uppercase opacity-80">Initiating_Communication...</h2>
                <a className="block font-retro text-4xl md:text-6xl hover:text-burnt-orange transition-colors break-words leading-tight" href="mailto:dosijainamiitb@gmail.com">
                    LET'S_BUILD_<br />SOMETHING
                </a>
                <div className="flex flex-col md:flex-row justify-between items-center gap-12 pt-24 border-t border-retro-bg/20 font-body">
                    <div className="flex gap-8 font-retro text-xs md:text-sm">
                        <a className="hover:text-mustard" href="https://www.linkedin.com/in/jainam-dosi" target="_blank" rel="noopener noreferrer">LNKDN</a>
                        <a className="hover:text-mustard" href="https://github.com/JainamDosi" target="_blank" rel="noopener noreferrer">GTHB</a>
                        <a className="hover:text-mustard" href="https://x.com/CodeJ31969" target="_blank" rel="noopener noreferrer">X / TWTR</a>
                        <a className="hover:text-mustard" href="#">DRBBL</a>
                    </div>
                    <div className="font-retro text-[10px] tracking-widest opacity-60">
                        VERSION 2.0.26 © JAINAM DOSI | ALL BYTES RESERVED
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
