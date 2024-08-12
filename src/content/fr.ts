export const summary = {
	name: "Zeddoun Lokmane",
	role: "Développeur Full Stack",
	bio: "Bonjour, je suis Zeddoun Lokmane et je suis un développeur full-stack passionné. Je maîtrise à la fois les technologies front-end comme HTML, CSS et les frameworks JavaScript comme React et Next. J'ai également une solide compréhension du développement back-end utilisant Node.js et des frameworks comme Nest.js et Express. J'aime relever des défis complexes et fournir des solutions centrées sur l'utilisateur tout au long du cycle de développement.",
	githubLink: "https://github.com/lokmanzeddoun",
	linkedinLink: "https://www.linkedin.com/in/lokmane-zeddoun-22609125b/",
	email: "lokmanezeddoun@gmail.com",
	mediumLink: "https://medium.com/@lokmanezeddoun",
	twitterLink: "https://twitter.com/ZeddounLokmane",
	instagramLink: null,
};

export const navigation = {
	about: "À propos de moi",
	skills: "Compétences",
	projects: "Projets",
	experience: "Certificats",
};

export const aboutMe = [
	"Étudiant en 4ème année d'informatique aspirant à devenir développeur Full Stack. Passionné par la technologie et le développement logiciel, je recherche actuellement des opportunités pour appliquer et élargir mes compétences dans l'ensemble de la pile de développement web.",
	"Mon parcours comprend une solide base en principes d'informatique, une maîtrise des technologies full stack telles que NodeJS, React, TypeScript, Docker et AWS, ainsi qu'une expérience avec les bases de données SQL et NoSQL. Je suis bien versé dans les principes du Clean Code et j'ai un historique de construction de systèmes évolutifs et efficaces.",
	"En tant que futur développeur Full Stack, je suis équipé pour gérer le développement front-end et back-end. Je suis curieux, créatif et toujours désireux de relever de nouveaux défis dans le monde de la technologie. Ouvert au travail et enthousiaste à l'idée de contribuer avec mes compétences complètes à des projets innovants.",
];

export const Certifications = [
	{
		period: "13 nov. 2022",
		link: "https://learn.nvidia.com/certificates?id=fb65b41f502546b490baeb5e23d2453e",
		image: "nvidia.png",
		description: "Atelier/Fondamentaux de l'apprentissage profond",
		technologies: ["ApprentissageProfond", "TensorFlow", "Pytorch"],
	},
	{
		period: "Jan 2022 — Juin 2023",
		link: "https://badgr.com/public/assertions/B03j9Vr2SyGZw0ND1Fd8rA",
		image: "postman.png",
		description:
			"Les experts étudiants Postman maîtrisent les compétences essentielles requises pour consommer des API dans Postman et des applications.",
		technologies: ["Postman", "Node.js"],
	},
	{
		link: "https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/6b7abfb198216118ef0b273c074a2ac0",
		image: "helsinki.jpg",
		period: "Août 2024",
		description: "Développement Web Full Stack open",
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
		period: "Août 2024",
		description: "GraphQL",
		technologies: ["graphql", "apollo-server", "apollo-client"],
	},
	{
		link: "https://studies.cs.helsinki.fi/stats/api/certificate/fs-containers/en/f9d3b3a2b1d8cdd893d88bef3094e012",
		image: "helsinki.jpg",
		period: "Juillet 2024",
		description: "Introduction aux conteneurs",
		technologies: ["Docker", "docker-compose"],
	},
	{
		link: "https://studies.cs.helsinki.fi/stats/api/certificate/fs-psql/en/a61b4db2ac597190d05554dcf4523823",
		image: "helsinki.jpg",
		period: "Août 2024",
		description: "Base de données relationnelle avec ORM",
		technologies: ["Sequelize", "Express"],
	},
];

export const projects = [
	{
		title: "E-Learn",
		description:
			"Développé une plateforme éducative complète utilisant Express.js et MySQL, facilitant une interaction transparente entre étudiants, enseignants et administrateurs. Implémenté l'authentification des utilisateurs, le contrôle d'accès basé sur les rôles et des points d'extrémité API pour la gestion du matériel de cours. Le système comprend des fonctionnalités pour les forums de discussion, l'accès aux MOOC, la soumission de quiz, la progression automatisée des étudiants et les tâches administratives. Conçu un schéma de base de données robuste pour soutenir des flux de travail éducatifs complexes et maintenir l'intégrité des données. Ce projet a rationalisé les processus administratifs et fourni une plateforme centralisée pour l'apprentissage et la collaboration, améliorant significativement l'expérience éducative globale.",
		url: "https://github.com/ibrahimn9/E-Learn-Platform",
		technologies: ["Node.js", "Express.js", "MySql", "ffempeg", "Google Drive"],
		image: "e-learn.jpg",
	},
	{
		title: "Météo",
		description:
			"Développé une application météo responsive utilisant React et React Query. Intégré l'API OpenWeather pour récupérer des données météorologiques en temps réel pour les emplacements spécifiés par l'utilisateur. Implémenté des fonctionnalités incluant les conditions météorologiques actuelles, la température, l'humidité, la vitesse du vent et une prévision sur 5 jours. Utilisé React Query pour une récupération et une mise en cache efficaces des données, améliorant les performances de l'application et l'expérience utilisateur. L'application présente une conception d'interface utilisateur épurée et des interactions utilisateur intuitives, démontrant une maîtrise du développement frontend et de l'intégration d'API tierces.",
		url: "https://github.com/lokmanzeddoun/weather-app",
		technologies: ["React.js", "react-query", "api openWeather", "redux"],
		image: "weather.jpg",
	},
	{
		title: "Crypto Cli",
		description:
			"Développé une application d'interface en ligne de commande utilisant Node.js et Yargs pour les passionnés de cryptomonnaies. L'application permet aux utilisateurs de récupérer des données en temps réel sur les cryptomonnaies, y compris les prix, les capitalisations boursières et les volumes d'échange. Implémenté des commandes pour le suivi des prix, la gestion de portefeuille et l'analyse de base du marché. Utilisé Yargs pour l'analyse des arguments en ligne de commande, fournissant une interface conviviale avec des options personnalisables. Intégré à une API de cryptomonnaie pour garantir des informations à jour et précises. Ce projet démontre une maîtrise dans la construction d'outils CLI efficaces et le travail avec des données financières dans un environnement Node.js.",
		url: "https://github.com/lokmanzeddoun/node-projects/tree/main/crypto-cli",
		technologies: ["typescript", "node.js", "yargs", "chalk"],
		image: "cli.png",
	},
	{
		title: "Bot Telegram",
		description:
			"Développé un bot Telegram utilisant Node.js et le framework Telegraf pour aider les utilisateurs à trouver et récupérer des informations sur les cours souhaités. Le bot permet aux utilisateurs de rechercher des cours par mots-clés, sujets ou instructeurs. Implémenté le traitement du langage naturel pour interpréter les requêtes des utilisateurs et fournir des suggestions de cours pertinentes. Intégré à une base de données éducative ou une API pour récupérer les détails des cours, y compris les descriptions, les horaires et les prérequis. Les fonctionnalités comprennent des recommandations de cours, des aperçus de syllabus et des alertes de notification pour la disponibilité des cours. Ce projet met en valeur les compétences en développement de bots, l'intégration d'API et la création d'interfaces conviviales pour les applications de technologie éducative.",
		url: "https://github.com/lokmanzeddoun/fetch-course",
		technologies: ["typescript", "node.js", "telegraf", "puppeteer"],
		image: "tele.png",
	},
];
