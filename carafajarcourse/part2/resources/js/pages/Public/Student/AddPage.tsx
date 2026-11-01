import { Form, Head, Link, router, useForm } from "@inertiajs/react";
import { ChangeEvent, FormEvent } from "react";

function backToAll() {
    router.get("/users");
}

function AddPage() {
    const { data, setData, post, errors, processing } = useForm({
        nim: "",
        name: "",
        email: "",
        password: "",
        major: "",
        faculty: "",
        university: "",
    });

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post("/users");
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
                        <label htmlFor="nim">Nim</label>
                        {errors.nim && (
                            <div className="px-2 py-1 my-1 rounded-md bg-red-900 border-red-500 text-red-200">
                                {errors.nim}
                            </div>
                        )}
                        <input
                            id="nim"
                            className="border border-slate-500 mb-2 rounded-md p-1"
                            type="number"
                            name="nim"
                            value={data.nim}
                            onChange={(e) => setData("nim", e.target.value)}
                        />
                        <label htmlFor="name">Name</label>
                        {errors.name && (
                            <div className="px-2 py-1 my-1 rounded-md bg-red-900 border-red-500 text-red-200">
                                {errors.name}
                            </div>
                        )}
                        <input
                            id="name"
                            className="border border-slate-500 mb-2 rounded-md p-1"
                            type="text"
                            name="name"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                        />
                        <label htmlFor="email">Email</label>
                        {errors.email && (
                            <div className="px-2 py-1 my-1 rounded-md bg-red-900 border-red-500 text-red-200">
                                {errors.email}
                            </div>
                        )}
                        <input
                            id="email"
                            className="border border-slate-500 mb-2 rounded-md p-1"
                            type="email"
                            name="email"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                        />
                        <label htmlFor="password">Password</label>
                        {errors.password && (
                            <div className="px-2 py-1 my-1 rounded-md bg-red-900 border-red-500 text-red-200">
                                {errors.password}
                            </div>
                        )}
                        <input
                            id="password"
                            className="border border-slate-500 mb-2 rounded-md p-1"
                            type="password"
                            name="password"
                            value={data.password}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                        />
                        <label htmlFor="major">Major</label>
                        {errors.major && (
                            <div className="px-2 py-1 my-1 rounded-md bg-red-900 border-red-500 text-red-200">
                                {errors.major}
                            </div>
                        )}
                        <input
                            id="major"
                            className="border border-slate-500 mb-2 rounded-md p-1"
                            type="text"
                            name="major"
                            value={data.major}
                            onChange={(e) => setData("major", e.target.value)}
                        />
                        <label htmlFor="faculty">Faculty</label>
                        {errors.faculty && (
                            <div className="px-2 py-1 my-1 rounded-md bg-red-900 border-red-500 text-red-200">
                                {errors.faculty}
                            </div>
                        )}
                        <input
                            id="faculty"
                            className="border border-slate-500 mb-2 rounded-md p-1"
                            type="text"
                            name="faculty"
                            value={data.faculty}
                            onChange={(e) => setData("faculty", e.target.value)}
                        />
                        <label htmlFor="university">University</label>
                        {errors.university && (
                            <div className="px-2 py-1 my-1 rounded-md bg-red-900 border-red-500 text-red-200">
                                {errors.university}
                            </div>
                        )}
                        <input
                            id="university"
                            className="border border-slate-500 mb-2 rounded-md p-1"
                            type="text"
                            name="university"
                            value={data.university}
                            onChange={(e) =>
                                setData("university", e.target.value)
                            }
                        />
                        <button
                            disabled={processing}
                            className="px-2 py-1 mt-2 rounded-xl bg-slate-400 text-black font-bold"
                            type="submit"
                        >
                            Create User
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default AddPage;
