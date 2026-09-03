import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card } from '@/components/ui/card';
import { User, Calendar, MapPin, Mail, Phone, Building2, Map } from 'lucide-react';
import { OnboardingData } from '@/pages/Onboarding';
import { WILAYAS } from '@/lib/wilayas';

type Props = {
  data: OnboardingData;
  updateData: (d: Partial<OnboardingData>) => void;
  nextStep: () => void;
};

export default function Step0Registration({ data, updateData, nextStep }: Props) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className="w-full pb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">طلب التوظيف</h2>
        <p className="text-muted-foreground">الرجاء ملء استمارة التسجيل للبدء</p>
      </div>

      <Card className="p-6 md:p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="firstName">الاسم</Label>
              <div className="relative">
                <User className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
                <Input
                  id="firstName"
                  required
                  className="pr-10"
                  value={data.firstName}
                  onChange={(e) => updateData({ firstName: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName">اللقب</Label>
              <div className="relative">
                <User className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
                <Input
                  id="lastName"
                  required
                  className="pr-10"
                  value={data.lastName}
                  onChange={(e) => updateData({ lastName: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="birthDate">تاريخ الميلاد</Label>
              <div className="relative">
                <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
                <Input
                  id="birthDate"
                  type="date"
                  required
                  className="pr-10 text-left w-full block"
                  value={data.birthDate}
                  onChange={(e) => updateData({ birthDate: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">البريد الإلكتروني</Label>
              <div className="relative">
                <Mail className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  required
                  className="pr-10 text-left block w-full"
                  dir="ltr"
                  value={data.email}
                  onChange={(e) => updateData({ email: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="phone">رقم الهاتف</Label>
              <div className="relative">
                <Phone className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
                <Input
                  id="phone"
                  type="tel"
                  required
                  className="pr-10 text-left block w-full"
                  dir="ltr"
                  value={data.phone}
                  onChange={(e) =>
                    updateData({
                      phone: e.target.value,
                      availablePhone: data.availablePhone || e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>

          {/* Address section */}
          <div className="space-y-4 pt-4 border-t border-border/50">
            <p className="text-base font-semibold text-foreground">العنوان</p>

            <div className="space-y-2">
              <Label htmlFor="rue">الشارع / الحي (Rue)</Label>
              <div className="relative">
                <MapPin className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
                <Input
                  id="rue"
                  required
                  className="pr-10"
                  placeholder="مثال: شارع عقبة بن نافع، حي النصر"
                  value={data.rue}
                  onChange={(e) => updateData({ rue: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="wilaya">الولاية</Label>
                <div className="relative">
                  <Map className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground pointer-events-none z-10" />
                  <select
                    id="wilaya"
                    required
                    className="w-full pr-10 pl-3 h-10 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring appearance-none"
                    value={data.wilaya}
                    onChange={(e) => updateData({ wilaya: e.target.value })}
                  >
                    <option value="">اختر الولاية</option>
                    {WILAYAS.map((w) => (
                      <option key={w} value={w}>{w}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="commune">البلدية</Label>
                <div className="relative">
                  <Building2 className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="commune"
                    required
                    className="pr-10"
                    placeholder="اسم البلدية"
                    value={data.commune}
                    onChange={(e) => updateData({ commune: e.target.value })}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Yes/No questions */}
          <div className="space-y-6 pt-4 border-t border-border/50">
            {[
              { label: 'هل تعمل حاليًا؟', key: 'isWorking' as const, id: 'working' },
              { label: 'هل سبق لك العمل معنا؟', key: 'workedBefore' as const, id: 'worked' },
              { label: 'هل عمرك فوق 18 سنة؟', key: 'over18' as const, id: 'over18' },
              { label: 'هل لديك مكان نظيف في منزلك أو مرآبك؟', key: 'hasSpace' as const, id: 'space' },
            ].map(({ label, key, id }) => (
              <div key={id} className="space-y-3">
                <Label className="text-base font-semibold">{label}</Label>
                <RadioGroup
                  required
                  value={data[key]}
                  onValueChange={(v) => updateData({ [key]: v })}
                  className="flex gap-6"
                >
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <RadioGroupItem value="نعم" id={`${id}-yes`} />
                    <Label htmlFor={`${id}-yes`}>نعم</Label>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <RadioGroupItem value="لا" id={`${id}-no`} />
                    <Label htmlFor={`${id}-no`}>لا</Label>
                  </div>
                </RadioGroup>
              </div>
            ))}
          </div>

          <div className="pt-6">
            <Button type="submit" className="w-full h-14 text-lg font-bold">
              تقديم الطلب
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
