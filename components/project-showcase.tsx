import ProjectCard from "@/components/project-card";

// Project data
const projects = [
  {
    title: "Tara Solutions Cloud",
    description:
      "Development of the official website for Tara Solutions Inc with focus on performance optimization and security",
    tags: ["Next.js", "React.js", "Node.js"],
    image: "https://images.pexels.com/photos/7988086/pexels-photo-7988086.jpeg",
    link: "https://www.tarasolutions.cloud",
  },
  {
    title: "Cloud Station Platform",
    description:
      "Scalable Enterprise Cloud Services Platform with global user base. Implementation of Frontend and Backend with focus on performance",
    tags: ["React.js", "Next.js", "Node.js", "Kafka", "Nats"],
    image: "https://images.pexels.com/photos/6266317/pexels-photo-6266317.jpeg",
    link: "https://www.cloud-station.io",
  },
  {
    title: "Plant Disease Detection System",
    description:
      "AI-powered deep learning system for plant disease detection using Raspberry Pi and camera for real-time diagnosis",
    tags: ["Deep Learning", "Raspberry Pi", "Python", "Computer Vision"],
    image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg",
    link: "#",
  },
  {
    title: "E-commerce System",
    description:
      "Design and Optimization of PostgreSQL databases for e-commerce systems with RESTful APIs and microservices",
    tags: ["NestJS", "Next.js", "PostgreSQL", "CI/CD"],
    image: "https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg",
    link: "#",
  },
  {
    title: "Petition Management System",
    description:
      "Development of Petition Management System for the Ministry of Defense focusing on process optimization and workflow improvement",
    tags: ["Python", "Django", "React Native", "MySQL"],
    image: "https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg",
    link: "#",
  },
  {
    title: "MOEC Socio-Economic System",
    description:
      "Development of MOEC Socio-Economic Provincial Profiles Digitization System in collaboration with Tetra Tech",
    tags: ["PHP", "Laravel", "MySQL", "Vue.js"],
    image: "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg",
    link: "#",
  },
];

const ProjectShowcase = () => {
  return (
    <section className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tags={project.tags}
            image={project.image}
            link={project.link}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase;
