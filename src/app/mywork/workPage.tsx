import { Calendar, Zap, Code2, Globe, Database, Palette } from "lucide-react"
import FitnessPhoto from "@/Icons/FitnessMain.png"
import Feedback from "@/Icons/feedback.png"
import CSGO from "@/Icons/CSGO.png"
import Auction from "@/Icons/Auction.jpg"
import Link from "next/link"
import Image from "next/image"

export default function WorkPage() {
    const projects = [
        {
            id: 1,
            title: "FitnessTracker - Fitness Tracker Application",
            category: "MERN Stack Web Application",
            description:
                "A comprehensive sustainability tracking platform that helps individuals monitor their weight, gain management, and energy consumption. Features real-time analytics, automated reporting.",
            longDescription:
                "A comprehensive, user-centric sustainability tracking platform designed to empower individuals in managing their personal health and environmental impact. This innovative solution integrates weight and gain management with energy consumption tracking, offering a holistic view of personal wellness and sustainability practices. The platform leverages real-time analytics to provide actionable insights into users' daily habits, enabling smarter decisions for healthier living and reduced environmental footprints. With automated reporting, users receive regular summaries and progress updates, making it easy to stay on track with personal goals and long-term improvements. Whether users are focused on maintaining a healthy weight, reducing their energy usage, or achieving a balanced lifestyle, the platform delivers a seamless, intuitive experience backed by modern technology. Through customizable dashboards, intelligent goal tracking, and data-driven recommendations, it encourages sustainable behavior while enhancing overall well-being."
            ,
            image: FitnessPhoto,
            technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS", "D3.js", "Docker", "Redis"],
            duration: "1 month",
            status: "Live",
            liveUrl: "https://eproject-fitness.vercel.app/",
            year: "2025",
        },
        {
            id: 2,
            title: "Feedback Translator - Client Feedback Translator",
            category: "SaaS Platform",
            description:
                "A problem solving projects for those who find it hard or difficult to understand what their client is asking or definning so with the assist of an AI it would be no brainer to go deep inside their messages or logic",
            longDescription:
                "Client Feedback Translator is a platform designed to assist individuals who face challenges in their work, projects, or professional communication, often struggling to respond effectively under pressure. This AI-powered tool steps in to help users craft thoughtful and appropriate responses by allowing them to choose from different tones—such as soft, angry, or professional—tailoring the message to suit the context. It is especially useful for sales teams and freelancers who frequently encounter difficult conversations and risk damaging their professional image due to emotional or delayed responses. The primary goal of this tool is to raise awareness about how AI can support better communication, enhance professionalism, and reduce stress in high-stakes interactions.  ",
            image: Feedback,
            technologies: ["Next", "Node", "Express", "Tailwind"],
            duration: "1 week",
            role: "Full Stack Developer",
            status: "Live",
            liveUrl: "https://feedback-translator.vercel.app/",
            year: "2025",
        },
        {
            id: 3,
            title: "CSGO - CS Skins Game Application",
            category: "Mobile & Web Application",
            description:
                "A CSGO Theme web application with exquisite UI and Interface.",
            longDescription:
                "A CSGO Theme web application with exquisite UI and Interface, Static UI with responiveness",
            image: CSGO,
            technologies: ["React", "Next.js", "Tailwind", "ShadCN", "RadixUI"],
            duration: "3 weeks",
            status: "Live",
            liveUrl: "https://csgo-ivory.vercel.app/",
            year: "2025",
        },
        {
            id: 4,
            title: "PAKAUCTION - Auction Website",
            category: "Mobile & Web Application",
            description:
                "A platform where user can buy, navigate or enlist their products with some signup benefits.",
            longDescription:
                "PakAuction is a real world project in upcoming months with have a vast benefits for users and bidders too the backend is underprocess with in a good backend developer when it comes out I hope it will make their mark up to the notch. The live URL is not provided right now it will be given soon!",
            image: Auction,
            technologies: ["HTML/CSS", "JavaScript", "Node", "TailwindCSS"],
            duration: "2 weeks",
            status: "Not deployed",
            liveUrl: "#",
            year: "2025",
        },
    ]

    return (
        <div className="min-h-screen bg-background">
            {/* Enhanced Hero Section */}
            <section className="relative py-32 px-4 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-background to-purple-500/5"></div>
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

                {/* Decorative Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="text-center mb-16">
                        {/* Animated Badge */}
                        <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm font-medium mb-8 border border-blue-500/20">
                            <Code2 className="w-4 h-4" />
                            Featured Projects
                        </div>

                        {/* Main Heading with Gradient */}
                        <h1 className="text-7xl md:text-9xl font-black tracking-tight mb-8">
                            <span className="bg-black bg-clip-text text-transparent">
                                PROJECTS
                            </span>
                        </h1>

                        {/* Decorative Line */}
                        <div className="flex items-center justify-center gap-4 mb-8">
                            <div className="h-px bg-gradient-to-r from-transparent to-border w-24"></div>
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <div className="h-px bg-gradient-to-r from-border to-transparent w-24"></div>
                        </div>

                        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Innovative solutions built with cutting-edge technologies, from concept to deployment, showcasing
                            creativity and technical excellence
                        </p>
                    </div>
                </div>
            </section>

            {/* Projects Grid Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-7xl">

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {projects.map((project, index) => (
                            <div
                                key={project.id}
                                className="group bg-card border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:border-blue-500/20"
                            >
                                {/* Project Image */}
                                <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 h-64">
                                    <Image
                                        src={project.image || "/placeholder.svg"}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                                            {project.year}
                                        </span>
                                    </div>
                                    <div className="absolute top-4 right-4">
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-medium ${project.status === "Live" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                                                }`}
                                        >
                                            {project.status}
                                        </span>
                                    </div>
                                </div>

                                {/* Project Content */}
                                <div className="p-8">
                                    {/* Header */}
                                    <div className="mb-6">
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                                            <Palette className="w-4 h-4" />
                                            {project.category}
                                        </div>
                                        <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{project.longDescription}</p>
                                    </div>

                                    {/* Project Details */}
                                    <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4 text-blue-500" />
                                            <span className="text-muted-foreground">Duration: {project.duration}</span>
                                        </div>
                                    </div>

                                    {/* Technologies */}
                                    <div className="mb-6">
                                        <h4 className="font-semibold mb-3">Technologies Used</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-medium border border-blue-200"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-4">
                                        <Link
                                            href={project.liveUrl}
                                            className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm"
                                        >
                                            <Globe className="w-4 h-4" />
                                            Live Demo
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
                <div className="container mx-auto max-w-4xl text-center relative z-10">
                    <h2 className="text-4xl font-bold mb-4">Have a Project in Mind?</h2>
                    <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
                        Let's collaborate to bring your ideas to life with innovative solutions and cutting-edge technology.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/contact" className="px-8 py-4 bg-black text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg">
                            Start a Project
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}
