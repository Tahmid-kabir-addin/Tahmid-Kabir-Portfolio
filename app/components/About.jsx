import Image from "next/image";
import TahmidImage from "../assets/images/Tahmid.jpg";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <div className="space-y-4">
            <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
              Full-Stack Software Engineer
            </h2>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30 text-sm font-medium">
                1+ Years Experience
              </span>
              <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full border border-green-500/30 text-sm font-medium">
                Currently at 79mplus
              </span>
              <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30 text-sm font-medium">
                CGPA: 3.95/4.00
              </span>
            </div>
          </div>
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 xl:gap-24">
            {/* Left Column - Image and Quick Stats */}
            <div className="relative space-y-6">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <Image
                  src={TahmidImage}
                  className="rounded-[15px] shadow block"
                  alt="Tahmid Kabir"
                  width={1207}
                  height={929}
                />
              </div>

              {/* Quick Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800/30 rounded-lg p-4 text-center border border-gray-700/50">
                  <div className="text-2xl font-bold text-blue-400">1+</div>
                  <div className="text-sm text-gray-300">Years Experience</div>
                </div>
                <div className="bg-gray-800/30 rounded-lg p-4 text-center border border-gray-700/50">
                  <div className="text-2xl font-bold text-green-400">95+</div>
                  <div className="text-sm text-gray-300">Lighthouse Score</div>
                </div>
              </div>

              {/* Problem Solving Badges */}
              <div className="bg-gray-800/20 rounded-lg p-4 border border-gray-700/50">
                <h4 className="text-green-400 font-semibold mb-3 text-center">
                  Problem Solving
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-orange-300">Codeforces</span>
                    <span className="px-2 py-1 bg-orange-500/20 text-orange-300 rounded text-sm">
                      600+ problems
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-green-300">LeetCode</span>
                    <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-sm">
                      250+ problems
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-purple-300">CodeChef</span>
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-sm">
                      3 stars
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Main Content */}
            <div className="relative space-y-6">
              <div>
                <p className="text-white text-lg leading-relaxed">
                  Hello! I'm{" "}
                  <span className="font-bold text-blue-400">
                    Mir Md. Tahmid Kabir
                  </span>
                  , a Full-stack Software Engineer with
                  <span className="font-bold text-green-400">
                    {" "}
                    1+ years of professional experience
                  </span>{" "}
                  designing and building secure, scalable web applications using
                  JavaScript, TypeScript, React, and Next.js.
                </p>
              </div>

              <div className="bg-gray-800/30 rounded-lg p-5 border-l-4 border-blue-500">
                <h4 className="text-blue-400 font-semibold mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Current Role
                </h4>
                <p className="text-gray-300">
                  <span className="font-semibold text-white">
                    Junior Software Engineer at 79mplus
                  </span>{" "}
                  (May 2025 - Present)
                  <br />
                  Collaborating with US-based client teams, developing headless
                  Next.js and WooCommerce platforms, and implementing secure
                  payment integrations with Stripe, PayPal, and Klaviyo.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-white font-semibold text-lg">
                  Specializations & Achievements
                </h4>
                <div className="grid gap-3">
                  <div className="flex items-center gap-3 p-3 bg-gray-800/20 rounded-lg border border-gray-700/30">
                    <span className="w-3 h-3 bg-purple-400 rounded-full flex-shrink-0"></span>
                    <span className="text-gray-300">
                      <span className="text-purple-400 font-semibold">
                        Payment Systems Integration
                      </span>{" "}
                      - Stripe, PayPal, Klaviyo
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/20 rounded-lg border border-gray-700/30">
                    <span className="w-3 h-3 bg-green-400 rounded-full flex-shrink-0"></span>
                    <span className="text-gray-300">
                      <span className="text-green-400 font-semibold">
                        Authentication Systems
                      </span>{" "}
                      - JWT, OAuth
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/20 rounded-lg border border-gray-700/30">
                    <span className="w-3 h-3 bg-yellow-400 rounded-full flex-shrink-0"></span>
                    <span className="text-gray-300">
                      <span className="text-yellow-400 font-semibold">
                        Performance Optimization
                      </span>{" "}
                      -
                      <span className="text-blue-400 font-semibold">
                        {" "}
                        60% improvements
                      </span>
                      ,
                      <span className="text-purple-400 font-semibold">
                        {" "}
                        6ms API response
                      </span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/20 rounded-lg p-5 border border-gray-700/50">
                <h4 className="text-green-400 font-semibold mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Education
                </h4>
                <p className="text-gray-300">
                  <span className="font-semibold text-white">
                    B.Sc in Computer Science and Engineering
                  </span>
                  <br />
                  Shahjalal University of Science and Technology
                  <br />
                  <span className="text-blue-400 font-semibold">
                    CGPA: 3.95/4.00
                  </span>{" "}
                  | Graduating June 2025
                </p>
              </div>

              <blockquote className="border-l-4 border-blue-500 pl-4 bg-gray-800/10 rounded-r-lg p-4">
                <p className="text-white italic leading-relaxed">
                  "I believe in writing clean, maintainable code following SOLID
                  principles. My focus is on security, performance optimization,
                  and creating scalable solutions that deliver real business
                  value."
                </p>

                <div className="mt-4 space-y-2">
                  <cite className="block font-medium text-white">
                    Mir Md. Tahmid Kabir
                  </cite>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400">
                      Full-Stack Software Engineer
                    </span>
                    <span className="text-gray-500">•</span>
                    <span className="text-green-400">79mplus</span>
                  </div>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
