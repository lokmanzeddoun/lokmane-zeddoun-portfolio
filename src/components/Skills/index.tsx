import { FC } from "react";

interface SkillsProps {
    title: string;
    skills: {
        name: string;
        Icon: any;
    }[];
}

const Skills: FC<SkillsProps> = ({ skills, title }) => {
    return (
        <div id="skills">
            <h1 className="pt-20 text-2xl font-base tracking-tight text-cyan-200">
                {title}
            </h1>
            <div className="flex flex-wrap justify-start mt-4 p-2 pl-4 rounded-xl bg-[#1e2d414d]">
                {
                    skills.map(({name, Icon}, index) => (
                        <div key={index} className="flex flex-col items-center justify-center py-5 pr-8">
                            <Icon className="w-8 h-8 text-cyan-300 hover:text-cyan-200 transition-all" />
                            <p className="mt-2 text-xs font-light tracking-tight text-cyan-400">
                                {name}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Skills;