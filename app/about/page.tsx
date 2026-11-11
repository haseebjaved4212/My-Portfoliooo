"use client";

import React from "react";
import Link from "next/link";
import { aboutPageStyles } from "@/public/dummyStyles";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function AboutPage() {
  const interests = [
    "FULL-STACK DEV",
    "LLMS",
    "Learning",
    "Gaming",
  ];

  const techStack = [
    "Python",
    "FastAPI",
    "Next.js",
    "TypeScript",
    "Postgres",
    "Redis",
    "Django",
    "Kotlin",
  
  ];

  const email = "contactimhaseeb@gmail.com";
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;

  return (
    <div className={aboutPageStyles.pageContainer}>
      <div className={aboutPageStyles.contentContainer}>
        <div className={aboutPageStyles.backgroundContainer}>
          <div className={aboutPageStyles.backgroundEffect}>
            <BackgroundBeamsWithCollision />
          </div>

          <div className={aboutPageStyles.contentWrapper}>
            <h1 className={aboutPageStyles.mainHeading}>Haseeb</h1>

            <div className={aboutPageStyles.interestsContainer}>
              {interests.map((interest, index) => (
                <span key={interest} className={aboutPageStyles.interestItem}>
                  {interest}
                  {index < interests.length - 1 && (
                    <span className={aboutPageStyles.interestSeparator}>•</span>
                  )}
                </span>
              ))}
            </div>

            <div className={aboutPageStyles.techStackContainer}>
              {techStack.map((tech) => (
                <span key={tech} className={aboutPageStyles.techPill}>
                  {tech}
                </span>
              ))}
            </div>

            <div className={aboutPageStyles.sectionsContainer}>
              {/* Who I Am */}
              <section>
                <h2 className={aboutPageStyles.sectionHeading}>Who I Am</h2>
                <p className={aboutPageStyles.paragraph}>
                  Hello! I&apos;m Haseeb Javed, a Karachi-based Full-Stack & AI
                  Software Engineer passionate about building production-grade
                  frontend interfaces, scalable backend APIs, and autonomous AI
                  agent workflows that solve real user problems end to end.
                  Across 122+ public repositories on GitHub, I work across
                  TypeScript, React.js, Next.js, Python (FastAPI, Django),
                  Node.js, and Kotlin.
                </p>
              </section>

              {/* What I Do */}
              <section>
                <h2 className={aboutPageStyles.sectionHeading}>What I Do</h2>
                <p className={aboutPageStyles.paragraph}>
                  I design and ship full-stack web platforms,
                  Retrieval-Augmented Generation (RAG) systems, Model Context
                  Protocol (MCP) integrations, and cross-platform mobile apps
                  for freelance clients and open-source users. My focus is on
                  practical, user-facing products-less demo energy, more
                  reliable software people actually use daily.
                </p>
              </section>

              {/* My Journey */}
              <section>
                <h2 className={aboutPageStyles.sectionHeading}>My Journey</h2>
                <p className={aboutPageStyles.paragraph}>
                  From engineering CoolBraze-Ai (a 3-agent autonomous customer
                  support system using Django, Claude API, and RAG) and AniTrack
                  (a real-time media tracker backed by FastAPI, Django, and
                  Redis on GitHub), to shipping VerteX (an AI course search
                  platform with Next.js App Router and Sanity Context MCP),
                  Raahi (a safety-aware navigation app for a freelance client
                  using TomTom and MapTiler APIs), and AirPods-Control (an
                  open-source Android BLE & 5-band DSP audio app in Kotlin &
                  Jetpack Compose), I keep a relentless shipping momentum
                </p>
              </section>

              {/* Vision */}
              <section>
                <h2 className={aboutPageStyles.sectionHeading}>Vision</h2>
                <p className={aboutPageStyles.paragraph}>
                  Autonomous AI agents, RAG pipelines, and MCP integrations are
                  reshaping how modern software is built and experienced. I
                  strive to stay at the forefront of this shift by combining
                  solid full-stack engineering fundamentals with grounded,
                  reliable AI systems.
                </p>
              </section>

              {/* Beyond Code */}
              <section>
                <h2 className={aboutPageStyles.sectionHeading}>Beyond Code</h2>
                <p className={aboutPageStyles.paragraph}>
                  When I&apos;m not shipping code or architecting backend systems, I
                  enjoy exploring emerging AI developer workflows, contributing
                  to open-source tools, reading about system design, and
                  building side projects that solve everyday problems.
                </p>
              </section>
            </div>

            <div className={aboutPageStyles.ctaContainer}>
              <Link
                href="/contact"
                className={aboutPageStyles.primaryButton}
                aria-label="Get in touch — open contact page"
              >
                Get in Touch
              </Link>

              <a
                href={gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={aboutPageStyles.secondaryButton}
                aria-label={`Compose email to ${email} in Gmail`}
              >
                <svg
                  className={aboutPageStyles.emailIcon}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                E-Mail
              </a>

              <a
                href="/resume.pdf"
                download="resume.pdf"
                className={aboutPageStyles.secondaryButton}
                aria-label="Download resume as PDF"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
