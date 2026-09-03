import { useEffect } from 'react';
import { Loader2 } from 'lucide-react';

export default function Step1Loading({ nextStep }: { nextStep: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      nextStep();
    }, 3000);
    return () => clearTimeout(timer);
  }, [nextStep]);

  return (
    <div className="flex-1 flex flex-col items-center justify-center py-20">
      <div className="relative">
        <div className="w-24 h-24 rounded-full border-4 border-primary/20 absolute inset-0 animate-ping"></div>
        <div className="w-24 h-24 rounded-full border-4 border-t-primary border-primary/10 animate-spin flex items-center justify-center bg-white shadow-lg z-10 relative">
          <Loader2 className="w-10 h-10 text-primary animate-spin" />
        </div>
      </div>
      <h3 className="mt-8 text-2xl font-bold text-foreground">جارٍ معالجة طلبك...</h3>
      <p className="mt-2 text-muted-foreground">الرجاء الانتظار قليلاً</p>
    </div>
  );
}
