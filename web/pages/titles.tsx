import Layout from "../components/layout";
import { getProjects } from "../lib/sanity";

export async function getStaticProps() {
  const projects = await getProjects();
  return {
    props: {
      projects,
    },
  };
}

export default function Titles({ projects }) {
  return (
    <Layout>
      {projects.length > 0 && (
        <ul className="flex flex-col space-y-2">
          {projects.map((project) => (
            <li
              key={project.id}
              className="grid grid-cols-6 gap-4 hover:bg-blue hover:text-white"
            >
              <span className="col-span-1">{project.date}</span>
              <span className="col-span-4">{project.title}</span>
              <span className="col-span-1">{project.medium}</span>
            </li>
          ))}
        </ul>
      )}
    </Layout>
  );
}
