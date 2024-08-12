import { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FaSquareGithub, FaLinkedin, FaMedium, } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"
import Link from "next/link";

import { ChevronDoubleRightIcon } from "@heroicons/react/20/solid";

interface SummaryProps {
    summary: {
        name: string;
        role: string;
        company?: string | null;
        bio: string;
        githubLink: string;
        linkedinLink: string;
        mediumLink: string;
        email: string;
    };
    navigation: {
        about: string;
        skills: string;
        experience: string;
        projects: string;
    };
}

const Summary:FC<SummaryProps> = ({ summary, navigation }) => {
    const { asPath } = useRouter();
    const [activeTab, setActiveTab] = useState<string | null>(null);

    const { name, role, company, bio, githubLink, linkedinLink, mediumLink, email } = summary;

    useEffect(() => {
        setActiveTab(asPath.split('#')[1]);
    }, [asPath]);

    return (
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8 lg:w-1/2 md:w-1/2 lg:p-6 md:p-6 p-3 bg-[#15203273] rounded-xl">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-white">
                {name}
            </h1>
            <h2 className="mt-5 text-2xl font-light tracking-tight text-white">
                {role} 
                {!company && <span className="text-slate-500 text-xl ml-4">—</span>}
                <span className="text-slate-500 font-extralight text-xl ml-4">{company ? `@ ${company}` : "Open to work"}</span>
            </h2>
            <p className="mt-6 text-base leading-8  text-slate-400 font-light">
                {bio}
            </p>
            <div className="mt-10 flex flex-col space-y-3">
                <Link 
                    className={`rounded-lg text-slate-300 flex font-light cursor-pointer w-48 p-2 pl-4 hover:bg-white/10 hover:rounded-lg transition-all hover:font-medium}`}
                    href="#about"
                >
                    <ChevronDoubleRightIcon className="w-5" /> &ensp; {navigation.about}
                </Link>
                <Link 
                    className={`rounded-lg text-slate-300 flex font-light cursor-pointer w-48 p-2 pl-4 hover:bg-white/10 hover:rounded-lg transition-all hover:font-medium}`}
                    href="#skills"
                >
                    <ChevronDoubleRightIcon className="w-5" /> &ensp; {navigation.skills}
                </Link>
                <Link 
                    className={`rounded-lg text-slate-300 flex font-light cursor-pointer w-48 p-2 pl-4 hover:bg-white/10 hover:rounded-lg transition-all hover:font-medium}`}
                    href="#experience"
                >
                    <ChevronDoubleRightIcon className="w-5" /> &ensp; {navigation.experience}
                </Link>
                <Link 
                    className={`rounded-lg text-slate-300 flex font-light cursor-pointer w-48 p-2 pl-4 hover:bg-white/10 hover:rounded-lg transition-all hover:font-medium}`}
                    href="#projects"
                >
                    <ChevronDoubleRightIcon className="w-5" /> &ensp; {navigation.projects}
                </Link>
            </div>
            <div className="mt-20 flex flex-row space-x-4 ml-3">
                <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-slate-400 transition-all">
                    <FaSquareGithub size={24} />
                </a>
                <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-slate-400 transition-all">
                    <FaLinkedin size={24} />
                </a>
                <a href={mediumLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-slate-400 transition-all">
                    <FaMedium size={24} />
                </a>
                <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-slate-400 transition-all">
                    <MdEmail size={24} />
                </a>
            </div>
        </div>
    );
}

export default Summary;