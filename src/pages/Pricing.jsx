import React from 'react';

const includes = [
  '2 Salesperson Accounts',
  'Real-Time GPS Location Tracking',
  'Attendance & Check-in Management',
  'Sales & Revenue Reports',
  'Expense, Leave & Payroll Management',
];

const Chevron = ({ className = 'h-3.5 w-3.5' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.8} d="M9 5l7 7-7 7" />
  </svg>
);

const Pricing = () => {
  return (
    <section
      id="pricing"
      style={{ fontFamily: "'Mona Sans', sans-serif" }}
      className="relative w-full bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
    >
      {/* Outer card with soft blue glow */}
      <div
        className="mx-auto max-w-5xl overflow-hidden rounded-[30px] bg-white p-1.5 sm:rounded-[36px]"
        style={{
          boxShadow:
            '0 0 0 1px rgba(35,104,219,0.07), 0 10px 44px rgba(35,104,219,0.14)',
        }}
      >
        <div className="grid grid-cols-1 gap-1.5 lg:grid-cols-12">
          {/* ───────── LEFT: offer image, price, CTA ───────── */}
          <div
            className="relative flex min-h-[440px] flex-col justify-between overflow-hidden rounded-[26px] px-6 pb-6 pt-6 sm:min-h-[460px] sm:rounded-[30px] sm:px-8 sm:pb-9 sm:pt-8 lg:col-span-7"
            style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F6F9FE 100%)' }}
          >
            {/* OFFER tags: hang from the top edge of the card (strings are cropped by the edge).
                The JPG has a white background, so multiply blends it into the panel. */}
            <img
              src="/offer.jpg"
              alt="OFFER hanging tags"
              className="pointer-events-none absolute select-none"
              style={{
                top: 0,
                left: '-1.5%',
                width: '76%',
                maxWidth: 470,
                height: 'auto',
                transform: 'translateY(-21%)',
                mixBlendMode: 'multiply',
              }}
            />

            {/* Annual Plan badge, top right */}
            <div className="relative z-10 flex justify-end">
              <span className="rounded-[11px] bg-[#E6EFFD] px-4 py-1.5 text-[13px] font-medium text-[#2368DB] sm:text-sm">
                Annual Plan
              </span>
            </div>

            {/* Price + CTA, bottom aligned */}
            <div className="relative z-10 mt-40 flex flex-col items-start gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="flex items-baseline gap-2.5">
                  <span className="text-[34px] font-bold leading-none tracking-tight text-slate-900 sm:text-[41px]">
                    ₹ 9,999
                  </span>
                  <span className="text-base font-normal text-slate-400 sm:text-lg">/ year</span>
                </div>
                <div className="mt-3 text-sm font-semibold text-[#2368DB] sm:mt-4 sm:text-[15px]">
                  For 2 Salespersons
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <a
                  href="#get-started"
                  className="inline-flex items-center justify-center rounded-full bg-[#2368DB] px-6 py-[10px] text-[15px] font-medium text-white shadow-[0_6px_18px_rgba(35,104,219,0.28)] transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97]"
                >
                  Get Started
                </a>
                <a
                  href="#get-started"
                  aria-label="Get Started details"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EDEFF3] text-slate-800 transition-transform duration-200 hover:scale-105 active:scale-95"
                >
                  <Chevron />
                </a>
              </div>
            </div>
          </div>

          {/* ───────── RIGHT: What's included + Need help ───────── */}
          <div
            className="flex flex-col justify-between rounded-[26px] p-6 text-white sm:rounded-[30px] lg:col-span-5"
            style={{
              background:
                'linear-gradient(195deg, #2B6BD2 0%, #2563C8 42%, #153F8A 74%, #0C2556 100%)',
            }}
          >
            <div>
              <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">What’s Included ?</h3>

              <ul className="mt-6 space-y-[14px] sm:mt-7">
                {includes.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className="flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded-full bg-[#F6EBB9]">
                      <svg className="h-[10px] w-[10px] text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-[13px] font-normal leading-snug text-white/80 sm:text-[13.5px]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Need help card */}
            <div className="mt-8 flex items-start gap-[18px] rounded-[22px] bg-white p-4 text-left shadow-[0_10px_30px_rgba(5,20,60,0.25)] sm:px-6 sm:py-5">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#FFF2E6] to-[#FFDDBB] sm:h-[41px] sm:w-[41px]">
                <svg className="h-5 w-5 text-[#FD860C]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>

              <div className="min-w-0">
                <div className="text-[11px] font-medium uppercase tracking-wide text-slate-400 sm:text-xs">
                  Need help ?
                </div>
                <div className="mt-0.5 text-[13px] font-semibold leading-snug text-slate-900 sm:text-[13.5px]">
                  Not sure if this fits your needs ?
                </div>

                <div className="mt-3 flex items-center gap-2 sm:mt-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[#FD860C] px-5 py-[9px] text-[13px] font-semibold text-white transition-opacity hover:opacity-90 sm:px-6 sm:text-sm"
                  >
                    Talk to our expert team
                  </a>
                  <a
                    href="#contact"
                    aria-label="Contact our experts"
                    className="flex h-[34px] w-[34px] flex-shrink-0 items-center justify-center rounded-full bg-[#EDEFF3] text-slate-800 transition-colors hover:bg-slate-200"
                  >
                    <Chevron className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;