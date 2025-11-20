<template>
    <div class="min-h-screen">
        <h1 class="text-center ">Projects</h1>
        <ol
            class="pl-20 text-left   list-decimal font-mono text-4xl font-bold tracking-tight text-black dark:text-white">

            <li v-for="(project, index) in projects" :key="index" class="my-4 ">
                <span class="hover:text-primary_hover dark:hover:text-yellow-400 underline underline-offset-4"><a
                        :href="project.link" target="_blank" rel="noopener noreferrer">{{ project.name }}</a></span>
                <p>{{ project.bio }}</p>
                <p class="text-zinc-800 dark:text-zinc-400 font-sans ">Skills Showcased: {{ project.techStack }}</p>
            </li>
        </ol>

    </div>
</template>

<script>
export default {
    name: "Projects",
    setup() {
        useHead({
            title: 'Portfolio - Projects',
            meta: [
                {
                    name: 'description',
                    content: 'This page contains details of web applications or cli tools bootstrapped by me.'
                },
            ]
        })
        return {}
    },
    data() {
        return {
            projects: [
                {
                    name: 'Leisure Trove',
                    link: 'https://leisuretrove.com/',
                    bio: `LeisureTrove is a discovery platform that helps users find curated hangout spots, local experiences, and memorable activities in any city. I built both the backend and frontend, implementing OAuth authentication, Google Maps integrations, CAPTCHA verification, and FCM push notifications. I also developed the real-time infrastructure using a Go-based WebSocket server, containerized the system with Docker, orchestrated deployments with Kubernetes for autoscaling, and documented all APIs using Swagger.`,
                    techStack: 'PHP/Laravel, Nuxt, Go/GinGonic, MySQL'
                },
                {
                    name: 'TryFaru',
                    link: 'https://www.tryfaru.com/',
                    bio: `TryFaru is an event contract trading platform—similar to Kalshi—where users can buy and sell
                    contracts based on real-world events. This was a contract project for a client, where I designed the entire platform and built both the frontend and backend from scratch. I implemented robust testing with PHPUnit, full API documentation with Swagger, real-time features using Laravel Reverb WebSockets, and used Telescope for debugging and Horizon for managing queues.`,
                    techStack: 'Nuxt3, Laravel 9, TailwindCSS'
                },
                {
                    name: 'Job Scraper',
                    link: 'https://github.com/doobie-droid/job_scraper',
                    bio: `Job Scraper is a robust automation tool built to collect job listings from some of the most popular career platforms on the web. It combines web scraping and REST APIs to fetch jobs based on customizable keyword searches — all centralized in one streamlined system.
                    Whether you're sourcing remote developer gigs or scouting across mainstream job boards, Job Scraper delivers relevant listings from across the internet.
                    Currently, it supports data aggregation from platforms like LinkedIn, TestGorilla, Workable, RemoteAfrica, GolangProjects, and BreezyHR — giving you access to a broad and diverse range of job opportunities.`,
                    techStack: 'Golang'
                },
                {
                    name: 'Flok Node – NFT Minting & Transaction Server',
                    link: 'https://github.com/doobie-droid/Tryflok-nodeserver',
                    bio: `Flok Node is a backend server built to handle minting and purchasing NFTs through a streamlined Ethereum-based flow. It serves as the core infrastructure for signing, deploying, and interacting with smart contracts, and it supports both local and testnet environments.
                    Designed with developer flexibility and blockchain scalability in mind, the server integrates Ethereum smart contract deployment using Hardhat, wallet key management via .env configurations, and a Kafka-driven event system powered by Node.js and Docker.
                    Whether you're minting new assets or interacting with token marketplaces, Flok Node simplifies the process by providing pre-built commands, structured response formats, and real-time consumer handling.`,
                    techStack: 'Javascript, Solidity, Kafka, Docker'
                },
                {
                    name: 'Unsplash Clone',
                    link: 'https://doobie-droid.github.io/unsplash-clone/',
                    bio: `This project is a lightweight Unsplash clone that utilizes the Unsplash API to display and search for high-quality images. It features a responsive masonry-grid layout built entirely WITHOUT external dependencies — delivering a smooth and modern user experience with minimal overhead.
                    `,
                    techStack: 'Javascript, Github Actions, SCSS, NUXT3'
                },
                {
                    name: 'Product Management App',
                    link: 'https://pay4me.laravel.cloud/docs',
                    bio: `This project is a technical assessment for Pay4Me.app, focused on building a fully functional CRUD application using the Filament admin panel. It includes foundational unit tests to ensure reliability and maintainability, along with auto-generated API documentation powered by Laravel Scribe.
                    The project highlights clean architecture, usability, and developer-friendly tooling in a Laravel environment.
                    `,
                    techStack: 'Laravel, FilamentPHP, Laravel Scribe, PhpUnit'
                },
                {
                    name: 'Appointment Management App',
                    link: 'https://github.com/doobie-droid/hospital-backend',
                    bio: `This project is a backend technical assessment for Clafiya, built to handle appointment booking functionality for patients. It provides a clean and efficient API system for scheduling, managing, and storing patient appointments.
                    Developed with Laravel, the system leverages Docker for consistent local development and testing environments.
                    `,
                    techStack: 'Laravel, Docker, Payment Integration (Flutterwave API), PhpUnit'
                },
                {
                    name: 'Shopify Onboarding Page Clone',
                    link: 'https://shopify-hackathon-sigma.vercel.app/',
                    bio: `This project is a responsive, ARIA-accessible user onboarding page for Shopify, built entirely with vanilla JavaScript and CSS. It focuses on clean UI/UX design, keyboard navigation support, and accessibility best practices to ensure an inclusive experience for all users.
                    Submitted as part of the LevelUp UI Hackathon, the project demonstrates how to deliver high-quality user flows without relying on external frameworks.
                    `,
                    techStack: 'Javascript, CSS, HTML, Building for Accessibility'
                },
            ]
        };
    }
};
</script>