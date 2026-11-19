import React, { useEffect, useMemo, useRef, useState } from 'react';
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://salestrackapi.techsuryaitsolution.com/api',
    timeout: 15000,
});
let plansCache = null;

const CATEGORIES = ['Retail', 'FMCG / Distribution', 'Manufacturing', 'Pharma & Healthcare', 'Real Estate', 'Services', 'Other'];
const TEAM_SIZES = [
    { value: '1-5', label: '1–5 Salespersons' },
    { value: '6-10', label: '6–10 Salespersons' },
    { value: '11-20', label: '11–20 Salespersons' },
    { value: '21-50', label: '21–50 Salespersons' },
    { value: '50+', label: '50+ Salespersons' },
];
const initialForm = { companyName: '', name: '', phone: '', email: '', city: '', category: '', companySize: '1-5', planId: '' };

const money = (price) => `₹${new Intl.NumberFormat('en-IN').format(price)}`;
const cycle = (value) => ({ monthly: 'month', yearly: 'year', annual: 'year', quarterly: 'quarter' }[value] || value);

/* ---------- icons ---------- */
const Svg = ({ className = 'h-5 w-5', children }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        {children}
    </svg>
);

const icons = {
    building: <><rect x="5" y="4" width="14" height="16" rx="1" /><path d="M9 8h.01M12 8h.01M15 8h.01M9 12h.01M12 12h.01M15 12h.01M10 20v-4h4v4" /></>,
    user: <><circle cx="12" cy="8" r="3.2" /><path d="M5.5 20c.6-3.5 2.8-5 6.5-5s5.9 1.5 6.5 5" /></>,
    phone: <path d="M8 4 5.5 5.2c-.6.3-.9 1-.7 1.6C6.8 14.2 10 17.3 17.2 19.2c.6.2 1.3-.1 1.6-.7L20 16l-4-2-1.5 1.5a12 12 0 0 1-6-6L10 8 8 4Z" />,
    mail: <><rect x="4" y="6" width="16" height="12" rx="2" /><path d="m5 8 7 5 7-5" /></>,
    pin: <><path d="M19 10c0 5-7 10-7 10s-7-5-7-10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2.2" /></>,
    briefcase: <><rect x="4" y="8" width="16" height="11" rx="2" /><path d="M9 8V6h6v2M4 12h16M10 12v2h4v-2" /></>,
    team: <><circle cx="9" cy="9" r="2.5" /><circle cx="16.5" cy="10" r="2" /><path d="M4.5 19c.5-3 2.1-4.5 4.5-4.5s4 1.5 4.5 4.5M14 15c2.6-.2 4.3 1.1 4.7 3.5" /></>,
    target: <><circle cx="12" cy="12" r="7.5" /><circle cx="12" cy="12" r="3.5" /><circle cx="12" cy="12" r=".6" /></>,
    face: <><path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2" /><path d="M9 10v1M15 10v1M9.5 15c1.5 1 3.5 1 5 0" /></>,
    bars: <path d="M7 19v-5M12 19V9M17 19v-8" strokeWidth="2.2" />,
    crown: <path d="m4 17 1.5-9 4.5 4 2-6 2 6 4.5-4L20 17H4Zm0 3h16" />,
    rocket: <><path d="M14 4c3.5 0 6 .5 6 .5s.5 2.5.5 6c0 3-3 6-5.5 7.5L9 12c1.500-2.500 3-8 5-8Z" /><circle cx="15" cy="9" r="1.4" /><path d="M9 12l-3-.5-2 2 3.500.5M12 15l.5 3.500-2 2-.5-3" /></>,
    shield: <><path d="M12 3 5 6v5c0 4.500 3 8 7 10 4-2 7-5.500 7-10V6l-7-3Z" /><path d="m9 12 2 2 4-4" /></>,
    chevron: <path d="m6 9 6 6 6-6" />,
    check: <path d="m5 12.500 4.500 4.500L19 7.500" strokeWidth="2.200" />,
};

