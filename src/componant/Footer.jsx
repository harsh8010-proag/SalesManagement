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

    const infoLinks = [
        { label: 'Policy', href: '#policy' },
        { label: 'Terms & Conditions', href: '#terms' },
        { label: 'Product', href: '#product' },
        { label: 'Features', href: '#features' },
        { label: 'Who we are', href: 'https://techsuryaitsolution.com/', external: true },
        { label: 'Contacts', href: '#contact' },
    ];

    return (
        <footer
            style={{ fontFamily: "'Mona Sans', sans-serif" }}
            className="relative w-full bg-[#F3F4F8] pt-10 sm:pt-12 pb-6 sm:pb-8 overflow-hidden"
        >
            {/* ───────── Background: soft light map-style lines ───────── */}
            <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
                <div className="absolute inset-0 bg-gradient-to-b from-[#F8F9FB] via-[#F3F4F8] to-[#EFF1F5]" />
                <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 1111 553"
                    preserveAspectRatio="xMidYMid slice"
                    fill="none"
                    stroke="white"
                    strokeLinecap="round"
                >
                    <path d="M520 -30 L1000 360" strokeWidth="18" strokeOpacity="0.75" />
                    <path d="M760 -30 L1140 230" strokeWidth="14" strokeOpacity="0.6" />
                    <path d="M1120 330 Q 820 380 700 580" strokeWidth="22" strokeOpacity="0.75" />
                    <path d="M-30 470 L360 580" strokeWidth="16" strokeOpacity="0.6" />
                    <path d="M180 -30 L420 120" strokeWidth="12" strokeOpacity="0.5" />
                </svg>
            </div>

            <div className="relative z-10 w-[96%] max-w-[1440px] mx-auto">
                {/* ───────────────── 1. BLUE CARD ───────────────── */}
                <div className="rounded-2xl sm:rounded-[20px] overflow-hidden text-white px-6 sm:px-7 py-6 sm:py-[22px] flex flex-col justify-between gap-10 lg:min-h-[300px] xl:min-h-[320px] bg-[linear-gradient(115deg,#1D5399_0%,#163F7D_45%,#0E2751_100%)] shadow-[0_15px_40px_rgba(18,67,129,0.18)]">

                    {/* Top row */}
                    <div className="grid grid-cols-2 lg:grid-cols-[33.4%_18.2%_1fr_auto] gap-x-6 gap-y-8 items-start">

                        {/* Logo */}
                        <div className="col-span-2 lg:col-span-1 flex items-center gap-3">
                            <div className="w-[52px] h-[52px] rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center">
                                <img
                                    src="/logo.png"
                                    alt="FieldOps Logo"
                                    className="w-full h-full object-contain select-none"
                                />
                            </div>
                            <div className="flex flex-col text-left">
                                <span className="font-heading font-bold text-[24px] sm:text-[26px] text-white tracking-tight leading-none">
                                    Field<span className="text-[#FD860C]">Ops</span>
                                </span>
                                <span className="text-[12px] sm:text-[13px] text-white/90 font-semibold mt-1">
                                    By Tech surya
                                </span>
                            </div>
                        </div>

                        {/* INFORMATION */}
                        <div className="col-span-1">
                            <h4 className="text-[9px] leading-3 font-normal text-white/60 tracking-[0.08em] uppercase mb-4">
                                Information
                            </h4>
                            <ul className="text-[13.5px] leading-5 font-medium text-white">
                                {infoLinks.map((l) => (
                                    <li key={l.label}>
                                        <a
                                            href={l.href}
                                            className="hover:text-white/70 transition-colors"
                                            {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                        >
                                            {l.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* OUR BRANCHES */}
                        <div className="col-span-1">
                            <h4 className="text-[9px] leading-3 font-normal text-white/60 tracking-[0.08em] uppercase mb-4">
                                Our Branches
                            </h4>
                            <ul className="text-[13.5px] leading-5 font-medium text-white">
                                <li>Chh. Sambhajinagar</li>
                                <li>Nashik</li>
                                <li>Pune</li>
                            </ul>
                        </div>

                        {/* Request a call */}
                        <div className="col-span-2 lg:col-span-1 flex flex-col items-start lg:items-end text-left lg:text-right">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center h-[27px] rounded-full bg-[#2368DB] hover:bg-[#1D5BBF] text-white text-[11.5px] font-semibold px-5 transition-all hover:scale-[1.03] active:scale-[0.97]"
                            >
                                Request a call
                            </a>
                            <div className="mt-3 space-y-0.5">
                                <a href="tel:+919621345050" className="block text-[11px] font-semibold text-white hover:underline">
                                    +91 96213 45050
                                </a>
                                <a
                                    href="mailto:Office@techsuryalitsolution.com"
                                    className="block text-[11px] font-medium text-white hover:underline break-all"
                                >
                                    Office@techsuryalitsolution.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Bottom row */}
                    <div className="grid grid-cols-1 lg:grid-cols-[33.4%_1fr_auto] gap-5 lg:gap-6 items-center">
                        {/* Social icons */}
                        <div className="flex items-center gap-2">
                            <a
                                href="https://www.instagram.com/techsuryaitsolutions/reels/?hl=en"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="w-8 h-8 rounded-full bg-[#FF8A0D] hover:bg-[#F07C00] flex items-center justify-center hover:scale-105 transition-transform"
                            >
                                <img src="/lets-icons_insta-light.png" alt="Instagram" className="w-[18px] h-[18px] object-contain" />
                            </a>
                            <a
                                href="https://wa.me/919621345050"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="WhatsApp"
                                className="w-8 h-8 rounded-full bg-[#2368DB] hover:bg-[#1D5BBF] flex items-center justify-center text-white hover:scale-105 transition-transform"
                            >
                                <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                            </a>
                        </div>

                        {/* Address — clicks opens Google Maps */}
                        <a
                            href="https://www.google.com/maps/search/Office+no+217+,+222+Golden+City+Center+near+prozon+mall+Chhatrapati+Sambhajinagar./@19.874127,75.3699616,162m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI2MTExNS4wIKXMDSoASAFQAw%3D%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] sm:text-[11.5px] font-semibold text-white leading-snug max-w-[260px] hover:text-white/75 transition-colors underline-offset-2 hover:underline"
                        >
                            Office no 217 , 222 Golden City Center near prozon mall Chhatrapati Sambhajinagar.
                        </a>

                        {/* Slogan */}
                        <div className="font-heading text-[22px] sm:text-[24px] xl:text-[26px] font-bold text-white tracking-tight whitespace-nowrap lg:text-right">
                            World Wide Available !
                        </div>
                    </div>
                </div>

                {/* ───────────────── 2. INQUIRY SECTION ───────────────── */}
                <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-[50.6%_1fr] gap-6 lg:gap-0 items-center">
                    {/* Heading */}
                    <h3 className="font-heading font-bold text-[28px] sm:text-[34px] xl:text-[42px] leading-[0.98] tracking-[-0.03em] text-slate-950">
                        If you didn’t find the products
                        <br className="hidden sm:block" /> you are interested in or have
                        <br className="hidden sm:block" /> questions?
                    </h3>

                    {/* Input */}
                    <div className="flex flex-col justify-center">
                        <p className="text-[12px] font-medium text-slate-800 mb-1.5">
                            Just send us your contact email and we will contact you.
                        </p>
                        <span className="text-[8.5px] font-medium text-slate-400 tracking-wide uppercase mb-1 block">
                            Your email / contact no
                        </span>

                        <form
                            onSubmit={handleSubmit}
                            className="flex items-center w-full h-10 sm:h-[42px] bg-white/30 border border-slate-400/80 rounded-xl px-3.5 focus-within:border-slate-600 transition-colors"
                        >
                            <span className="text-[13px] text-slate-900 select-none mr-2">+91</span>
                            <input
                                type="text"
                                value={contactValue}
                                onChange={(e) => setContactValue(e.target.value)}
                                placeholder="Enter email or contact number"
                                className="flex-1 min-w-0 bg-transparent text-[13px] text-slate-900 placeholder-slate-400/70 focus:outline-none"
                            />
                            <button
                                type="submit"
                                aria-label="Send contact"
                                className="flex items-center justify-center flex-shrink-0 w-7 h-7 text-slate-900 hover:scale-110 active:scale-95 transition-transform cursor-pointer"
                            >
                                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
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

                {/* ───────────────── 3. COPYRIGHT ───────────────── */}
                <div className="mt-8 sm:mt-10 flex items-center justify-between text-[10px] sm:text-[11px] text-slate-600">
                    <div>© 2026 — All Copyrights reserved.</div>
                    <a href="#privacy" className="hover:text-slate-900 transition-colors">
                        Privacy
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;