import { FC } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Mail, FileDown } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const CONTACT_EMAIL = "ethan@serpolet.fun";
const GITHUB_URL = "https://github.com/ethanserpolet";
const CV_URL = "https://drive.google.com/file/d/17ndHDWOAAp3yLlHn88_TAh_1AD8RK26l/view?usp=sharing";

export const Hero: FC = () => {
  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      toast.success("Email copied to clipboard!");
    } catch (error) {
      toast.error("Failed to copy email");
    }
  };

  const handleExternalLink = (url: string) => {
    window.open(url, "_blank", "noopener noreferrer");
  };

  return (
    <Card className="p-4 sm:p-6 lg:p-8 backdrop-blur-lg bg-glass border-2 border-white/10 hover:scale-[1.02] transition-transform duration-300">
      <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white/90 to-white/60 text-transparent bg-clip-text drop-shadow-lg">
            Ethan Serpolet
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-4 sm:mb-6 text-white/80">
            Développeur & Admin Sys passionné
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <ContactButton icon={Mail} text="Contact" onClick={handleEmailClick} />
            <ContactButton 
              icon={Github} 
              text="GitHub" 
              onClick={() => handleExternalLink(GITHUB_URL)} 
            />
            <ContactButton 
              icon={FileDown} 
              text="CV PDF" 
              onClick={() => handleExternalLink(CV_URL)} 
            />
          </div>
        </div>
        <ProfileImage />
      </div>
    </Card>
  );
};

interface ContactButtonProps {
  icon: FC;
  text: string;
  onClick: () => void;
}

const ContactButton: FC<ContactButtonProps> = ({ icon: Icon, text, onClick }) => (
  <motion.div whileTap={{ scale: 0.95 }}>
    <Button 
      variant="outline" 
      size="sm"
      className="backdrop-blur-sm text-xs sm:text-sm"
      onClick={onClick}
    >
      <Icon className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
      {text}
    </Button>
  </motion.div>
);

const ProfileImage: FC = () => (
  <div className="relative mt-6 md:mt-0">
    <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B6B] to-[#FF69B4] opacity-20 blur-3xl rounded-full" />
    <img 
      src="https://i.scdn.co/image/ab6761610000e5ebce5e41d06ce67384be598ebc"
      alt="Profile"
      className="rounded-full w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 mx-auto relative z-10"
    />
  </div>
);