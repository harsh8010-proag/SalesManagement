import React from 'react';

const row1 = [
  'Live GPS Tracking',
  'Smart Attendance',
  'Sales Tracking',
  'Real-Time Reports',
  'Team Monitoring',
  'Route Optimization',
  'Geofence Alerts',
  'Instant Data Sync',
];

const row2 = [
  'Lead Manage',
  'Revenue Analytics',
  'Visit Tracking',
  'Performance Reports',
  'Expense Manage',
  'Leave Manage',
  'Order Booking',
  'Target vs Achievement',
  'Client Insights',
];

/* One pill: fixed 190px wide, 53px tall, content centred (as in the screenshot) */
const Pill = ({ text }) => (
  <div className="inline-flex h-12 w-[168px] flex-shrink-0 cursor-default select-none items-center justify-center gap-2.5 whitespace-nowrap rounded-[14px] border border-[#E6E8EC] bg-white text-sm font-medium text-slate-900 shadow-[0_1px_4px_rgba(15,23,42,0.04)] sm:h-[53px] sm:w-[190px] sm:text-[15px]">
    <span className="flex h-[19px] w-[19px] flex-shrink-0 items-center justify-center rounded-full bg-[#72E08E]">
      <svg className="h-[11px] w-[11px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3.5} d="M5 13l4 4L19 7" />
      </svg>
    </span>
    <span>{text}</span>
  </div>
);

/* Seamless marquee: two identical groups side by side, track slides by exactly one group (-50%) */
const MarqueeRow = ({ items, direction = 'left', duration = 60 }) => {
  const loop = [...items, ...items]; // makes each group wider than any normal screen
  return (
    <div className="w-full overflow-hidden">
      <div
        className={`st-track flex w-max ${direction === 'left' ? 'st-left' : 'st-right'}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {[0, 1].map((g) => (
          <div key={g} className="flex gap-4 pr-4 sm:gap-[22px] sm:pr-[22px]" aria-hidden={g === 1}>
            {loop.map((text, i) => (
              <Pill key={`${g}-${i}`} text={text} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const SalesTools = () => {
  return (
    <section
      id="tools"
      style={{ fontFamily: "'Mona Sans', sans-serif" }}
      className="relative w-full overflow-hidden bg-white pb-14 pt-12 sm:pb-16"
    >
      <style>{`
        .st-track { animation-timing-function: linear; animation-iteration-count: infinite; }
        .st-left  { animation-name: st-marquee-left; }
        .st-right { animation-name: st-marquee-right; }
        .st-track:hover { animation-play-state: paused; }
        @keyframes st-marquee-left  { from { transform: translateX(0); }    to { transform: translateX(-50%); } }
        @keyframes st-marquee-right { from { transform: translateX(-50%); } to { transform: translateX(0); } }
        @media (prefers-reduced-motion: reduce) { .st-track { animation: none; } }
      `}</style>

      {/* Heading + subheading */}
      <div className="mx-auto px-4 text-center sm:px-6">
        <h2
          className="font-heading font-bold leading-[1.18] tracking-tight text-slate-900"
          style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
        >
          The Tools Behind <span style={{ color: '#FD860C' }}>Every Successful</span>
          <br className="hidden sm:block" /> Sales Team.
        </h2>
        <p className="font-inter mx-auto mt-4 max-w-[480px] text-sm leading-relaxed text-slate-500 sm:mt-5 sm:text-[15px] lg:max-w-none lg:whitespace-nowrap">
          From field attendance to sales performance, FieldOps brings your entire sales
          <br className="hidden lg:inline" /> operation together with one simple, powerful platform.
        </p>
      </div>

      {/* Two marquee rows (no edge fade, pills run to the screen edges) */}
      <div className="mt-10 space-y-4 sm:mt-11 sm:space-y-5">
        <MarqueeRow items={row1} direction="left" duration={60} />
        <MarqueeRow items={row2} direction="right" duration={68} />
      </div>
    </section>
  );
};

export default SalesTools;