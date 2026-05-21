import {format} from "date-fns";
import { ProjectCard } from "@/components/project-card";

export default function RaygunMCPProject() {
    const tags = ["Remote MCP", "TypeScript", "Raygun API", "LLM Tools", "Codex", "Cursor"];
    const updatedDate = new Date(2026, 3, 14);

    return (
        <ProjectCard
            title="Raygun MCP Server"
            href="https://github.com/MindscapeHQ/mcp-server-raygun"
            meta={`Updated ${format(updatedDate, 'MMMM d, yyyy')}`}
            description="A remote-first Model Context Protocol server for Raygun, giving AI agents live error data, deployments, breadcrumbs, customer context, and stack traces for production investigations."
            image="/projects/raygun-mcp/mcp-feature-image.webp"
            imageAlt="Raygun MCP Server Architecture"
            tags={tags}
            links={[
                { href: "https://github.com/MindscapeHQ/mcp-server-raygun", label: "GitHub" },
                { href: "https://raygun.com/blog/raygun-mcp-getting-started/", label: "Latest blog post" },
            ]}
            priority
        />
    );
} 
