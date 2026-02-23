export const summary = {
	name: "Zeddoun Lokmane",
	role: "AI Engineer & Full Stack Developer",
	bio: "Currently in fifth year at the Higher School of Computer Science in Sidi Bel Abbès, specializing in Artificial Intelligence and Data Science. Passionate about computer vision and AI engineering, with hands-on experience in PyTorch, TensorFlow, Keras, scikit-learn and OpenCV. Proficient in building training pipelines, experiment tracking with Weights & Biases and cloud training (GCP). Significant experience in web development and backend engineering with Node.js, GraphQL (Apollo Federation), RabbitMQ, Redis and containerized deployments (Docker, Kubernetes, CI/CD).",
	githubLink: "https://github.com/lokmanzeddoun",
	linkedinLink: "https://www.linkedin.com/in/lokmanezeddoun",
	email: "lokmanezeddoun@gmail.com",
	mediumLink: "https://medium.com/@lokmanezeddoun",
	twitterLink: "https://twitter.com/ZeddounLokmane",
	instagramLink: null,
};

export const navigation = {
	about: "About me",
	skills: "Skills",
	experience: "Experience",
	projects: "Projects",
	certificates: "Certificates",
};

export const aboutMe = [
	"Fifth-year student at the Higher School of Computer Science (ESI SBA), pursuing a Master's in Artificial Intelligence and Data Science. Passionate about computer vision, AI engineering, and building intelligent systems that solve real-world problems.",
	"My technical toolkit spans the full AI/ML pipeline — from data labeling and augmentation, through model training with PyTorch and TensorFlow, to experiment tracking with Weights & Biases and cloud-based training on GCP. I'm experienced with object detection (YOLOv11), image/video processing with OpenCV, and deploying models in production environments.",
	"Beyond AI, I bring significant experience in full-stack and backend engineering: building microservices with Node.js, NestJS, and GraphQL (Apollo Federation), designing real-time systems with Socket.IO and RabbitMQ, and managing containerized deployments with Docker, Kubernetes, and CI/CD pipelines.",
];

export const experiences = [
	{
		period: "Dec 2024 — Oct 2025",
		company: "Eagle Orbit",
		location: "Remote",
		role: "Backend Engineer",
		bullets: [
			"Collaborated with specialized teams to develop scalable software solutions for enterprise clients using Bun.js runtime and Apollo GraphQL federation.",
			"Architected and implemented microservices with Apollo Federation for efficient service communication and data management.",
			"Built high-performance messaging systems using RabbitMQ and Redis for pub/sub, search, and scripting modules.",
			"Managed containerized deployments using Docker, Kubernetes and Jenkins CI/CD for automated testing and deployments.",
		],
		technologies: [
			"Bun.js",
			"Apollo GraphQL",
			"RabbitMQ",
			"Redis",
			"Docker",
			"Kubernetes",
			"Jenkins",
		],
		link: null,
	},
	{
		period: "Sep 2024 — Jan 2025",
		company: "Load-Blink App",
		location: "Freelance",
		role: "Full Stack Developer — TSM System & IoT",
		bullets: [
			"Designed and developed a Transport and Shipping Management (TSM) system using Node.js and React.",
			"Implemented a TCP server acting as packet decoder for GPS trackers, enabling real-time IoT data reception and interpretation.",
			"Developed real-time features with Socket.IO for live vehicle tracking and notifications.",
			"Integrated AWS S3 for object storage and set up CI/CD pipelines with GitHub Actions.",
		],
		technologies: [
			"Node.js",
			"React",
			"Socket.IO",
			"AWS S3",
			"GitHub Actions",
			"TCP/IoT",
		],
		link: "https://tsm-frontend-kappa.vercel.app/log-in",
		deployUrl: "https://tsm-frontend-kappa.vercel.app/log-in",
		testCredentials: { username: "admin1", password: "Admin123" },
		screenshots: [
			"screenshots/load-blink/lb-01.png",
			"screenshots/load-blink/lb-02.png",
			"screenshots/load-blink/lb-03.png",
			"screenshots/load-blink/lb-04.png",
			"screenshots/load-blink/lb-05.png",
			"screenshots/load-blink/lb-06.png",
			"screenshots/load-blink/lb-07.png",
			"screenshots/load-blink/lb-08.png",
			"screenshots/load-blink/lb-09.png",
		],
	},
	{
		period: "Sep 2024 — Oct 2024",
		company: "Algérie Télécom",
		location: "On-site",
		role: "Full Stack Developer — Nest.js, React, TypeScript",
		bullets: [
			"Developed a web application for order and service management using Nest.js, React, and TypeScript.",
			"Implemented user management, automated order printing, service and financial modules.",
			"Integrated authentication and role-based authorization across organizational levels.",
			"Streamlined workflows and improved administrator interfaces.",
		],
		technologies: [
			"Nest.js",
			"React",
			"TypeScript",
			"PostgreSQL",
		],
		link: "https://github.com/lokmanzeddoun/omat-order-mission-algerie-telecom-",
		screenshots: [
			"screenshots/omat/omat-01.png",
			"screenshots/omat/omat-02.png",
			"screenshots/omat/omat-03.png",
			"screenshots/omat/omat-04.png",
			"screenshots/omat/omat-05.png",
			"screenshots/omat/omat-06.png",
			"screenshots/omat/omat-07.png",
			"screenshots/omat/omat-08.png",
			"screenshots/omat/omat-09.png",
		],
	},
];

