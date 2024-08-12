export const summary = {
	name: "Zeddoun Lokmane",
	role: "Full Stack Developer",
	bio: "Hi I’m Zeddoun Lokmane and I'm a passionate full-stack developer. I'm proficient in both front-end technologies like HTML, CSS, and JavaScript frameworks like React and next. I also have a strong understanding of back-end development using node.js  and frameworks like nest.js,express. I enjoy tackling complex challenges and delivering user-centric solutions throughout the development cycle.",
	githubLink: "https://github.com/lokmanzeddoun",
	linkedinLink: "https://www.linkedin.com/in/lokmane-zeddoun-22609125b/",
	email: "lokmanezeddoun@gmail.com",
	mediumLink: "https://medium.com/@lokmanezeddoun",
	twitterLink: "https://twitter.com/ZeddounLokmane",
	instagramLink: null,
};

export const navigation = {
	about: "About me",
	skills: "Skills",
	projects: "Projects",
	experience: "Certificates",
};

export const aboutMe = [
	"4th Year Computer Science student aspiring to be a Full Stack Developer. Passionate about technology and software development, currently seeking opportunities to apply and expand my skills across the entire web development stack.",
	"My background includes a strong foundation in computer science principles, proficiency in full stack technologies such as NodeJS, React, TypeScript, Docker, and AWS, as well as experience with SQL and NoSQL databases. I'm well-versed in Clean Code principles and have a track record of building scalable and efficient systems.",
	"As an aspiring Full Stack Developer, I'm equipped to handle both front-end and back-end development. I'm curious, creative, and always eager to take on new challenges in the tech world. Open to work and excited to contribute my comprehensive skills to innovative projects.",
];

export const Certifications = [
	{
		period: "Nov 13 , 2022",
		link: "https://learn.nvidia.com/certificates?id=fb65b41f502546b490baeb5e23d2453e",
		image: "nvidia.png",
		description: "Workshop/Fundamentals of Deep Learning",
		technologies: ["DeepLearning", "TensorFlow", "Pytorch"],
	},
	{
		period: "Jan 2022 — Jun 2023",
		link: "https://badgr.com/public/assertions/B03j9Vr2SyGZw0ND1Fd8rA",
		image: "postman.png",

		description:
			" Postman Student Experts are proficient in the essential skills required for consuming APIs in Postman and applications.",
		technologies: ["Postman", "Node.js"],
	},
	{
		link: "https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/6b7abfb198216118ef0b273c074a2ac0",
		image: "helsinki.jpg",

		period: "Aug 2024",
		description: "Full Stack open Web Development",
		technologies: [
			"React",
			"Express",
			"NodeJs",
			"vitest",
			"playwright",
			"jest",
			"Redux",
			"Mongodb",
			"ReactRouter",
		],
	},
	{
		link: "https://studies.cs.helsinki.fi/stats/api/certificate/fs-graphql/en/e31c179434ace8b6fb6716375783ea47",
		image: "helsinki.jpg",

		period: "Aug 2024",
		description: "GraphQl",
		technologies: ["graphql", "apollo-server", "apollo-client"],
	},
	{
		link: "https://studies.cs.helsinki.fi/stats/api/certificate/fs-containers/en/f9d3b3a2b1d8cdd893d88bef3094e012",
		image: "helsinki.jpg",

		period: "July 2024",
		description: "Intro To Container",
		technologies: ["Docker", "docker-compose"],
	},
	{
		link: "https://studies.cs.helsinki.fi/stats/api/certificate/fs-psql/en/a61b4db2ac597190d05554dcf4523823",
		image: "helsinki.jpg",

		period: "Aug 2024",
		description: "Relational Database With ORM",
		technologies: ["Sequelize", "Express"],
	},
];

export const projects = [
	{
		title: "E-Learn",
		description:
			"Developed a comprehensive educational platform using Express.js and MySQL, facilitating seamless interaction between students, teachers, and administrators. Implemented user authentication, role-based access control, and API endpoints for course material management. The system includes features for discussion forums, MOOC access, quiz submissions, automated student progression, and administrative tasks. Designed a robust database schema to support complex educational workflows and maintain data integrity. This project streamlined administrative processes and provided a centralized platform for learning and collaboration, significantly enhancing the overall educational experience.",
		url: "https://github.com/ibrahimn9/E-Learn-Platform",
		technologies: ["Node.js", "Express.js", "MySql", "ffempeg", "Google Drive"],
		image: "e-learn.jpg",
	},
	{
		title: "Weather",
		description:
			"Developed a responsive weather application using React and React Query. Integrated the OpenWeather API to fetch real-time weather data for user-specified locations. Implemented features including current weather conditions, temperature, humidity, wind speed, and a 5-day forecast. Utilized React Query for efficient data fetching and caching, improving app performance and user experience. The app showcases clean UI design and intuitive user interactions, demonstrating proficiency in frontend development and third-party API integration.",
		url: "https://github.com/lokmanzeddoun/weather-app",
		technologies: ["React.js", "react-query", "openWeather api", "redux"],
		image: "weather.jpg",
	},
	{
		title: "Crypto Cli",
		description:
			"Developed a command-line interface application using Node.js and Yargs for cryptocurrency enthusiasts. The app allows users to fetch real-time cryptocurrency data, including prices, market caps, and trading volumes. Implemented commands for price tracking, portfolio management, and basic market analysis. Utilized Yargs for parsing command-line arguments, providing a user-friendly interface with customizable options. Integrated with a cryptocurrency API to ensure up-to-date and accurate information. This project demonstrates proficiency in building efficient CLI tools and working with financial data in a Node.js environment.",
		url: "https://github.com/lokmanzeddoun/node-projects/tree/main/crypto-cli",
		technologies: ["typescript", "node.js", "yargs", "chalk"],
		image: "cli.png",
	},
	{
		title: "Telegram Bot",
		description:
			"Developed a Telegram bot using Node.js and the Telegraf framework to help users find and fetch information about desired courses. The bot allows users to search for courses by keywords, subjects, or instructors. Implemented natural language processing to interpret user queries and provide relevant course suggestions. Integrated with an educational database or API to fetch course details, including descriptions, schedules, and prerequisites. Features include course recommendations, syllabus previews, and notification alerts for course availability. This project showcases skills in bot development, API integration, and creating user-friendly interfaces for educational technology applications.",
		url: "https://github.com/lokmanzeddoun/fetch-course",
		technologies: ["typescript", "node.js", "telegraf", "puppeteer"],
		image: "tele.png",
	},
];
