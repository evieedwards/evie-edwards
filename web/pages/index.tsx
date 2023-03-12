import { PortableText } from "@portabletext/react";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import { getProjects, urlFor } from "../lib/sanity";

export async function getStaticProps() {
  const projects = await getProjects();
  return {
    props: {
      projects,
    },
  };
}

export default function Images({ projects }) {
  return (
    <Layout>
      {projects.length > 0 && (
        <div className="grid">
          {projects
            .filter((project) => project.image !== null)
            .map((project) => (
              <div key={project.id}>
                <Image
                  src={project.image.secure_url}
                  width={300}
                  height={300}
                  alt="hello"
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
            ))}
        </div>
      )}
    </Layout>
  );
}

// const components = {
//   marks: {
//     link: ({ children, value }) => {
//       return (
//         <a href={value.href} target="_blank" rel="noreferrer">
//           {children}
//         </a>
//       );
//     },
//   },
// };

// export default function Home({ homepage, settings }) {
//   return (
//     <div className="-translate-y-5 px-4 py-8 md:p-16 bg-white text-black">
//       <Head>
//         <title>{settings.title}</title>
//         <meta name="title" content={settings.title} />
//         <meta name="description" content={settings.description} />
//         <meta property="twitter:card" content="summary_large_image" />
//         <meta property="twitter:url" content="https://evieedwards.org" />
//         <meta property="twitter:title" content={settings.title} />
//         <meta property="twitter:description" content={settings.description} />
//         <meta property="twitter:image" content={settings.og_image} />
//         <link rel="icon" type="image/png" href={settings.favicon} />
//       </Head>

//       <main className="relative max-w-full prose prose-h1:text-lg prose-a:no-underline prose-a:text-blue-600 hover:prose-a:bg-blue-600 hover:prose-a:text-white hover:prose-a:no-underline">
//         <h1 className="absolute font-bold invisible">{homepage.heading}</h1>
//         {/* @ts-ignore */}
//         <PortableText value={homepage.body} components={components} />
//       </main>

//       <footer className="mt-8 flex text-xs text-gray-500">
//         <span>Last updated on</span>
//         <span className="ml-1 font-medium text-black">
//           {new Date(homepage._updatedAt).toLocaleDateString()}
//         </span>
//       </footer>
//     </div>
//   );
// }
