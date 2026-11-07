import { PostForm } from "@/types/post";
import { Head, router, useForm } from "@inertiajs/react";
import { FormEvent } from "react";

function AddPage() {
    const { data, setData, post, errors, progress, processing } =
        useForm<PostForm>({
            title: "",
            description: "",
            img: null,
        });

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post("/posts");
    }

    function backToAll() {
        router.get("/posts");
    }

    return (
        <>
            <Head>
                <title>Students</title>
                <meta
                    name="description"
                    content="All students from Faculty of Computer Science, Universitas Indonesia"
                />
            </Head>

            <div className="h-full w-full p-3">
                <h1 className="mb-2 text-2xl font-bold">Add Student</h1>
                <button
                    onClick={backToAll}
                    className="px-2 py-1 rounded-xl bg-slate-400 text-black font-bold"
                >
                    Back
                </button>
                <div className="py-2 mt-2">
                    <form
                        className="flex flex-col px-16"
                        onSubmit={handleSubmit}
                    >
                        <label htmlFor="title">Title</label>
                        {errors.title && (
                            <div className="px-2 py-1 my-1 rounded-md bg-red-900 border-red-500 text-red-200">
                                {errors.title}
                            </div>
                        )}
                        <input
                            id="title"
                            className="border border-slate-500 mb-2 rounded-md p-1"
                            type="text"
                            name="title"
                            value={data.title}
                            onChange={(e) => setData("title", e.target.value)}
                        />
                        <label htmlFor="description">Description</label>
                        {errors.description && (
                            <div className="px-2 py-1 my-1 rounded-md bg-red-900 border-red-500 text-red-200">
                                {errors.description}
                            </div>
                        )}
                        <input
                            id="name"
                            className="border border-slate-500 mb-2 rounded-md p-1"
                            type="text"
                            name="name"
                            value={data.description}
                            onChange={(e) =>
                                setData("description", e.target.value)
                            }
                        />
                        <label htmlFor="img">Image</label>
                        {errors.img && (
                            <div className="px-2 py-1 my-1 rounded-md bg-red-900 border-red-500 text-red-200">
                                {errors.img}
                            </div>
                        )}
                        <input
                            type="file"
                            onChange={(e) => {
                                const file = e.target.files?.[0];

                                if (file) {
                                    setData("img", file);
                                }
                            }}
                        />
                        {progress && (
                            <progress value={progress.percentage} max="100">
                                {progress.percentage}%
                            </progress>
                        )}
                        <button
                            disabled={processing}
                            className="px-2 py-1 mt-2 rounded-xl bg-slate-400 text-black font-bold"
                            type="submit"
                        >
                            Add Post
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default AddPage;
