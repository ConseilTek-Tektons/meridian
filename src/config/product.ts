import type { ProductConfig } from "./types";

export const product: ProductConfig = {
  id: "meridian",
  name: "Meridian",
  category: "Work & Delivery",
  tagline: "Enterprise ITSM without the platform tax.",
  description: "A self-hosted ITSM system for incidents, requests, problems, changes, service catalog workflows, SLAs, knowledge, and a relationship-aware CMDB.",
  repositoryUrl: "https://github.com/ConseilTek-Tektons/meridian",
  nav: [{ label: "Incidents", badge: "18" }, { label: "Requests" }, { label: "Changes" }, { label: "CMDB" }, { label: "Catalog" }],
  demoUsers: [
    { id: "demo-admin", name: "Maya Chen", email: "maya@northstar.example", role: "admin", label: "ITSM administrator" },
    { id: "demo-manager", name: "Jon Bell", email: "jon@northstar.example", role: "service_manager", label: "Service manager" },
    { id: "demo-host", name: "Priya Rao", email: "priya@northstar.example", role: "agent", label: "Service desk agent" },
  ],
  ai: {
    name: "Service copilot",
    description: "Ask about incident context, similar records, change impact, SLA risk, and approved knowledge.",
    systemPrompt: "You are Meridian's service copilot. Answer only from supplied records and approved knowledge. Cite incidents, CIs, changes, and articles. Never change priority, approve a change, or close a record.",
    suggestedQuestions: ["Which services are affected by this CI?", "Find similar incidents.", "Which SLAs are at risk?"],
  },
};
