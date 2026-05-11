import Container from "@/app/_components/container";
import type { Metadata } from "next";
import Link from "next/link";
import SidebarNav from "./SidebarNav";
import Avatar from "@/app/_components/avatar"; 

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about the team behind this blog.",
};

export default function AboutPage() {
  return (
    <main>
      <Container>
        {/* Court Hoppers link */}
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-8 mt-8 flex items-center">
          <Link href="/" className="hover:underline">
            Court Hoppers
          </Link>
        </h2>

        <div className="lg:grid lg:grid-cols-[1fr_240px] lg:gap-10">
          {/* Main content */}
          <article className="py-6">
            {/* About Us section */}
            <section id="about-us">
              <h1 className="mb-12 text-center text-6xl font-bold leading-tight tracking-tighter md:text-7xl md:leading-none lg:text-8xl">
                About Us
              </h1>
              <div className="mx-auto max-w-2xl">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p>
                    Hello and welcome to our blog,{" "}
                    <strong>
                      <em>Court Hoppers: Our Pickleball Adventures Across Every Court We’ve Played.</em>
                    </strong>
                    <br />
                    <br />
                    This blog is a collaborative project by Francis Aliser and James Ng, created as part
                    of our{" "}
                    <strong>
                      <em>Think and Click: Textual Content in Digital Platforms</em>
                    </strong>{" "}
                    finals project. Through this platform, we share our experiences playing on different
                    pickleball courts wherever we go. With the rapid rise of pickleball, we aim to help
                    players explore new venues—whether they’re looking for a competitive environment or
                    simply a court near their area.
                  </p>
                </div>
              </div>
            </section>

            {/* Purpose section */}
            <section id="purpose" className="mt-16">
              <h1 className="mb-10 text-center text-4xl font-bold leading-tight tracking-tighter md:text-5xl md:leading-none lg:text-6xl">
                Purpose
              </h1>
              <div className="mx-auto max-w-2xl">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p>
                    Our goal is to share our personal experiences playing pickleball across different courts
                    in Cebu and Davao. We want to give readers a clear idea of what to expect in each venue—from
                    the atmosphere and level of competition to the overall playing experience.
                    <br />
                    <br />
                    We also provide practical information such as how to book courts, how to get there,
                    and the condition of the facilities. Through this, we hope to help players feel more prepared
                    and confident when trying out new places.
                  </p>
                </div>
              </div>
            </section>

        
            {/* Authors section */}
            <section id="authors" className="mt-16">
                <h1 className="mb-10 text-center text-4xl font-bold leading-tight tracking-tighter md:text-5xl md:leading-none lg:text-6xl">
                    Authors
                </h1>
            <div className="mx-auto max-w-2xl">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                {/* Francis */}
                <div id="francis" className="mb-10">
                    <div className="flex justify-center mb-6">
                    <Avatar
                        name="Francis Aliser"
                        picture="/assets/blog/authors/Francis.jpg"
                    />
                    </div>
                    <p>
                    Hello readers, my name is Francis Aliser. I am a BSIT student at the University of San Carlos, 
                    and my hobbies include playing pickleball, badminton, basketball, and running.
                    <br></br>
                    As a former athlete, pickleball has helped me rediscover my passion for sports. With the growing 
                    number of courts in Cebu and many of my friends actively playing, I decided to join in—and
                     I’ve been enjoying it ever since. If you happen to see me around the courts, feel free to say 
                     hi or ask about my experiences in different venues!
                    </p>
                </div>

                {/* James */}
                <div id="james">
                    <div className="flex justify-center mb-6">
                    <Avatar
                        name="James Ng"
                        picture="/assets/blog/authors/James.jpg"
                    />
                    </div>
                    <p>
                    A creative mind who thrives at the crossroads of design and code.
                    James contributes his technical expertise and a unique perspective
                    on building user‑friendly digital experiences.
                    </p>
                </div>
                </div>
            </div>
            </section>

            {/* Get in Touch */}
            <section id="get-in-touch" className="mt-16 mb-16">
                <h1 className="mb-10 text-center text-4xl font-bold leading-tight tracking-tighter md:text-5xl md:leading-none lg:text-6xl">
                Get in Touch
              </h1>
              <div className="mx-auto max-w-2xl">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  
                  <p>
                    We’d love to hear from you. Feel free to reach out via our social channels or
                    drop us an email at{" "}
                    <a href="mailto:francisaliserit@gmail.com" className="underline">
                      francisaliserit@gmail.com 
                    </a> {" "}
                     or at {" "}
                    <a href="mailto:francisaliserit@gmail.com" className="underline">
                      ngjames010@gmail.com
                    </a>.
                  </p>
                </div>
              </div>
            </section>
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <SidebarNav />
          </aside>
        </div>
      </Container>
    </main>
  );
}