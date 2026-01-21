import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Mail, MapPin, Phone } from "lucide-react";
import { TbBrandTelegram, TbBrandWhatsapp } from "react-icons/tb";
import { SiReact, SiTailwindcss, SiVercel } from "react-icons/si";
import Header from "../components/Header";
import { Turnstile } from "@marsidev/react-turnstile";
import { getInitialTheme } from "../utils/helpers";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

const initialFormState = {
    name: "",
    email: "",
    subject: "",
    message: "",
};
const CLOUDFLARE_TURNSTILE_SITE_KEY = import.meta.env
    .VITE_CLOUDFLARE_TURNSTILE_SITE_KEY;

const Contact = () => {
    const [form, setForm] = useState(initialFormState);
    const [theme, setTheme] = useState(getInitialTheme);
    const [status, setStatus] = useState(null);
    const [turnstileToken, setTurnstileToken] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const resetTurnstile = () => {
        setTurnstileToken(null);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!form.name || !form.email || !form.message) {
            setStatus({
                type: "error",
                message:
                    "Please fill in your name, email, and message before submitting.",
            });
            return;
        }

        if (!turnstileToken) {
            setStatus({
                type: "error",
                message:
                    "Please complete the Cloudflare Turnstile check before sending your message.",
            });
            return;
        }

        try {
            setIsSubmitting(true);
            setStatus({ type: "info", message: "Sending your message..." });

            const response = await fetch(
                "https://harryngkokjing.com/api/contact",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: form.name,
                        email: form.email,
                        subject: form.subject,
                        message: form.message,
                        turnstileToken,
                    }),
                }
            );

            if (!response.ok) {
                const errorData = await response.json().catch(() => null);
                const errorMessage =
                    errorData?.error ||
                    "Failed to send your message. Please try again.";
                throw new Error(errorMessage);
            }

            setStatus({
                type: "success",
                message:
                    "Thanks for reaching out! Your message has been sent and I’ll respond as soon as possible.",
            });
            setForm(initialFormState);
        } catch (error) {
            setStatus({
                type: "error",
                message:
                    error?.message ||
                    "Something went wrong while sending your message. Please try again or contact me directly via email.",
            });
        } finally {
            setIsSubmitting(false);
            resetTurnstile();
        }
    };

    useEffect(() => {
        if (typeof window === "undefined") {
            return undefined;
        }

        const handleThemeChange = (event) => {
            const nextTheme = event?.detail;
            if (nextTheme === "light" || nextTheme === "dark") {
                setTheme(nextTheme);
            }
        };

        window.addEventListener("theme-change", handleThemeChange);

        return () => {
            window.removeEventListener("theme-change", handleThemeChange);
        };
    }, []);

    return (
        <div>
            <Header />
            <section className="bg-background px-4 text-primary sm:px-6 pt-24 sm:pt-28">
                <motion.div
                    className="text-center"
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    transition={{ duration: 0.5 }}
                >
                    <p className="text-xs font-jetbrains uppercase tracking-[0.4em] text-secondary sm:text-sm">
                        Contact
                    </p>
                    <h1 className="mt-3 text-3xl font-jetbrains font-semibold sm:text-4xl md:text-5xl">
                        Let's work together
                    </h1>
                    <p className="mt-4 font-inter text-sm text-secondary sm:text-base md:text-lg">
                        Have a question, collaboration idea, or an opportunity
                        that aligns with my work? Send a message and I'll get
                        back to you.
                    </p>
                </motion.div>

                <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-[1fr_1.2fr]">
                    <motion.div
                        className="space-y-6 rounded-2xl border border-border bg-surface/60 p-6 shadow-[0_20px_45px_rgba(15,23,42,0.08)] dark:bg-surface/30 sm:rounded-3xl sm:p-8"
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <ContactInfo
                            icon={<Mail className="h-5 w-5" />}
                            label="Email"
                            value="harryngkokjing@gmail.com"
                            href="mailto:harryngkokjing@gmail.com"
                        />
                        <ContactInfo
                            icon={<Phone className="h-5 w-5" />}
                            label="Phone"
                            value="+65 8504 0648"
                            href="tel:+6585040648"
                        />
                        <ContactInfo
                            icon={<TbBrandWhatsapp className="h-5 w-5" />}
                            label="WhatsApp"
                            value="+65 8504 0648"
                            href="https://wa.me/6585040648"
                        />
                        <ContactInfo
                            icon={<TbBrandTelegram className="h-5 w-5" />}
                            label="Telegram"
                            value="@hnkj_29703"
                            href="https://t.me/hnkj_29703"
                        />
                        <ContactInfo
                            icon={<MapPin className="h-5 w-5" />}
                            label="Based in"
                            value="Singapore"
                        />
                    </motion.div>

                    <motion.form
                        onSubmit={handleSubmit}
                        className="space-y-6 rounded-2xl border border-border bg-surface/60 p-6 shadow-[0_20px_45px_rgba(15,23,42,0.08)] dark:bg-surface/30 sm:rounded-3xl sm:p-8"
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="grid gap-6 md:grid-cols-2">
                            <InputField
                                label="Full Name"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Jane Doe"
                                required
                            />
                            <InputField
                                label="Email"
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="hello@example.com"
                                required
                            />
                        </div>
                        <InputField
                            label="Subject"
                            name="subject"
                            value={form.subject}
                            onChange={handleChange}
                            placeholder="How can I help?"
                        />
                        <div>
                            <label
                                htmlFor="message"
                                className="text-xs font-jetbrains uppercase tracking-[0.3em] text-secondary sm:text-sm"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Share details about your project, opportunity, or question."
                                className="mt-3 w-full rounded-2xl border border-border bg-background px-3 py-2 font-inter text-sm text-primary shadow-[inset_0_1px_4px_rgba(15,23,42,0.08)] focus:border-accent focus:outline-none sm:px-4 sm:py-3 sm:text-base"
                                required
                            />
                        </div>
                        <div className="w-full flex justify-center">
                            <Turnstile
                                siteKey={CLOUDFLARE_TURNSTILE_SITE_KEY}
                                onSuccess={(token) => {
                                    setTurnstileToken(token);
                                    setStatus(null);
                                }}
                                onExpire={() => {
                                    setTurnstileToken(null);
                                }}
                                onError={(error) => {
                                    setStatus(error);
                                }}
                                options={{
                                    action: "submit-form",
                                    theme: theme,
                                    size: "flexible",
                                }}
                                scriptOptions={{
                                    appendTo: "body",
                                    defer: true,
                                    async: true,
                                }}
                            />
                        </div>
                        {status && (
                            <p
                                className={`text-xs font-inter sm:text-sm ${
                                    status.type === "error"
                                        ? "text-red-500"
                                        : status.type === "info"
                                        ? "text-secondary"
                                        : "text-emerald-500"
                                }`}
                            >
                                {status.message}
                            </p>
                        )}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full rounded-2xl border border-border bg-accent px-5 py-3 font-jetbrains text-xs uppercase tracking-[0.3em] text-white transition hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-70 sm:px-6 sm:text-sm"
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </button>
                    </motion.form>
                </div>
            </section>
            <footer className="relative overflow-hidden text-primary">
                <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 py-16 md:px-16">
                    <div className="flex flex-col gap-2 border-t border-border pt-8 text-sm text-secondary items-center justify-between">
                        <p className="flex w-full flex-wrap items-center justify-center gap-2 text-center text-xs sm:text-sm">
                            © {new Date().getFullYear()} Harry. All rights
                            reserved.
                        </p>
                        <p className="flex w-full flex-wrap items-center justify-center gap-3 text-center text-xs sm:text-sm">
                            <span>Built with</span>
                            <span className="inline-flex items-center gap-1">
                                <SiReact className="h-4 w-4 text-primary" />
                                React
                            </span>
                            <span className="inline-flex items-center gap-1">
                                <SiTailwindcss className="h-4 w-4 text-primary" />
                                Tailwind CSS
                            </span>
                            <span className="inline-flex items-center gap-1">
                                <SiVercel className="h-4 w-4 text-primary" />
                                Vercel
                            </span>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

const InputField = ({
    label,
    type = "text",
    name,
    value,
    onChange,
    placeholder,
    required = false,
}) => (
    <div>
        <label
            htmlFor={name}
            className="text-xs font-jetbrains uppercase tracking-[0.3em] text-secondary sm:text-sm"
        >
            {label}
        </label>
        <input
            id={name}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            className="mt-3 w-full rounded-2xl border border-border bg-background px-3 py-2 font-inter text-sm text-primary shadow-[inset_0_1px_4px_rgba(15,23,42,0.08)] focus:border-accent focus:outline-none sm:px-4 sm:py-3 sm:text-base"
        />
    </div>
);

const ContactInfo = ({ icon, label, value, href }) => (
    <div className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-background/80 p-4 shadow-[0_10px_25px_rgba(15,23,42,0.05)] sm:flex-row sm:items-center sm:gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-border bg-background text-primary">
            {icon}
        </div>
        <div>
            <p className="text-xs font-jetbrains uppercase tracking-[0.3em] text-secondary sm:text-sm">
                {label}
            </p>
            {href ? (
                <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center text-base font-jetbrains text-primary hover:text-accent sm:text-lg"
                >
                    {value}
                </a>
            ) : (
                <p className="mt-1 text-base font-jetbrains text-primary sm:text-lg">
                    {value}
                </p>
            )}
        </div>
    </div>
);

export default Contact;
