import { FC, useState } from "react";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";

import Badge from "../Badge";
import ProjectModal from "../ProjectModal";

interface Project {
    title: string;
    description: string;
    image: string;
    url: string;
    technologies: string[];
    screenshots?: string[];
    deployUrl?: string;
}

interface ProjectProps {
    title: string;
    projects: Project[];
}

const Projects: FC<ProjectProps> = ({ projects, title }) => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <div id="projects">
            <h1 className="pt-20 text-2xl font-base tracking-tight text-cyan-200">
                {title}
            </h1>
            <div className="flex flex-wrap justify-start mt-4 space-y-4">
                {projects.map((project, index) => {
                    return (
                        <div
                            key={index}
                            onClick={() => setSelectedProject(project)}
                            className="flex flex-col lg:flex-row sm:flex-col justify-center w-full p-4 rounded-lg hover:bg-[#1e2d414d] mt-2 cursor-pointer items-start lg:space-x-8 transition-colors duration-200"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="h-24 w-40 object-cover rounded-lg ring-cyan-200 lg:mt-12 sm:ml-8 lg:ml-2"
                            />
                            <div className="mt-2 lg:mt-0">
                                <h1 className="mt-2 text-lg font-semibold text-white flex">
                                    {project.title}{" "}
                                    <ArrowUpRightIcon className="w-5 ml-2" />
                                </h1>
                                <p className="mt-2 text-sm font-normal text-gray-400 line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap mt-2">
                                    {project.technologies.map((tag, index) => {
                                        return <Badge key={index} text={tag} />;
                                    })}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <ProjectModal
                isOpen={selectedProject !== null}
                onClose={() => setSelectedProject(null)}
                project={selectedProject}
            />
        </div>
    );
};

export default Projects;