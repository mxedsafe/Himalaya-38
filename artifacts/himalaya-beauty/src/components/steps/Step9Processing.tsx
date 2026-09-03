import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function Step9Processing({ nextStep }: { nextStep: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 10000; // 10 seconds
    const interval = 50; // update every 50ms
    const steps = duration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(nextStep, 500); // slight delay after reaching 100%
          return 100;
        }
        return Math.min(prev + increment, 100);
      });
    }, interval);

    return () => clearInterval(timer);
  }, [nextStep]);

  return (
    <div className="flex-1 flex flex-col items-center justify-center py-20 w-full max-w-xl mx-auto relative overflow-hidden">
      {/* Background animated particles/glows could go here */}
      <div className="absolute inset-0 bg-primary/5 mix-blend-multiply rounded-full blur-3xl opacity-50 pointer-events-none animate-pulse" style={{ width: '150%', height: '150%', left: '-25%', top: '-25%' }}></div>

      <div className="relative z-10 w-full flex flex-col items-center text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="mb-8"
        >
          <Sparkles className="w-16 h-16 text-primary" />
        </motion.div>

        <h2 className="text-3xl font-bold text-foreground mb-4">
          جارٍ تحضير ملفك الوظيفي...
        </h2>
        
        <p className="text-muted-foreground mb-12">
          نحن نقوم بمعالجة بياناتك وإنشاء حسابك في النظام
        </p>

        <div className="w-full relative">
          <div className="h-4 w-full bg-slate-100 rounded-full overflow-hidden shadow-inner">
            <motion.div
              className="h-full bg-primary rounded-full relative"
              style={{ width: `${progress}%` }}
              layout
            >
              {/* Shimmer effect on progress bar */}
              <div className="absolute inset-0 bg-white/20 skew-x-12 translate-x-full animate-[shimmer_2s_infinite]"></div>
            </motion.div>
          </div>
          <div className="mt-4 text-2xl font-bold text-primary">
            {Math.floor(progress)}%
          </div>
        </div>
      </div>
    </div>
  );
}
