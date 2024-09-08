import Image from 'next/image';
import BlogPreview from "@/components/blog-preview";
import {posts} from "@/.velite";

export default function BlogPage() {
    return (
        <div className="flex justify-center items-center w-full">
            <BlogPreview posts={posts} />
        </div>
    );
}
