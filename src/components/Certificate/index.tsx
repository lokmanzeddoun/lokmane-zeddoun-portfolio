import { FC } from "react";

import Badge from "../Badge";
import Link from "next/link";

interface CertificateProps {
	title: string;
	Certificate: {
		link: string;
		image: string;
		period: string;
		description: string;
		technologies: string[];
	}[];
}

const Certificate: FC<CertificateProps> = ({ Certificate, title }) => {
	return (
		<div id="experience">
			<h1 className="pt-20 text-2xl font-base tracking-tight text-cyan-200">
				{title}
			</h1>
			<div className="flex flex-wrap justify-start mt-4">
				{Certificate.map((certificate, index) => {
					return (
						<Link
							href={certificate.link}
							target="_blank"
							rel="noopener noreferrer"
							key={index}
							className="flex flex-col justify-center w-full cursor-pointer p-4 rounded-lg hover:bg-[#1e2d414d] mt-2 "
						>
							<img
								src={certificate.image}
								alt={title}
								className="h-24 w-40 object-cover rounded-lg ring-cyan-200 lg:mt-12 sm:ml-8 lg:ml-2"
							/>
							<p className="mt-2 text-sm text-slate-300 font-extralight">
								{certificate.period}
							</p>
							<div className="mt-3 text-sm text-slate-400 leading-6">
								{certificate.description}
							</div>
							<div className="flex flex-wrap justify-start mt-3">
								{certificate.technologies.map((tech, index) => {
									return <Badge key={index} text={tech} />;
								})}
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default Certificate;
