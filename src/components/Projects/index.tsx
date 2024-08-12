import { FC } from "react";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";

import Badge from "../Badge";

interface ProjectProps {
    title: string;
    projects: {
        title: string;
        description: string;
        image: string;
        url: string;
        technologies: string[];
    }[];
}

const Projects: FC<ProjectProps> = ({ projects, title }) => {
    return (
        <div id="projects">
            <h1 className="pt-20 text-2xl font-base tracking-tight text-cyan-200">
                {title}
            </h1>
            <div className="flex flex-wrap justify-start mt-4 space-y-4">
                {
                    projects.map((project, index) => {
                        return (
                            <Link 
                                href={project.url}
                                target="_blank" 
                                rel="noopener noreferrer" 
                                key={index} 
                                className="flex flex-col lg:flex-row sm:flex-col justify-center w-full p-4 rounded-lg hover:bg-[#1e2d414d] mt-2 cursor-pointer items-start lg:space-x-8"
                            >
                                <img src={project.image} alt={project.title} className="h-24 w-40 object-cover rounded-lg ring-cyan-200 lg:mt-12 sm:ml-8 lg:ml-2" />
                                <div className="mt-2 lg:mt-0">
                                    <h1 className="mt-2 text-lg font-semibold text-white flex">{project.title} <ArrowUpRightIcon className="w-5 ml-2" /></h1>
                                    <p className="mt-2 text-sm font-normal text-gray-400">{project.description}</p>
                                    <div className="flex flex-wrap mt-2">
                                        {
                                            project.technologies.map((tag, index) => {
                                                return (
                                                    <Badge key={index} text={tag} />
                                                );
                                            })
                                        }
                                    </div>
                                </div>
                            </Link>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Projects;