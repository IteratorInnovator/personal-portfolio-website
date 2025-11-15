import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronRight, ChevronLeft, Link } from "lucide-react";

import { useCallback, useEffect, useState } from "react";

const usePrevNextButtons = (emblaApi) => {
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

    const onPrevButtonClick = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollPrev();
    }, [emblaApi]);

    const onNextButtonClick = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollNext();
    }, [emblaApi]);

    const onSelect = useCallback((emblaApi) => {
        setPrevBtnDisabled(!emblaApi.canScrollPrev());
        setNextBtnDisabled(!emblaApi.canScrollNext());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        onSelect(emblaApi);
        emblaApi.on("reInit", onSelect).on("select", onSelect);
    }, [emblaApi, onSelect]);

    return {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    };
};

export const PrevButton = (props) => {
    const { children, ...restProps } = props;

    return (
        <button
            className="embla__button embla__button--prev"
            type="button"
            {...restProps}
        >
            <ChevronLeft className="text-secondary" />
            {children}
        </button>
    );
};

export const NextButton = (props) => {
    const { children, ...restProps } = props;

    return (
        <button
            className="embla__button embla__button--next"
            type="button"
            {...restProps}
        >
            <ChevronRight className="text-secondary" />
            {children}
        </button>
    );
};

const useDotButton = (emblaApi) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);

    const onDotButtonClick = useCallback(
        (index) => {
            if (!emblaApi) return;
            emblaApi.scrollTo(index);
        },
        [emblaApi]
    );

    const onInit = useCallback((emblaApi) => {
        setScrollSnaps(emblaApi.scrollSnapList());
    }, []);

    const onSelect = useCallback((emblaApi) => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        onInit(emblaApi);
        onSelect(emblaApi);
        emblaApi
            .on("reInit", onInit)
            .on("reInit", onSelect)
            .on("select", onSelect);
    }, [emblaApi, onInit, onSelect]);

    return {
        selectedIndex,
        scrollSnaps,
        onDotButtonClick,
    };
};

export const DotButton = (props) => {
    const { children, ...restProps } = props;

    return (
        <button type="button" {...restProps}>
            {children}
        </button>
    );
};

const EmblaCarousel = (props) => {
    const { slides, options, OPTIONS } = props;
    const emblaOptions = options ?? OPTIONS;
    const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions);

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi);

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);

    return (
        <section className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((slide) => {
                        const {
                            name,
                            title,
                            issuer,
                            issued,
                            issueDate,
                            thumbnail,
                            credentialUrl,
                        } = slide;
                        const certificateTitle =
                            name ?? title ?? "Certification";
                        const issuedLabel = issued ?? issueDate ?? "—";
                        return (
                            <div
                                className="embla__slide"
                                key={`${certificateTitle}-${issuer}`}
                            >
                                <article className="cursor-grab group relative mx-auto flex h-full w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-border/70 bg-surface/85 p-0 shadow-[0_20px_50px_rgba(15,23,42,0.12)] backdrop-blur md:flex-row">
                                    <div
                                        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent-hover/15 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                        aria-hidden="true"
                                    />
                                    <figure className="relative h-48 w-full overflow-hidden border-b border-border/60 bg-background/60 md:h-auto md:w-2/5 md:border-b-0 md:border-r">
                                        {thumbnail ? (
                                            <img
                                                src={thumbnail}
                                                alt={`${certificateTitle} certificate thumbnail`}
                                                loading="lazy"
                                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                                            />
                                        ) : (
                                            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-border/40 via-transparent to-border/40 p-6 text-center text-base font-jetbrains text-secondary">
                                                {certificateTitle}
                                            </div>
                                        )}
                                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/35" />
                                    </figure>
                                    <div className="relative flex flex-1 flex-col gap-4 p-5 md:p-6">
                                        <div className="flex flex-wrap items-center justify-between gap-4 text-xs md:text-sm">
                                            <div>
                                                <span className="font-jetbrains uppercase tracking-[0.4em] text-secondary">
                                                    {issuer}
                                                </span>
                                                <p className="mt-1 font-inter text-[0.7rem] text-secondary/80 md:text-xs">
                                                    Issued {issuedLabel}
                                                </p>
                                            </div>
                                            <span className="rounded-full border border-border/60 px-3 py-1 text-[0.6rem] font-jetbrains uppercase tracking-[0.3em] text-secondary/80 md:text-[0.7rem]">
                                                Verified
                                            </span>
                                        </div>
                                        <h4 className="relative text-xl font-jetbrains font-semibold text-primary md:text-2xl">
                                            {certificateTitle}
                                        </h4>
                                        <p className="font-inter text-xs text-secondary md:text-sm">
                                            Issued by{" "}
                                            <span className="font-semibold text-primary">
                                                {issuer}
                                            </span>
                                            .
                                        </p>
                                        {credentialUrl && (
                                            <a
                                                href={credentialUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="relative mt-auto inline-flex items-center gap-2 self-start rounded-xl border border-accent/40 px-4 py-2 text-sm font-semibold text-accent transition-all hover:bg-accent/10 hover:text-accent-hover"
                                            >
                                                View credential
                                                <Link className="size-5"/>
                                            </a>
                                        )}
                                        <div className="pointer-events-none relative mt-4 h-px w-full bg-gradient-to-r from-transparent via-border/70 to-transparent" />
                                    </div>
                                </article>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="embla__controls">
                <div className="embla__buttons">
                    <PrevButton
                        onClick={onPrevButtonClick}
                        disabled={prevBtnDisabled}
                    />
                </div>
                <div className="embla__dots">
                    {scrollSnaps.map((_, index) => {
                        const label = index + 1;
                        return (
                            <DotButton
                                key={label}
                                onClick={() => onDotButtonClick(index)}
                                className={"embla__dot".concat(
                                    index === selectedIndex
                                        ? " embla__dot--selected"
                                        : ""
                                )}
                                aria-label={`Go to slide ${label}`}
                            >
                                {label}
                            </DotButton>
                        );
                    })}
                </div>
                <div className="embla__buttons">
                    <NextButton
                        onClick={onNextButtonClick}
                        disabled={nextBtnDisabled}
                    />
                </div>
            </div>
        </section>
    );
};

export default EmblaCarousel;
