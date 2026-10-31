import { createInertiaApp } from '@inertiajs/react';
import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import type { ComponentType } from 'react';

const pages = import.meta.glob<{ default: ComponentType }>('./pages/**/*.tsx', { eager: true });

createInertiaApp({
    resolve: (name) => pages[`./pages/${name}.tsx`],
    setup({ el, App, props }) {
        if (el) {
            createRoot(el).render(createElement(App, props));
        }
    },
});
