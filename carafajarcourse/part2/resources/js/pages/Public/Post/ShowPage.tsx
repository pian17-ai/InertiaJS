import { PostProps } from "@/types/post";
import { Head, router } from "@inertiajs/react";

function ShowPage({ post }: PostProps) {
    function backToAll() {
        router.get("/posts");
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
                <div className="py-2 mt-2">
                    <div
                        key={post.id}
                        className="p-4 mt-2 rounded-xl bg-gray-800"
                    >
                        <div className="w-full">
                            <img src={`/storage/${post.img}`} alt="" />
                        </div>
                        <h1 className="text-3xl font-bold mt-2">
                            {post.title}
                        </h1>
                        <p>{post.description}</p>
                        <button
                            onClick={backToAll}
                            className="px-2 py-1 mt-2 rounded-xl bg-slate-400 text-black font-bold"
                        >
                            Back
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ShowPage;
