import type { PageProps, SharedPageProps } from '@inertiajs/core';

export interface Auth {
    user: unknown;
}

declare module '@inertiajs/core' {
    interface InertiaConfig {
        sharedPageProps: {
            auth: Auth;
        };
    }
}

export type AppPageProps = PageProps & SharedPageProps;
