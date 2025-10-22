import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Me - Reilly Oldham",
    description: "Learn more about Reilly Oldham - software engineer, backend specialist, and full-stack developer.",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-primary-cream">
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold text-primary-charcoal mb-8">About Me</h1>
                    
                    <div className="prose prose-lg text-primary-charcoal">
                        <p className="text-xl mb-6">
                            👋 This page is currently under construction, but I&apos;m excited to share more about myself soon!
                        </p>
                        
                        <p className="mb-6">
                            While you&apos;re here, feel free to check out some of my recent projects:
                        </p>
                        
                        <ul className="list-disc ml-6 mb-8 space-y-2">
                            <li><strong>Human Motion Generation Research</strong> - Diffusion-based human motion generation from my honours work at Victoria University</li>
                            <li><strong>Wellington Transport Alexa Skill</strong> - Voice-powered public transport information for Wellington commuters</li>
                            <li><strong>Minigun</strong> - A modern webapp providing a new UI for Raygun&apos;s crash reporting data</li>
                            <li><strong>Raygun MCP Server</strong> - One of the first Model Context Protocol servers for AI agents</li>
                        </ul>
                        
                        <p className="mb-6">
                            You can view all of these projects in detail on my <a href="/projects" className="text-primary-teal underline hover:no-underline">projects page</a>.
                        </p>
                        
                        <p>
                            Want to see more of my work? Check out my <a href="https://github.com/ReillyBrogan" target="_blank" rel="noopener noreferrer" className="text-primary-teal underline hover:no-underline">GitHub profile</a> for additional projects and contributions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}