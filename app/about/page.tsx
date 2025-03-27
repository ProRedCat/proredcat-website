import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Me - Reilly Oldham",
    description: "Learn more about Reilly Oldham - software engineer, backend specialist, and full-stack developer.",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-primary-cream">
            <div className="container mx-auto px-4 py-8">
                <div className="prose prose-neutral dark:prose-invert max-w-none">
                    <h1 className="text-4xl font-bold mb-8">About Me</h1>
                    
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">Personal Background</h2>
                        <p className="text-lg mb-4">
                            I'm a software engineer with a strong background in backend, web, and cloud development, 
                            currently expanding my expertise at Raygun. With experience at industry leaders like Microsoft 
                            and Raygun, I have a proven ability to lead projects to success, including developing 
                            award-winning features that enhance user experience and drive customer adoption. 
                            I'm passionate about solving complex problems and continuously learning new technologies.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">Career Journey</h2>
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-medium mb-2">Software Engineer at Raygun</h3>
                                <p className="text-neutral-600 dark:text-neutral-400 mb-2">November 2023 - Present</p>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>Developed and launched the AI Error Resolution feature, utilizing Large Language Models (LLMs) to identify root causes of errors, which won the Innovation Gold award at the Wellington Gold Awards</li>
                                    <li>Revamped Raygun's MAUI crash reporting provider and added real user monitoring support, enabling a seamless transition for Xamarin developers to MAUI with enhanced diagnostic tooling</li>
                                    <li>Enhanced Raygun4Net's stack trace usability by implementing symbolication support for Portable PDBs in .NET Core and MAUI</li>
                                    <li>Authored multiple technical blogs for Raygun, including a DZone-featured article on benchmarking OpenAI models for automated error resolution</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-medium mb-2">Software Engineer Intern at Microsoft</h3>
                                <p className="text-neutral-600 dark:text-neutral-400 mb-2">November 2022 - February 2023</p>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>Developed a real-time cloud monitoring solution for a large-scale telecommunication system running on Azure</li>
                                    <li>Extended monitoring capabilities to load testing environments with a customizable Graphana dashboard</li>
                                    <li>Enabled customizable alerts on key metrics for actionable insights</li>
                                    <li>Gained proficiency in Java, JVM, and Java Agents for in-depth analysis and logging</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-medium mb-2">Software Developer at DroneMate</h3>
                                <p className="text-neutral-600 dark:text-neutral-400 mb-2">December 2021 - November 2022</p>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>Developed automation tools using Python and Selenium, streamlining processes and reducing manual work</li>
                                    <li>Consulted on the integration of new technologies into the company's workflow</li>
                                    <li>Scheduled and led meetings with potential partner companies, particularly regarding vision-based AI</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">Technical Expertise</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-primary-cream p-4 rounded-lg border-2 border-primary-navy-dark">
                                <h3 className="text-lg font-medium mb-2">Languages and Frameworks</h3>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>.NET Core/Framework – MAUI and ASP.NET</li>
                                    <li>Java, JVM, Agents, and Monitoring</li>
                                    <li>Python, Selenium, ML libraries</li>
                                    <li>Node.js, TypeScript, JavaScript</li>
                                    <li>HTML, CSS, and HTMX</li>
                                </ul>
                            </div>
                            <div className="bg-primary-cream p-4 rounded-lg border-2 border-primary-navy-dark">
                                <h3 className="text-lg font-medium mb-2">Tools and Technologies</h3>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Azure/AWS/GCP</li>
                                    <li>Docker and Docker Desktop</li>
                                    <li>GitHub/Actions, Azure DevOps, GitLab</li>
                                    <li>SQL, Postgres, MongoDB, and Redis</li>
                                    <li>Bicep and Terraform</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Education</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-xl font-medium mb-2">Victoria University of Wellington</h3>
                                <p className="text-neutral-600 dark:text-neutral-400 mb-2">2020 - 2023</p>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>Bachelor of Engineering (First Class Honours), Major in Software Engineering</li>
                                    <li>Wellington Faculty of Engineering Dean's List – 2020, 2021, 2022, 2023</li>
                                    <li>8.5/9.0 GPA</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                        <p className="text-lg">
                            I'm always interested in connecting with fellow developers and discussing new opportunities. 
                            Feel free to reach out through my social media profiles or email.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}