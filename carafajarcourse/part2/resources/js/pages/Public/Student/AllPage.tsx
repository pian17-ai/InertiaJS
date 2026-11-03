import PublicLayout from "@/layouts/PublicLayout";
import { AllStudentProps, Student } from "@/types/student";
import { Head, Link, router } from "@inertiajs/react";

function goToAddUser() {
    router.get("/users/add");
}

function AllPage({ students }: AllStudentProps) {
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
                <h1 className="mb-2 text-2xl font-bold">Student</h1>
                <button
                    onClick={goToAddUser}
                    className="px-2 py-1 rounded-xl bg-slate-400 text-black font-bold"
                >
                    Add Student
                </button>
                <div className="py-2 mt-2">
                    {students.map((student: Student) => (
                        <div className="p-4 mt-2 rounded-xl bg-gray-800">
                            <h1
                                key={student.id}
                                className="text-xl font-bold mb-2"
                            >
                                {student.name}
                            </h1>
                            <h3>NIM : {student.nim}</h3>
                            <h3>Email : {student.email}</h3>
                            <h3>Major : {student.major}</h3>
                            <h3>Faculty : {student.faculty}</h3>
                            <h3> University : {student.university}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default AllPage;
