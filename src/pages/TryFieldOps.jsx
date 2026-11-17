import React from 'react';

const TryFieldOps = () => {
    return (
        <section
            id="try-fieldops"
            style={{ fontFamily: "'Mona Sans', sans-serif" }}
            className="relative w-full bg-white py-0 pb-10 sm:pb-14"
        >
            <div className="w-[96%] max-w-[1440px] mx-auto">
                {/* ── Orange Banner ── */}
                <div className="relative rounded-3xl sm:rounded-[32px] overflow-hidden bg-gradient-to-r from-[#FF8000] via-[#FF8A0D] to-[#FF9418] flex flex-col md:flex-row lg:block lg:h-[340px] xl:h-[380px]">

                    {/* Decorative background */}
                    <div className="absolute inset-0 pointer-events-none select-none">
                        <svg
                            className="w-full h-full"
                            viewBox="0 0 1340 400"
                            fill="none"
                            preserveAspectRatio="xMidYMid slice"
                        >
                            <circle cx="620" cy="60" r="330" stroke="white" strokeOpacity="0.28" strokeWidth="1.5" />
                            <circle cx="900" cy="330" r="380" stroke="white" strokeOpacity="0.2" strokeWidth="1.5" />
                            <circle cx="40" cy="400" r="130" fill="white" fillOpacity="0.16" />
                        </svg>
                    </div>

                    {/* ── Text + Badges ── */}
                    <div className="relative z-10 px-6 sm:px-10 pt-8 pb-6 md:flex-1 md:flex md:flex-col md:justify-center md:py-10 lg:absolute lg:inset-y-0 lg:left-0 lg:w-[50%] lg:py-0 xl:px-16">
                        <h2 className="font-heading font-extrabold text-white text-[28px] sm:text-[34px] lg:text-[32px] xl:text-[46px] leading-[1.15] tracking-tight">
                            Try FieldOps Free for
                            <br className="hidden lg:block" /> 15 Days!
                        </h2>
                        <p className="mt-4 text-white/90 text-[13px] sm:text-[14px] xl:text-[15px] font-medium leading-relaxed max-w-[430px]">
                            Experience smarter sales management with real-time team tracking, lead management, attendance and sales analytics – all in one platform.
                        </p>

                        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-6 lg:mt-8">
                            <a
                                href="#google-play"
                                className="inline-flex items-center gap-3 bg-black hover:bg-neutral-900 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl transition-transform hover:scale-105 active:scale-95 shadow-md"
                            >
                                <img src="/selfhst_google-play.png" alt="Google Play" className="w-6 h-6 sm:w-7 sm:h-7 object-contain flex-shrink-0" />
                                <div className="text-left leading-none">
                                    <div className="text-[9px] uppercase tracking-wider text-neutral-300 font-semibold">GET IT ON</div>
                                    <div className="text-[15px] sm:text-[17px] font-bold tracking-tight text-white mt-1">Google Play</div>
                                </div>
                            </a>
                            <a
                                href="#app-store"
                                className="inline-flex items-center gap-3 bg-black hover:bg-neutral-900 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl transition-transform hover:scale-105 active:scale-95 shadow-md"
                            >
                                <img src="/grommet-icons_apple.png" alt="App Store" className="w-6 h-6 sm:w-7 sm:h-7 object-contain flex-shrink-0" />
                                <div className="text-left leading-none">
                                    <div className="text-[9px] text-neutral-300 font-medium">Download ON</div>
                                    <div className="text-[15px] sm:text-[17px] font-bold tracking-tight text-white mt-1">App Store</div>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* ══ MOBILE + TABLET (< lg): ONE phone view only ══ */}
                    <div className="relative z-10 h-[250px] sm:h-[280px] md:h-auto md:min-h-[300px] md:w-[260px] md:flex-shrink-0 lg:hidden">
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[190px] sm:w-[210px] h-[230px] sm:h-[260px] md:h-[280px] rounded-t-[26px] border-[3px] border-b-0 border-white/40 bg-white overflow-hidden shadow-[0_-6px_30px_rgba(0,0,0,0.15)]">
                            <img
                                src="/app-mobile-panel.jpg"
                                alt="FieldOps App"
                                className="block w-full h-auto"
                                style={{ marginTop: '-8.5%' }} /* hides the Android status bar */
                            />
                        </div>
                    </div>

                    {/* ══ DESKTOP (lg+): phone + flat panel + yellow strip ══ */}
                    <div className="hidden lg:block absolute inset-y-0 right-0 w-[60%] z-10 [--pw:200px] xl:[--pw:250px]">

                        {/* Pale yellow edge strip */}
                        <div className="absolute top-0 bottom-0 right-0 w-10 bg-[#FFF1BF]" />

                        {/* Flat panel: bottom of the app (card → nav bar) */}
                        <div
                            className="absolute top-0 bottom-0 bg-white overflow-hidden shadow-[-8px_0_24px_rgba(0,0,0,0.08)]"
                            style={{ right: '40px', width: 'var(--pw)' }}
                        >
                            <img
                                src="/app-mobile-panel.jpg"
                                alt="FieldOps App Dashboard"
                                className="absolute left-0 w-full h-auto"
                                style={{ bottom: 'calc(var(--pw) * -0.14)' }} /* hides the Android system bar */
                            />
                        </div>

                        {/* Phone: top of the app, cut off by the banner bottom */}
                        <div
                            className="absolute bottom-0 h-[54%] rounded-t-[28px] border-[3px] border-b-0 border-white/50 bg-white overflow-hidden shadow-[0_-6px_30px_rgba(0,0,0,0.14)] z-20"
                            style={{ right: 'calc(40px + var(--pw) + 16px)', width: 'var(--pw)' }}
                        >
                            <img
                                src="/app-mobile-panel.jpg"
                                alt="FieldOps App"
                                className="block w-full h-auto"
                                style={{ marginTop: '-8.5%' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TryFieldOps;