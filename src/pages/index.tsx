import { FC, useRef, useEffect, useState } from "react";

import BackgroundPattern from "@/components/BackgroundPattern";
import Summary from "@/components/Summary";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Certificate from "@/components/Certificate";
import Projects from "@/components/Projects";

import { skills } from "@/content/skills";
import * as enContent from "@/content/en";
import * as frContent from "@/content/fr";

const Home: FC = () => {
	const ref = useRef<HTMLDivElement | null>(null);
	const [selectedLanguage, setSelectedLanguage] = useState("en");
	const content = selectedLanguage == "en" ? enContent : frContent;

	useEffect(() => {
		const hash = window.location.hash;
		if (hash && ref.current) {
			ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	}, []);

	return (
		<div className="relative isolate overflow-hidden bg-gray-900">
			<title>Zeddoun Lokmane | Full Stack Developer</title>
			<BackgroundPattern />
			<div className="mx-auto overflow-auto sm:overflow-auto max-w-10xl h-screen px-6 pb-24 pt-10 sm:pb-32 lg:flex md:flex lg:justify-evenly md:justify-evenly lg:px-8 lg:py-15">
				<Summary navigation={content.navigation} summary={content.summary} />
				<div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-4xl lg:w-1/2 md:w-1/2 lg:p-6 md:p-6 p-3 overflow-y-scroll">
					<About title={content.navigation.about} aboutMe={content.aboutMe} />
					<Skills title={content.navigation.skills} skills={skills} />
					<Certificate
						title={content.navigation.experience}
						Certificate={content.Certifications}
					/>
					<Projects
						title={content.navigation.projects}
						projects={content.projects}
					/>
				</div>
			</div>
			<div className="absolute top-0 right-0 mt-4 mr-4 flex space-x-4">
				<div
					className={`text-gray-300 hover:text-gray-400 ${
						selectedLanguage == "fr"
							? "cursor-default opacity-50"
							: "cursor-pointer"
					}`}
					onClick={() => setSelectedLanguage("fr")}
				>
					<img src="french.png" className="w-8" alt="french flag"  />
				</div>
				<div
					className={`text-gray-300 hover:text-gray-400 ${
						selectedLanguage == "en"
							? "cursor-default opacity-50"
							: "cursor-pointer"
					}`}
					onClick={() => setSelectedLanguage("en")}
				>
					<img src="english.png" className="w-8" alt="english flag" />
				</div>
			</div>
		</div>
	);
};

export default Home;
