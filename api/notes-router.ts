import { z } from "zod";
import { eq, and, desc } from "drizzle-orm";
import { createRouter, authedQuery } from "./middleware";
import { getDb } from "./queries/connection";
import { notes } from "../db/schema";

const STARTER_NOTES = [
  {
    title: "About Me",
    content: `# About Me

I am a **Cyber Security Engineer** with deep expertise in:
- Vulnerability Assessment and Penetration Testing (VAPT)
- Web Application & API Security
- Network Penetration Testing
- Reverse Engineering & Malware Analysis
- Red Teaming

## Key Achievements

- **3 CVEs Assigned** (CVSS up to 8.5)
- **40+ Hall of Fame** recognitions from Tesla, NASA, Dell, Cisco, Zerodha, Snapchat, HDFC Bank, Nykaa, and more
- **CEH v13, CAP, CNSP with Merit, CCSP-AWS**
- **WorldSkills Shanghai 2026 Cyber Security Mentor**
- **Trainer - Cyber Secured Africa, Operation Black Trace**
- **Security Researcher on Bugcrowd**

## Current Role

Cyber Security Engineer at **Think Future Technologies** (June 2025 - Present)`,
    tags: ["about", "profile"],
  },
  {
    title: "CVEs Discovered",
    content: `# CVEs Discovered

| CVE ID | CVSS | Description | Severity |
|--------|------|-------------|----------|
| CVE-2025-63416 | 8.5 | Stored XSS leading to Privilege Escalation | High |
| CVE-2025-63417 | 8.2 | Persistent Stored XSS | High |
| CVE-2025-63418 | 6.5 | DOM-Based XSS | Medium |

All three CVEs were discovered through responsible disclosure processes and have been acknowledged by the affected vendors.`,
    tags: ["CVEs", "research"],
  },
  {
    title: "Hall of Fame",
    content: `# Hall of Fame Recognitions

## Enterprise & Technology
- Tesla
- Dell Technologies
- Cisco
- Circle
- Zerodha
- Snapchat
- Nykaa
- Elan Limited
- TMF Group

## Financial
- HDFC Bank

## Government & Education
- NASA
- Monash University

**Total: 40+ Hall of Fame recognitions**`,
    tags: ["achievements", "hall-of-fame"],
  },
  {
    title: "Tools & Technologies",
    content: `# Tools & Technologies

## Web & API Security
Burp Suite, Postman, Acunetix, Netsparker, OWASP ZAP, SQLMap

## Network Security
Nmap, Wireshark, Nessus, Metasploit

## SOC & Monitoring
Splunk, Wazuh, Elasticsearch

## Operating Systems
Kali Linux, Linux, Windows

## Reverse Engineering
Ghidra, x64dbg, PE Studio, Detect It Easy (DIE)

## Digital Forensics
Volatility, Autopsy

## Cloud & Platforms
Microsoft Azure, AWS

## AI & Automation
ChatGPT, n8n, MCP, Garak, LLM Security Testing`,
    tags: ["skills", "tools"],
  },
  {
    title: "Security Domains",
    content: `# Security Domains

- Web Application Security
- API Security Testing
- Mobile Application Testing
- Vulnerability Assessment & Penetration Testing (VAPT)
- Reverse Engineering
- Malware Analysis
- OSINT
- Digital Forensics
- Incident Response
- Threat Hunting
- Network Security
- Application Security`,
    tags: ["skills", "domains"],
  },
  {
    title: "Certifications",
    content: `# Certifications

- Certified Ethical Hacker (CEH v13)
- Certified AppSec Practitioner (CAP)
- Certified Network Security Practitioner (CNSP) with Merit
- Certified Cloud Security Practitioner - AWS (CCSP-AWS)
- ISO/IEC 27001 Information Security Associate
- Splunk Infrastructure Overview
- Microsoft Azure Fundamentals (AZ-900)
- Fortinet NSE 1 & NSE 2
- IBM Cybersecurity Basics
- Scrum Certification
- Dark Web Investigation`,
    tags: ["certifications"],
  },
];

export const notesRouter = createRouter({
  list: authedQuery.query(async ({ ctx }) => {
    const db = getDb();
    let userNotes = await db
      .select()
      .from(notes)
      .where(eq(notes.userId, ctx.user.id))
      .orderBy(desc(notes.updatedAt));

    // Auto-seed starter notes for new users
    if (userNotes.length === 0) {
      for (const starter of STARTER_NOTES) {
        await db.insert(notes).values({
          userId: ctx.user.id,
          title: starter.title,
          content: starter.content,
          tags: starter.tags,
        });
      }
      userNotes = await db
        .select()
        .from(notes)
        .where(eq(notes.userId, ctx.user.id))
        .orderBy(desc(notes.updatedAt));
    }

    return userNotes;
  }),

  get: authedQuery
    .input(z.object({ id: z.number() }))
    .query(async ({ ctx, input }) => {
      const db = getDb();
      const [note] = await db
        .select()
        .from(notes)
        .where(and(eq(notes.id, input.id), eq(notes.userId, ctx.user.id)));
      return note ?? null;
    }),

  create: authedQuery
    .input(
      z.object({
        title: z.string().min(1).max(500),
        content: z.string(),
        tags: z.array(z.string()).optional(),
        source: z.string().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const db = getDb();
      const [note] = await db.insert(notes).values({
        userId: ctx.user.id,
        title: input.title,
        content: input.content,
        tags: input.tags ?? [],
        source: input.source ?? null,
      });
      return { id: Number(note.insertId) };
    }),

  update: authedQuery
    .input(
      z.object({
        id: z.number(),
        title: z.string().min(1).max(500).optional(),
        content: z.string().optional(),
        tags: z.array(z.string()).optional(),
        source: z.string().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const db = getDb();
      const { id, ...updates } = input;
      await db
        .update(notes)
        .set(updates)
        .where(and(eq(notes.id, id), eq(notes.userId, ctx.user.id)));
      return { success: true };
    }),

  delete: authedQuery
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      const db = getDb();
      await db
        .delete(notes)
        .where(and(eq(notes.id, input.id), eq(notes.userId, ctx.user.id)));
      return { success: true };
    }),

  deleteMany: authedQuery
    .input(z.object({ ids: z.array(z.number()) }))
    .mutation(async ({ ctx, input }) => {
      const db = getDb();
      for (const id of input.ids) {
        await db
          .delete(notes)
          .where(and(eq(notes.id, id), eq(notes.userId, ctx.user.id)));
      }
      return { success: true };
    }),

});
