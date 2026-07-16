#!/usr/bin/env python3
"""
Generates public/resume.pdf from the same honest content as lib/data.ts.

This is intentionally a plain, single-column, ATS-friendly PDF (no graphics,
no icons, no columns that confuse resume parsers) — the flashy version lives
on the /resume page of the site; this file is the one recruiters actually
download and forward internally, so it needs to be readable by both humans
and applicant-tracking software.

Run with:  python3 scripts/generate_resume.py
Requires:  pip install reportlab
"""

import os

from reportlab.lib import colors
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
    HRFlowable,
)

OUT_PATH = os.path.join(os.path.dirname(__file__), "..", "public", "resume.pdf")

INK = colors.HexColor("#111111")
MUTED = colors.HexColor("#555555")
ACCENT = colors.HexColor("#5B3DF5")
RULE = colors.HexColor("#DDDDDD")

# ── Content — mirrors lib/data.ts (kept honest, no fabricated metrics) ─────

NAME = "Harshit Sinha"
ROLE = "Product Builder & Automation"
LOCATION = "India · Remote-ready"
EMAIL = "sinhaharshit67@gmail.com"
PHONE = "+91-9653043939"
LINKEDIN = "linkedin.com/in/harshit-sinha98"
GITHUB = "github.com/Harshitsinha98"

SUMMARY = (
    "Product builder and automation specialist. I design, build, and ship web "
    "products end-to-end using AI-assisted development — from idea and UX to "
    "third-party integrations and deployment. Background in technical "
    "operations and field infrastructure management. Currently deepening "
    "core software engineering fundamentals."
)

EXPERIENCE = [
    {
        "role": "Product Builder — AI-Assisted Development",
        "company": "Independent Projects",
        "period": "2023 — Present",
        "location": "Remote",
        "bullets": [
            "Design, build, and ship web products end-to-end using AI-assisted "
            "development, from idea and UX through integrations and deployment",
            "Shipped Saran Tax Solution (live, generating real inbound leads); "
            "built Lead Management, BreakIQ, a temple site, and a jewelry store "
            "(deployed, in pre-launch)",
            "Own the full product journey: decisions, third-party integrations "
            "(payments, shipping, CMS), and deployment on Vercel",
            "Actively building core software engineering fundamentals alongside "
            "AI-assisted delivery, to own more of the stack independently over time",
        ],
    },
    {
        "role": "Software Engineer / Analyst",
        "company": "Capgemini",
        "period": "Apr 2024 — Present",
        "location": "India",
        "bullets": [
            "Build and maintain Python & RPA automation workflows that cut "
            "repetitive manual effort across operations",
            "Write scripts and reporting pipelines (Python, Excel) to surface "
            "operational KPI trends for stakeholders",
            "Support AI / chatbot integration efforts to improve end-user "
            "resolution journeys",
            "Coordinate with L3 and cross-functional teams on incident "
            "resolution across client accounts",
        ],
    },
    {
        "role": "Field Operations Engineer",
        "company": "Indus Towers",
        "period": "Dec 2022 — Jan 2024",
        "location": "India",
        "bullets": [
            "Managed field operations for 150+ telecom tower sites across an "
            "assigned region",
            "Delivered 99.9% network uptime through preventive maintenance and "
            "fast fault resolution",
            "Coordinated on-ground teams and vendors for repairs, power, and "
            "site upkeep",
            "Ran root-cause analysis on recurring faults to reduce repeat outages",
        ],
    },
]

PROJECTS = [
    {
        "title": "Saran Tax Solution",
        "stack": "Next.js · Tailwind · Sanity CMS · Resend",
        "detail": "Tax consultancy marketing site — live, generating genuine "
        "inbound leads through organic search.",
    },
    {
        "title": "Lead Management System",
        "stack": "Next.js · TypeScript · PostgreSQL · Node.js",
        "detail": "End-to-end lead lifecycle platform — role-based access, "
        "assignment rules, automated follow-ups, pipeline analytics. Deployed.",
    },
]

SKILLS = {
    "Build With": "Next.js, React, TypeScript, Tailwind CSS, Node.js, Express",
    "Data": "PostgreSQL, MongoDB, MySQL, Prisma",
    "Deploy & Cloud": "Vercel, Git, CI/CD, Linux",
    "AI & Automation": "AI-assisted development, OpenAI API, Python, RPA, n8n",
    "Operations": "Incident response, uptime & monitoring, process automation",
}

EDUCATION = {
    "degree": "B.Tech — Electronics & Communication Engineering",
    "school": "BBDNITM, Lucknow",
    "year": "2022",
}

CERTIFICATIONS = [
    "Python Data Structures — Coursera",
    "Google Workspace Advanced Administration",
    "Business Transformation with Google Cloud",
    "ITIL Foundation Principles",
]


