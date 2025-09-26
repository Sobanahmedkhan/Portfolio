"use client"

import type React from "react"

import {
    Mail,
    Clock,
    Send,
    MessageSquare,
    Github,
    Linkedin,

} from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        projectType: "",
    })

    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })

            const result = await response.json()

            if (response.ok) {
                alert("Thank you for your message! I'll get back to you within 24 hours.")
                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                    projectType: "",
                })
            } else {
                alert(result.message || "Something went wrong.")
            }
        } catch (error) {
            console.error("Submission error:", error)
            alert("An error occurred. Please try again.")
        }

        setIsSubmitting(false)
    }


    const projectTypes = [
        "Web Development",
        "Mobile App Development",
        "Full Stack Development",
        "UI/UX Design",
        "Consulting",
        "Other",
    ]

    return (
        <div className="min-h-screen bg-background">
            {/* Enhanced Hero Section */}
            <section className="relative py-32 px-4 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-background to-blue-500/5"></div>
                <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

                {/* Decorative Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="text-center mb-16">
                        {/* Animated Badge */}
                        <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm font-medium mb-8 border border-green-500/20">
                            <MessageSquare className="w-4 h-4" />
                            Let's Connect
                        </div>

                        {/* Main Heading with Gradient */}
                        <h1 className="text-7xl md:text-9xl font-black tracking-tight mb-8">
                            <span className="bg-black bg-clip-text text-transparent">
                                CONTACT
                            </span>
                        </h1>

                        {/* Decorative Line */}
                        <div className="flex items-center justify-center gap-4 mb-8">
                            <div className="h-px bg-gradient-to-r from-transparent to-border w-24"></div>
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <div className="h-px bg-gradient-to-r from-border to-transparent w-24"></div>
                        </div>

                        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">

                            Ready to bring your ideas to life? Let's discuss your project and explore how we can work together to
                            create something amazing
                        </p>
                    </div>

                    {/* Availability Info */}
                    <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-green-500" />
                            <span>Usually responds within 24 hours</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span>Available for new projects</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form & Info Section */}
            <section className="py-20 px-4 bg-muted/30">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <div className="bg-card border rounded-2xl p-8 shadow-sm">
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold mb-4">Send me a message</h2>
                                <p className="text-muted-foreground">

                                    Fill out the form below and I'll get back to you as soon as possible. Let's discuss your project!
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                                            Full Name *
                                        </label>
                                        <Input
                                            id="name"
                                            name="name"
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder="John Doe"
                                            className="w-full"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                                            Email Address *
                                        </label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="john@example.com"
                                            className="w-full"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium mb-2">
                                            Subject *
                                        </label>
                                        <Input
                                            id="subject"
                                            name="subject"
                                            type="text"
                                            required
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            placeholder="Project Discussion"
                                            className="w-full"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                                            Project Type
                                        </label>
                                        <select
                                            id="projectType"
                                            name="projectType"
                                            value={formData.projectType}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                                        >
                                            <option value="">Select project type</option>
                                            {projectTypes.map((type) => (
                                                <option key={type} value={type}>
                                                    {type}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                                        Message *
                                    </label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        required
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder="Tell me about your project, timeline, and any specific requirements..."
                                        rows={10}
                                        className="w-full resize-none"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-4 h-4" />
                                            Send Message
                                        </>
                                    )}
                                </Button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            {/* About Section */}
                            <div className="bg-card border rounded-2xl p-8 shadow-sm">

                                <h3 className="text-2xl font-bold mb-4">Let's work together</h3>

                                <p className="text-muted-foreground mb-6 leading-relaxed">I'm passionate about creating innovative digital solutions make a real impact. Whether you're a startup looking to build your MVP or an established company wanting to modernize your tech stack, I'm here to help bring your vision to life.</p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                                            <Mail className="w-6 h-6 text-green-600" />
                                        </div>
                                        <div>
                                            <p className="font-medium">Email</p>
                                            <p className="text-sm text-muted-foreground">syedmohsinsheeraz123@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                                            <Linkedin className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <div>
                                            <p className="font-medium">LinkedIn</p>
                                            <p className="text-sm text-muted-foreground">linkedin.com/in/mohsin-sheeraz-aa4a7a23a</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                                            <Github className="w-6 h-6 text-purple-600" />
                                        </div>
                                        <div>
                                            <p className="font-medium">GitHub</p>
                                            <p className="text-sm text-muted-foreground">github.com/MohsinSheeraz</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
