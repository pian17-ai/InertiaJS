import { Head, Link } from "@inertiajs/react";

function AdminLayout({ children }: any) {
    return (
        <>
            <div className="px-3 py-2 bg-red-600 flex">
                <h1 className="font-bold">Adminn</h1>
                <ul className="flex">
                    <li className="px-2 mx-2 bg-slate-800 rounded-md">
                        <Link href={"/"}>Home</Link>
                    </li>
                    <li className="px-2 mr-2 bg-slate-800 rounded-md">
                        <Link href={"/student"}>Student</Link>
                    </li>
                    <li className="px-2 bg-slate-800 rounded-md">
                        <Link href={"/admin"}>Admin</Link>
                    </li>
                </ul>
            </div>
            <main>{children}</main>
        </>
    );
}

export default AdminLayout;
