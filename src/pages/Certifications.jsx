const Certifications = () => {
    return (
        <div>test</div>
    )
}

export default Certifications;

{/* <div className="mx-auto mt-16 max-w-6xl">
                <div className="flex flex-col gap-3 text-left md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="text-sm font-jetbrains uppercase tracking-[0.4em] text-secondary">
                            Proof
                        </p>
                        <h3 className="mt-1 text-3xl font-jetbrains font-semibold text-primary md:text-4xl">
                            Certifications
                        </h3>
                        <p className="mt-2 font-inter text-base text-secondary">
                            Drag the carousel to skim through the credentials I rely on most.
                        </p>
                    </div>
                    <span className="text-sm font-jetbrains uppercase tracking-[0.4em] text-secondary">
                        {certifications.length} credentials
                    </span>
                </div>

                <div
                    ref={viewportRef}
                    className="relative mt-10 overflow-hidden rounded-3xl border border-border/80 bg-surface/40 p-6"
                >
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background via-background/80 to-transparent"
                    />
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background via-background/80 to-transparent"
                    />
                    <motion.div
                        ref={trackRef}
                        drag="x"
                        dragConstraints={{ left: -dragWidth, right: 0 }}
                        dragElastic={0.08}
                        whileTap={{ cursor: "grabbing" }}
                        className="flex w-max cursor-grab gap-6"
                    >
                        {certifications.map(
                            ({ title, issuer, issued, thumbnail, credentialUrl }) => (
                                <motion.article
                                    key={title}
                                    whileHover={{ y: -8 }}
                                    className="group min-w-[260px] max-w-[260px] rounded-2xl border border-border/60 bg-background/95 shadow-[0_20px_45px_rgba(15,23,42,0.09)] dark:bg-background/60"
                                >
                                    <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl bg-surface">
                                        <img
                                            src={thumbnail}
                                            alt={`${title} certificate thumbnail`}
                                            loading="lazy"
                                            draggable="false"
                                            className="h-full w-full object-cover"
                                        />
                                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                    </div>
                                    <div className="p-5">
                                        <span className="text-xs font-jetbrains uppercase tracking-[0.4em] text-secondary">
                                            {issuer}
                                        </span>
                                        <h4 className="mt-3 text-lg font-jetbrains font-semibold text-primary">
                                            {title}
                                        </h4>
                                        <p className="mt-1 font-inter text-sm text-secondary">
                                            Issued {issued}
                                        </p>
                                        {credentialUrl && (
                                            <a
                                                href={credentialUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
                                            >
                                                View Credential
                                                <span aria-hidden="true">→</span>
                                            </a>
                                        )}
                                    </div>
                                </motion.article>
                            )
                        )}
                    </motion.div>
                </div> */}