import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Minus, Plus, Package } from 'lucide-react';
import { OnboardingData } from '@/pages/Onboarding';
import { Input } from '@/components/ui/input';

type Props = {
  data: OnboardingData;
  updateData: (d: Partial<OnboardingData>) => void;
  nextStep: () => void;
};

export default function Step5Packages({ data, updateData, nextStep }: Props) {
  const packagePrice = 50; // 50 DZD
  const expectedIncome = data.packageCount * packagePrice;

  const increment = () => updateData({ packageCount: data.packageCount + 50 });
  const decrement = () => updateData({ packageCount: Math.max(50, data.packageCount - 50) });

  return (
    <div className="w-full pb-12 max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Package className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">كم عدد الطرود التي ستعمل بها في الأسبوع الأول؟</h2>
        <p className="text-muted-foreground">الحد الأدنى المقترح: 250 طرد في الأسبوع</p>
      </div>

      <Card className="p-8 mb-8 text-center bg-white shadow-sm border-primary/20">
        <div className="flex items-center justify-center gap-6 mb-8">
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="w-14 h-14 rounded-full border-primary/20 text-primary hover:bg-primary hover:text-white"
            onClick={decrement}
          >
            <Minus className="w-6 h-6" />
          </Button>
          
          <div className="w-32">
            <Input 
              type="number" 
              value={data.packageCount}
              onChange={(e) => updateData({ packageCount: parseInt(e.target.value) || 0 })}
              className="text-center text-3xl font-bold h-16 border-primary/30 bg-primary/5 focus-visible:ring-primary"
            />
          </div>

          <Button
            type="button"
            variant="outline"
            size="icon"
            className="w-14 h-14 rounded-full border-primary/20 text-primary hover:bg-primary hover:text-white"
            onClick={increment}
          >
            <Plus className="w-6 h-6" />
          </Button>
        </div>

        <div className="bg-[#FFFBF8] p-6 rounded-xl border border-primary/10 text-right">
          <div className="space-y-3 mb-6 border-b border-primary/10 pb-4">
            <div className="flex justify-between text-lg">
              <span className="text-muted-foreground">عدد الطرود المختارة:</span>
              <span className="font-bold">{data.packageCount} طرد</span>
            </div>
            <div className="flex justify-between text-lg">
              <span className="text-muted-foreground">سعر الطرد الواحد:</span>
              <span className="font-bold">{packagePrice} دج</span>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-lg text-primary font-semibold mb-2">دخلك المتوقع للأسبوع الأول:</p>
            <div className="text-4xl md:text-5xl font-bold text-foreground flex items-center justify-center gap-2">
              {expectedIncome.toLocaleString()} <span className="text-2xl text-primary font-medium">دج</span>
            </div>
          </div>
        </div>
      </Card>

      <Button 
        onClick={nextStep} 
        disabled={data.packageCount <= 0} 
        className="w-full h-14 text-lg font-bold"
      >
        متابعة
      </Button>
    </div>
  );
}
