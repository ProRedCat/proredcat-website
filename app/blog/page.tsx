'use client'

import BlogPreview from "@/components/blog-preview";
import {posts} from "@/.velite";
import {useState} from "react";

export default function BlogPage() {
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const toggleTag = (tag: string) => {
        setSelectedTags(prev =>
            prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
        );
    };

    const filteredPosts = selectedTags.length > 0
        ? posts.filter(post => post.tags?.some(tag => selectedTags.includes(tag)))
        : posts;

    return (
        <div>
            <BlogPreview posts={filteredPosts} onTagClick={toggleTag} selectedTags={selectedTags}/>
        </div>
    );
}
