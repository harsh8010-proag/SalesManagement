import React from 'react';

const featureCards = [
  { icon: '/icon-gps.png', title: 'Live GPS Tracking', subtitle: 'Real-time team location.' },
  { icon: '/icon-team.png', title: 'Smart Team Manage', subtitle: 'Attendance, leaves & payroll.' },
  { icon: '/icon-sales.png', title: 'Sales Performance', subtitle: 'Leads, sales & revenue.' },
  { icon: '/icon-erp.png', title: 'All-in-One ERP', subtitle: 'Everything in one platform.' },
];

const brandGradient = {
  background: 'linear-gradient(90deg, #FE6608 0%, #FDA310 100%)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  color: 'transparent',
};

/* Video is 1280x720. The "stage" keeps that 16:9 shape so cards stay on the video pins. */
const heroCss = `
.fo-h1 { font-size: clamp(30px, 9.2vw, 56px); }

.fo-media {
  container-type: size;
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, #000 14%, #000 86%, transparent 100%);
  mask-image: linear-gradient(to bottom, transparent 0, #000 14%, #000 86%, transparent 100%);
}
.fo-stage {
  --k: 215;
  --sw: max(calc(var(--k) * 1cqw), 177.78cqh);
  --sh: calc(var(--sw) * 0.5625);
  position: absolute;
  width: var(--sw);
  height: var(--sh);
  /* mobile/tablet: keep the BIG pin (77% / 39% of the video) centred in the box */
  left: clamp(calc(100cqw - var(--sw)), calc(50cqw - var(--sw) * 0.766), 0px);
  top: clamp(calc(100cqh - var(--sh)), calc(50cqh - var(--sh) * 0.39), 0px);
}
@media (min-width: 640px) { .fo-stage { --k: 140; } }

@media (min-width: 1024px) {
  .fo-h1 { font-size: clamp(44px, 4.6vw, 66px); }
  .fo-media {
    -webkit-mask-image: linear-gradient(to bottom, #000 0, #000 90%, transparent 100%);
    mask-image: linear-gradient(to bottom, #000 0, #000 90%, transparent 100%);
  }
  .fo-stage {
    --k: 100;
    left: calc(100cqw - var(--sw));
    top: calc((100cqh - var(--sh)) / 2);
  }
}
`;

const Avatar = () => (
  <img
    src="/salesperson-avatar.svg"
    alt="Salesperson"
    className="h-9 w-9 flex-shrink-0 object-contain drop-shadow-sm"
  />
);

const Heropage = () => {
  const sidePad = 'mx-auto w-full max-w-[1680px] px-5 sm:px-8 lg:px-[3.6vw]';

  return (
    <section
      id="home"
      className="relative flex w-full flex-col overflow-hidden bg-white lg:min-h-[100svh]"
    >
      <style>{heroCss}</style>

      {/* ───────── 1. Text block ───────── */}
      <div className={`relative z-10 pt-24 sm:pt-28 lg:flex lg:flex-1 lg:items-center lg:pt-32 ${sidePad}`}>
        <div className="max-w-[640px] py-4 text-left lg:py-6">
          <h1 className="fo-h1 font-heading font-semibold leading-[1.22] tracking-tight text-slate-900">
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
              className="font-subheading inline-flex h-12 items-center justify-center rounded-full bg-[#2368DB] px-7 text-base font-semibold text-white shadow-[0_10px_25px_rgba(35,104,219,0.28)] transition-all duration-200 hover:scale-[1.02] hover:bg-[#1C58BF] active:scale-[0.98] lg:h-[50px] lg:px-[26px] lg:text-[18px]"
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

      {/* ───────── 2. Video ─────────
          < lg : normal block UNDER the Book Demo button, big pin centred
          lg+  : full-width background behind the text, ends just above the cards */}
      <div
        className="fo-media relative z-0 h-[300px] w-full overflow-hidden sm:h-[380px] lg:absolute lg:inset-x-0 lg:top-0 lg:bottom-[96px] lg:h-auto"
        aria-hidden="true"
      >
        <div className="fo-stage">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          >
            <source src="/HeroAnimate.mp4" type="video/mp4" />
          </video>

          {/* Card 1: "Current location" (video pin at 55.3% / 30%) — desktop only */}
          <div
            className="absolute hidden lg:block"
            style={{ left: '55.3%', top: '30%', transform: 'translate(-44px, -36px)' }}
          >
            <div className="flex animate-float items-start gap-2.5">
              <Avatar />
              <div className="min-w-[140px] rounded-2xl border border-slate-100 bg-white/95 px-3.5 py-2.5 text-left shadow-[0_8px_25px_rgba(0,0,0,0.08)] backdrop-blur-md">
                <div className="font-heading text-[13px] font-bold leading-tight text-slate-800">
                  Current location
                </div>
                <div className="font-navitem mt-0.5 text-[11px] text-slate-400">Last ping 12:47 PM</div>
              </div>
            </div>
          </div>

          {/* Card 2: "Shift started here" (video pin at 47.7% / 83.8%) — desktop only */}
          <div
            className="absolute hidden lg:block"
            style={{ left: '47.7%', top: '83.8%', transform: 'translate(-18px, -36px)' }}
          >
            <div className="flex animate-float-delayed items-start gap-2.5">
              <Avatar />
              <div className="-mt-7 min-w-[160px] rounded-2xl border border-slate-100 bg-white/95 px-3.5 py-2.5 text-left shadow-[0_8px_25px_rgba(0,0,0,0.08)] backdrop-blur-md">
                <div className="font-heading text-[13px] font-bold leading-tight text-slate-800">
                  Shift started here
                </div>
                <div className="font-navitem mt-0.5 text-[11px] text-slate-400">Checked in at 09:52 AM</div>
                <div className="mt-1 flex items-center gap-1 text-[11px] font-semibold text-[#10B981]">
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  Face verified
                </div>
              </div>
            </div>
          </div>

          {/* Avatar 3: top-right pin (video pin at 95.9% / 7.6%) — desktop only */}
          <div
            className="absolute hidden lg:block"
            style={{ left: '95.9%', top: '7.6%', transform: 'translate(-50%, -36px)' }}
          >
            <div className="animate-float">
              <Avatar />
            </div>
          </div>
        </div>
      </div>

      {/* ───────── 3. Feature cards (2 columns on small screens) ───────── */}
      <div className={`relative z-10 pb-6 pt-4 sm:pb-8 lg:pb-14 lg:pt-0 ${sidePad}`}>
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5 xl:gap-[3.6vw]">
          {featureCards.map((card) => (
            <div
              key={card.title}
              className="group flex cursor-pointer flex-col items-start gap-2 rounded-[18px] border border-slate-100 bg-white/95 p-3 shadow-[0_6px_24px_rgba(15,23,42,0.07)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(15,23,42,0.12)] sm:flex-row sm:items-center sm:gap-3 sm:rounded-[20px] sm:p-2 sm:pr-3 lg:gap-[15px]"
            >
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center transition-transform group-hover:scale-105 sm:h-14 sm:w-14 lg:h-[60px] lg:w-[60px]">
                <img src={card.icon} alt={card.title} className="h-full w-full object-contain drop-shadow-sm" />
              </div>
              <div className="min-w-0 text-left">
                <h3 className="font-heading text-[13.5px] font-semibold leading-tight tracking-tight text-slate-900 sm:text-[15px]">
                  {card.title}
                </h3>
                <p className="font-navitem mt-0.5 text-[11px] leading-snug text-slate-500 sm:mt-1 sm:text-xs lg:text-[12.5px]">
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