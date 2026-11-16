import React from 'react';

const featureCards = [
  { icon: '/icon-gps.png', title: 'Live GPS Tracking', subtitle: 'Real-time team location.' },
  { icon: '/icon-team.png', title: 'Smart Team Manage', subtitle: 'Attendance, leaves & payroll.' },
  { icon: '/icon-sales.png', title: 'Sales Performance', subtitle: 'Leads, sales & revenue.' },
  { icon: '/icon-erp.png', title: 'All-in-One ERP', subtitle: 'Everything in one platform.' },
];

/* Orange gradient text (inline so it never depends on a custom class) */
const brandGradient = {
  background: 'linear-gradient(90deg, #FE6608 0%, #FDA310 100%)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  color: 'transparent',
};

const Heropage = () => {
  return (
    <section
      id="home"
      className="relative flex w-full flex-col overflow-hidden bg-white"
      style={{ minHeight: '100svh' }}
    >
      {/* Background video (already provided) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover"
      >
        <source src="/HeroAnimate.mp4" type="video/mp4" />
      </video>

      {/* Phones/tablets only: soft white wash so text stays readable over the map */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-white/85 via-white/55 to-white/20 lg:hidden" />

      {/* Content: same side padding as the navbar */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1680px] flex-1 flex-col px-5 pb-6 pt-24 sm:px-8 sm:pb-8 sm:pt-28 lg:px-[3.6vw] lg:pb-14 lg:pt-32">
        {/* Floating Profile Pins & Status Cards matching reference screenshot */}
        {/* 1. Upper Location Pin & Card ("Current location") — hidden on mobile */}
        <div className="hidden lg:flex absolute top-[22%] left-[51%] xl:left-[53%] z-20 items-start gap-2.5 animate-float pointer-events-auto origin-top-left">
          {/* Avatar & Pin */}
          <div className="flex flex-col items-center flex-shrink-0">
            <img
              src="/salesperson-avatar.svg"
              alt="Salesperson"
              className="w-8 h-8 sm:w-9 sm:h-9 object-contain drop-shadow-sm"
            />
            <div className="w-3.5 h-4.5 sm:w-4 sm:h-5 -mt-1 text-[#FD860C] drop-shadow-xs">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </div>
          </div>

          {/* White Card */}
          <div className="bg-white/95 backdrop-blur-md rounded-2xl px-3 sm:px-3.5 py-2 sm:py-2.5 shadow-[0_8px_25px_rgba(0,0,0,0.08)] border border-slate-100 text-left min-w-[130px] sm:min-w-[145px]">
            <div className="font-heading font-bold text-[12px] sm:text-[13px] text-slate-800 leading-tight">
              Current location
            </div>
            <div className="text-[10px] sm:text-[11px] text-slate-400 font-navitem mt-0.5">
              Last ping 12:47 PM
            </div>
          </div>
        </div>

        {/* 2. Lower Location Pin & Card ("Shift started here") — hidden on mobile */}
        <div className="hidden lg:flex absolute top-[66%] left-[47%] xl:left-[49%] z-20 items-start gap-2.5 animate-float-delayed pointer-events-auto origin-bottom-left">
          {/* Avatar & Pin */}
          <div className="flex flex-col items-center flex-shrink-0">
            <img
              src="/salesperson-avatar.svg"
              alt="Salesperson"
              className="w-8 h-8 sm:w-9 sm:h-9 object-contain drop-shadow-sm"
            />
            <div className="w-3.5 h-4.5 sm:w-4 sm:h-5 -mt-1 text-[#FD860C] drop-shadow-xs">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </div>
          </div>

          {/* White Card */}
          <div className="bg-white/95 backdrop-blur-md rounded-2xl px-3 sm:px-3.5 py-2 sm:py-2.5 shadow-[0_8px_25px_rgba(0,0,0,0.08)] border border-slate-100 text-left min-w-[145px] sm:min-w-[160px]">
            <div className="font-heading font-bold text-[12px] sm:text-[13px] text-slate-800 leading-tight">
              Shift started here
            </div>
            <div className="text-[10px] sm:text-[11px] text-slate-400 font-navitem mt-0.5">
              Checked in at 09:52 AM
            </div>
            <div className="text-[10px] sm:text-[11px] text-[#10B981] font-semibold flex items-center gap-1 mt-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              Face verified
            </div>
          </div>
        </div>

        {/* 3. Top-Right Corner Profile Pin — hidden on mobile */}
        <div className="hidden lg:flex absolute top-20 right-10 z-20 flex-col items-center animate-float pointer-events-none">
          <img
            src="/salesperson-avatar.svg"
            alt="Salesperson"
            className="w-8 h-8 sm:w-9 sm:h-9 object-contain drop-shadow-sm"
          />
          <div className="w-3.5 h-4.5 sm:w-4 sm:h-5 -mt-1 text-[#FD860C] drop-shadow-xs">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
          </div>
        </div>

        {/* Left: heading, text, CTA (vertically centred in the free space) */}
        <div className="flex flex-1 items-center py-8 lg:py-6">
          <div className="max-w-[640px] text-left">
            <h1
              className="font-heading font-semibold leading-[1.22] tracking-tight text-slate-900"
              style={{ fontSize: 'clamp(36px, 5vw, 66px)' }}
            >
              {/* Line 1: smaller dark text + larger orange word */}
              <span className="block whitespace-nowrap">
                <span className="mr-[0.2em]" style={{ fontSize: '0.72em' }}>
                  Your Entire
                </span>
                <span className="inline-block" style={brandGradient}>
                  Field
                </span>
              </span>
              <span className="block whitespace-nowrap">
                <span className="inline-block" style={brandGradient}>
                  Sales Operation
                </span>
              </span>
              <span className="block whitespace-nowrap">in Control.</span>
            </h1>

            <p className="font-subheading mt-4 max-w-[520px] text-[14px] font-medium leading-[1.55] text-slate-800 sm:mt-5 sm:text-[15px]">
              Manage your{' '}
              <span className="font-semibold text-[#FE6608]">
                field sales team with real-time location tracking,
              </span>{' '}
              smart attendance, lead management and sales insights{' '}
              <span className="font-semibold text-[#2368DB]">all from one platform.</span>
            </p>

            <div className="mt-6 flex items-center gap-3 lg:mt-7">
              <a
                href="#book-demo"
                className="font-subheading inline-flex h-12 items-center justify-center rounded-full bg-[#2368DB] px-7 text-base font-semibold text-white shadow-[0_10px_25px_rgba(35,104,219,0.28)] transition-all duration-200 hover:scale-[1.02] hover:bg-[#1C58BF] hover:shadow-[0_12px_30px_rgba(35,104,219,0.38)] active:scale-[0.98] lg:h-[50px] lg:px-[26px] lg:text-[18px]"
              >
                Book Demo
              </a>
              <a
                href="#learn-more"
                aria-label="Learn more"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EEF0F3] text-slate-700 transition-all duration-200 hover:scale-105 hover:bg-slate-200 active:scale-95 lg:h-[50px] lg:w-[50px]"
              >
                <svg className="ml-0.5 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom: four equal feature cards */}
        <div className="grid grid-cols-1 gap-3 min-[560px]:grid-cols-2 min-[560px]:gap-4 lg:grid-cols-4 lg:gap-5 xl:gap-[3.6vw]">
          {featureCards.map((card) => (
            <div
              key={card.title}
              className="group flex cursor-pointer items-center gap-3 rounded-[20px] border border-slate-100 bg-white/95 p-2 pr-3 shadow-[0_6px_24px_rgba(15,23,42,0.07)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(15,23,42,0.12)] lg:gap-[15px]"
            >
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center transition-transform group-hover:scale-105 lg:h-[60px] lg:w-[60px]">
                <img
                  src={card.icon}
                  alt={card.title}
                  className="h-full w-full object-contain drop-shadow-sm"
                />
              </div>
              <div className="min-w-0 text-left">
                <h3 className="font-heading text-[15px] font-semibold leading-tight tracking-tight text-slate-900 ">
                  {card.title}
                </h3>
                <p className="font-navitem mt-1 text-xs leading-snug text-slate-500 lg:text-[12.5px]">
                  {card.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section >
  );
};

export default Heropage;