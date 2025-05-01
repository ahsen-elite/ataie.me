import ProjectCard from '@/components/project-card';

// Project data
const projects = [
  {
    title: "Microsoft Dynamics",
    description: "Enhancing <strong>AI assistance</strong> for Customer Support Agents to facilitate <em>faster case resolution</em>",
    tags: ["UI Design", "Research"],
    image: "https://images.pexels.com/photos/7988086/pexels-photo-7988086.jpeg",
    link: "#"
  },
  {
    title: "Ontario Digital Service",
    subtitle: "(Coming soon)",
    description: "Creating <strong>Digital First</strong> experiences for <em>Ministry of Human Rights, Finance and Long Term Care</em>",
    tags: ["Service Design", "Research"],
    image: "https://images.pexels.com/photos/6266317/pexels-photo-6266317.jpeg",
    link: "#"
  },
  {
    title: "Life Through Design",
    subtitle: "(Coming soon)",
    description: "Collaboratively spearheaded 3 projects for creating <strong>Digital First</strong> experiences for <em>Ministries in Ontario</em>",
    tags: ["Brand Design", "UGC app"],
    image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg",
    link: "#"
  },
  {
    title: "Finbot",
    description: "Designed <strong>Bot Assistance Tool</strong> for Streamlining Payment and Service Inquiries and enhancing Accessibility",
    tags: ["Side Project", "Chatbot"],
    image: "https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg",
    link: "#"
  },
  {
    title: "Food For Thought",
    description: "App aimed to help post-secondary students tackle the <em>quest for sustenance</em> and <em>food insecurity</em>",
    tags: ["Personal", "UX Design"],
    image: "https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg",
    link: "#"
  },
  {
    title: "WIZup",
    description: "App for effortless <em>learning journey</em>. Access MOOCs and university courses seamlessly, all-in-one app.",
    tags: ["Personal", "Design Hackathon"],
    image: "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg",
    link: "#"
  }
];

const ProjectShowcase = () => {
  return (
    <section className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            subtitle={project.subtitle}
            description={project.description}
            tags={project.tags}
            image={project.image}
            status={project.subtitle}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase;