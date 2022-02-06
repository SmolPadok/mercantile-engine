import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/layout';

export default function Home() {
  return (
    <>
      <Layout home>
        <div className='flex py-3 flex-row gap-5 justify-center'>
            <p className='font-sans text-lg'><Link href="/journal">Journal</Link></p>
        </div>
        <div className="container mx-auto p-5">
            <div className="flex flex-col items-center gap-5">
                <Image className="rounded-full" src="/img/me.png" alt="me" width="148" height="148"/>
                  <h1 className='font-serif text-5xl'>Qayyum Yazid</h1>
                  <p className='font-sans text-lg'>Hi, I&apos;m <span className='font-serif'>Qayyum</span>. I'm an engineering student, alternative artist and developer. You can contact me through <a href='https://twitter.com/smolpadok' className='font-bold'>my Twitter profile</a>.</p>
            </div>
        </div>
      </Layout>
    </>
  )
}
