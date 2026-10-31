import { createInertiaApp } from '@inertiajs/react';
import PublicLayout from './layouts/PublicLayout';
import AdminLayout from './layouts/AdminLayout';

const appName = import.meta.env.VITE_APP_NAME || 'InertiaPian';

void createInertiaApp({
    layout: (page) => {
        if (page.startsWith('Public/')) {
            return PublicLayout;
        } else if (page.startsWith('Admin/')) {
            return AdminLayout
        }
        return null
    },
    title: (title) => (title ? `${title} - ${appName}` : appName),
    progress: {
        color: '#4B5563',
    },
});
