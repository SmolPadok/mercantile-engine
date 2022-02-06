import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Router from "next/router"

export default function Layout({ children, home }) {

    const siteTitle = "smolpadok - Mercantile Engine";
    const name = "smolpadok"

    return <div>
            <Head>
              <link rel="icon" href="/favicon.ico"/>
              <meta
                name="description"
                content="smolpadok portfolio and commissioning website"
              />
              <meta name="og:title" content={siteTitle} />
              <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className="container flex flex-row items-center gap-3 text-center p-5">
            { home ?
            (
              <>
                <Image
                  priority
                  src="/img/logo-black.png"
                  height={64}
                  width={64}
                  alt={name}
                />
                <h1 className="text-4xl font-serif font-bold">{name}</h1>
              </>
            ) : (
              <>
                <Link href="/">
                  <a>
                    <Image
                      priority
                      src="/img/logo-black.png"
                      height={54}
                      width={54}
                      alt={name}
                    />
                  </a>
                </Link>
                <h1 className="text-3xl font-serif font-bold"><Link href="/"><a>{name}</a></Link></h1>
              </>
              )}
            </header>
            <hr></hr>
            {!home && (
              <nav className="container mx-auto text-center py-5">
                <Link href="/">
                  <a className="font-sans text-lg">← Back to home</a>
                </Link>
              </nav>
            )}
            <main>
              {children}
            </main>
          </div>
  }