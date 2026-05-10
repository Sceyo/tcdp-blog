import Container from "@/app/_components/container";

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-neutral-600 dark:text-neutral-300"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-neutral-600 dark:text-neutral-300"
  >
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-neutral-600 dark:text-neutral-300"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const people = [
  {
    name: "Francis Aliser",
    instagram: "https://www.instagram.com/francisaliser/",
    facebook: "https://www.facebook.com/AliserLouisonmars/",
    linkedin: "https://www.linkedin.com/in/francis-aliser/",
  },
  {
    name: "James Ng",
    instagram: "https://www.instagram.com/jamesss_ngg/",
    facebook: "https://www.facebook.com/james.nang.31",
    linkedin: "https://www.linkedin.com/in/james-winston-ng-57943637a/", // leave null to hide this icon
  },
];

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800">
      <Container>
        <div className="py-28 flex flex-col items-center space-y-8">
          <p className="text-lg font-medium text-neutral-500 dark:text-neutral-400">
            Created by
          </p>
          <div className="space-y-8 w-full max-w-2xl">
            {people.map((person) => (
              <div
                key={person.name}
                className="flex items-center justify-between gap-6"
              >
                <span className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight">
                  {person.name}
                </span>
                <div className="flex gap-4">
                  {person.instagram && (
                    <a
                      href={person.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                    >
                      <InstagramIcon />
                    </a>
                  )}
                  {person.facebook && (
                    <a
                      href={person.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                    >
                      <FacebookIcon />
                    </a>
                  )}
                  {person.linkedin && (
                    <a
                      href={person.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <LinkedInIcon />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;