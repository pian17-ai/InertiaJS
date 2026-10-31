import { createInertiaApp } from '@inertiajs/react';
import PublicLayout from './layouts/PublicLayout';
import AdminLayout from './layouts/AdminLayout';

const appName = import.meta.env.VITE_APP_NAME || 'InertiaPian';

void createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    progress: {
    // The delay after which the progress bar will appear, in milliseconds...
    delay: 250,
    // The color of the progress bar...
    color: "red",
    // Whether to include the default NProgress styles...
    includeCSS: true,
    // Whether the NProgress spinner will be shown...
    showSpinner: true,
  },
    layout: (page) => {
        if (page.startsWith('Public/')) {
            return PublicLayout;
        } else if (page.startsWith('Admin/')) {
            return AdminLayout
        }
        return null
    },
    
});
