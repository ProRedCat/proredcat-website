import Link from "next/link";
import {format} from "date-fns";
import Image from "next/image";

export default function AlexaTransportProject() {
    const tags = ["Alexa ASK", "TypeScript", "AWS", "Lambda", "Vite"];
    const releaseDate = new Date(2024, 9, 10);

    return (
        <div className="flex flex-col w-full h-[480px] shadow-lg rounded-b-3xl">
            <div className="relative w-full h-52">
                <Image
                    src="/blog/alexa-skill-announcement-wellington-transport/hero.webp"
                    alt="Alexa Skill hero image"
                    fill
                    className="object-cover rounded-t-lg"
                    priority={true}
                />
            </div>
            
            <div className="p-5 pt-4 flex flex-col flex-grow">
                <div className="mb-2">
                    <Link href="/blog/alexa-skill-announcement-wellington-transport"
                          className="text-xl font-semibold line-clamp-2 block">
                        Wellington Public Transport: Alexa Skill
                    </Link>
                    <p className="text-sm opacity-70">
                        Launched: {format(releaseDate, 'MMMM d, yyyy')}
                    </p>
                </div>

                <hr/>

                <p className="mb-4 flex-grow line-clamp-3 pt-2">
                    An Alexa Skill for Wellington&apos;s Metlink transport, offering real-time bus and train schedules.
                    Designed with hands-free convenience in mind, it&apos;s perfect for busy mornings when checking your
                    phone isn&apos;t ideal.
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
                    <Link href="https://www.amazon.com.au/dp/B0D2DN6DX9/" 
                          className="text-sm underline">
                        Alexa Skill Store
                    </Link>
                    <Link href="/blog/alexa-skill-announcement-wellington-transport"
                          className="text-sm underline">
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    );
}