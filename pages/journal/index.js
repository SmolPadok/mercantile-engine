import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Journal(){
    return (
        <div className="container mx-auto text-center py-5">
            <h1 className="text-5xl font-serif font-bold">Journal</h1>
            <hr></hr>
            <div className='py-5'>
                <p className='font-sans text-xl'><Link href="/">Home</Link></p>
            </div>
        </div>
    )
}