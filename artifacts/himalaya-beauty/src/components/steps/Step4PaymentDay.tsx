import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Wallet } from 'lucide-react';
import { OnboardingData } from '@/pages/Onboarding';

type Props = {
  data: OnboardingData;
  updateData: (d: Partial<OnboardingData>) => void;
  nextStep: () => void;
};

export default function Step4PaymentDay({ data, updateData, nextStep }: Props) {
  const days = ['الجمعة', 'السبت', 'الأحد'];

  return (
    <div className="w-full pb-12 max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Wallet className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-3xl font-bold text-foreground mb-2">اختر يوم استلام الأجر</h2>
        <p className="text-muted-foreground">سيتم تحويل راتبك أسبوعياً في هذا اليوم</p>
      </div>

      <div className="grid grid-cols-1 gap-4 mb-10">
        {days.map(day => (
          <Card
            key={day}
            onClick={() => updateData({ paymentDay: day })}
            className={`
              p-6 cursor-pointer transition-all duration-300 flex items-center justify-between
              ${data.paymentDay === day 
                ? 'border-primary ring-2 ring-primary/20 bg-primary/5 scale-[1.02] shadow-md' 
                : 'hover:border-primary/50 hover:bg-slate-50'
              }
            `}
          >
            <span className="text-2xl font-bold text-foreground">{day}</span>
            <div className={`
              w-6 h-6 rounded-full border-2 flex items-center justify-center
              ${data.paymentDay === day ? 'border-primary' : 'border-muted-foreground'}
            `}>
              {data.paymentDay === day && <div className="w-3 h-3 bg-primary rounded-full" />}
            </div>
          </Card>
        ))}
      </div>

      <Button 
        onClick={nextStep} 
        disabled={!data.paymentDay} 
        className="w-full h-14 text-lg font-bold"
      >
        متابعة
      </Button>
    </div>
  );
}
