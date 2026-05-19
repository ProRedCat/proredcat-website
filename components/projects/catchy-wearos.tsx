import Link from "next/link";
import {format} from "date-fns";
import Image from "next/image";

export default function CatchyWearOSProject() {
    const tags = ["Wear OS", "Kotlin", "Android", "TWA", "Data Layer", "Catchy"];
    const releaseDate = new Date(2026, 4, 20);

    return (
        <div className="flex flex-col w-full h-[480px] shadow-lg rounded-b-3xl">
            <div className="relative w-full h-52 bg-[#001B2E]">
                <Image
                    src="/blog/catchy-wearos-wearable-data-layer/catchy-wearos-hero.png"
                    alt="Catchy Wear OS companion app hero image"
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                />
            </div>

            <div className="p-5 pt-4 flex flex-col flex-grow">
                <div className="mb-2">
                    <Link href="/blog/catchy-wearos-wearable-data-layer"
                          className="text-xl font-semibold line-clamp-2 block">
                        Catchy for Wear OS
                    </Link>
                    <p className="text-sm opacity-70">
                        Launched: {format(releaseDate, 'MMMM d, yyyy')}
                    </p>
                </div>

                <hr/>

                <p className="mb-4 flex-grow line-clamp-3 pt-2">
                    A Wear OS companion app for Catchy that brings Wellington public transport arrivals, saved stops,
                    live timing, cancellations, bus replacements, and Android app filters straight to your wrist.
                </p>

                <div className="mt-auto">
                    {tags?.map((tag) => (
                        <span
                            key={tag}
                            className="inline-flex px-2 py-1 bg-red-secondary text-primary-cream text-sm rounded-[10px] mr-2 mb-2"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex gap-4 mt-2">
                    <Link href="https://catchy.nz/"
                          className="text-sm underline">
                        Catchy
                    </Link>
                    <Link href="/blog/catchy-wearos-wearable-data-layer"
                          className="text-sm underline">
                        Blog Post
                    </Link>
                </div>
            </div>
        </div>
    );
}
