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

export const workExperience = [
	{
		company: "BCG X",
		role: "Software Engineer",
		period: "Oct 2023 — Present",
		description: "",
		technologies: ["React", "FastAPI", "Kubernetes"],
	},
	{
		company: "igc Partners",
		role: "Software Engineer",
		period: "Jan 2022 — Jun 2023",
		description:
			"Delivered high-quality robust production-ready systems for different areas within the company. Mainly worked with TypeScript, React, NodeJs, NestJs, PostgreSQL, Docker and AWS. I had weekly meetings with the company's stakeholders to gather requirements and discuss the progress of the projects. Created the standards and best practices for the company's frontend and backend projects. Also responsible for the creation of continuous delivery pipelines with GitHub Actions, AWS ElasticBeanstalk, EC2 and Lambda. Trained and led a team of 6 junior developers.",
		technologies: [
			"React",
			"NestJs",
			"Tailwind",
			"ElasticBeanstalk",
			"GitHub Actions",
			"AWS Lambda",
			"Docker",
			"PostgreSQL",
			"Python",
			"NodeJs",
		],
	},
	{
		company: "igc Partners",
		role: "Fullstack Developer",
		period: "Jan 2021 — Dec 2021",
		description:
			"Developed a recruitment system used by the company's HR team to manage a special recruitment process. The system was built using React, Python and Serverless Framework. Deployed the system to AWS using Lambda, DynamoDB and Amplify. Also worked with Python, NodeJs, Serverless and Lambda to build automations, reports and integrations with other systems.",
		technologies: [
			"React",
			"Python",
			"NodeJs",
			"Serverless",
			"AWS Lambda",
			"DynamoDB",
			"Amplify",
		],
	},
	{
		company: "theVelops",
		role: "Fullstack Developer",
		period: "Jan 2018 — Aug 2018",
		description:
			"Worked with the company's development team to build web applications for clients using React, NodeJs, MongoDB and AWS. My main responsibilities were to develop new features and fix bugs in the frontend and backend of the applications. I also led the development of some automations using Serverless Framework, AWS Lambda and Redis.",
		technologies: [
			"React",
			"NodeJs",
			"MongoDB",
			"AWS Lambda",
			"Serverless",
			"Redis",
		],
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
