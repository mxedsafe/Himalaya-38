import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function Step2Success({ nextStep }: { nextStep: () => void }) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center py-10 w-full max-w-md mx-auto">
      <Card className="w-full p-8 text-center flex flex-col items-center border-success/20 bg-success/5 shadow-sm">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="bg-white rounded-full p-3 shadow-md mb-6"
        >
          <CheckCircle2 className="w-20 h-20 text-success" />
        </motion.div>
        
        <h2 className="text-3xl font-bold text-foreground mb-4">
          تهانينا! لقد تم قبولك بصفة دائمة
        </h2>
        
        <p className="text-lg text-muted-foreground mb-10">
          يرجى إكمال معلوماتك للمتابعة
        </p>

        <Button onClick={nextStep} className="w-full h-14 text-lg font-bold">
          متابعة
        </Button>
      </Card>
    </div>
  );
}
