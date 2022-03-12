import PortableText from "react-portable-text";
import Head from "next/head";
import { client } from "../lib/sanity";
import groq from "groq";

export async function getStaticProps() {
  return {
    props: {
      homepage: await client.fetch(
        groq`*[_id == 'home'][0]{ _updatedAt, heading, body }`
      ),
      settings: await client.fetch(groq`*[_type == "siteSettings"][0]{
        title, description, "og_image": og_image.asset->url, "favicon": favicon.asset->url
      }`),
    },
    revalidate: 60,
  };
}

export default function Home({ homepage, settings }) {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 md:p-16 bg-white text-black">
      <Head>
        <title>{settings.title}</title>
        <meta name="title" content={settings.title} />
        <meta name="description" content={settings.description} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://evieedwards.org" />
        <meta property="twitter:title" content={settings.title} />
        <meta property="twitter:description" content={settings.description} />
        <meta property="twitter:image" content={settings.og_image} />
        <link rel="icon" type="image/png" href={settings.favicon} />
      </Head>

      <main className="max-w-full prose prose-h1:text-lg prose-a:text-blue-600">
        <h1 className="font-bold">{homepage.heading}</h1>
        <PortableText content={homepage.body} serializers={{}} />
      </main>

      <footer className="mt-16 md:mt-24 flex justify-between items-center">
        <a
          href="mailto:hello@evieedwards.org"
          className="px-2 py-1 border border-gray-300 text-gray-600 rounded-md transition-all ease-in-out duration-150 hover:scale-105 hover:border-gray-900 hover:text-gray-900"
        >
          Contact
        </a>
        <div className="flex text-sm text-gray-500">
          <span>Last updated on</span>
          <span className="ml-1 font-medium text-black">
            {new Date(homepage._updatedAt).toLocaleDateString()}
          </span>
        </div>
      </footer>
    </div>
  );
}
