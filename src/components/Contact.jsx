import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { TbBrandTelegram, TbBrandWhatsapp } from "react-icons/tb";
import Header from "./Header";

const initialFormState = {
    name: "",
    email: "",
    subject: "",
    message: "",
};

const Contact = () => {
    const [form, setForm] = useState(initialFormState);
    const [status, setStatus] = useState(null);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!form.name || !form.email || !form.message) {
            setStatus({
                type: "error",
                message:
                    "Please fill in your name, email, and message before submitting.",
            });
            return;
        }

        setStatus({
            type: "success",
            message:
                "Thanks for reaching out! Your message has been queued and I’ll respond as soon as possible.",
        });
        setForm(initialFormState);
    };

    return (
        <div>
            <Header />
            <section className="bg-background px-6 py-24 text-primary md:px-24">
                <div className="mx-auto max-w-5xl">
                    <div className="text-center">
                        <p className="text-sm font-jetbrains uppercase tracking-[0.4em] text-secondary">
                            Contact
                        </p>
                        <h1 className="mt-3 text-4xl font-jetbrains font-semibold md:text-5xl">
                            Let’s work together
                        </h1>
                        <p className="mt-4 font-inter text-base text-secondary md:text-lg">
                            Have a question, collaboration idea, or an
                            opportunity that aligns with my work? Send a message
                            and I’ll get back to you.
                        </p>
                    </div>

                    <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
                    <div className="space-y-8 rounded-3xl border border-border bg-surface/60 p-8 shadow-[0_20px_45px_rgba(15,23,42,0.08)] dark:bg-surface/30">
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
                            icon={<MapPin className="h-5 w-5" />}
                            label="Based in"
                            value="Singapore"
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
                    </div>

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-6 rounded-3xl border border-border bg-surface/60 p-8 shadow-[0_20px_45px_rgba(15,23,42,0.08)] dark:bg-surface/30"
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
                                    className="text-sm font-jetbrains uppercase tracking-[0.3em] text-secondary"
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
                                    className="mt-3 w-full rounded-2xl border border-border bg-background px-4 py-3 font-inter text-base text-primary shadow-[inset_0_1px_4px_rgba(15,23,42,0.08)] focus:border-accent focus:outline-none"
                                    required
                                />
                            </div>
                            {status && (
                                <p
                                    className={`text-sm font-inter ${
                                        status.type === "error"
                                            ? "text-red-500"
                                            : "text-emerald-500"
                                    }`}
                                >
                                    {status.message}
                                </p>
                            )}
                            <button
                                type="submit"
                                className="w-full rounded-2xl border border-border bg-accent px-6 py-3 font-jetbrains text-sm uppercase tracking-[0.3em] text-white transition hover:bg-accent/90"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <footer className="px-6 py-24 flex flex-col gap-2 border-t border-border pt-8 text-sm text-secondary items-center justify-between">
                <p className="w-full text-center">
                    © {new Date().getFullYear()} Harry. All rights reserved.
                </p>
                <p className="w-full text-center">
                    Built using React and Tailwind CSS.
                </p>
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
            className="text-sm font-jetbrains uppercase tracking-[0.3em] text-secondary"
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
            className="mt-3 w-full rounded-2xl border border-border bg-background px-4 py-3 font-inter text-base text-primary shadow-[inset_0_1px_4px_rgba(15,23,42,0.08)] focus:border-accent focus:outline-none"
        />
    </div>
);

const ContactInfo = ({ icon, label, value, href }) => (
    <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-background text-primary">
            {icon}
        </div>
        <div>
            <p className="text-sm font-jetbrains uppercase tracking-[0.3em] text-secondary">
                {label}
            </p>
            {href ? (
                <a
                    href={href}
                    target="_blank"
                    className="mt-1 inline-flex items-center text-lg font-jetbrains text-primary hover:text-accent"
                >
                    {value}
                </a>
            ) : (
                <p className="mt-1 text-lg font-jetbrains text-primary">
                    {value}
                </p>
            )}
        </div>
    </div>
);

export default Contact;
