import Image from "next/image";
import TahmidImage from "../assets/images/Tahmid.jpg";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Software Engineer & Problem Solver
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <Image
                  src={TahmidImage}
                  className="rounded-[15px] shadow block"
                  alt="Tahmid Kabir"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm Tahmid Kabir, a detail-oriented Software Engineer
                with a strong foundation in object-oriented programming and
                RESTful API development.{" "}
                <span className="font-bold text-white">
                  Currently pursuing my B.Sc in Computer Science and Engineering
                  at SUST
                </span>
                , I'm passionate about creating efficient and scalable
                solutions.
              </p>
              <p className="text-white">
                My focus is on full-stack development, with expertise in the
                MERN stack and various programming languages. I combine
                problem-solving skills with quick learning ability to tackle
                complex technical challenges and deliver high-quality software
                solutions.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I believe in writing clean, maintainable code and following
                    Design principles. My experience includes working with modern
                    technologies like React, Node.js, and various databases. I'm
                    always eager to learn new technologies and contribute to
                    innovative projects.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Tahmid Kabir
                    </cite>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-400">Software Engineer</span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
