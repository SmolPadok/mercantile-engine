import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto text-center py-5">
      <div className='py-5'>
        <h1 className="text-5xl font-serif font-bold">
          Dras&apos;kay Nirni! 
        </h1>
        <p className="font-sans text-lg">
          The mercantile engine will serve soon.
        </p>
      </div>
      <hr></hr>
      <div className='py-5'>
        <p className='font-sans text-lg'><Link href="/journal">Journal</Link></p>
      </div>
    </div>
  )
}
