import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { Formation } from "@/components/Formation";
import { Hero } from "@/components/Hero";
import { skills, projects, experiences } from "@/data";
import { Eye } from "lucide-react";

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const handleVisit = (url: string) => {
    window.open(url, "_blank", "noopener noreferrer");
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="p-4 sm:p-6 backdrop-blur-lg bg-glass border-2 border-white/10 hover:scale-[1.02] transition-transform duration-300">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg sm:text-xl font-bold text-white">{project.title}</h3>
          {project.link && (
            <Button
              variant="ghost"
              size="sm"
              className="text-white/80 hover:text-white hover:bg-white/10 border-2"
              onClick={() => handleVisit(project.link)}
            >
              <Eye className="w-4 h-4 mr-2" />
              Voir
            </Button>
          )}
        </div>
        <p className="text-sm text-white/80 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag: string, idx: number) => (
            <span 
              key={idx} 
              className="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </Card>
    </motion.div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#DB0000] via-[#A00D8D] to-[#0A0094] p-2 sm:p-4 lg:p-8">
      <ParticlesBackground />
      
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto mb-8 sm:mb-12"
      >
        <Hero />
      </motion.div>

      {/* Skills Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 px-2 sm:px-4"
      >
        {skills.map((skill, index) => (
          <Card key={index} className="p-4 sm:p-6 backdrop-blur-lg bg-glass border-2 border-white/10 hover:scale-[1.02] transition-transform duration-300">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">{skill.title}</h3>
            <div className="space-y-3 sm:space-y-4">
              {skill.items.map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-xs sm:text-sm mb-1 text-white/80">
                    <span>{item.name}</span>
                    <span>{item.level}</span>
                  </div>
                  <div className="h-1.5 sm:h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percentage}%` }}
                      transition={{ duration: 0.8, delay: idx * 0.1 }}
                      className="h-full bg-gradient-to-r from-[#FF6B6B] to-[#FF69B4]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </motion.div>

      {/* Parcours Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="container mx-auto mb-8 sm:mb-12 px-2 sm:px-4"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-white">Parcours</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <Formation />
          
          <Card className="p-4 sm:p-6 backdrop-blur-lg bg-glass border-2 border-white/10 hover:scale-[1.02] transition-transform duration-300">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">Expérience</h3>
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="space-y-1 hover:bg-white/5 p-2 rounded-lg transition-colors"
                >
                  <h4 className="font-semibold text-white">{exp.title}</h4>
                  <p className="text-xs sm:text-sm text-white/70">{exp.company}</p>
                  <p className="text-xs sm:text-sm text-white/70">{exp.period}</p>
                  <ul className="list-disc list-inside text-xs sm:text-sm text-white/70 mt-2">
                    {exp.tasks.map((task, idx) => (
                      <li key={idx}>{task}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </Card>
        </div>
      </motion.div>

      {/* Projects Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="container mx-auto px-2 sm:px-4"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-white">Projets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Index;