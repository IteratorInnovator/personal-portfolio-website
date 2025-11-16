import Header from "../components/Header";
import Footer from "../components/Footer";
import { certifications } from "../utils/constants";
import EmblaCarousel from "../components/ui/embla-carousel";

const Certifications = () => {
    const OPTIONS = { loop: true };

    return (
        <div>
            <Header />
            <section className="mx-auto px-6 pt-24 max-w-4xl">
                <div className="flex flex-col gap-3 text-left md:flex-row md:items-end md:justify-between">
                    <div className="max-md:text-center">
                        <p className="text-sm font-jetbrains uppercase tracking-[0.4em] text-secondary">
                            Proof
                        </p>
                        <h3 className="mt-1 text-3xl font-jetbrains font-semibold text-primary md:text-4xl">
                            Certifications
                        </h3>
                        <p className="mt-2 font-inter text-base text-secondary">
                            Drag the carousel to skim through the credentials I
                            rely on most.
                        </p>
                    </div>
                    <span className="max-md:hidden text-sm font-jetbrains uppercase tracking-[0.4em] text-secondary">
                        {certifications.length} credentials
                    </span>
                </div>

                <div className="mt-16">
                    <EmblaCarousel slides={certifications} OPTIONS={OPTIONS} />
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Certifications;
