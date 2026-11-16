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
                <h3 className="font-heading text-[15px] font-semibold leading-tight tracking-tight text-slate-900 lg:text-">
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
    </section>
  );
};

export default Heropage;