import React from 'react';

const GrowYourBusiness = () => {
    return (
        <section
            id="grow-business"
            className="relative w-full bg-white overflow-hidden"
            style={{ minHeight: '420px' }}
        >
            {/* ── Full-section Cityscape Background (absolute, fills whole section) ── */}
            <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
                <img
                    src="/city-map.jpg"
                    alt="Corporate GPS Cityscape Map"
                    className="w-full h-full object-cover object-top block"
                />
                {/* Top white fade — blends top of cityscape into white so text reads clearly */}
                <div className="absolute top-0 left-0 right-0 h-[55%] bg-gradient-to-b from-white via-white/80 to-transparent pointer-events-none" />
                {/* Bottom white fade */}
                <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-white via-white/70 to-transparent pointer-events-none" />
            </div>

            {/* ── Content: text + button floats on top of the cityscape ── */}
            <div className="relative z-10 w-full flex flex-col items-center pt-8 sm:pt-10 md:pt-12 pb-[220px] sm:pb-[300px] md:pb-[360px] lg:pb-[420px]">

                {/* Outlined "GROW YOUR BUSINESS" image spanning full width */}
                <div className="flex justify-center items-center w-full px-2 sm:px-4">
                    <img
                        src="/GROW YOUR BUSINESS.png"
                        alt="GROW YOUR BUSINESS"
                        className="w-[96%] max-w-[1440px] h-auto object-contain select-none pointer-events-none"
                    />
                </div>

                {/* Book Demo Button + Circular Chevron */}
                <div className="flex items-center justify-center gap-3 mt-5 sm:mt-6 md:mt-7">
                    <a
                        href="#contact"
                        style={{
                            background: 'linear-gradient(180deg, #FFA012 0%, #FD8006 100%)',
                        }}
                        className="inline-flex items-center justify-center rounded-full px-7 sm:px-8 py-2.5 sm:py-3 text-[14px] sm:text-[15px] font-semibold text-white shadow-[0_8px_22px_rgba(253,128,6,0.38)] transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_10px_26px_rgba(253,128,6,0.48)] active:scale-[0.98] cursor-pointer"
                    >
                        Book Demo
                    </a>
                    <a
                        href="#contact"
                        aria-label="Book Demo details"
                        className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white text-slate-800 shadow-[0_4px_14px_rgba(0,0,0,0.08)] border border-slate-100 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
                    >
                        <svg
                            className="h-4 w-4 ml-0.5 text-slate-700"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2.5}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default GrowYourBusiness;
