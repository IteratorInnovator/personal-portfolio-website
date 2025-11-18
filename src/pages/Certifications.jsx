import Header from "../components/Header";
import Footer from "../components/Footer";
import { certifications } from "../utils/constants";
import EmblaCarousel from "../components/ui/embla-carousel";

const Certifications = () => {
    const OPTIONS = { loop: true };

    return (
        <div>
            <Header />
            <section className="mx-auto max-w-5xl px-4 sm:px-6 pt-24 sm:pt-28 text-primary ">
                <div className="flex flex-col gap-4 text-left md:flex-row md:items-end md:justify-between">
                    <div className="max-md:text-center">
                        <p className="text-xs font-jetbrains uppercase tracking-[0.4em] text-secondary sm:text-sm">
                            Proof
                        </p>
                        <h3 className="mt-1 text-3xl font-jetbrains font-semibold text-primary sm:text-4xl md:text-5xl">
                            Certifications
                        </h3>
                        <p className="mt-2 font-inter text-sm text-secondary sm:text-base md:text-lg">
                            Drag the carousel to skim through the credentials I
                            rely on most.
                        </p>
                    </div>
                    <span className="text-center text-xs font-jetbrains uppercase tracking-[0.4em] text-secondary md:text-sm">
                        {certifications.length} credentials
                    </span>
                </div>

                <div className="mt-12 sm:mt-16">
                    <EmblaCarousel slides={certifications} OPTIONS={OPTIONS} />
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Certifications;
