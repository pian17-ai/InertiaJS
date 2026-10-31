import PublicLayout from "@/layouts/PublicLayout";
import { AllStudentProps } from "@/types/student/allpage";
import { Head } from "@inertiajs/react";

function AllPage({ student }: AllStudentProps) {
    return (
        <>
            <Head>
                <title>Students</title>
            </Head>

            <div className="h-full w-full p-3">
                <div className="p-4 rounded-xl bg-gray-800">
                    <h1 className="text-xl font-bold mb-2">Students Page</h1>
                    <h3>NIM : {student.nim}</h3>
                    <h3>Name : {student.name}</h3>
                    <h3>Major : {student.major}</h3>
                    <h3>Faculty : {student.faculty}</h3>
                    <h3> University : {student.university}</h3>
                </div>
            </div>
        </>
    );
}

AllPage.layout = (page: any) => <PublicLayout>{page}</PublicLayout>;

export default AllPage;