export const Certifications = [
	{
		period: "2025",
		link: "https://cert.efset.org/nKV15L",
		image: "efset.png",
		description: "EF SET English Certificate C1 — Score 62/100, advanced level",
		technologies: ["English", "C1"],
	},
	{
		period: "2025",
		link: "#",
		image: "helsinki.jpg",
		description:
			"EDUCOSYS Hands-on Generative AI — Practical training on generative AI and language models",
		technologies: ["Generative AI", "LLMs"],
	},
	{
		link: "https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/6b7abfb198216118ef0b273c074a2ac0",
		image: "helsinki.jpg",
		period: "2024",
		description:
			"Full Stack Open (University of Helsinki) — MERN stack, testing, CI/CD and containerization",
		technologies: [
			"React",
			"Express",
			"Node.js",
			"Docker",
			"CI/CD",
			"Testing",
		],
	},
	{
		link: "#",
		image: "helsinki.jpg",
		period: "2024",
		description:
			"Graph Developer Professional — Apollo Federation for building federated supergraphs",
		technologies: ["GraphQL", "Apollo Federation"],
	},
];

export const projects = [
	{
		title: "ALPR — License Plate Recognition",
		description:
			"Real-time detection, recognition, and extraction of license plates for security use-cases. Video ingest from IP/USB cameras (RTSP); alerting with plate metadata persisted in database. Backend APIs with Flask; monitoring dashboard built with Next.js. Models in PyTorch using YOLOv11 for detection and a trained color-recognition classifier. Training and experiment tracking via Weights & Biases; jobs executed on GCP.",
		url: "https://github.com/lokmanzeddoun",
		technologies: [
			"PyTorch",
			"YOLOv11",
			"Flask",
			"Next.js",
			"OpenCV",
			"W&B",
			"GCP",
		],
		image: "default-project.png",
	},
	{
		title: "YOLO Image Search",
		description:
			"Content-based image search engine using YOLOv11-m for indexing and semantic search. Extracts object embeddings from images and enables similarity-based retrieval across datasets.",
		url: "https://github.com/lokmanzeddoun",
		technologies: ["Python", "YOLOv11", "Computer Vision"],
		image: "default-project.png",
	},
	{
		title: "Mental Well-Being Agent",
		description:
			"Mental well-being conversational agent based on AutoGen framework and LLMs. Provides empathetic, context-aware conversations to support mental well-being through AI-powered dialogue.",
		url: "https://github.com/lokmanzeddoun",
		technologies: ["Python", "AutoGen", "LLMs", "AI Agents"],
		image: "default-project.png",
	},
	{
		title: "E-Learn Platform",
		description:
			"Comprehensive educational platform using Express.js and MySQL, facilitating interaction between students, teachers, and administrators. Features include user authentication, role-based access control, discussion forums, MOOC access, quiz submissions, and automated student progression.",
		url: "https://github.com/ibrahimn9/E-Learn-Platform",
		technologies: ["Node.js", "Express.js", "MySQL", "ffmpeg", "Google Drive"],
		image: "e-learn.jpg",
	},
];
