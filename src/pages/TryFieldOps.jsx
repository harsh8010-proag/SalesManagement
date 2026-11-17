import React from 'react';

const TryFieldOps = () => {
    return (
        <section
            id="try-fieldops"
            style={{ fontFamily: "'Mona Sans', sans-serif" }}
            className="relative w-full bg-white pt-0 pb-10 sm:pb-14"
        >
            <div className="w-[96%] max-w-[1440px] mx-auto">
                {/* ── Orange Gradient Free Trial Banner ── */}
                <div className="relative rounded-3xl sm:rounded-[36px] overflow-hidden shadow-[0_20px_50px_rgba(254,102,8,0.22)] bg-gradient-to-r from-[#FE6000] via-[#FF7A00] to-[#FFA014]">

                    {/* Decorative Concentric Rings */}
                    <div className="absolute inset-0 pointer-events-none select-none opacity-20">
                        <svg className="w-full h-full" viewBox="0 0 1340 412" fill="none" preserveAspectRatio="xMidYMid slice">
                            <circle cx="380" cy="206" r="320" stroke="white" strokeWidth="1.5" />
                            <circle cx="850" cy="206" r="420" stroke="white" strokeWidth="1.5" />
                            <circle cx="950" cy="140" r="280" stroke="white" strokeWidth="1.2" />
                        </svg>
                    </div>

                    {/* ══════════════════════════════════════════
                        MOBILE LAYOUT  (< lg)
                        Left: text + badges  |  Right: phone panel
                    ══════════════════════════════════════════ */}
                    <div className="lg:hidden flex flex-row items-center justify-between gap-4 px-5 sm:px-8 pt-8 pb-0 min-h-[320px] sm:min-h-[360px]">

                        {/* ── Left: Text + Badges ── */}
                        <div className="relative z-10 flex-1 text-left">
                            <h2 className="font-heading font-extrabold text-white text-2xl sm:text-3xl leading-[1.15] tracking-tight">
                                Try FieldOps
                                <br />
                                <span className="text-white/90">Free for</span>
                                <br />
                                15 Days!
                            </h2>

                            <p className="mt-3 text-white/90 text-[11px] sm:text-xs font-medium leading-relaxed">
                                Real-time tracking, attendance & sales analytics – all in one platform.
                            </p>

                            {/* Store Badges — stacked on small mobile */}
                            <div className="flex flex-col gap-2 mt-5">
                                {/* Google Play */}
                                <a
                                    href="#google-play"
                                    className="inline-flex items-center gap-2 bg-black/90 hover:bg-black text-white px-3 py-1.5 rounded-xl transition-transform hover:scale-105 active:scale-95 shadow border border-white/10 w-fit"
                                >
                                    <img
                                        src="/selfhst_google-play.png"
                                        alt="Google Play"
                                        className="w-4 h-4 object-contain flex-shrink-0"
                                    />
                                    <div className="text-left leading-none">
                                        <div className="text-[8px] uppercase tracking-wider text-neutral-300 font-semibold">GET IT ON</div>
                                        <div className="text-[11px] font-bold tracking-tight text-white mt-0.5">Google Play</div>
                                    </div>
                                </a>

                                {/* App Store */}
                                <a
                                    href="#app-store"
                                    className="inline-flex items-center gap-2 bg-black/90 hover:bg-black text-white px-3 py-1.5 rounded-xl transition-transform hover:scale-105 active:scale-95 shadow border border-white/10 w-fit"
                                >
                                    <img
                                        src="/grommet-icons_apple.png"
                                        alt="App Store"
                                        className="w-4 h-4 object-contain flex-shrink-0"
                                    />
                                    <div className="text-left leading-none">
                                        <div className="text-[8px] text-neutral-300 font-medium">Download on the</div>
                                        <div className="text-[11px] font-bold tracking-tight text-white mt-0.5">App Store</div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* ── Right: Real Mobile App Panel inside phone frame ── */}
                        <div className="relative z-10 flex-shrink-0 flex items-end justify-center self-end">
                            {/* Phone shell frame */}
                            <div
                                className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden border-[3px] border-white/30 shadow-[0_16px_40px_rgba(0,0,0,0.30)]"
                                style={{ width: '145px', height: '290px' }}
                            >
                                {/* Notch bar */}
                                <div className="absolute top-0 left-0 right-0 h-5 bg-black/60 z-10 flex items-center justify-center">
                                    <div className="w-10 h-1.5 rounded-full bg-white/40" />
                                </div>
                                {/* App screenshot fills the frame */}
                                <img
                                    src="/app-mobile-panel.jpg"
                                    alt="FieldOps Mobile App"
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>

                            {/* Larger screen (sm) variant */}
                            <style>{`
                                @media (min-width: 480px) {
                                    .mobile-phone-frame {
                                        width: 175px !important;
                                        height: 348px !important;
                                    }
                                }
                            `}</style>
                        </div>
                    </div>

                    {/* ══════════════════════════════════════════
                        DESKTOP LAYOUT  (lg+)
                        Original side-by-side with absolute phone mockups
                    ══════════════════════════════════════════ */}
                    <div className="hidden lg:flex flex-row items-center justify-between px-14 py-0 min-h-[412px]">

                        {/* Left: Text */}
                        <div className="relative z-10 max-w-xl text-left py-12">
                            <h2 className="font-heading font-extrabold text-white text-[46px] xl:text-[50px] leading-[1.12] tracking-tight">
                                Try FieldOps Free for
                                <br />
                                15 Days!
                            </h2>

                            <p className="mt-5 text-white/95 text-[14.5px] font-medium leading-relaxed max-w-md">
                                Experience smarter sales management with real-time team tracking, lead management, attendance and sales analytics – all in one platform.
                            </p>

                            {/* Store Badges */}
                            <div className="flex items-center gap-3.5 mt-8">
                                <a
                                    href="#google-play"
                                    className="inline-flex items-center gap-3 bg-black hover:bg-neutral-900 text-white px-5 py-2.5 rounded-2xl transition-transform hover:scale-105 active:scale-95 shadow-md border border-white/10"
                                >
                                    <img src="/selfhst_google-play.png" alt="Google Play" className="w-6 h-6 object-contain flex-shrink-0" />
                                    <div className="text-left leading-none">
                                        <div className="text-[9px] uppercase tracking-wider text-neutral-300 font-semibold">GET IT ON</div>
                                        <div className="text-[14px] font-bold tracking-tight text-white mt-1">Google Play</div>
                                    </div>
                                </a>
                                <a
                                    href="#app-store"
                                    className="inline-flex items-center gap-3 bg-black hover:bg-neutral-900 text-white px-5 py-2.5 rounded-2xl transition-transform hover:scale-105 active:scale-95 shadow-md border border-white/10"
                                >
                                    <img src="/grommet-icons_apple.png" alt="App Store" className="w-6 h-6 object-contain flex-shrink-0" />
                                    <div className="text-left leading-none">
                                        <div className="text-[9px] text-neutral-300 font-medium">Download on the</div>
                                        <div className="text-[14px] font-bold tracking-tight text-white mt-1">App Store</div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Right: Overlapping Phone Mockups (desktop) */}
                        <div className="relative z-10 w-[500px] h-[412px] flex-shrink-0">
                            {/* Back phone */}
                            <div className="absolute right-2 bottom-0 w-[316px] h-full flex items-end">
                                <img
                                    src="/WhatsApp Image 2026-11-13 at 5.06.38 PM 2.png"
                                    alt="FieldOps App - Action Menu and Leads"
                                    className="w-full h-full object-contain object-bottom drop-shadow-[-8px_10px_25px_rgba(0,0,0,0.18)]"
                                />
                            </div>
                            {/* Front phone */}
                            <div className="absolute right-[175px] bottom-0 w-[310px] z-20">
                                <img
                                    src="/WhatsApp Image 2026-11-13 at 5.06.38 PM 1.png"
                                    alt="FieldOps App - Live Shift Tracking"
                                    className="w-full h-auto object-contain object-bottom drop-shadow-[-14px_14px_32px_rgba(0,0,0,0.24)]"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TryFieldOps;
