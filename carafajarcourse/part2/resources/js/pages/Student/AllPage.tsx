import { AllStudentProps } from "@/types/student/allpage";
import { Link, usePage } from "@inertiajs/react";
import React from "react";

function AllPage({ student }: AllStudentProps) {
    return (
        <div>
            <div className="px-3 py-2 bg-slate-600">
                <ul className="flex">
                    <li className="px-2 mr-2 bg-slate-800 rounded-md">
                        <Link href={"/"}>Home</Link>
                    </li>
                    <li className="px-2 bg-slate-800 rounded-md">
                        <Link href={"/student"}>Student</Link>
                    </li>
                </ul>
            </div>
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
        </div>
    );
}

export default AllPage;
