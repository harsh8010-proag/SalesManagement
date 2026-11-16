import React from 'react';

const features = [
  {
    title: 'Real-Time Team Visibility',
    description:
      'Know where your sales team is, track their daily movements and monitor field activities.',
  },
  {
    title: 'Complete Sales Control',
    description:
      'Manage leads, customer follow-ups, sales conversions and revenue.',
  },
  {
    title: 'Performance at a Glance',
    description:
      'Monitor attendance, expenses, leaves and employee performance with organized reports and insights.',
  },
];

const DownloadApp = () => {
  return (
    <section
      id="download-app"
      style={{ fontFamily: "'Mona Sans', sans-serif" }}
      className="w-full bg-white py-8 sm:py-12 px-4 sm:px-6 lg:px-10"
    >
      <style>{`
        /* Animated orange card: the gradient is 2x wider than the card and slides back and forth.
           At 0% it matches the screenshot (deep orange left → peach right). */
        .fo-gradient-card {
          background-image:
            radial-gradient(120% 90% at 100% 100%, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0) 60%),
            linear-gradient(105deg,
              #FF8A00 0%, #FF9A2E 9%, #FFB77D 21%, #FFD6B8 34%, #FFE9DA 50%,
              #FFC99B 62%, #FF9A2E 80%, #FF8A00 100%);
          background-size: 100% 100%, 200% 100%;
          background-position: 0 0, 0% 50%;
          animation: fo-gradient-shift 9s ease-in-out infinite alternate;
        }
        @keyframes fo-gradient-shift {
          from { background-position: 0 0, 0% 50%; }
          to   { background-position: 0 0, 100% 50%; }
        }
        @media (prefers-reduced-motion: reduce) {
          .fo-gradient-card { animation: none; }
        }
      `}</style>
      {/* Light grey-blue rounded card (same as screenshot) */}
      <div
        style={{ backgroundColor: '#F5F7FB' }}
        className="max-w-[1240px] mx-auto rounded-3xl px-6 sm:px-10 lg:px-12 py-10 lg:py-14"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_340px_1fr] gap-10 lg:gap-8 items-stretch">
          {/* ───────── LEFT: heading, CTA, progress scale ───────── */}
          <div className="relative z-20 flex flex-col justify-between text-left">
            <div>
              <h2 className="font-semibold text-slate-900 tracking-tight leading-[1.2] text-[32px] sm:text-[40px] lg:text-[38px] xl:text-[44px] lg:whitespace-nowrap">
                A Smarter Way to
                <br />
                Manage Your <span style={{ color: '#FD860C' }}>Field</span>
                <br />
                <span style={{ color: '#FD860C' }}>Sales Team</span>
              </h2>

              <div className="flex items-center gap-3 mt-7 lg:mt-8">
                <a
                  href="#download"
                  style={{
                    background: 'linear-gradient(180deg, #2A5CAA 0%, #1E4587 100%)',
                  }}
                  className="inline-flex items-center justify-center rounded-full px-7 py-3 text-[15px] font-medium text-white shadow-[0_6px_18px_rgba(30,69,135,0.28)] transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97]"
                >
                  Download App
                </a>
                <a
                  href="#download"
                  aria-label="Download App details"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-800 shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-transform duration-200 hover:scale-105 active:scale-95"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Grow Your Business scale */}
            <div className="mt-10 lg:mt-0 w-full max-w-[260px]">
              <div className="text-[11px] font-semibold text-slate-800">Grow Your Business</div>
              <div className="relative mt-1 h-3.5 text-[10px] font-medium text-slate-400">
                <span className="absolute left-0">₹0</span>
                <span className="absolute left-[30%]">₹10,000</span>
                <span className="absolute right-0">₹Infinite</span>
              </div>
              <div className="mt-0.5 flex h-3.5 w-full overflow-hidden rounded-[3px]">
                <div className="h-full w-[33%]" style={{ backgroundColor: '#2A62C4' }} />
                <div className="h-full w-[32%]" style={{ backgroundColor: '#FD860C' }} />
                <div
                  className="h-full flex-1"
                  style={{
                    background: 'linear-gradient(to right, #FDB913 0%, #FFD65A 55%, #FFF6DC 100%)',
                  }}
                />
              </div>
            </div>
          </div>

          {/* ───────── CENTER: model + orange card ───────── */}
          <div className="relative z-10 mx-auto flex w-full max-w-[340px] items-end justify-center">
            <div className="relative w-full" style={{ aspectRatio: '320 / 390' }}>
              {/* Orange outline: same size as the card, tilted about -5° */}
              <div
                aria-hidden="true"
                className="absolute rounded-[20px] border-2 pointer-events-none"
                style={{
                  left: '2.7%',
                  right: '2.9%',
                  top: '32.2%',
                  bottom: '3.2%',
                  borderColor: '#FF8200',
                  transform: 'rotate(-5deg)',
                }}
              />
              {/* Orange card: deep orange on the left fading to peach/white on the right */}
              <div
                aria-hidden="true"
                className="fo-gradient-card absolute rounded-[20px] pointer-events-none"
                style={{
                  left: '2.7%',
                  right: '2.9%',
                  top: '32.2%',
                  bottom: '3.2%',
                }}
              />
              {/* Model, bottom-aligned with card */}
              <img
                src="/app-model.png"
                alt="Sales executive holding a smartphone with the app"
                className="absolute left-1/2 -translate-x-1/2 w-auto max-w-none object-contain object-bottom pointer-events-none select-none"
                style={{ bottom: '3.3%', height: '96.7%' }}
              />
            </div>
          </div>

          {/* ───────── RIGHT: features + store badges ───────── */}
          <div className="flex flex-col justify-between text-left">
            <div className="space-y-6 lg:pt-2">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  {/* Layered check icon */}
                  <div className="flex h-[52px] w-[52px] flex-shrink-0 items-center justify-center rounded-full bg-white shadow-[0_3px_12px_rgba(37,99,235,0.12)]">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E3EEFC]">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#2368DB] text-white">
                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="pt-1">
                    <h3 className="text-[15px] font-semibold leading-snug text-slate-900">
                      {feature.title}
                    </h3>
                    <p className="mt-1 max-w-[290px] text-[12.5px] leading-[1.55] text-slate-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Store badges */}
            <div className="mt-10 lg:mt-0">
              <div className="relative inline-flex">
                <img
                  src="/app-badges.png"
                  alt="Get it on Google Play and Download on the App Store"
                  className="h-11 sm:h-12 w-auto object-contain"
                />
                <a
                  href="#google-play"
                  aria-label="Get it on Google Play"
                  className="absolute left-0 top-0 h-full w-1/2"
                />
                <a
                  href="#app-store"
                  aria-label="Download on the App Store"
                  className="absolute right-0 top-0 h-full w-1/2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;