import Link from "next/link";

export default function Home() {
    return (
        <div className="flex pt-16 justify-center items-center bg-primary-cream">
            <div className="w-full max-w-md p-6 border-4 border-primary-navy-dark rounded-lg">
                <h2 className="text-primary-navy-dark font-sans text-2xl mb-4">Hi! I&apos;m Reilly.</h2>
                <p className="italic text-primary-navy-dark text-lg">
                    This site is under construction. But while you&apos;re here checkout some of my <Link className="font-semibold underline" href="/blog">blogs</Link>
                </p>
            </div>
        </div>
    );
}
