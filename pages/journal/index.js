import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import { getSortedPostsData } from "../../lib/posts";
import Date from "../../components/date";


export async function getStaticProps(){
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

export default function Journal({ allPostsData }) {
    return (
        <Layout>
            <Head><title>smolpadok - Journal</title></Head>
            <div className="container mx-auto py-5">
                <h1 className="text-5xl font-serif py-5">Journal</h1>
            </div>
            <section className="container mx-auto p-5">
                <ul>
                    {allPostsData.map(({ id, date, title }) => (
                    <li key={id}>
                        <div className="flex flex-col gap-2 py-2">
                            <Link href={`/journal/${id}`}><a className="font-serif text-3xl">{title}</a></Link>
                            <small><Date dateString={date} /></small>
                            <hr></hr>
                        </div>
                    </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}
