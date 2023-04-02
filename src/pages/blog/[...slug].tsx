import { useRouter } from "next/router"


const BlogPostsPage = () => {

    const router = useRouter();

    console.log(router.pathname)
    console.log(router.query)
    
    return (
        <div className="bg-blue-700 text-white">
            <h1>The Blog Posts</h1>
        </div>
    )
}

export default BlogPostsPage