import React, { useState } from 'react';

const Footer = () => {
    const [contactValue, setContactValue] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (contactValue.trim()) {
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 3000);
            setContactValue('');
        }
    };

    return (
        <footer
            style={{ fontFamily: "'Mona Sans', sans-serif" }}
            className="relative w-full bg-[#FAFBFD] pb-10 pt-2 sm:pt-4 overflow-hidden"
        >
            {/* ───────────────── 1. BLUE FOOTER CARD (Exact to 2nd Image) ───────────────── */}
            <div className="w-[96%] max-w-[1440px] mx-auto">
                <div className="relative rounded-3xl sm:rounded-[36px] overflow-hidden shadow-[0_15px_40px_rgba(18,67,129,0.18)] bg-[#124381] px-6 sm:px-10 lg:px-12 py-8 sm:py-10 lg:py-11 text-white">

                    {/* Top Row: Logo with Heading Text, Information, Branches, Request a Call */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-8 items-start">

                        {/* Logo Column: Circular Logo + "FieldOps By Tech surya" */}
                        <div className="md:col-span-4 flex items-center gap-3.5">
                            <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-full overflow-hidden flex-shrink-0 bg-white/10 flex items-center justify-center shadow-md">
                                <img
                                    src="/Screenshot 2026-11-13 at 10.54.36 AM 2.png"
                                    alt="FieldOps Logo"
                                    className="w-full h-full object-contain select-none"
                                />
                            </div>
                            <div className="flex flex-col text-left">
                                <span className="font-heading font-extrabold text-2xl sm:text-[28px] text-white tracking-tight leading-none">
                                    Field<span className="text-[#FD860C]">Ops</span>
                                </span>
                                <span className="text-xs sm:text-[13px] text-white/80 font-medium mt-1">
                                    By Tech surya
                                </span>
                            </div>
                        </div>

                        {/* INFORMATION Column */}
                        <div className="md:col-span-3">
                            <h4 className="text-[11px] font-bold text-slate-300/70 tracking-widest uppercase mb-3.5">
                                INFORMATION
                            </h4>
                            <ul className="space-y-2 text-sm sm:text-[14.5px] font-medium text-white/90">
                                <li>
                                    <a href="#policy" className="hover:text-white transition-colors">
                                        Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#terms" className="hover:text-white transition-colors">
                                        Terms & Conditions
                                    </a>
                                </li>
                                <li>
                                    <a href="#product" className="hover:text-white transition-colors">
                                        Product
                                    </a>
                                </li>
                                <li>
                                    <a href="#features" className="hover:text-white transition-colors">
                                        Features
                                    </a>
                                </li>
                                <li>
                                    <a href="#about" className="hover:text-white transition-colors">
                                        Who we are
                                    </a>
                                </li>
                                <li>
                                    <a href="#contact" className="hover:text-white transition-colors">
                                        Contacts
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* OUR BRANCHES Column */}
                        <div className="md:col-span-2">
                            <h4 className="text-[11px] font-bold text-slate-300/70 tracking-widest uppercase mb-3.5">
                                OUR BRANCHES
                            </h4>
                            <ul className="space-y-2 text-sm sm:text-[14.5px] font-medium text-white/90">
                                <li>Chhatrapati Sambhajinagar</li>
                                <li>Nashik</li>
                                <li>Pune</li>
                            </ul>
                        </div>

                        {/* Request a Call / Contact Column */}
                        <div className="md:col-span-3 flex flex-col md:items-end text-left md:text-right">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center rounded-full bg-[#2368DB] hover:bg-[#1D5BBF] text-white text-[13.5px] font-semibold px-6 py-2 shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
                            >
                                Request a call
                            </a>

                            <div className="mt-3.5 space-y-0.5">
                                <a
                                    href="tel:+919621345050"
                                    className="block text-sm sm:text-[14.5px] font-bold text-white hover:underline"
                                >
                                    +91 96213 45050
                                </a>
                                <a
                                    href="mailto:Office@techsuryalitsolution.com"
                                    className="block text-xs sm:text-[13px] font-medium text-white/85 hover:underline break-all"
                                >
                                    Office@techsuryalitsolution.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Row: Instagram Icon inside Orange Circle, WhatsApp, Address & Slogan */}
                    <div className="mt-12 sm:mt-16 pt-2 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                        {/* Social Icons */}
                        <div className="flex items-center gap-3">
                            {/* Instagram circle with lets-icons_insta-light.png */}
                            <a
                                href="#instagram"
                                aria-label="Instagram"
                                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FE6608] hover:bg-[#E55B07] flex items-center justify-center shadow-sm hover:scale-105 transition-transform"
                            >
                                <img
                                    src="/lets-icons_insta-light.png"
                                    alt="Instagram"
                                    className="w-5 h-5 object-contain"
                                />
                            </a>

                            {/* WhatsApp circle */}
                            <a
                                href="https://wa.me/919621345050"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="WhatsApp"
                                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#2368DB] hover:bg-[#1D5BBF] flex items-center justify-center text-white shadow-sm hover:scale-105 transition-transform"
                            >
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.54 1.772.82 2.791.82 3.182 0 5.768-2.587 5.768-5.766.001-3.182-2.585-5.766-5.768-5.766zm9.969 5.766c0 5.514-4.486 10-10 10-1.697 0-3.32-.423-4.757-1.196l-7.243 1.896 1.936-7.081c-.848-1.488-1.336-3.21-1.336-5.044 0-5.514 4.486-10 10-10 5.514 0 10 4.486 10 10z" />
                                </svg>
                            </a>
                        </div>

                        {/* Address */}
                        <p className="text-xs sm:text-[13px] text-white/80 max-w-sm sm:max-w-md leading-relaxed">
                            Office no 217 , 222 Golden City Center near prozon mall Chhatrapati Sambhajinagar.
                        </p>

                        {/* Slogan */}
                        <div className="text-xl sm:text-2xl lg:text-[26px] font-bold text-white tracking-tight whitespace-nowrap">
                            World Wide Available !
                        </div>
                    </div>
                </div>
            </div>

            {/* ───────────────── 2. CONTACT & INQUIRY SECTION (Exact to 2nd Image) ───────────────── */}
            <div className="w-[96%] max-w-[1440px] mx-auto mt-10 sm:mt-12 px-1 sm:px-2">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
                    {/* Left Column: Heading */}
                    <div className="lg:col-span-7">
                        <h3 className="font-heading font-bold text-2xl sm:text-3xl lg:text-[32px] text-slate-900 leading-[1.22] tracking-tight">
                            If you didn’t find the products
                            <br />
                            you are interested in or have
                            <br />
                            questions?
                        </h3>
                    </div>

                    {/* Right Column: Inquiry Input */}
                    <div className="lg:col-span-5 flex flex-col justify-center">
                        <p className="text-xs sm:text-[13px] font-medium text-slate-700 mb-1.5">
                            Just send us your contact email and we will contact you.
                        </p>

                        <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase mb-1 block">
                            YOUR EMAIL / CONTACT NO
                        </span>

                        <form
                            onSubmit={handleSubmit}
                            className="flex items-center w-full bg-white border border-slate-300 rounded-xl sm:rounded-2xl px-3 py-1.5 sm:py-2 shadow-[0_2px_8px_rgba(0,0,0,0.03)] focus-within:border-slate-500 focus-within:ring-1 focus-within:ring-slate-300 transition-all"
                        >
                            {/* +91 Country Code */}
                            <div className="flex items-center pr-3 border-r border-slate-300">
                                <span className="text-xs sm:text-sm font-semibold text-slate-800 select-none">
                                    +91
                                </span>
                            </div>

                            {/* Input */}
                            <input
                                type="text"
                                value={contactValue}
                                onChange={(e) => setContactValue(e.target.value)}
                                placeholder="Enter email or contact number"
                                className="flex-1 bg-transparent px-3 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none"
                            />

                            {/* Arrow Submit Button */}
                            <button
                                type="submit"
                                aria-label="Send contact"
                                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-transparent hover:bg-slate-100 text-slate-900 flex items-center justify-center flex-shrink-0 transition-transform hover:scale-110 active:scale-95 cursor-pointer"
                            >
                                <svg
                                    className="w-5 h-5 text-slate-900"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                    />
                                </svg>
                            </button>
                        </form>

                        {submitted && (
                            <span className="text-xs font-semibold text-emerald-600 mt-2">
                                Thank you! We will get in touch shortly.
                            </span>
                        )}
                    </div>
                </div>

                {/* ───────────────── 3. COPYRIGHT BAR ───────────────── */}
                <div className="mt-10 sm:mt-12 pt-6 border-t border-slate-200/70 flex items-center justify-between text-[11px] sm:text-xs text-slate-500">
                    <div>© 2026 — All Copyrights reserved.</div>
                    <a
                        href="#privacy"
                        className="hover:text-slate-800 transition-colors cursor-pointer"
                    >
                        Privacy
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;