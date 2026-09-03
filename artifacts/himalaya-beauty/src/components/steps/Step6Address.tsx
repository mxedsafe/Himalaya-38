import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MapPin, Truck, Building2, Map } from 'lucide-react';
import { OnboardingData } from '@/pages/Onboarding';
import { useEffect } from 'react';
import { WILAYAS } from '@/lib/wilayas';

type Props = {
  data: OnboardingData;
  updateData: (d: Partial<OnboardingData>) => void;
  nextStep: () => void;
};

function AddressBlock({
  title,
  subtitle,
  rueValue,
  wilayaValue,
  communeValue,
  onRue,
  onWilaya,
  onCommune,
  idPrefix,
}: {
  title: string;
  subtitle?: string;
  rueValue: string;
  wilayaValue: string;
  communeValue: string;
  onRue: (v: string) => void;
  onWilaya: (v: string) => void;
  onCommune: (v: string) => void;
  idPrefix: string;
}) {
  return (
    <div className="space-y-4">
      <div>
        <p className="text-base font-semibold text-foreground">{title}</p>
        {subtitle && <p className="text-sm text-muted-foreground mt-0.5">{subtitle}</p>}
      </div>

      <div className="space-y-3">
        <div className="space-y-2">
          <Label htmlFor={`${idPrefix}-rue`}>الشارع / الحي (Rue)</Label>
          <div className="relative">
            <MapPin className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
            <Input
              id={`${idPrefix}-rue`}
              required
              className="pr-10 h-12"
              placeholder="مثال: شارع زيغود يوسف، حي الرياض"
              value={rueValue}
              onChange={(e) => onRue(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="space-y-2">
            <Label htmlFor={`${idPrefix}-wilaya`}>الولاية</Label>
            <div className="relative">
              <Map className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground pointer-events-none z-10" />
              <select
                id={`${idPrefix}-wilaya`}
                required
                className="w-full pr-10 pl-3 h-12 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring appearance-none"
                value={wilayaValue}
                onChange={(e) => onWilaya(e.target.value)}
              >
                <option value="">اختر الولاية</option>
                {WILAYAS.map((w) => (
                  <option key={w} value={w}>{w}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor={`${idPrefix}-commune`}>البلدية</Label>
            <div className="relative">
              <Building2 className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
              <Input
                id={`${idPrefix}-commune`}
                required
                className="pr-10 h-12"
                placeholder="اسم البلدية"
                value={communeValue}
                onChange={(e) => onCommune(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Step6Address({ data, updateData, nextStep }: Props) {
  // Pre-fill delivery/pickup from registration address if empty
  useEffect(() => {
    const updates: Partial<OnboardingData> = {};
    if (!data.deliveryRue && data.rue) updates.deliveryRue = data.rue;
    if (!data.deliveryWilaya && data.wilaya) updates.deliveryWilaya = data.wilaya;
    if (!data.deliveryCommune && data.commune) updates.deliveryCommune = data.commune;
    if (!data.pickupRue && data.rue) updates.pickupRue = data.rue;
    if (!data.pickupWilaya && data.wilaya) updates.pickupWilaya = data.wilaya;
    if (!data.pickupCommune && data.commune) updates.pickupCommune = data.commune;
    if (Object.keys(updates).length > 0) updateData(updates);
  }, []);

  const isDeliveryValid =
    data.deliveryRue.trim() && data.deliveryWilaya.trim() && data.deliveryCommune.trim();
  const isPickupValid =
    data.pickupRue.trim() && data.pickupWilaya.trim() && data.pickupCommune.trim();
  const isValid = !!(isDeliveryValid && isPickupValid);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) nextStep();
  };

  return (
    <div className="w-full pb-12 max-w-xl mx-auto">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Truck className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-3xl font-bold text-foreground mb-2">أدخل عنوان التوصيل والاستلام</h2>
        <p className="text-muted-foreground">هذا هو العنوان الذي سيأتي إليه موصّل الطرود</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Card className="p-6 md:p-8 space-y-6">
          <AddressBlock
            title="عنوان التوصيل"
            subtitle="استلام مواد التغليف من الموصّل"
            idPrefix="delivery"
            rueValue={data.deliveryRue}
            wilayaValue={data.deliveryWilaya}
            communeValue={data.deliveryCommune}
            onRue={(v) => updateData({ deliveryRue: v })}
            onWilaya={(v) => updateData({ deliveryWilaya: v })}
            onCommune={(v) => updateData({ deliveryCommune: v })}
          />
        </Card>

        <Card className="p-6 md:p-8 space-y-6">
          <AddressBlock
            title="عنوان الاستلام"
            subtitle="تسليم الطرود الجاهزة للموصّل — يمكن أن يكون نفس عنوان التوصيل"
            idPrefix="pickup"
            rueValue={data.pickupRue}
            wilayaValue={data.pickupWilaya}
            communeValue={data.pickupCommune}
            onRue={(v) => updateData({ pickupRue: v })}
            onWilaya={(v) => updateData({ pickupWilaya: v })}
            onCommune={(v) => updateData({ pickupCommune: v })}
          />
        </Card>

        <Button
          type="submit"
          disabled={!isValid}
          className="w-full h-14 text-lg font-bold"
        >
          متابعة
        </Button>
      </form>
    </div>
  );
}
