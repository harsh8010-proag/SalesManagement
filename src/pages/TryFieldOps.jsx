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
                <div className="relative rounded-3xl sm:rounded-[36px] overflow-hidden shadow-[0_20px_50px_rgba(254,102,8,0.22)] bg-gradient-to-r from-[#FE6000] via-[#FF7A00] to-[#FFA014] px-6 sm:px-10 lg:px-14 py-8 sm:py-10 lg:py-0 lg:min-h-[412px] flex flex-col lg:flex-row items-center justify-between">

                    {/* Decorative Concentric Rings/Arcs in Background */}
                    <div className="absolute inset-0 pointer-events-none select-none opacity-20">
                        <svg className="w-full h-full" viewBox="0 0 1340 412" fill="none">
                            <circle cx="380" cy="206" r="320" stroke="white" strokeWidth="1.5" />
                            <circle cx="850" cy="206" r="420" stroke="white" strokeWidth="1.5" />
                            <circle cx="950" cy="140" r="280" stroke="white" strokeWidth="1.2" />
                        </svg>
                    </div>

                    {/* Left Column: Heading, Subtitle & Store Badges */}
                    <div className="relative z-10 max-w-xl text-left lg:py-12">
                        <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-[46px] xl:text-[50px] leading-[1.12] tracking-tight">
                            Try FieldOps Free for
                            <br />
                            15 Days!
                        </h2>

                        <p className="mt-4 sm:mt-5 text-white/95 text-xs sm:text-sm lg:text-[14.5px] font-medium leading-relaxed max-w-md">
                            Experience smarter sales management with real-time team tracking, lead management, attendance and sales analytics – all in one platform.
                        </p>

                        {/* Official Store Badges using public folder image assets */}
                        <div className="flex flex-wrap items-center gap-3.5 mt-7 sm:mt-8">
                            {/* Google Play Button */}
                            <a
                                href="#google-play"
                                className="inline-flex items-center gap-3 bg-black hover:bg-neutral-900 text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl sm:rounded-2xl transition-transform hover:scale-105 active:scale-95 shadow-md border border-white/10"
                            >
                                <img
                                    src="/selfhst_google-play.png"
                                    alt="Google Play"
                                    className="w-6 h-6 object-contain flex-shrink-0"
                                />
                                <div className="text-left leading-none">
                                    <div className="text-[9px] uppercase tracking-wider text-neutral-300 font-semibold">
                                        GET IT ON
                                    </div>
                                    <div className="text-[14px] font-bold tracking-tight text-white mt-1">
                                        Google Play
                                    </div>
                                </div>
                            </a>

                            {/* Apple App Store Button */}
                            <a
                                href="#app-store"
                                className="inline-flex items-center gap-3 bg-black hover:bg-neutral-900 text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl sm:rounded-2xl transition-transform hover:scale-105 active:scale-95 shadow-md border border-white/10"
                            >
                                <img
                                    src="/grommet-icons_apple.png"
                                    alt="App Store"
                                    className="w-6 h-6 object-contain flex-shrink-0"
                                />
                                <div className="text-left leading-none">
                                    <div className="text-[9px] text-neutral-300 font-medium">
                                        Download on the
                                    </div>
                                    <div className="text-[14px] font-bold tracking-tight text-white mt-1">
                                        App Store
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Two Overlapping Phone Mockups */}
                    <div className="relative z-10 w-full lg:w-[500px] h-[340px] sm:h-[380px] lg:h-[412px] flex items-end justify-center lg:justify-end mt-8 lg:mt-0 lg:absolute lg:right-4 lg:bottom-0">
                        {/* Phone 2 (Back Right Phone: Tools & Leads UI) */}
                        <div className="absolute right-0 sm:right-4 lg:right-2 bottom-0 w-[240px] sm:w-[280px] lg:w-[316px] h-full flex items-end">
                            <img
                                src="/WhatsApp Image 2026-11-13 at 5.06.38 PM 2.png"
                                alt="FieldOps App - Action Menu and Leads"
                                className="w-full h-full object-contain object-bottom drop-shadow-[-8px_10px_25px_rgba(0,0,0,0.18)]"
                            />
                        </div>

                        {/* Phone 1 (Front Left Phone: Shift Tracking UI) */}
                        <div className="absolute right-[115px] sm:right-[150px] lg:right-[175px] bottom-0 w-[230px] sm:w-[275px] lg:w-[310px] z-20">
                            <img
                                src="/WhatsApp Image 2026-11-13 at 5.06.38 PM 1.png"
                                alt="FieldOps App - Live Shift Tracking"
                                className="w-full h-auto object-contain object-bottom drop-shadow-[-14px_14px_32px_rgba(0,0,0,0.24)]"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TryFieldOps;