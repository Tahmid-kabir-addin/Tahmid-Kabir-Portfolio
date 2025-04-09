import IconCloud from "./ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "tailwindcss",
  "nodedotjs",
  "express",
  "python",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "sqlite",
  "vercel",
  "git",
  "jira",
  "github",
  "gitlab",
  "linux",
  "bash",
  "npm",
  "postman",
  "mongodb",
  "mysql",
];

function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  px-20 pb-20 pt-8 bg-transparent">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconCloudDemo;
