import Link from 'next/link'
import { format } from 'date-fns'
import Image from 'next/image'
import { Icons } from "@/components/icons";
import { Post } from "@/.velite";

export default function BlogPreview({ posts }: { posts: Post[] }) {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Latest Blog Posts</h1>
            {posts?.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <Link key={post.slug} href={`/${post.slug}`} className="block group">
                            <div className="border-primary-navy-dark border-2 rounded-md p-4 flex flex-col transition-transform duration-300 group-hover:shadow-lg">
                                <div className="mb-4">
                                    <Image
                                        src={"/blog/alexa-skill-announcement-wellington-transport/hero-2.png"}
                                        alt={post.title}
                                        width={512}
                                        height={512}
                                        className="w-full h-64 object-cover rounded-md"
                                    />
                                </div>

                                <div className="mb-4">
                                    <h2 className="text-xl font-semibold mb-2 group-hover:underline transition-all">{post.title}</h2>
                                    <p className="text-sm opacity-70">
                                        {format(new Date(post.date), 'MMMM d, yyyy')}
                                    </p>
                                </div>
                                <p className="mb-4 flex-grow">{post.short_description}</p>
                                <div className="inline-block ml-auto">
                                    <span className="inline-flex px-4 py-2 bg-red-secondary text-primary-cream hover:bg-opacity-90 transition-colors items-center space-x-2">
                                        <span>Read More</span>
                                        <Icons.ArrowDiagUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            ) : (
                <div className="border border-primary-navy-dark p-8 text-center">
                    <p>No blog posts available at the moment.</p>
                </div>
            )}
        </div>
    )
}
