import { posts } from "#site/content";

export default function BlogPage() {
    const displayPosts = posts;

    return (
        <div>
            {displayPosts?.length > 0 ? (
                displayPosts.map((post) => (
                    <div key={post.slug}>
                        <h2>{post.title}</h2>
                        <p>{post.description}</p>
                        <p>{post.slugAsParams}</p>
                    </div>
                ))
            ) : (
                <p>I do not have posts</p>
            )}
        </div>
    );
}
