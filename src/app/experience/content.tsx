import { Calendar, MapPin, Building2, Award, TrendingUp, Users, Code, Zap } from "lucide-react"

export default function ExperiencePage() {
    const workExperience = [
        {
            year: "March, 2024 - Febuary, 2025",
            company: "FissionFox",
            position: "Associate Front End Developer",
            location: "Karachi, Pakistan",
            duration: "11 Months",
            description:
                "Member of a cross-functional team of 8 developers in building next-generation real world project. Iimplemented scalable microservices (revisions) after the project completion as a part of our curtosy. Aligned work in Agile way to client and sales satisfaction.",
            achievements: [
                "Increase Pace development in UI UX.",
                "Handled clients via voice call or chat whenever emmergency occurs. ",
                "Learn the worth of AI to keep in the game",
            ],
            technologies: [
                "React",
                "Node.js",
                "TypeScript",
                "Next Js",
                "Tailwind",
                "RadixUI",
                "Express",
                "Mongo"
            ]
        },
        {
            year: "August, 2022 - July, 2024",
            company: "DigitEMB",
            position: "PHP WordPress Developer",
            location: "Austin, TX",
            duration: "11 Months",
            description:
                "Joined a commercial firm as a data entry associate and demonstrated a strong interest in technical work. Collaborated with the team to successfully update the company’s main website using WordPress, improving both functionality and design. Subsequently took initiative to modernize the legacy client dashboard, originally built in outdated core PHP, by enhancing its features and redesigning the user interface to be more sleek, responsive, and user-friendly.",
            achievements: [
                "Built Main Site for Company for real world clients",
                "Made the SMTP talking in the deprecated project",
            ],
            technologies: [
                "WordPress",
                "PHP",
                "HTML",
                "CSS",
                "JavaScript",
                "UI/UX"
            ]
        },
    ]

    return (
        <div className="min-h-screen bg-background">
            {/* Enhanced Hero Section */}
            <section className="relative py-32 px-4 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

                {/* Decorative Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="text-center mb-16">
                        {/* Animated Badge */}
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8 border border-primary/20">
                            <Zap className="w-4 h-4" />
                            Professional Experience
                        </div>

                        {/* Main Heading with Gradient */}
                        <h1 className="text-7xl md:text-9xl font-black tracking-tight mb-8">
                            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                                Experience
                            </span>
                        </h1>

                        {/* Decorative Line */}
                        <div className="flex items-center justify-center gap-4 mb-8">
                            <div className="h-px bg-gradient-to-r from-transparent to-border w-24"></div>
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <div className="h-px bg-gradient-to-r from-border to-transparent w-24"></div>
                        </div>

                        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Crafting digital experiences and leading teams to build scalable solutions that impact millions of users
                            worldwide
                        </p>
                    </div>
                </div>
            </section>

            {/* Enhanced Timeline Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-7xl">
                    <div className="relative">
                        {/* Main horizontal line */}
                        <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent hidden lg:block"></div>

                        {/* Vertical line for mobile */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-border to-transparent lg:hidden"></div>

                        <div className="space-y-20 lg:space-y-32">
                            {workExperience.map((job, index) => (
                                <div
                                    key={index}
                                    className={`relative flex flex-col lg:flex-row items-start lg:items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                                        }`}
                                >
                                    {/* Enhanced Timeline dot */}
                                    <div className="absolute left-6 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-6 h-6 bg-gradient-to-br from-primary to-primary/60 rounded-full border-4 border-background shadow-lg z-10 flex items-center justify-center">
                                        <div className="w-2 h-2 bg-background rounded-full"></div>
                                    </div>

                                    {/* Enhanced Content card */}
                                    <div className={`ml-16 lg:ml-0 lg:w-5/12 ${index % 2 === 0 ? "lg:pr-16" : "lg:pl-16"}`}>
                                        <div className="bg-card border rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-primary/20">
                                            {/* Header Section */}
                                            <div className="mb-6">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                                                        <Calendar className="w-4 h-4" />
                                                        {job.year}
                                                    </div>
                                                    <span className="text-sm text-muted-foreground">({job.duration})</span>
                                                </div>

                                                <h3 className="text-2xl font-bold mb-2">{job.position}</h3>

                                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground mb-2">
                                                    <div className="flex items-center gap-2">
                                                        <Building2 className="w-4 h-4" />
                                                        <span className="font-medium">{job.company}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <MapPin className="w-4 h-4" />
                                                        <span>{job.location}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <p className="text-muted-foreground mb-6 leading-relaxed">{job.description}</p>

                                            {/* Key Achievements */}
                                            <div className="mb-6">
                                                <h4 className="flex items-center gap-2 font-semibold mb-3">
                                                    <Award className="w-4 h-4 text-primary" />
                                                    Key Achievements
                                                </h4>
                                                <ul className="space-y-2">
                                                    {job.achievements.map((achievement, achIndex) => (
                                                        <li key={achIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                            <TrendingUp className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                            <span>{achievement}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Technologies */}
                                            <div>
                                                <h4 className="font-semibold mb-3">Technologies & Tools</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {job.technologies.map((tech, techIndex) => (
                                                        <span
                                                            key={techIndex}
                                                            className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium border border-primary/20"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Spacer for desktop layout */}
                                    <div className="hidden lg:block lg:w-2/12"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Enhanced Call to action */}
            <section className="py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5"></div>
                <div className="container mx-auto max-w-4xl text-center relative z-10">
                    <h2 className="text-4xl font-bold mb-4">Ready to Build Something Amazing?</h2>
                    <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
                        Let's discuss how my experience in leading teams and building scalable solutions can drive your next project
                        to success.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/contact" className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg cursor-pointer">
                            Let's Connect
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}
