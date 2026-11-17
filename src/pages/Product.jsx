import React from 'react';
import FieldOpsWatermark from '../componant/Watermark';

const Product = () => {
  return (
    <section id="product" className="relative w-full py-16 sm:py-24 md:py-28 bg-white overflow-hidden flex flex-col items-center justify-center">
      {/* Background Arch Pillars: Orange on Left, Blue on Right */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        {/* Left Orange Radiant Arch */}
        <div className="absolute -left-6 sm:left-4 md:left-10 lg:left-20 top-[18%] sm:top-[22%] w-36 sm:w-52 md:w-64 lg:w-72 max-w-[30vw] transition-all">
          <img
            src="/OrengeRadieant.png"
            alt="Orange Arch Gradient"
            className="w-full h-auto object-contain opacity-95"
          />
        </div>

        {/* Right Blue Radiant Arch */}
        <div className="absolute -right-6 sm:right-4 md:right-10 lg:right-20 top-[8%] sm:top-[12%] w-36 sm:w-52 md:w-64 lg:w-72 max-w-[30vw] transition-all">
          <img
            src="/BlueRadieant.png"
            alt="Blue Arch Gradient"
            className="w-full h-auto object-contain opacity-95"
          />
        </div>

        {/* Soft radial backdrop lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-slate-50/60 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      {/* Centerpiece: Laptop Mockup with Playing Video & Floating Analytics Cards */}
      <div className="relative z-10 w-full max-w-5xl px-3 sm:px-8 md:px-12">
        <div className="relative mx-auto max-w-[880px]">
          {/* 1. Floating Card: Top Left Notification ("amol more") */}
          <div className="absolute -top-4 sm:-top-7 md:-top-8 left-1 sm:-left-4 md:-left-12 lg:-left-16 z-30 animate-float pointer-events-auto origin-top-left scale-[0.72] xs:scale-[0.82] sm:scale-95 md:scale-100">
            <div className="bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-2.5 sm:p-4 shadow-[0_12px_30px_rgba(0,0,0,0.08)] border border-slate-100 text-left min-w-[140px] sm:min-w-[180px]">
              <div className="font-heading font-semibold text-xs sm:text-[13px] text-slate-800 leading-snug">
                amol more
              </div>
              <div className="text-[9.5px] sm:text-[11px] text-slate-400 font-navitem mt-0.5">
                the three flavours
              </div>
              <div className="text-[9.5px] sm:text-[11px] text-slate-500 font-navitem mt-1.5 sm:mt-2">
                Added by <span className="font-medium text-slate-700">sohel shaikh</span>
              </div>
              <div className="text-[9.5px] sm:text-[11px] text-slate-400 font-navitem mt-0.5">
                9 Oct, 11:32 AM
              </div>
              <div className="mt-1.5 sm:mt-2">
                <span className="inline-block bg-blue-50 text-[#2563EB] text-[9px] sm:text-[10px] font-semibold px-2 py-0.5 rounded-md border border-blue-100">
                  New
                </span>
              </div>
            </div>
          </div>

          {/* 2. Floating Card: Bottom Left ("Lead pipeline" Donut Chart) */}
          <div className="absolute -bottom-4 sm:-bottom-7 md:-bottom-8 left-1 sm:-left-4 md:-left-8 lg:-left-12 z-30 animate-float-delayed pointer-events-auto origin-bottom-left scale-[0.7] xs:scale-[0.8] sm:scale-95 md:scale-100">
            <div className="bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-2.5 sm:p-4 shadow-[0_15px_35px_rgba(0,0,0,0.1)] border border-slate-100 text-left w-40 sm:w-48 md:w-52">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-heading font-semibold text-[11px] sm:text-xs text-slate-800 leading-tight">
                    Lead pipeline
                  </div>
                  <div className="text-[9px] sm:text-[9.5px] text-slate-400 font-navitem">
                    Funnel by stage
                  </div>
                </div>
                <span className="text-slate-300 text-xs">•••</span>
              </div>

              {/* Mini Donut Chart Simulation */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto my-1.5 sm:my-2 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  {/* Background Circle */}
                  <path
                    className="text-amber-400"
                    strokeWidth="4"
                    stroke="currentColor"
                    fill="none"
                    strokeDasharray="75, 100"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  {/* Blue Section */}
                  <path
                    className="text-[#2563EB]"
                    strokeWidth="4"
                    stroke="currentColor"
                    fill="none"
                    strokeDasharray="25, 100"
                    strokeDashoffset="-75"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-[11px] sm:text-xs font-bold text-slate-800 leading-none">875</span>
                  <span className="text-[6.5px] sm:text-[7px] text-slate-400 font-medium leading-none mt-0.5">Total leads</span>
                </div>
              </div>

              {/* Mini Legend */}
              <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[8px] sm:text-[8.5px] font-navitem text-slate-500 pt-1 border-t border-slate-100">
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  <span className="truncate">Negotiation: 4</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"></span>
                  <span className="truncate">Contacted: 120</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                  <span className="truncate">New: 734</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span className="truncate">Won: 7</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Floating Card: Bottom Right ("Engagement performance" Chart) */}
          <div className="absolute -bottom-4 sm:-bottom-7 md:-bottom-8 right-1 sm:-right-4 md:-right-6 lg:-right-10 z-30 animate-float pointer-events-auto origin-bottom-right scale-[0.7] xs:scale-[0.8] sm:scale-95 md:scale-100">
            <div className="bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-2.5 sm:p-4 shadow-[0_15px_35px_rgba(0,0,0,0.1)] border border-slate-100 text-left w-44 sm:w-56 md:w-64">
              <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                <div>
                  <div className="font-heading font-semibold text-[11px] sm:text-xs text-slate-800 leading-tight">
                    Engagement performance
                  </div>
                  <div className="text-[9px] sm:text-[9.5px] text-slate-400 font-navitem">
                    Visits vs. Leads - Last 7 days
                  </div>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 text-[7.5px] sm:text-[8px] font-medium">
                  <span className="flex items-center gap-1 text-[#2563EB]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"></span> Visits
                  </span>
                  <span className="flex items-center gap-1 text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-800"></span> Leads
                  </span>
                </div>
              </div>

              {/* Area Wave Chart Simulation */}
              <div className="w-full h-12 sm:h-16 md:h-20">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 200 60">
                  <defs>
                    <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#94A3B8" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#94A3B8" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  {/* Peak Mountain Area */}
                  <path
                    d="M 10 50 Q 70 50, 95 35 Q 115 5, 125 15 Q 135 25, 150 48 L 180 50 L 180 55 L 10 55 Z"
                    fill="url(#areaGradient)"
                  />
                  {/* Black curved lead line */}
                  <path
                    d="M 10 50 Q 70 50, 95 35 Q 115 5, 125 15 Q 135 25, 150 48 L 180 50"
                    stroke="#1E293B"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  {/* Blue initial line */}
                  <path
                    d="M 10 20 Q 30 50, 70 50 L 180 50"
                    stroke="#2563EB"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  {/* Point dots */}
                  <circle cx="120" cy="11" r="2.5" fill="#1E293B" stroke="white" strokeWidth="1" />
                  <circle cx="178" cy="50" r="2.5" fill="#2563EB" stroke="white" strokeWidth="1" />
                </svg>
              </div>
            </div>
          </div>

          {/* LAPTOP FRAME CONTAINER */}
          <div className="relative mx-auto drop-shadow-[0_25px_50px_rgba(0,0,0,0.18)]">
            {/* Screen Lid Bezel */}
            <div className="bg-[#10141D] rounded-t-2xl sm:rounded-t-3xl pt-2 sm:pt-3 px-2 sm:px-3 pb-0 border-[2px] sm:border-[3px] border-[#222938]">
              {/* Webcam & Sensor Header */}
              <div className="flex items-center justify-center pb-1.5 sm:pb-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#1e2533] border border-[#333d52]"></div>
              </div>

              {/* Laptop Screen Display with Playing Video */}
              <div className="relative w-full aspect-[16/10] bg-black overflow-hidden rounded-t-md sm:rounded-t-lg">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-contain"
                >
                  <source src="/productFlow.mp4" type="video/mp4" />
                </video>

                {/* Subtle Glass Glare Reflection on screen edge */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08]"></div>
              </div>
            </div>

            {/* Laptop Base / Deck Lower Lip */}
            <div className="relative -mt-0.5">
              {/* Metallic Hinge Strip */}
              <div className="h-2 sm:h-2.5 bg-gradient-to-r from-[#171d29] via-[#2a3449] to-[#171d29] rounded-b-xs"></div>
              {/* Front Lower Deck Lip with Center Thumb Notch */}
              <div className="h-3 sm:h-4.5 bg-gradient-to-r from-[#1E2533] via-[#2A3447] to-[#1E2533] rounded-b-xl sm:rounded-b-2xl border-t border-[#37445c] shadow-[0_15px_30px_rgba(0,0,0,0.25)] flex items-start justify-center">
                <div className="w-16 sm:w-24 h-1 sm:h-1.5 bg-[#121620] rounded-b-md"></div>
              </div>
            </div>

            {/* Laptop Ground Ambient Shadow */}
            <div className="w-[92%] h-6 sm:h-8 mx-auto -mt-2 bg-slate-900/15 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>

      {/* FIELDOPS watermark: pure SVG, full width edge-to-edge like reference */}
      <div className="relative z-10 w-full mt-10 sm:mt-16 md:mt-20 px-2 sm:px-4 flex items-center justify-center overflow-hidden">
        <FieldOpsWatermark className="w-full max-w-[1600px]" />
      </div>
    </section>
  );
};

export default Product;