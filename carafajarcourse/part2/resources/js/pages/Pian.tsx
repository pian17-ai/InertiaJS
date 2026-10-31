import PublicLayout from "@/layouts/PublicLayout";
import { Head } from "@inertiajs/react";
function Pian() {
    return (
        <>
            <Head>
                <title>Pian</title>
            </Head>
            <h1>Piann</h1>
        </>
    );
}

Pian.layout = (page: any) => <PublicLayout>{page}</PublicLayout>;

export default Pian;
