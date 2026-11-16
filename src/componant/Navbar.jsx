import React, { useState } from 'react';

const navLinks = [
  { label: 'Product', href: '#product' },
  { label: 'Product', href: '#product-2' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      {/* Same side padding as the hero so the logo and the heading share one left edge */}
      <div className="mx-auto w-full max-w-[1680px] px-5 pb-3 pt-4 sm:px-8 sm:pt-5 lg:px-[3.6vw] lg:pt-6">
        <div className="flex items-center">
          {/* Brand */}
          <a href="#" className="group flex flex-shrink-0 items-center gap-2.5 lg:gap-3.5">
            <img
              src="/logo.png"
              alt="FieldOps Logo"
              className="h-11 w-11 object-contain transition-transform group-hover:scale-105 sm:h-12 sm:w-12 lg:h-[62px] lg:w-[62px]"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-heading text-xl font-semibold tracking-tight text-slate-900 lg:text-[22px]">
                Field<span className="text-[#2368DB]">Ops</span>
              </span>
              <span className="font-subheading -mt-0.5 text-[10px] font-medium text-slate-500 lg:text-[11px]">
                By Tech surya
              </span>
            </div>
          </a>

          {/* Desktop pill: sits right after the logo, right side stays empty */}
          <nav className="ml-[clamp(20px,3.8vw,56px)] hidden items-center rounded-full border border-slate-200/70 bg-white/80 py-2 pl-3 pr-2 shadow-[0_4px_24px_rgba(0,0,0,0.06)] backdrop-blur-md md:flex lg:py-[11px] lg:pl-[14px] lg:pr-3">
            <ul className="flex items-center">
              {navLinks.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="font-navitem block rounded-full px-3 py-1.5 text-[14px] text-slate-700 transition-colors hover:bg-slate-100/70 hover:text-slate-900 lg:px-[14px] lg:text-[15px]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="font-navitem ml-2 inline-block whitespace-nowrap rounded-full bg-[#2368DB] px-4 py-2 text-[14px] font-medium text-white shadow-sm transition-all duration-200 hover:scale-[1.02] hover:bg-[#1D5BBF] active:scale-[0.98] lg:ml-3 lg:px-[14px] lg:py-[9px] lg:text-[15px]"
            >
              Contact Us
            </a>
          </nav>

          {/* Mobile hamburger (pushed to the far right) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="ml-auto rounded-xl border border-slate-200/70 bg-white/80 p-2 text-slate-700 shadow-sm backdrop-blur-md md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="mt-3 flex flex-col gap-2 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-xl backdrop-blur-xl md:hidden">
            {navLinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-navitem rounded-lg px-3 py-2 text-base text-slate-700 hover:bg-slate-100"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="font-navitem mt-2 rounded-full bg-[#2368DB] py-2.5 text-center text-sm font-medium text-white"
            >
              Contact Us
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;