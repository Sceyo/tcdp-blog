"use client";

import { useEffect, useState } from "react";

type NavItem = {
  label: string;
  href: string;
};

const sections: NavItem[] = [
  { label: "About Us", href: "#about-us" },
  { label: "Purpose", href: "#purpose" },
  { label: "Authors", href: "#authors" },
  { label: "Get in touch", href: "#get-in-touch" },
];

export default function SidebarNav() {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -70% 0px", // adjust when a section is considered "active"
        threshold: 0,
      }
    );

    const elements = sections
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean) as Element[];

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-24">
      <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
        On this page
      </h4>
      <ul className="space-y-2.5">
        {sections.map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
              className={`block rounded px-3 py-1.5 text-sm transition-colors ${
                activeId === href.substring(1)
                  ? "bg-neutral-100 text-neutral-900 font-medium dark:bg-neutral-800 dark:text-white"
                  : "text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200"
              }`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}