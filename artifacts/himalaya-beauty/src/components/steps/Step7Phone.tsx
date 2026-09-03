import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PhoneCall } from 'lucide-react';
import { OnboardingData } from '@/pages/Onboarding';

type Props = {
  data: OnboardingData;
  updateData: (d: Partial<OnboardingData>) => void;
  nextStep: () => void;
};

export default function Step7Phone({ data, updateData, nextStep }: Props) {
  const isValid = data.availablePhone.trim().length >= 8;

  return (
    <div className="w-full pb-12 max-w-xl mx-auto">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <PhoneCall className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-3xl font-bold text-foreground mb-2">رقم الهاتف المتاح للتواصل</h2>
        <p className="text-muted-foreground">سيتصل بك الموصّل على هذا الرقم عند التوصيل والاستلام</p>
      </div>

      <Card className="p-6 md:p-8 space-y-6 mb-8 text-center bg-white border-primary/20">
        <div className="space-y-4 max-w-xs mx-auto">
          <Label htmlFor="availablePhone" className="text-lg font-semibold block">رقم الهاتف</Label>
          <Input
            id="availablePhone"
            type="tel"
            dir="ltr"
            className="h-16 text-center text-2xl tracking-widest font-bold bg-primary/5 border-primary/30 focus-visible:ring-primary"
            value={data.availablePhone}
            onChange={(e) => updateData({ availablePhone: e.target.value })}
          />
        </div>
      </Card>

      <Button 
        onClick={nextStep} 
        disabled={!isValid} 
        className="w-full h-14 text-lg font-bold"
      >
        متابعة
      </Button>
    </div>
  );
}
