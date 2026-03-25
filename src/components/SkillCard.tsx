import React from "react";
import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  animation: React.ReactNode;
}

export const SkillCard = ({ title, description, icon: Icon, animation }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-gold-500/50 transition-colors group"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-gold-500/10 rounded-xl group-hover:bg-gold-500/20 transition-colors">
          <Icon className="w-6 h-6 text-gold-500" />
        </div>
        <h3 className="text-xl font-display font-bold text-white">{title}</h3>
      </div>
      
      <div className="h-48 bg-slate-950 rounded-xl mb-6 overflow-hidden relative flex items-center justify-center border border-slate-800">
        {animation}
      </div>

      <p className="text-slate-400 text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export const FoundationAnimation = () => (
  <div className="relative w-full h-full flex flex-col items-center justify-end pb-8">
    {/* Ground */}
    <div className="absolute bottom-0 w-full h-1/3 bg-slate-800/50" />
    
    {/* Pile Foundation */}
    <div className="flex gap-4">
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          whileInView={{ height: 100 }}
          transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity, repeatDelay: 2 }}
          className="w-2 bg-gold-500/40 relative"
        >
          <div className="absolute top-0 w-4 h-4 -left-1 bg-gold-500 rounded-sm" />
        </motion.div>
      ))}
    </div>
    
    {/* Raft */}
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 1, delay: 1 }}
      className="w-32 h-4 bg-gold-600 rounded-sm mt-[-4px] z-10"
    />
  </div>
);

export const PTAnimation = () => (
  <div className="relative w-full h-full flex items-center justify-center px-8">
    <div className="w-full h-8 bg-slate-800 rounded-sm relative overflow-hidden">
      {/* Slab */}
      <motion.div
        animate={{
          y: [0, -2, 0],
        }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute inset-0 bg-slate-700"
      />
      {/* Tendons */}
      <svg className="absolute inset-0 w-full h-full">
        <motion.path
          d="M 0 16 Q 100 24 200 16"
          stroke="rgba(201, 138, 68, 0.6)"
          strokeWidth="2"
          fill="none"
          animate={{
            d: ["M 0 16 Q 100 24 200 16", "M 0 16 Q 100 12 200 16", "M 0 16 Q 100 24 200 16"]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </svg>
    </div>
    <div className="absolute top-1/2 left-4 -translate-y-1/2 w-2 h-12 bg-gold-500 rounded-full blur-sm opacity-50" />
    <div className="absolute top-1/2 right-4 -translate-y-1/2 w-2 h-12 bg-gold-500 rounded-full blur-sm opacity-50" />
  </div>
);

export const SteelAnimation = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="grid grid-cols-3 grid-rows-3 gap-2">
      {[...Array(9)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
          className="w-8 h-8 border-2 border-gold-500/30 flex items-center justify-center"
        >
          <div className="w-full h-[2px] bg-gold-500/20 rotate-45 absolute" />
          <div className="w-full h-[2px] bg-gold-500/20 -rotate-45 absolute" />
        </motion.div>
      ))}
    </div>
  </div>
);
