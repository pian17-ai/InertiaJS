import { AllPostProps, Post } from "@/types/post";
import { Head, Link, router } from "@inertiajs/react";

function AllPage({ posts }: AllPostProps) {
    function goToAddPost() {
        router.get("/posts/add");
    }

    return (
        <>
            <Head>
                <title>Posts</title>
                <meta
                    name="description"
                    content="All students from Faculty of Computer Science, Universitas Indonesia"
                />
            </Head>

            <div className="h-full w-full p-3">
                <h1 className="mb-2 text-2xl font-bold">Posts</h1>
                <button
                    onClick={goToAddPost}
                    className="px-2 py-1 rounded-xl bg-slate-400 text-black font-bold"
                >
                    Add Post
                </button>
                <div className="py-2 mt-2">
                    <div className="grid grid-cols-2 grid-rows-2 gap-2">
                        {posts.map((post: Post) => (
                            <div key={post.id} className="p-4 mt-2 rounded-xl bg-gray-800">
                                <div className="w-full">
                                    <img
                                        src={post.img}
                                        alt=""
                                    />
                                </div>
                                <h1 className="text-3xl font-bold mt-2">
                                    {post.title}
                                </h1>
                                <p className="mb-2">
                                    {post.description}
                                </p>
                                <Link href={"/posts/" + post.slug} className="bg-slate-300 text-slate-700 px-2 py-1 rounded-md">Read more</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default AllPage;
