import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CreditCard, Landmark } from 'lucide-react';
import { OnboardingData } from '@/pages/Onboarding';

type Props = {
  data: OnboardingData;
  updateData: (d: Partial<OnboardingData>) => void;
  nextStep: () => void;
};

export default function Step8PaymentInfo({ data, updateData, nextStep }: Props) {
  const isCcpValid = data.ccpName.trim() !== '' && data.ccpNumber.trim() !== '' && data.ccpKey.trim() !== '';
  const isRipValid = data.ribNumber.trim() !== '';
  
  const isValid = data.paymentMethod === 'CCP' ? isCcpValid : isRipValid;

  return (
    <div className="w-full pb-12 max-w-xl mx-auto">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Landmark className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-3xl font-bold text-foreground mb-2">معلومات حساب استلام الأجر</h2>
        <p className="text-muted-foreground">أدخل معلومات حساب بريد الجزائر الخاص بك</p>
      </div>

      <Card className="p-6 md:p-8 mb-8 border-primary/20">
        <Tabs 
          defaultValue={data.paymentMethod === 'RIB' ? 'RIP' : data.paymentMethod} 
          onValueChange={(v) => updateData({ paymentMethod: v as 'CCP' | 'RIP' })}
          className="w-full"
          dir="rtl"
        >
          <TabsList className="grid w-full grid-cols-2 mb-8 h-14 p-1 bg-slate-100">
            <TabsTrigger value="CCP" className="text-lg font-bold h-full data-[state=active]:bg-white data-[state=active]:shadow-sm">
              <CreditCard className="w-5 h-5 ml-2" />
              بريد الجزائر CCP
            </TabsTrigger>
            <TabsTrigger value="RIP" className="text-lg font-bold h-full data-[state=active]:bg-white data-[state=active]:shadow-sm">
              <Landmark className="w-5 h-5 ml-2" />
              بريد الجزائر RIP
            </TabsTrigger>
          </TabsList>

          <TabsContent value="CCP" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="ccpName">الاسم على الحساب</Label>
              <Input
                id="ccpName"
                className="h-12"
                placeholder="الاسم كما هو مكتوب في الصك"
                value={data.ccpName}
                onChange={(e) => updateData({ ccpName: e.target.value })}
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2 col-span-2">
                <Label htmlFor="ccpNumber">رقم الحساب CCP</Label>
                <Input
                  id="ccpNumber"
                  className="h-12 text-left"
                  dir="ltr"
                  placeholder="000000000"
                  value={data.ccpNumber}
                  onChange={(e) => updateData({ ccpNumber: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ccpKey">المفتاح (Clé)</Label>
                <Input
                  id="ccpKey"
                  className="h-12 text-left"
                  dir="ltr"
                  placeholder="00"
                  maxLength={2}
                  value={data.ccpKey}
                  onChange={(e) => updateData({ ccpKey: e.target.value })}
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="RIP" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="ribNumber">رقم الـ RIP (بريد الجزائر)</Label>
              <Input
                id="ribNumber"
                className="h-14 text-left font-mono tracking-widest text-lg"
                dir="ltr"
                placeholder="00799999000000000000"
                maxLength={20}
                value={data.ribNumber}
                onChange={(e) => updateData({ ribNumber: e.target.value })}
              />
              <p className="text-sm text-muted-foreground mt-2">يتكون رقم RIP من 20 رقمًا بدون فراغات</p>
            </div>
          </TabsContent>
        </Tabs>
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
