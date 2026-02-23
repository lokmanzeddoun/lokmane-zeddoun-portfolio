export const summary = {
	name: "Zeddoun Lokmane",
	role: "Ingénieur IA & Développeur Full Stack",
	bio: "Actuellement en cinquième année à l'École Supérieure d'Informatique de Sidi Bel Abbès, spécialisé en Intelligence Artificielle et Science des Données. Passionné par la vision par ordinateur et l'ingénierie IA, avec une expérience pratique en PyTorch, TensorFlow, Keras, scikit-learn et OpenCV. Compétent dans la construction de pipelines d'entraînement, le suivi d'expériences avec Weights & Biases et l'entraînement cloud (GCP). Expérience significative en développement web et ingénierie backend avec Node.js, GraphQL (Apollo Federation), RabbitMQ, Redis et déploiements conteneurisés (Docker, Kubernetes, CI/CD).",
	githubLink: "https://github.com/lokmanzeddoun",
	linkedinLink: "https://www.linkedin.com/in/lokmanezeddoun",
	email: "lokmanezeddoun@gmail.com",
	mediumLink: "https://medium.com/@lokmanezeddoun",
	twitterLink: "https://twitter.com/ZeddounLokmane",
	instagramLink: null,
};

export const navigation = {
	about: "À propos",
	skills: "Compétences",
	experience: "Expérience",
	projects: "Projets",
	certificates: "Certificats",
};

export const aboutMe = [
	"Étudiant en cinquième année à l'École Supérieure d'Informatique (ESI SBA), préparant un Master en Intelligence Artificielle et Science des Données. Passionné par la vision par ordinateur, l'ingénierie IA et la construction de systèmes intelligents résolvant des problèmes concrets.",
	"Mon ensemble d'outils techniques couvre l'intégralité du pipeline IA/ML — de l'étiquetage et l'augmentation des données, à l'entraînement de modèles avec PyTorch et TensorFlow, en passant par le suivi d'expériences avec Weights & Biases et l'entraînement cloud sur GCP. J'ai de l'expérience en détection d'objets (YOLOv11), traitement d'images/vidéos avec OpenCV et déploiement de modèles en production.",
	"Au-delà de l'IA, j'apporte une expérience significative en ingénierie full-stack et backend : construction de microservices avec Node.js, NestJS et GraphQL (Apollo Federation), conception de systèmes temps réel avec Socket.IO et RabbitMQ, et gestion de déploiements conteneurisés avec Docker, Kubernetes et pipelines CI/CD.",
];

export const experiences = [
	{
		period: "Déc 2024 — Oct 2025",
		company: "Eagle Orbit",
		location: "Distant",
		role: "Ingénieur Backend",
		bullets: [
			"Collaboration avec des équipes spécialisées pour développer des solutions logicielles évolutives pour des clients entreprise utilisant Bun.js et Apollo GraphQL federation.",
			"Conception et implémentation de microservices avec Apollo Federation pour une communication efficace entre services.",
			"Construction de systèmes de messagerie haute performance utilisant RabbitMQ et Redis pour les modules pub/sub, recherche et scripting.",
			"Gestion de déploiements conteneurisés avec Docker, Kubernetes et Jenkins CI/CD pour les tests et déploiements automatisés.",
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
		role: "Développeur Full Stack — Système TSM & IoT",
		bullets: [
			"Conception et développement d'un système de gestion de transport et d'expédition (TSM) utilisant Node.js et React.",
			"Implémentation d'un serveur TCP servant de décodeur de paquets pour les trackers GPS, permettant la réception et l'interprétation de données IoT en temps réel.",
			"Développement de fonctionnalités temps réel avec Socket.IO pour le suivi de véhicules en direct et les notifications.",
			"Intégration d'AWS S3 pour le stockage d'objets et mise en place de pipelines CI/CD avec GitHub Actions.",
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
		location: "Sur site",
		role: "Développeur Full Stack — Nest.js, React, TypeScript",
		bullets: [
			"Développement d'une application web pour la gestion des commandes et services utilisant Nest.js, React et TypeScript.",
			"Implémentation de la gestion des utilisateurs, impression automatisée des commandes, modules de services et financiers.",
			"Intégration de l'authentification et de l'autorisation basée sur les rôles à travers les niveaux organisationnels.",
			"Optimisation des flux de travail et amélioration des interfaces administrateur.",
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
		description: "EF SET Certificat d'Anglais C1 — Score 62/100, niveau avancé",
		technologies: ["Anglais", "C1"],
	},
	{
		period: "2025",
		link: "#",
		image: "helsinki.jpg",
		description:
			"EDUCOSYS IA Générative Pratique — Formation pratique sur l'IA générative et les modèles de langage",
		technologies: ["IA Générative", "LLMs"],
	},
	{
		link: "https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/6b7abfb198216118ef0b273c074a2ac0",
		image: "helsinki.jpg",
		period: "2024",
		description:
			"Full Stack Open (Université d'Helsinki) — Stack MERN, tests, CI/CD et conteneurisation",
		technologies: [
			"React",
			"Express",
			"Node.js",
			"Docker",
			"CI/CD",
			"Tests",
		],
	},
	{
		link: "#",
		image: "helsinki.jpg",
		period: "2024",
		description:
			"Graph Developer Professional — Apollo Federation pour la construction de supergraphes fédérés",
		technologies: ["GraphQL", "Apollo Federation"],
	},
];

export const projects = [
	{
		title: "ALPR — Reconnaissance de Plaques",
		description:
			"Détection, reconnaissance et extraction en temps réel de plaques d'immatriculation pour des cas d'utilisation sécuritaires. Ingestion vidéo depuis des caméras IP/USB (RTSP) ; alertes avec métadonnées de plaques persistées en base de données. APIs backend avec Flask ; tableau de bord de monitoring construit avec Next.js. Modèles en PyTorch utilisant YOLOv11 pour la détection et un classifieur de couleurs entraîné. Suivi d'entraînement et d'expériences via Weights & Biases ; tâches exécutées sur GCP.",
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
			"Moteur de recherche d'images basé sur le contenu utilisant YOLOv11-m pour l'indexation et la recherche sémantique. Extraction d'embeddings d'objets à partir d'images et recherche par similarité à travers les jeux de données.",
		url: "https://github.com/lokmanzeddoun",
		technologies: ["Python", "YOLOv11", "Vision par Ordinateur"],
		image: "default-project.png",
	},
	{
		title: "Agent Bien-Être Mental",
		description:
			"Agent conversationnel de bien-être mental basé sur le framework AutoGen et les LLMs. Fournit des conversations empathiques et contextuelles pour soutenir le bien-être mental à travers un dialogue alimenté par l'IA.",
		url: "https://github.com/lokmanzeddoun",
		technologies: ["Python", "AutoGen", "LLMs", "Agents IA"],
		image: "default-project.png",
	},
	{
		title: "Plateforme E-Learn",
		description:
			"Plateforme éducative complète utilisant Express.js et MySQL, facilitant l'interaction entre étudiants, enseignants et administrateurs. Fonctionnalités incluant authentification, contrôle d'accès basé sur les rôles, forums de discussion, accès aux MOOC, soumission de quiz et progression automatisée.",
		url: "https://github.com/ibrahimn9/E-Learn-Platform",
		technologies: ["Node.js", "Express.js", "MySQL", "ffmpeg", "Google Drive"],
		image: "e-learn.jpg",
	},
];
