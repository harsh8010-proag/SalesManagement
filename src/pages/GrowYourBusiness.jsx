import React from 'react';

const GrowYourBusiness = () => {
    return (
        <section
            id="grow-business"
            className="relative w-full bg-white overflow-hidden pt-6 sm:pt-8 md:pt-10 pb-0"
        >
            {/* ── Outlined Header & Centered CTA Button ── */}
            <div className="relative z-20 w-full px-2 sm:px-4 text-center">
                {/* Outlined "GROW YOUR BUSINESS" image spanning 96% width edge-to-edge */}
                <div className="flex justify-center items-center w-full">
                    <img
                        src="/GROW YOUR BUSINESS.png"
                        alt="GROW YOUR BUSINESS"
                        className="w-[96%] max-w-[1440px] h-auto object-contain select-none pointer-events-none drop-shadow-xs"
                    />
                </div>

                {/* Book Demo Button + Circular Chevron Button */}
                <div className="flex items-center justify-center gap-3 mt-4 sm:mt-5 md:mt-6">
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

            {/* ── Cityscape Map: 100% Full Width Edge-to-Edge ── */}
            <div className="relative -mt-8 sm:-mt-12 md:-mt-16 lg:-mt-22 xl:-mt-26 w-full z-10 pointer-events-none select-none">
                <img
                    src="/Corporate GPS Cityscape Map Template 1.png"
                    alt="Corporate GPS Cityscape Map"
                    className="w-full h-auto object-cover select-none block"
                />
                {/* Smooth bottom fade into white */}
                <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 bg-gradient-to-t from-white via-white/85 to-transparent pointer-events-none" />
            </div>
        </section>
    );
};

export default GrowYourBusiness;