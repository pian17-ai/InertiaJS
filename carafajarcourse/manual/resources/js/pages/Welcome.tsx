import Layout from '../components/Layout';
import type { AppPageProps } from '../types';

export default function Welcome({ auth }: AppPageProps) {
    return (
        <Layout>
            <h1>Welcome</h1>
            <p>This page is rendered by React with Inertia.js.</p>
            {auth ? <p>You are logged in.</p> : <p>You are not logged in.</p>}
        </Layout>
    );
}
