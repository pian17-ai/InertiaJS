export type AllPostProps = {
    posts: Post[];
}

export type PostProps = {
    post: Post;
}

export type PostForm = {
    title: string;
    description: string;
    img: File | null;
}

export type Post = {
    id: number;
    title: string;
    slug: string;
    description: string;
    img: string;
}

export type PostPayload = {
    title: string;
    slug: string;
    description: string;
    img: string;
}