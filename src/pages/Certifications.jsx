import { motion } from "motion/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { certifications } from "../utils/constants";
import EmblaCarousel from "../components/ui/embla-carousel";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

const Certifications = () => {
    const OPTIONS = { loop: true };

    return (
        <div>
            <Header />
            <section className="mx-auto max-w-5xl px-4 sm:px-6 pt-24 sm:pt-28 text-primary ">
                <motion.div
                    className="flex flex-col gap-4 text-left md:flex-row md:items-end md:justify-between"
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    transition={{ duration: 0.5 }}
                >
                    <div className="max-md:text-center">
                        <p className="text-xs font-jetbrains uppercase tracking-[0.4em] text-secondary sm:text-sm">
                            Proof
                        </p>
                        <h3 className="mt-1 text-3xl font-jetbrains font-semibold text-primary sm:text-4xl md:text-5xl">
                            Certifications
                        </h3>
                        <p className="mt-2 font-inter text-sm text-secondary sm:text-base md:text-lg">
                            Drag the carousel to skim through my credentials.
                        </p>
                    </div>
                    <span className="text-center text-xs font-jetbrains uppercase tracking-[0.4em] text-secondary md:text-sm">
                        {certifications.length} credentials
                    </span>
                </motion.div>

                <motion.div
                    className="mt-12 sm:mt-16"
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <EmblaCarousel slides={certifications} OPTIONS={OPTIONS} />
                </motion.div>
            </section>
            <Footer />
        </div>
    );
};

export default Certifications;