/* ---------- small building blocks ---------- */
const Field = ({ mark, children, select }) => (
    <div className="relative min-w-0 text-[#15305d]">
        <span className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-[#1b3b6f]">
            <Svg>{icons[mark]}</Svg>
        </span>
        {children}
        {select && (
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#40506a]">
                <Svg className="h-4 w-4">{icons.chevron}</Svg>
            </span>
        )}
    </div>
);

const FeatureChip = ({ iconKey, lines }) => (
    <span className="flex items-center gap-2.5 rounded-full bg-[#e8f1ff] px-4 py-2.5 text-[13px] leading-[1.15] text-[#2c4a7c]">
        <span className="text-[#1267e8]"><Svg className="h-[18px] w-[18px]">{icons[iconKey]}</Svg></span>
        <span>{lines.map((l, i) => <span key={i} className="block">{l}</span>)}</span>
    </span>
);

export default function RegisterModal({ onClose, defaultPlanCode }) {
    const [form, setForm] = useState(initialForm);
    const [plans, setPlans] = useState(plansCache || []);
    const [status, setStatus] = useState(plansCache ? 'ready' : 'loading');
    const [submitting, setSubmitting] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const first = useRef(null);

    /* lock scroll, ESC to close, focus first field */
    useEffect(() => {
        const old = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        const esc = (e) => e.key === 'Escape' && onClose();
        window.addEventListener('keydown', esc);
        first.current?.focus();
        return () => {
            document.body.style.overflow = old;
            window.removeEventListener('keydown', esc);
        };
    }, [onClose]);

    /* load plans */
    useEffect(() => {
        const pick = (list) => (list.find((p) => p.code === defaultPlanCode) || list[0])?._id || '';
        if (plansCache) {
            setForm((v) => ({ ...v, planId: v.planId || pick(plansCache) }));
            return;
        }
        const controller = new AbortController();
        api
            .get('/register/plans', { signal: controller.signal })
            .then(({ data }) => {
                const list = [...(data.plans || [])].sort((a, b) => a.sortOrder - b.sortOrder);
                plansCache = list;
                setPlans(list);
                setStatus('ready');
                setForm((v) => ({ ...v, planId: pick(list) }));
            })
            .catch((e) => {
                if (!axios.isCancel(e)) setStatus('error');
            });
        return () => controller.abort();
    }, [defaultPlanCode]);

    const selected = useMemo(() => plans.find((p) => p._id === form.planId), [plans, form.planId]);

    const change = (name) => (e) =>
        setForm((v) => ({
            ...v,
            [name]: name === 'phone' ? e.target.value.replace(/\D/g, '').slice(0, 10) : e.target.value,
        }));

    const input =
        'h-[52px] w-full md:h-[clamp(42px,6.4vh,56px)] rounded-[14px] border border-[#e6ebf3] bg-white pl-12 pr-4 text-[15px] text-[#17315c] shadow-[0_1px_2px_rgba(16,30,54,.04)] outline-none placeholder:text-[#8190ad] focus:border-[#1264eb] focus:ring-2 focus:ring-[#1264eb]/20';

    const submit = async (e) => {
        e.preventDefault();
        if (
            !form.companyName.trim() ||
            !form.name.trim() ||
            !/^[6-9]\d{9}$/.test(form.phone) ||
            !/^\S+@\S+\.\S+$/.test(form.email) ||
            !form.city.trim() ||
            !form.planId
        ) {
            setError('Please complete all required fields with valid details.');
            return;
        }
        setSubmitting(true);
        setError('');
        try {
            const { data } = await api.post('/register', {
                companyName: form.companyName.trim(),
                name: form.name.trim(),
                email: form.email.trim(),
                phone: form.phone,
                companySize: form.companySize,
                message: [`City: ${form.city.trim()}`, form.category && `Business category: ${form.category}`, selected && `Plan: ${selected.name}`]
                    .filter(Boolean)
                    .join(' | '),
                planId: form.planId,
            });
            setMessage(data?.message || 'Thanks! Your registration has been received.');
        } catch (err) {
            setError(err.response?.data?.message || 'We could not submit your registration. Please try again.');
            setSubmitting(false);
        }
    };

    const textControls = [
        ['companyName', 'Business Name', 'building', 'text'],
        ['name', 'Contact Person Name', 'user', 'text'],
        ['email', 'Enter business email', 'mail', 'email'],
        ['city', 'Enter city', 'pin', 'text'],
    ];

    const features = [
        ['face', ['Face-ID', 'Attendance']],
        ['pin', ['Live GPS']],
        ['bars', ['Leads &', 'Reports']],
    ];

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#31405a]/45 p-3 backdrop-blur-[2px] sm:p-6"
            onMouseDown={(e) => e.target === e.currentTarget && onClose()}
        >
            <section
                role="dialog"
                aria-modal="true"
                aria-labelledby="register-title"
                className="relative grid max-h-[94vh] w-full max-w-[1020px] overflow-y-auto rounded-[28px] bg-white shadow-[0_30px_70px_rgba(16,30,54,.28)] md:h-[min(760px,94vh)] md:max-h-none md:grid-cols-[50%_50%] md:grid-rows-1 md:overflow-hidden"
                style={{ fontFamily: 'Inter, sans-serif' }}
            >
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close registration form"
                    className="absolute right-4 top-3 z-30 text-[26px] leading-none text-[#40506a] hover:text-[#0c234d]"
                >
                    ×
                </button>

                {/* ================= LEFT PANEL ================= */}
                <aside className="relative flex flex-col overflow-hidden bg-[#f4f8ff] px-6 pb-5 pt-6 text-[#112c58] sm:px-8 md:min-h-0 md:pt-[clamp(18px,3.4vh,32px)]">
                    <div
                        className="pointer-events-none absolute bottom-0 right-0 h-24 w-[70%] bg-[#e2efff]"
                        style={{ clipPath: 'polygon(0 100%,100% 0,100% 100%)' }}
                    />

                    <div className="relative z-10 flex flex-1 flex-col">
                        <div className="flex items-center justify-between gap-3">
                            {/* logo file is a square with lots of empty space, so crop it to a 4:1 box */}
                            <span className="relative block aspect-[4/1] w-[170px] shrink-0 overflow-hidden md:w-[clamp(140px,24vh,190px)]">
                                <img
                                    src="/TechSuryaIT.png"
                                    alt="Tech Surya IT Solution"
                                    className="absolute left-1/2 top-1/2 w-full max-w-none -translate-x-1/2 -translate-y-1/2"
                                />
                            </span>
                            <span className="hidden whitespace-nowrap rounded-full bg-[#e1edff] px-4 py-2 text-[13px] font-medium text-[#1764d5] sm:block">Annual Subscription</span>
                        </div>

                        <h2 id="register-title" className="mt-5 text-[28px] font-bold leading-[1.1] tracking-[-0.5px] md:mt-[clamp(12px,2.4vh,24px)] md:text-[clamp(26px,4.4vh,36px)]">
                            Get Started with
                            <br />
                            <span className="text-[#1167e9]">Techsurya</span> FieldOps
                        </h2>
                        <p className="mt-3 max-w-[300px] text-[16px] leading-[1.4] text-[#49618a] md:mt-[clamp(6px,1.4vh,14px)] md:text-[clamp(14px,2.2vh,18px)]">
                            Everything you need to manage your field sales operations.
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2.5 border-b border-[#dce6f3] pb-5 md:mt-[clamp(10px,2vh,22px)] md:pb-[clamp(10px,2vh,22px)]">
                            {features.map(([k, lines]) => (
                                <FeatureChip key={k} iconKey={k} lines={lines} />
                            ))}
                        </div>

                        <p className="mt-5 text-[17px] font-semibold md:mt-[clamp(10px,2vh,22px)]">Choose Your Plan</p>

                        <div className="mt-3 space-y-3 md:mt-[clamp(10px,1.6vh,16px)] md:space-y-[clamp(8px,1.6vh,14px)]">
                            {status === 'loading' && [1, 2].map((n) => <div key={n} className="h-[104px] animate-pulse rounded-[14px] bg-[#e5edf9]" />)}
                            {status === 'error' && <p className="text-[13px] text-red-500">Plans could not be loaded. Please try again later.</p>}

                            {plans.slice(0, 2).map((plan, index) => {
                                const active = form.planId === plan._id;
                                return (
                                    <button
                                        key={plan._id}
                                        type="button"
                                        onClick={() => setForm((v) => ({ ...v, planId: plan._id }))}
                                        aria-pressed={active}
                                        className={`relative flex w-full items-center gap-2.5 rounded-[16px] border-2 bg-white py-4 pl-4 pr-11 text-left transition md:py-[clamp(10px,1.9vh,18px)] ${active
                                                ? 'border-[#1269f5] shadow-[0_4px_14px_rgba(10,93,220,.16)]'
                                                : 'border-transparent shadow-[0_1px_6px_rgba(16,30,54,.08)] hover:border-[#cfe0fb]'
                                            }`}
                                    >
                                        {index === 0 && (
                                            <span className="absolute -top-3 right-5 rounded-full bg-[#0965ee] px-3 py-1 text-[11px] font-semibold text-white">
                                                Most Popular
                                            </span>
                                        )}

                                        <span
                                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${index === 0 ? 'bg-[#e6f0ff] text-[#1269f5]' : 'bg-[#edf1f7] text-[#5977a7]'
                                                }`}
                                        >
                                            <Svg className="h-5 w-5">{index === 0 ? icons.crown : icons.rocket}</Svg>
                                        </span>

                                        <span className="w-[84px] shrink-0">
                                            <b className="block text-[17px] leading-tight">{plan.name}</b>
                                            <small className="mt-0.5 block whitespace-nowrap text-[11px] text-[#5d7296]">Up to {plan.seatLimit} users</small>
                                        </span>

                                        <span className="shrink-0 border-l border-[#e2e8f2] pl-3">
                                            <b className="block text-[20px] leading-none">{money(plan.price)}</b>
                                            <small className="mt-1 block whitespace-nowrap text-[11px] text-[#5d7296]">/ {cycle(plan.billingCycle)}</small>
                                        </span>

                                        <span className="hidden min-w-0 flex-1 space-y-1 border-l border-[#e2e8f2] pl-3 text-[11px] leading-tight text-[#34507f] sm:block">
                                            {(plan.features || []).slice(0, 4).map((x) => (
                                                <span className="flex items-center gap-1.5 whitespace-nowrap" key={x}>
                                                    <Svg className="h-3 w-3 shrink-0">{icons.check}</Svg>
                                                    <span>{x}</span>
                                                </span>
                                            ))}
                                        </span>

                                        {active && (
                                            <span className="absolute right-3 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-[#1269f5] text-white">
                                                <Svg className="h-3.5 w-3.5">{icons.check}</Svg>
                                            </span>
                                        )}
                                    </button>
                                );
                            })}
                        </div>

                        <div className="relative z-10 mt-auto flex items-center gap-3 pt-5 md:pt-[clamp(8px,1.6vh,18px)]">
                            <span className="text-[#0ac567]"><Svg className="h-8 w-8">{icons.shield}</Svg></span>
                            <span>
                                <b className="block text-[13px]">Secure registration</b>
                                <small className="block text-[12px] text-[#5c7298]">Your information is encrypted and confidential.</small>
                            </span>
                        </div>
                    </div>
                </aside>

                {/* ================= RIGHT PANEL ================= */}
                <main className="relative flex flex-col px-6 pb-8 pt-8 sm:px-9 md:min-h-0 md:pb-[clamp(18px,3.4vh,32px)] md:pt-[clamp(132px,22vh,190px)]">
                    {/* price card */}
                    <div className="mb-6 rounded-[18px] bg-gradient-to-br from-white via-[#f2f7ff] to-[#a8ceff] px-6 py-5 shadow-[0_8px_24px_rgba(27,80,159,.14)] md:absolute md:right-8 md:top-[clamp(20px,4vh,40px)] md:mb-0 md:w-[320px] md:py-[clamp(12px,2.2vh,20px)]">
                        <div className="flex items-end gap-1">
                            <b className="text-[34px] leading-none text-[#112d5c] md:text-[clamp(30px,4.6vh,38px)]">{selected ? money(selected.price) : '₹199'}</b>
                            <span className="pb-1 text-[16px] text-[#1165e6]">/{selected ? cycle(selected.billingCycle) : 'month'}</span>
                        </div>
                        <small className="mt-2 block text-[14px] text-[#253c66]">
                            {selected ? `${selected.name} Plan · Up To ${selected.seatLimit} Users` : 'Starter Plan · Up To 15 Users'}
                        </small>
                        <span className="pointer-events-none absolute bottom-5 right-5 flex items-end gap-1.5 opacity-40">
                            <i className="h-3 w-2.5 rounded-t bg-[#0764ec]" />
                            <i className="h-6 w-2.5 rounded-t bg-[#0764ec]" />
                            <i className="h-9 w-2.5 rounded-t bg-[#0764ec]" />
                        </span>
                    </div>

                    {message ? (
                        <div className="flex flex-1 flex-col items-center justify-center py-10 text-center">
                            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0bbd68] text-white">
                                <Svg className="h-7 w-7">{icons.check}</Svg>
                            </span>
                            <h3 className="mt-4 text-[22px] font-bold text-[#102a56]">Registration received</h3>
                            <p className="mt-2 max-w-[320px] text-[15px] text-[#52698f]">{message}</p>
                            <button type="button" onClick={onClose} className="mt-6 rounded-full bg-[#113a72] px-8 py-3 text-[15px] font-medium text-white">
                                Close
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={submit} className="flex flex-1 flex-col" noValidate>
                            <h3 className="text-[26px] font-bold leading-tight text-[#102a56] md:text-[clamp(22px,3.4vh,28px)]">Business Information</h3>
                            <p className="mt-1.5 text-[15px] text-[#536a92] md:text-[clamp(13px,1.9vh,16px)]">Tell us about your business to continue.</p>

                            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 md:mt-[clamp(12px,2.4vh,24px)] md:gap-[clamp(8px,1.6vh,14px)]">
                                {/* row 1 */}
                                {textControls.slice(0, 2).map(([name, placeholder, mark, type]) => (
                                    <Field key={name} mark={mark}>
                                        <input
                                            ref={name === 'companyName' ? first : undefined}
                                            value={form[name]}
                                            onChange={change(name)}
                                            className={input}
                                            placeholder={placeholder}
                                            type={type}
                                        />
                                    </Field>
                                ))}

                                {/* row 2: phone with +91 prefix, email */}
                                <Field mark="phone">
                                    <span className="pointer-events-none absolute left-12 top-1/2 z-10 -translate-y-1/2 text-[15px] text-[#17315c]">+91</span>
                                    <input
                                        value={form.phone}
                                        onChange={change('phone')}
                                        className={`${input} !pl-[86px]`}
                                        placeholder="Enter mobile number"
                                        type="tel"
                                        inputMode="numeric"
                                    />
                                </Field>
                                <Field mark="mail">
                                    <input value={form.email} onChange={change('email')} className={input} placeholder="Enter business email" type="email" />
                                </Field>

                                {/* row 3: city, category */}
                                <Field mark="pin">
                                    <input value={form.city} onChange={change('city')} className={input} placeholder="Enter city" type="text" />
                                </Field>
                                <Field mark="briefcase" select>
                                    <select value={form.category} onChange={change('category')} className={`${input} appearance-none pr-10`}>
                                        <option value="">Select category</option>
                                        {CATEGORIES.map((x) => (
                                            <option key={x}>{x}</option>
                                        ))}
                                    </select>
                                </Field>

                                {/* row 4: team size, plan */}
                                <Field mark="team" select>
                                    <select value={form.companySize} onChange={change('companySize')} className={`${input} appearance-none pr-10`}>
                                        {TEAM_SIZES.map((x) => (
                                            <option value={x.value} key={x.value}>
                                                {x.label}
                                            </option>
                                        ))}
                                    </select>
                                </Field>
                                <Field mark="target" select>
                                    <select
                                        value={form.planId}
                                        onChange={change('planId')}
                                        className={`${input} appearance-none pr-10`}
                                        disabled={status !== 'ready'}
                                    >
                                        {status !== 'ready' && <option value="">{status === 'error' ? 'Plans unavailable' : 'Loading plans...'}</option>}
                                        {plans.map((x) => (
                                            <option value={x._id} key={x._id}>
                                                {x.name} — {money(x.price)} / {cycle(x.billingCycle)}
                                            </option>
                                        ))}
                                    </select>
                                </Field>
                            </div>

                            {error && (
                                <p role="alert" className="mt-3 text-[13px] text-red-500">
                                    {error}
                                </p>
                            )}

                            <div className="mt-auto flex justify-end pt-6 md:pt-[clamp(10px,2vh,24px)]">
                                <button
                                    type="submit"
                                    disabled={submitting || status !== 'ready'}
                                    className="inline-flex h-[54px] w-full md:h-[clamp(46px,6.8vh,58px)] items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#0967f0] to-[#12386d] px-8 text-[16px] font-semibold text-white shadow-[0_8px_20px_rgba(15,63,140,.32)] transition hover:brightness-110 disabled:opacity-60 sm:w-auto"
                                >
                                    {submitting ? (
                                        'Submitting...'
                                    ) : (
                                        <>
                                            Continue Registration
                                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14M13 6l6 6-6 6" />
                                            </svg>
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    )}
                </main>
            </section>
        </div>
    );
}