import React from 'react';
import { Code2, Palette, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import { SkillBar } from './SkillBar';

const skills = [
  {
    category: "Languages",
    icon: <Code2 className="w-6 h-6" />,
    items: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Python", level: 80 }
    ]
  },
  {
    category: "Frameworks",
    icon: <Terminal className="w-6 h-6" />,
    items: [
      { name: "React", level: 90 },
      { name: "Bootstrap", level: 85 },
      { name: "Tailwind CSS", level: 88 }
    ]
  },
  {
    category: "Design Tools",
    icon: <Palette className="w-6 h-6" />,
    items: [
      { name: "Figma", level: 85 },
      { name: "Adobe XD", level: 80 },
      { name: "Git", level: 88 }
    ]
  }
];

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        
        <motion.div 
          className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p>
            I'm a web developer and designer passionate about building responsive websites 
            and intuitive UI/UX designs. With a keen eye for detail and a love for clean code, 
            I transform ideas into engaging digital experiences.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillSet, index) => (
            <motion.div 
              key={skillSet.category} 
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="text-blue-600 dark:text-blue-400">
                  {skillSet.icon}
                </div>
                <h3 className="text-xl font-semibold dark:text-white">{skillSet.category}</h3>
              </div>
              <div className="space-y-4">
                {skillSet.items.map((skill) => (
                  <SkillBar 
                    key={skill.name}
                    skill={skill.name}
                    level={skill.level}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}