import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { formations } from "@/data";

export const Formation = () => {
  return (
    <Card className="p-4 sm:p-6 backdrop-blur-lg bg-glass border-2 border-white/10 hover:scale-[1.02] transition-transform duration-300">
      <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">Formation</h3>
      <div className="space-y-4">
        {formations.map((formation, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center hover:bg-white/5 p-2 rounded-lg transition-colors"
          >
            <div>
              <h4 className="font-semibold text-white text-sm sm:text-base">{formation.title}</h4>
              <p className="text-xs sm:text-sm text-white/70">{formation.school}</p>
              <span className={`inline-block px-2 py-0.5 text-xs rounded-full mt-1 ${formation.statusColor}`}>
                {formation.status}
              </span>
            </div>
            <span className="text-xs sm:text-sm text-white/70 mt-2 sm:mt-0">{formation.period}</span>
          </motion.div>
        ))}
      </div>
    </Card>
  );
};