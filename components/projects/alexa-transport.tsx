import Link from "next/link";
import {format} from "date-fns";
import Image from "next/image";

export default function AlexaTransportProject() {
    const tags = ["Alexa ASK", "TypeScript", "AWS", "Lambda", "Vite"];
    const releaseDate = new Date(2024, 9, 10);

    return (
        <div className="flex justify-center mt-4 w-full">
            <div className="sm:w-4/5 md:4/5 lg:w-2/5 shadow-2xl p-6 pb-2 rounded-xl h-fit">
                <div className="flex items-center justify-center">
                    <Link href="/blog/alexa-skill-announcement-wellington-transport"
                          className="text-2xl font-bold text-primary-navy-dark text-center underline">Wellington Public
                        Transport: Alexa Skill</Link>
                </div>

                <div className="flex flex-col items-center">

                    <div className="flex pt-2">
                        <p className="pr-2">Status:</p>
                        <div className="px-3 py-1 bg-primary-green-dark text-primary-cream text-sm rounded-lg">
                            Completed
                        </div>
                    </div>
                    <p className="text-sm text-gray-500">Launched: {format(releaseDate, 'MMMM d, yyyy')}</p>

                    <div className="flex gap-2">
                        <p>Links:</p>
                        <Link href="https://www.amazon.com.au/dp/B0D2DN6DX9/" className="underline">Alexa Skill
                            Store</Link>
                        <Link href="/blog/alexa-skill-announcement-wellington-transport"
                              className="underline">Blogpost</Link>
                    </div>

                </div>


                <hr className="mt-2"/>

                <div className="mt-4">
                    <div>
                        <p className="">
                            An Alexa Skill for Wellington's Metlink transport, offering real-time bus and train schedules.
                            Designed with hands-free convenience in mind, it's perfect for busy mornings when checking your
                            phone isn't ideal. The skill supports essential queries like "when is the next bus/train,"
                            "when is the last bus/train," and more. With accessibility in focus, it provides a great experience
                            for low-vision users. The project involved performance optimization due to hosting constraints in Alexa's
                            free tier, ensuring quick responses.
                        </p>
                    </div>
                    <Image
                        src="/blog/alexa-skill-announcement-wellington-transport/hero.webp"
                        alt="Alexa Skill hero image"
                        width={240}
                        height={240}
                        className="rounded-3xl pt-2 mx-auto w-80%"
                        priority={true}
                    />
                </div>


                <hr className="mt-2"/>

                <p className="text-center text-lg pt-2">Technologies</p>
                <div className="flex flex-wrap items-center justify-center pt-2">
                    {tags?.map((tag) => (
                        <span
                            key={tag}
                            className="inline-block px-3 py-1 bg-red-secondary text-primary-cream text-sm rounded-lg mr-2 mb-2 pt-1"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}