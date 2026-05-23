import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { posts } from "@/.velite";
import { Icons } from "@/components/icons";

const DEFAULT_HERO_IMAGE = "/blog/default-hero-image.JPG";

export default function Home() {
    const latestPosts = posts
        .filter((post) => post.published)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 3);
    const [featuredPost, ...secondaryPosts] = latestPosts;

    return (
        <div className="px-4 py-8 md:py-7">
            <section className="border-b border-primary-navy-dark/15 pb-4 md:pb-5">
                <div className="grid items-start gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(14rem,18rem)] xl:grid-cols-[minmax(0,1fr)_19rem] xl:gap-12">
                    <div className="min-w-0">
                        <div>
                            <p className="mb-3 text-sm font-semibold text-red-secondary">
                                Software engineer in Wellington, NZ
                            </p>
                            <h1 className="text-4xl font-bold leading-tight md:text-5xl xl:text-[3.35rem]">
                                Backend and full-stack engineer building reliable platform and product systems.
                            </h1>
                        </div>

                        <div className="mt-6 max-w-2xl">
                            <p className="text-base leading-7 text-primary-navy-dark/80 md:text-lg md:leading-8">
                                I&apos;m Reilly Oldham. I work across backend systems, observability, developer tooling,
                                and product interfaces, with a focus on software that is reliable, debuggable, and easy
                                to operate.
                            </p>
                        </div>
                    </div>

                    <div className="mx-auto w-52 shrink-0 md:w-72 lg:ml-auto lg:mr-0 lg:w-full">
                        <Image
                            src="/Reilly-square.jpg"
                            alt="Reilly with blue background"
                            width={400}
                            height={400}
                            sizes="(min-width: 1280px) 304px, (min-width: 1024px) 288px, (min-width: 768px) 288px, 208px"
                            className="aspect-square w-full rounded-lg border border-primary-navy-dark/15 object-cover shadow-[0_16px_40px_rgba(0,26,77,0.14)]"
                            priority
                        />
                    </div>
                </div>
            </section>

            <section className="py-4 md:py-5">
                <div className="mb-3 flex flex-wrap items-end justify-between gap-4">
                    <div>
                        <h2 className="text-2xl font-bold md:text-3xl">Latest from me</h2>
                    </div>
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 rounded-md bg-primary-navy-dark px-4 py-3 text-sm font-semibold text-primary-cream transition hover:bg-primary-navy-dark/90"
                    >
                        Read all writing
                        <Icons.ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                </div>

                {featuredPost ? (
                    <div className="overflow-hidden rounded-lg border border-primary-navy-dark/10 bg-primary-cream shadow-[0_12px_28px_rgba(0,26,77,0.08)]">
                        <div className="grid lg:grid-cols-[minmax(0,1.35fr)_minmax(17rem,0.85fr)]">
                            <Link
                                href={`/${featuredPost.slug}`}
                                className="group grid transition hover:bg-primary-navy-dark/[0.03] lg:grid-cols-[minmax(13rem,1fr)_minmax(0,2fr)]"
                            >
                                <div className="relative h-40 overflow-hidden bg-primary-navy-dark sm:h-44 lg:order-last lg:h-full lg:min-h-64">
                                    <Image
                                        src={featuredPost.hero || DEFAULT_HERO_IMAGE}
                                        alt={featuredPost.title}
                                        fill
                                        sizes="(min-width: 1024px) 38vw, 100vw"
                                        placeholder={featuredPost.blurDataURL ? "blur" : "empty"}
                                        blurDataURL={featuredPost.blurDataURL}
                                        className="object-cover transition duration-500 group-hover:scale-[1.03]"
                                    />
                                </div>
                                <div className="p-5 md:p-6 lg:order-first">
                                    <h3 className="text-2xl font-bold leading-tight">
                                        {featuredPost.title}
                                    </h3>
                                    <p className="mt-3 max-w-2xl text-sm leading-6 text-primary-navy-dark/75">
                                        {featuredPost.shortDescription}
                                    </p>
                                    <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-primary-navy-dark/70">
                                        <span>{format(new Date(featuredPost.date), "MMMM d, yyyy")}</span>
                                        {featuredPost.tags?.slice(0, 2).map((tag) => (
                                            <span key={tag} className="font-semibold text-primary-navy-dark">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold underline-offset-4 group-hover:underline">
                                        Read latest post
                                        <Icons.ArrowRight
                                            className="h-4 w-4 transition group-hover:translate-x-0.5"
                                            aria-hidden="true"
                                        />
                                    </span>
                                </div>
                            </Link>

                            {secondaryPosts.length > 0 ? (
                                <div className="border-t border-primary-navy-dark/10 lg:border-l lg:border-t-0">
                                    {secondaryPosts.map((post) => (
                                        <Link
                                            key={post.slug}
                                            href={`/${post.slug}`}
                                            className="group block border-b border-primary-navy-dark/10 p-5 transition last:border-b-0 hover:bg-primary-navy-dark/[0.03] md:p-6"
                                        >
                                            <p className="text-sm text-primary-navy-dark/65">
                                                {format(new Date(post.date), "MMMM d, yyyy")}
                                            </p>
                                            <h3 className="mt-2 text-lg font-semibold leading-snug">{post.title}</h3>
                                            <p className="mt-3 text-sm leading-6 text-primary-navy-dark/75">
                                                {post.shortDescription}
                                            </p>
                                            <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold underline-offset-4 group-hover:underline">
                                                Read post
                                                <Icons.ArrowRight
                                                    className="h-4 w-4 transition group-hover:translate-x-0.5"
                                                    aria-hidden="true"
                                                />
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            ) : null}
                        </div>
                    </div>
                ) : null}
            </section>
        </div>
    );
}