def build_styles():
    return {
        "name": ParagraphStyle(
            "name", fontName="Helvetica-Bold", fontSize=20, textColor=INK, leading=23,
        ),
        "role": ParagraphStyle(
            "role", fontName="Helvetica", fontSize=11, textColor=ACCENT, leading=13,
            spaceAfter=3,
        ),
        "contact": ParagraphStyle(
            "contact", fontName="Helvetica", fontSize=9, textColor=MUTED, leading=13,
        ),
        "summary": ParagraphStyle(
            "summary", fontName="Helvetica", fontSize=9.5, textColor=INK, leading=12.5,
            spaceAfter=2,
        ),
        "section": ParagraphStyle(
            "section", fontName="Helvetica-Bold", fontSize=10.5, textColor=INK,
            leading=12, spaceBefore=7, spaceAfter=3, letterSpacing=0.5,
        ),
        "job_role": ParagraphStyle(
            "job_role", fontName="Helvetica-Bold", fontSize=10.5, textColor=INK,
            leading=13,
        ),
        "job_meta": ParagraphStyle(
            "job_meta", fontName="Helvetica", fontSize=8.5, textColor=MUTED, leading=11,
        ),
        "bullet": ParagraphStyle(
            "bullet", fontName="Helvetica", fontSize=8.7, textColor=INK, leading=11,
            leftIndent=12, spaceAfter=0.5, bulletIndent=0,
        ),
        "proj_title": ParagraphStyle(
            "proj_title", fontName="Helvetica-Bold", fontSize=9.5, textColor=INK,
            leading=12,
        ),
        "proj_stack": ParagraphStyle(
            "proj_stack", fontName="Helvetica-Oblique", fontSize=8, textColor=MUTED,
            leading=10,
        ),
        "proj_detail": ParagraphStyle(
            "proj_detail", fontName="Helvetica", fontSize=9, textColor=INK,
            leading=11.5, spaceAfter=4,
        ),
        "skill_cat": ParagraphStyle(
            "skill_cat", fontName="Helvetica-Bold", fontSize=9, textColor=INK,
            leading=11.5,
        ),
        "skill_items": ParagraphStyle(
            "skill_items", fontName="Helvetica", fontSize=8.7, textColor=MUTED,
            leading=11, spaceAfter=2,
        ),
        "cert": ParagraphStyle(
            "cert", fontName="Helvetica", fontSize=9, textColor=INK, leading=11.5,
            leftIndent=12,
        ),
    }


def rule():
    return HRFlowable(width="100%", thickness=0.75, color=RULE, spaceBefore=2, spaceAfter=8)


def build_pdf():
    styles = build_styles()
    doc = SimpleDocTemplate(
        OUT_PATH,
        pagesize=LETTER,
        topMargin=0.5 * inch,
        bottomMargin=0.45 * inch,
        leftMargin=0.7 * inch,
        rightMargin=0.7 * inch,
        title=f"{NAME} — Resume",
        author=NAME,
    )

    flow = []

    # Header
    flow.append(Paragraph(NAME, styles["name"]))
    flow.append(Paragraph(ROLE, styles["role"]))
    contact_line = (
        f"{EMAIL} &nbsp;|&nbsp; {PHONE} &nbsp;|&nbsp; {LOCATION}<br/>"
        f"{LINKEDIN} &nbsp;|&nbsp; {GITHUB}"
    )
    flow.append(Paragraph(contact_line, styles["contact"]))
    flow.append(Spacer(1, 3))
    flow.append(rule())

    # Summary
    flow.append(Paragraph(SUMMARY, styles["summary"]))

    # Experience
    flow.append(Paragraph("EXPERIENCE", styles["section"]))
    flow.append(rule())
    for job in EXPERIENCE:
        header_table = Table(
            [[
                Paragraph(f"{job['role']} — {job['company']}", styles["job_role"]),
                Paragraph(job["period"], styles["job_meta"]),
            ]],
            colWidths=[4.6 * inch, 1.65 * inch],
        )
        header_table.setStyle(TableStyle([
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ("ALIGN", (1, 0), (1, 0), "RIGHT"),
            ("LEFTPADDING", (0, 0), (-1, -1), 0),
            ("RIGHTPADDING", (0, 0), (-1, -1), 0),
            ("TOPPADDING", (0, 0), (-1, -1), 0),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 2),
        ]))
        flow.append(header_table)
        flow.append(Paragraph(job["location"], styles["job_meta"]))
        flow.append(Spacer(1, 1))
        for b in job["bullets"]:
            flow.append(Paragraph(f"&bull;&nbsp;&nbsp;{b}", styles["bullet"]))
        flow.append(Spacer(1, 3))

    # Selected Projects
    flow.append(Paragraph("SELECTED PROJECTS", styles["section"]))
    flow.append(rule())
    for p in PROJECTS:
        flow.append(Paragraph(p["title"], styles["proj_title"]))
        flow.append(Paragraph(p["stack"], styles["proj_stack"]))
        flow.append(Paragraph(p["detail"], styles["proj_detail"]))

    # Skills
    flow.append(Paragraph("SKILLS", styles["section"]))
    flow.append(rule())
    for cat, items in SKILLS.items():
        flow.append(Paragraph(f"<b>{cat}:</b> {items}", styles["skill_items"]))

    # Education + Certifications, side by side to save vertical space
    edu_col = [
        Paragraph("EDUCATION", styles["section"]),
        rule(),
        Paragraph(EDUCATION["degree"], styles["job_role"]),
        Paragraph(
            f"{EDUCATION['school']} &nbsp;|&nbsp; Class of {EDUCATION['year']}",
            styles["job_meta"],
        ),
    ]
    cert_col = [Paragraph("CERTIFICATIONS", styles["section"]), rule()] + [
        Paragraph(f"&bull;&nbsp;&nbsp;{c}", styles["cert"]) for c in CERTIFICATIONS
    ]
    bottom_table = Table([[edu_col, cert_col]], colWidths=[3.05 * inch, 3.2 * inch])
    bottom_table.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (0, 0), 14),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
    ]))
    flow.append(bottom_table)

    doc.build(flow)
    print(f"Wrote {OUT_PATH}")


if __name__ == "__main__":
    build_pdf()
