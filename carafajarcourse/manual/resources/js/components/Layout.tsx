import { Head } from '@inertiajs/react';
import type { ReactNode } from 'react';

type LayoutProps = {
    children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen">
            <Head title="Carafajar Course" />
            <main>{children}</main>
        </div>
    );
}
