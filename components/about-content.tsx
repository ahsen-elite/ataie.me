"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from './ui/button';

const AboutContent = () => {
  return (
    <section className="py-12">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="aspect-square relative rounded-2xl overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg"
              alt="Ishani Pandey"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Education</h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-medium">York University/Sheridan College</h3>
                <p className="text-sm text-muted-foreground">Bachelor of Design, York/Sheridan Program in Design</p>
                <p className="text-sm text-muted-foreground">2019 - 2023</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {['Figma', 'Adobe Creative Suite', 'HTML/CSS', 'JavaScript', 'React', 'User Research', 'Prototyping', 'UI Design', 'UX Design', 'Design Systems'].map((skill) => (
                <div key={skill} className="px-3 py-1 bg-secondary/50 rounded-full text-sm">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="prose prose-invert max-w-none space-y-6">
            <p>
              Hi! I'm Ishani, a product designer based in Toronto with a passion for creating accessible and impactful digital experiences. I recently graduated from the York/Sheridan Program in Design (YSDN) with a Bachelor of Design degree.
            </p>
            
            <p>
              Currently, I'm working at Microsoft as a product designer, where I focus on enhancing AI assistance tools for customer support agents. Previously, I worked at the Ontario Digital Service, where I helped create digital-first experiences for various ministries.
            </p>

            <p>
              My design philosophy centers around creating intuitive and accessible solutions that make a real difference in people's lives. I believe in the power of user-centered design and enjoy tackling complex problems through research, iteration, and collaboration.
            </p>

            <p>
              When I'm not designing, you can find me exploring new coffee shops, reading design blogs, or working on personal projects that challenge my creativity.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Experience</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-medium">Product Designer</h3>
                <p className="text-sm text-muted-foreground">Microsoft</p>
                <p className="text-sm text-muted-foreground">2023 - Present</p>
                <ul className="mt-2 text-sm text-muted-foreground list-disc list-inside space-y-1">
                  <li>Leading the design of AI assistance tools for customer support</li>
                  <li>Collaborating with cross-functional teams to deliver impactful solutions</li>
                  <li>Conducting user research and usability testing</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium">UX Designer</h3>
                <p className="text-sm text-muted-foreground">Ontario Digital Service</p>
                <p className="text-sm text-muted-foreground">2022 - 2023</p>
                <ul className="mt-2 text-sm text-muted-foreground list-disc list-inside space-y-1">
                  <li>Created digital-first experiences for government services</li>
                  <li>Worked on accessibility improvements across platforms</li>
                  <li>Facilitated design workshops and user testing sessions</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <Button className="w-full" size="lg" asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutContent;