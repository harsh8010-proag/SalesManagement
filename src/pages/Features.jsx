import React from 'react';

/* ── Small icon helper (24x24 outline icons) ── */
const Icon = ({ paths, className = 'w-4 h-4', strokeWidth = 1.8 }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    {paths.map((d, i) => (
      <path key={i} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d={d} />
    ))}
  </svg>
);

const ICONS = {
  attendance: [
    'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    'M9 14l2 2 4-4',
  ],
  call: [
    'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
  ],
  camera: [
    'M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z',
    'M15 13a3 3 0 11-6 0 3 3 0 016 0z',
  ],
  tasks: [
    'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
  ],
  pin: [
    'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z',
    'M15 11a3 3 0 11-6 0 3 3 0 016 0z',
  ],
};

const scatteredNotes = [
  {
    icon: ICONS.attendance,
    title: 'Attendance register',
    subtitle: (
      <>
        Paper sheet at the
        <br />
        branch
      </>
    ),
    className: 'top-[14%] left-[5%] sm:left-[6%]',
  },
  {
    icon: ICONS.call,
    title: (
      <>
        &ldquo;Where are you
        <br />
        now?&rdquo;
      </>
    ),
    subtitle: 'Seven calls before noon',
    className: 'top-[26%] right-[4%] sm:top-[24%] sm:right-[5%]',
  },
  {
    icon: ICONS.camera,
    title: 'Visit photo',
    subtitle: 'Lost in a group chat',
    className: 'top-[45%] left-[5%] sm:top-[46%] sm:left-[8%]',
  },
  {
    icon: ICONS.tasks,
    title: "Today's tasks",
    subtitle: (
      <>
        On a notepad,
        <br />
        somewhere
      </>
    ),
    className: 'top-[60%] right-[4%] sm:top-[57%] sm:right-[7%]',
  },
  {
    icon: ICONS.pin,
    title: 'Customer location',
    subtitle: 'Shared once, never again',
    className: 'bottom-[7%] left-[12%] sm:left-[24%]',
  },
];

const connectedModules = [
  { number: '01', title: 'Attendance', icon: ICONS.attendance },
  { number: '02', title: 'Locations', icon: ICONS.pin },
  { number: '03', title: 'Field photos', icon: ICONS.camera },
  { number: '04', title: 'Assignments', icon: ICONS.tasks },
];

const steps = [
  {
    step: '01',
    title: 'Connect your team',
    description: 'Bring your field workforce into one organised administrative environment.',
  },
  {
    step: '02',
    title: 'Monitor field activity',
    description: 'Understand attendance, locations, assignments and recorded employee activities.',
  },
  {
    step: '03',
    title: 'Analyse with clarity',
    description: 'Review workforce performance through graphs, reports and employee comparisons.',
  },
];

/* Dashed connector lines. Coordinates are in a 200 x 400 box that is stretched to the
   full height of the middle column; the hub sits at (100, 200). */
const leftLines = [
  'M 0 70 C 50 70, 60 180, 100 200',
  'M 0 135 C 45 135, 60 190, 100 200',
  'M 0 200 L 100 200',
  'M 0 265 C 45 265, 60 210, 100 200',
  'M 0 330 C 50 330, 60 220, 100 200',
];
const rightLines = [
  { d: 'M 100 200 C 140 180, 160 90, 200 90', color: '#FE6608' },
  { d: 'M 100 200 C 145 190, 165 150, 200 150', color: '#FDA310' },
  { d: 'M 100 200 C 145 210, 165 250, 200 250', color: '#FDA310' },
  { d: 'M 100 200 C 140 220, 160 310, 200 310', color: '#FE6608' },
];

const Features = () => {
  return (
    <section
      id="features"
      className="relative w-full overflow-hidden bg-[#FAFBFD] py-16 sm:py-24"
    >
      {/* Scoped font fallbacks so the heading/body fonts always apply */}
      <style>{`
        #features .font-heading { font-family: 'Mona Sans', 'Inter', sans-serif; }
        #features .font-inter { font-family: 'Inter', sans-serif; }
      `}</style>

      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* ───────── Section heading ───────── */}
        <div className="mx-auto mb-12 text-center sm:mb-16">
          <h2 className="font-heading text-[30px] font-semibold leading-[1.15] tracking-tight text-slate-900 sm:text-[38px] md:text-[48px] lg:text-[52px]">
            <span className="block sm:whitespace-nowrap">Your people are everywhere.</span>
            <span className="block text-[#FE6608] sm:whitespace-nowrap">
              Your management shouldn&rsquo;t be.
            </span>
          </h2>

          <p className="font-inter mx-auto mt-4 max-w-[440px] text-sm leading-relaxed text-slate-500 sm:mt-5 sm:text-[15px]">
            FieldOps connects employee locations, field activities and operational information so
            managers can understand what is happening across their workforce.
          </p>
        </div>

        {/* ───────── Before / After diagram ───────── */}
        <div className="relative w-full max-w-6xl">
          <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12 lg:gap-3">
            {/* LEFT: BEFORE · SCATTERED */}
            <div className="relative h-[520px] overflow-hidden rounded-[28px] border border-dashed border-slate-300 bg-[#F7F9FB] sm:rounded-[32px] lg:col-span-5 lg:h-[490px]">
              {/* Diagonal stripes */}
              <div
                className="pointer-events-none absolute inset-0 opacity-80"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    45deg,
                    transparent,
                    transparent 10px,
                    rgba(226, 232, 240, 0.5) 10px,
                    rgba(226, 232, 240, 0.5) 11.5px,
                    transparent 11.5px,
                    transparent 22px,
                    rgba(203, 213, 225, 0.35) 22px,
                    rgba(203, 213, 225, 0.35) 24px
                  )`,
                }}
              />

              <div className="font-inter absolute left-6 top-6 z-10 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 sm:left-7 sm:top-7 sm:text-xs">
                Before · Scattered
              </div>

              {/* Notes are positioned against the whole card, not the area under the label */}
              {scatteredNotes.map((note, index) => (
                <div
                  key={index}
                  className={`absolute ${note.className} z-10 flex max-w-[200px] -rotate-[4deg] cursor-default select-none items-center gap-2.5 rounded-2xl border border-slate-100 bg-white px-3.5 py-2.5 shadow-[0_6px_20px_rgba(15,23,42,0.06)] transition-transform duration-200 hover:z-30 hover:scale-105 sm:max-w-[225px]`}
                >
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-slate-50 text-slate-400">
                    <Icon paths={note.icon} />
                  </div>
                  <div className="text-left">
                    <div className="font-heading text-[12px] font-semibold leading-tight text-slate-800 sm:text-[13px]">
                      {note.title}
                    </div>
                    <div className="font-inter mt-0.5 text-[10.5px] leading-tight text-slate-400 sm:text-[11px]">
                      {note.subtitle}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CENTER: connector lines + hub (desktop) */}
            <div className="relative hidden items-center justify-center lg:col-span-2 lg:flex">
              <svg
                className="pointer-events-none absolute bottom-0 top-0 -left-3 h-full w-[calc(100%+24px)] overflow-visible"
                viewBox="0 0 200 400"
                preserveAspectRatio="none"
                fill="none"
              >
                {leftLines.map((d, i) => (
                  <path
                    key={`l-${i}`}
                    d={d}
                    stroke="#94A3B8"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    strokeOpacity="0.65"
                    vectorEffect="non-scaling-stroke"
                  />
                ))}
                {rightLines.map((line, i) => (
                  <path
                    key={`r-${i}`}
                    d={line.d}
                    stroke={line.color}
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    strokeOpacity="0.85"
                    vectorEffect="non-scaling-stroke"
                  />
                ))}
              </svg>

              <div className="relative z-20 flex h-20 w-20 items-center justify-center rounded-3xl border border-slate-100 bg-white p-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:scale-110">
                <img
                  src="/tech.png"
                  alt="Tech Surya Logo"
                  className="h-full w-full rounded-full object-contain"
                />
              </div>
            </div>

            {/* CENTER: hub (mobile / tablet) */}
            <div className="flex items-center justify-center lg:hidden">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-100 bg-white p-2 shadow-lg">
                <img
                  src="/tech.png"
                  alt="Tech Surya Logo"
                  className="h-full w-full rounded-full object-contain"
                />
              </div>
            </div>

            {/* RIGHT: AFTER · ONE CONNECTED WORKSPACE */}
            <div className="relative flex min-h-[460px] flex-col justify-between rounded-[28px] border border-blue-200/80 bg-[#EDF5FE] p-5 sm:rounded-[32px] sm:p-7 lg:col-span-5 lg:h-[490px]">
              <div className="font-inter text-[11px] font-bold uppercase tracking-widest text-[#2368DB] sm:text-xs">
                After · One connected workspace
              </div>

              <div className="py-4">
                <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-blue-100/80 bg-white shadow-sm">
                  {connectedModules.map((mod, idx) => (
                    <div
                      key={mod.title}
                      className={`flex min-h-[115px] flex-col justify-between p-4 sm:min-h-[125px] sm:p-5 ${idx % 2 === 0 ? 'border-r border-slate-100' : ''
                        } ${idx < 2 ? 'border-b border-slate-100' : ''}`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#2368DB] text-white">
                          <Icon paths={mod.icon} strokeWidth={2} />
                        </div>
                        <span className="font-inter text-xs font-bold text-[#FE6608] sm:text-sm">
                          {mod.number}
                        </span>
                      </div>
                      <div className="font-heading mt-4 text-left text-sm font-semibold text-slate-800 sm:text-base">
                        {mod.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="font-inter text-left text-xs font-medium text-[#2368DB] sm:text-[13px]">
                Every record in one place, connected to the person who made it.
              </div>
            </div>
          </div>
        </div>

        {/* ───────── From field activity to management insight ───────── */}
        <div className="mt-16 w-full pt-6 sm:mt-24">
          <div className="font-inter mb-10 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 sm:mb-14 sm:text-xs">
            From field activity to management insight
          </div>

          <div className="relative grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-16 lg:gap-24">
            {/* Line running behind the number badges */}
            <div className="absolute left-0 right-0 top-[21px] z-0 hidden h-[1.5px] bg-slate-200 md:block" />

            {steps.map((item) => (
              <div key={item.step} className="relative z-10 flex flex-col items-start text-left">
                <div className="font-inter flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#FE6608] bg-white text-sm font-bold text-[#FE6608] transition-transform hover:scale-110">
                  {item.step}
                </div>
                <h3 className="font-heading mt-4 text-lg font-semibold text-slate-900 sm:mt-5 sm:text-xl">
                  {item.title}
                </h3>
                <p className="font-inter mt-2 text-xs leading-relaxed text-slate-500 sm:text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;