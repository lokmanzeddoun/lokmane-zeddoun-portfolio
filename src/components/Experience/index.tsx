import { FC, useState } from "react";
import Badge from "../Badge";
import ProjectModal from "../ProjectModal";

interface ExperienceEntry {
    period: string;
    company: string;
    location: string;
    role: string;
    bullets: string[];
    technologies: string[];
    link: string | null;
    screenshots?: string[];
    deployUrl?: string;
    testCredentials?: { username: string; password: string };
}

interface ExperienceProps {
    title: string;
    experiences: ExperienceEntry[];
}

const Experience: FC<ExperienceProps> = ({ experiences, title }) => {
    const [selectedExp, setSelectedExp] = useState<ExperienceEntry | null>(null);

    return (
        <div id="experience">
            <h1 className="pt-20 text-2xl font-base tracking-tight text-cyan-200">
                {title}
            </h1>
            <div className="flex flex-col mt-4 space-y-2">
                {experiences.map((exp, index) => {
                    const hasScreenshots =
                        exp.screenshots && exp.screenshots.length > 0;

                    return (
                        <div
                            key={index}
                            className={`flex flex-col w-full p-5 rounded-lg hover:bg-[#1e2d414d] transition-colors duration-200 ${hasScreenshots ? "cursor-pointer" : ""
                                }`}
                            onClick={
                                hasScreenshots
                                    ? () => setSelectedExp(exp)
                                    : undefined
                            }
                        >
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                                <h2 className="text-lg font-semibold text-white">
                                    {exp.company}
                                    <span className="text-slate-500 font-light text-sm ml-2">
                                        — {exp.location}
                                    </span>
                                    {hasScreenshots && (
                                        <span className="text-cyan-400 text-xs ml-2 font-normal">
                                            📸 View screenshots
                                        </span>
                                    )}
                                </h2>
                                <p className="text-sm text-slate-400 font-light whitespace-nowrap">
                                    {exp.period}
                                </p>
                            </div>
                            <p className="mt-1 text-sm font-medium text-cyan-300/80">
                                {exp.role}
                            </p>
                            <ul className="mt-3 space-y-1.5">
                                {exp.bullets.map((bullet, bIndex) => (
                                    <li
                                        key={bIndex}
                                        className="text-sm text-slate-400 leading-6 flex items-start"
                                    >
                                        <span className="text-cyan-400 mr-2 mt-1.5 flex-shrink-0">
                                            ▸
                                        </span>
                                        {bullet}
                                    </li>
                                ))}
                            </ul>
                            <div className="flex flex-wrap mt-3">
                                {exp.technologies.map((tech, tIndex) => (
                                    <Badge key={tIndex} text={tech} />
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>

            {selectedExp && (
                <ProjectModal
                    isOpen={selectedExp !== null}
                    onClose={() => setSelectedExp(null)}
                    project={{
                        title: `${selectedExp.company} — ${selectedExp.role}`,
                        description: selectedExp.bullets.join(" "),
                        url: selectedExp.link || "#",
                        technologies: selectedExp.technologies,
                        image: "",
                        screenshots: selectedExp.screenshots,
                        deployUrl: selectedExp.deployUrl,
                        testCredentials: selectedExp.testCredentials,
                    }}
                />
            )}
        </div>
    );
};

export default Experience;
