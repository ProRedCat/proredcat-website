import Link from 'next/link'
import {format} from 'date-fns'
import Image from 'next/image'
import {Icons} from "@/components/icons";
import {Post} from "@/.velite";

export default function BlogPreview({posts}: { posts: Post[] }) {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Latest Blog Posts</h1>
            {posts?.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <Link key={post.slug} href={`/${post.slug}`} className="block group">
                            <div
                                className="flex flex-col transition-transform duration-300 group-hover:shadow-2xl shadow-lg rounded-b-3xl">
                                <Image
                                    src={"/blog/alexa-skill-announcement-wellington-transport/hero-2.png"}
                                    alt={post.title}
                                    width={512}
                                    height={512}
                                    className="w-full h-64 object-cover rounded-t-lg"
                                />


                                <div className="p-5 pt-4">
                                    <div className="mb-4">
                                        <h2 className="text-xl font-semibold mb-2 group-hover:underline transition-all">{post.title}</h2>
                                        <p className="text-sm opacity-70">
                                            {format(new Date(post.date), 'MMMM d, yyyy')}
                                        </p>
                                    </div>
                                    <p className="mb-4 flex-grow">{post.short_description}</p>
                                    <div>
                                        {post.tags?.map((tag) => (
                                            <span key={tag}
                                                  className="inline-flex px-2 py-1 bg-red-secondary text-sm text-primary-cream hover:bg-opacity-90 transition-colors items-center space-x-2 rounded-[10px] mr-2">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
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
