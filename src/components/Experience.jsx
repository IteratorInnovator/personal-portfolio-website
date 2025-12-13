import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp, MapPin, X } from "lucide-react";
import { experienceTimeline } from "../utils/constants";

const statusStyles = {
    ongoing:
        "border-emerald-300 bg-emerald-50 text-emerald-700 dark:border-emerald-500/40 dark:bg-emerald-500/10 dark:text-emerald-200",
    completed:
        "border-sky-300 bg-sky-50 text-sky-700 dark:border-sky-500/40 dark:bg-sky-500/10 dark:text-sky-200",
};

const statusLabel = {
    ongoing: "In Progress",
    completed: "Completed",
};

const useCollapsibleHeight = (isOpen, dependencyKey) => {
    const ref = useRef(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (isOpen && ref.current) {
            setHeight(1000);
        } else {
            setHeight(0);
        }
    }, [isOpen, dependencyKey]);

    useEffect(() => {
        if (!isOpen) return;

        const handleResize = () => {
            if (ref.current) {
                setHeight(1000);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isOpen]);

    return [ref, height];
};

const Experience = () => {
    const [modalImage, setModalImage] = useState(null);

    const handleImageClick = (image) => {
        setModalImage(image);
    };

    const handleCloseModal = () => setModalImage(null);

    return (
        <>
            <div className="w-full space-y-4">
                {experienceTimeline.map((item) => (
                    <ExperienceEntry
                        key={`${item.title}-${item.period}`}
                        item={item}
                        onImageClick={handleImageClick}
                    />
                ))}
            </div>
            {modalImage && (
                <ImageModal image={modalImage} onClose={handleCloseModal} />
            )}
        </>
    );
};

const ExperienceEntry = ({ item, onImageClick }) => {
    const {
        title,
        place,
        period,
        location,
        status,
        description,
        responsibilities,
        technologies,
        images,
    } = item;
    const badgeClass =
        statusStyles[status] ?? "border-border bg-background/70 text-primary";
    const badgeText = statusLabel[status] ?? status;
    const hasResponsibilities =
        Array.isArray(responsibilities) && responsibilities.length > 0;
    const [showResponsibilities, setShowResponsibilities] = useState(false);
    const [responsibilitiesRef, responsibilitiesHeight] = useCollapsibleHeight(
        showResponsibilities,
        responsibilities?.length ?? 0
    );
    const imageList = Array.isArray(images) ? images : [];
    const [leftImage, rightImage] = imageList.length
        ? [imageList[0], imageList[1] ?? imageList[0]]
        : [null, null];
    const shouldShowImages = showResponsibilities && imageList.length > 0;

    const handlePreviewClick = (image) => {
        if (!image) return;
        onImageClick?.({
            ...image,
            title,
        });
    };

    return (
        <article className="relative space-y-5 overflow-visible rounded-2xl border border-border/70 bg-surface/60 p-6 text-left shadow-[0_20px_45px_rgba(15,23,42,0.08)] dark:bg-surface/30">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-8">
                <div className="flex w-full flex-col gap-3 md:w-60 md:shrink-0">
                    <span className="font-jetbrains text-xs uppercase tracking-[0.4em] text-secondary">
                        {period}
                    </span>
                    <div className="space-y-1">
                        <p className="font-jetbrains text-sm text-primary">
                            {place}
                        </p>
                        {location && (
                            <p className="flex items-center gap-2 font-inter text-sm text-secondary">
                                <MapPin
                                    className="h-4 w-4 text-primary"
                                    aria-hidden="true"
                                />
                                <span>{location}</span>
                            </p>
                        )}
                    </div>
                    <span
                        className={`w-fit rounded-full border px-3 py-1 text-[0.65rem] font-jetbrains uppercase tracking-[0.4em] ${badgeClass}`}
                    >
                        {badgeText}
                    </span>
                </div>
                <div className="flex-1 space-y-4">
                    <div>
                        <h3 className="text-xl font-jetbrains font-semibold text-primary">
                            {title}
                        </h3>
                        {Array.isArray(technologies) &&
                            technologies.length > 0 && (
                                <div className="mt-2 flex flex-wrap gap-2">
                                    {technologies.map((tech) => (
                                        <span
                                            key={`${title}-${tech}`}
                                            className="rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs font-jetbrains text-secondary"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            )}
                    </div>
                    <p className="font-inter text-base text-secondary">
                        {description}
                    </p>
                </div>
            </div>

            {shouldShowImages && leftImage && (
                <FloatingImagePreview
                    image={leftImage}
                    position="left"
                    isVisible={showResponsibilities}
                    onClick={() => handlePreviewClick(leftImage)}
                />
            )}
            {shouldShowImages && rightImage && (
                <FloatingImagePreview
                    image={rightImage}
                    position="right"
                    isVisible={showResponsibilities}
                    onClick={() => handlePreviewClick(rightImage)}
                />
            )}

            {hasResponsibilities && (
                <div className="border-t border-border/70 pt-4">
                    <button
                        type="button"
                        onClick={() => setShowResponsibilities((prev) => !prev)}
                        className="cursor-pointer flex w-full items-center justify-between text-left font-jetbrains text-xs uppercase tracking-[0.3em] text-primary"
                        aria-expanded={showResponsibilities}
                    >
                        <span>Key Contributions</span>
                        {showResponsibilities ? (
                            <ChevronUp className="h-4 w-4" aria-hidden="true" />
                        ) : (
                            <ChevronDown
                                className="h-4 w-4"
                                aria-hidden="true"
                            />
                        )}
                    </button>
                    <div
                        className="overflow-hidden transition-all duration-250"
                        style={{
                            maxHeight: `${responsibilitiesHeight}px`,
                            opacity: showResponsibilities ? 1 : 0,
                            transform: showResponsibilities
                                ? "translateY(0)"
                                : "translateY(-0.5rem)",
                        }}
                    >
                        <div ref={responsibilitiesRef}>
                            <div className="mt-3">
                                <ul className="space-y-2">
                                    {responsibilities.map((item, index) => (
                                        <li
                                            key={`${title}-resp-${index}`}
                                            className="flex gap-3 text-sm font-inter text-secondary"
                                        >
                                            <span className="text-primary">
                                                —
                                            </span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {shouldShowImages && (
                                <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:flex-wrap lg:hidden">
                                    {[leftImage, rightImage]
                                        .filter(Boolean)
                                        .map((image, index) => (
                                            <button
                                                key={`${title}-mobile-image-${index}`}
                                                type="button"
                                                onClick={() =>
                                                    handlePreviewClick(image)
                                                }
                                                aria-label={`Expand ${
                                                    image.alt ?? "experience"
                                                } photo`}
                                                className="flex-1 min-w-[220px] transition hover:-translate-y-1"
                                            >
                                                <ExperiencePreviewCard
                                                    image={image}
                                                    isVisible={showResponsibilities}
                                                />
                                            </button>
                                        ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </article>
    );
};

const FloatingImagePreview = ({ image, position, isVisible, onClick }) => {
    const alignmentClasses =
        position === "left"
            ? "lg:-left-10 lg:-translate-x-full"
            : "lg:-right-10 lg:translate-x-full";

    return (
        <button
            type="button"
            onClick={onClick}
            aria-label={`Expand ${image.alt ?? "experience"} photo`}
            className={`absolute top-1/2 hidden -translate-y-1/2 lg:flex ${alignmentClasses} z-10 transition-all duration-300 ${
                isVisible
                    ? "pointer-events-auto opacity-100"
                    : "pointer-events-none opacity-0"
            }`}
        >
            <ExperiencePreviewCard image={image} isVisible={isVisible} />
        </button>
    );
};

const ExperiencePreviewCard = ({ image, isVisible = true }) => (
    <figure
        className={`cursor-pointer lg:w-44 overflow-hidden rounded-2xl border border-border/80 lg:shadow-2xl transition-all duration-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
    >
        <img
            src={image.src}
            alt={image.alt ?? "Experience photo"}
            loading="lazy"
            className="h-28 w-full object-cover"
        />
        <figcaption className="bg-surface px-4 py-3 text-left text-xs font-jetbrains text-primary/80 leading-relaxed">
            {image.caption ?? image.alt ?? "Experience photo"}
        </figcaption>
    </figure>
);

const ImageModal = ({ image, onClose }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const raf = requestAnimationFrame(() => setIsVisible(true));
        return () => cancelAnimationFrame(raf);
    }, []);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-10"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
        >
            <div
                className={`relative w-full max-w-4xl overflow-hidden rounded-3xl bg-transparent transition-all duration-300 ${
                    isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
                }`}
                onClick={(event) => event.stopPropagation()}
            >
                <div className="aspect-video w-full">
                    <img
                        src={image.src}
                        alt={image.alt ?? image.caption ?? "Experience preview"}
                        loading="lazy"
                        className="h-full w-full object-cover"
                    />
                </div>
                {image.caption && (
                    <div className="px-6 py-4 text-center">
                        <p className="font-inter text-base text-white/80">
                            {image.caption}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Experience;
