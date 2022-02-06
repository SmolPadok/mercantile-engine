import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";

export default function Post({ postData }) {
    return (
        <Layout>
            <Head><title>smolpadok - {postData.title}</title></Head>
            <div className="container mx-auto py-5">
                <p className="text-lg font-sans"><Link href={"/journal"}><a className="font-bold">Journal</a></Link> / {postData.title}</p>
            </div>
            <div className="container flex flex-col gap-3 mx-auto p-5">
                <h1 className="font-serif text-5xl">{postData.title}</h1>
                <Date className="font-sans" dateString={postData.date} />
                <hr className="py-5" />
                <div className="flex flex-col gap-3" dangerouslySetInnerHTML={{__html: postData.contentHtml}} />
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}