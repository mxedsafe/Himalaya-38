import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Info, Copy, Hourglass, Check, HeadphonesIcon, Lock } from 'lucide-react';
import { OnboardingData } from '@/pages/Onboarding';
import { useState } from 'react';
import { motion } from 'framer-motion';
import kitImage from '@/assets/kit.png';

type Props = {
  data: OnboardingData;
};

export default function Step10Final({ data }: Props) {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="w-full pb-16 max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">خطوة أخيرة: دفع ضمان طقم العمل</h2>
      </div>

      {/* Kit image */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-6 rounded-2xl overflow-hidden border border-primary/20 shadow-md"
      >
        <img
          src={kitImage}
          alt="طقم العمل الذي ستتلقينه"
          className="w-full object-cover max-h-72"
        />
        <div className="bg-primary/5 border-t border-primary/20 px-5 py-3 text-center">
          <p className="text-sm font-bold text-primary">📦 هذا هو طقم العمل الذي ستتلقينه بعد تأكيد الدفع</p>
        </div>
      </motion.div>

      {/* Info note */}
      <Card className="p-6 md:p-8 bg-amber-50/50 border-amber-200 mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-2 h-full bg-primary" />
        <div className="flex gap-4">
          <Info className="w-6 h-6 text-primary shrink-0 mt-1" />
          <div className="space-y-4 text-foreground/90 leading-relaxed font-medium">
            <p>قبل إرسال طقم العمل والمواد الخاصة بالتغليف، نود إعلامكم أنه يوجد ضمان قابل للاسترجاع بقيمة 2,000 دج.</p>
            <p>هذا المبلغ رسوم تسجيل و ضمان مؤقت خاص بطقم العمل ومواد التغليف التي سيتم إرسالها لكم.</p>
            <p>سيتم استرجاع مبلغ الضمان كاملًا مع أول دفعة أسبوعية بعد إتمام أول عمل وتسليم الطرود بشكل صحيح.</p>
            <div>
              <p className="font-bold text-foreground">يشمل طقم العمل:</p>
              <p>علب التغليف، أكياس الحماية، بطاقات المنتجات، الملصقات، شريط لاصق، مقص، والمواد الخاصة بالتجهيز.</p>
            </div>
            <p>بعد دفع الضمان، سيتم تأكيد عنوانكم وتنظيم إرسال طقم العمل إليكم داخل التيليقرام بعد إختيارك للمنتج ، ثم يمكنكم البدء في أقرب وقت ممكن.</p>
          </div>
        </div>
      </Card>

      {/* Payment account */}
      <Card className="p-6 md:p-8 border-primary/20 shadow-md mb-8">
        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
          <CreditCardIcon className="w-6 h-6 text-primary" />
          حساب الدفع:
        </h3>

        <div className="space-y-4">
          <div className="bg-slate-50 p-4 rounded-lg flex items-center justify-between border border-border">
            <div>
              <p className="text-sm text-muted-foreground mb-1">اسم المستفيد</p>
              <p className="font-bold text-lg">ليديا لونوغي</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="gap-2 shrink-0"
              onClick={() => copyToClipboard(' أيت سعدي شهناز', 'name')}
            >
              {copiedField === 'name' ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
              {copiedField === 'name' ? 'تم النسخ' : 'نسخ'}
            </Button>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg flex items-center justify-between border border-border">
            <div>
              <p className="text-sm text-muted-foreground mb-1">رقم الـ RIP (بريد الجزائر)</p>
              <p className="font-bold text-lg font-mono tracking-wider">00799999002826909327</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="gap-2 shrink-0"
              onClick={() => copyToClipboard('00799999001717043087', 'rip')}
            >
              {copiedField === 'rip' ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
              {copiedField === 'rip' ? 'تم النسخ' : 'نسخ'}
            </Button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-col items-center">
          <p className="text-muted-foreground font-semibold mb-2">المبلغ المطلوب</p>
          <div className="text-4xl font-black text-primary">2,000 دج</div>
        </div>
      </Card>

      {/* Waiting section */}
      <div className="flex flex-col items-center justify-center text-center space-y-8 mb-8">
        <div className="flex flex-col items-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            className="mb-4 text-primary"
          >
            <Hourglass className="w-10 h-10" />
          </motion.div>
          <h4 className="text-xl font-bold text-foreground">في انتظار تأكيد الدفع...</h4>
          <p className="text-muted-foreground mt-2">بعد إتمام الدفع، سيتم التواصل معك في أقرب وقت</p>
        </div>

        {/* Two buttons */}
        <div className="w-full max-w-sm space-y-3">
          {/* Support button — no Telegram mention */}
          <a
            href="https://t.me/lydia_beauty200"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Button className="w-full h-14 text-lg font-bold bg-primary hover:bg-primary/90 text-white flex items-center justify-center gap-3">
              <HeadphonesIcon className="w-5 h-5" />
              تواصل مع خدمة الدعم
            </Button>
          </a>

          {/* Locked channel button */}
          <div>
            <Button
              disabled
              className="w-full h-14 text-lg font-bold bg-slate-300 text-slate-600 disabled:opacity-80 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <Lock className="w-5 h-5" />
              قناة العمل (مقفلة حتى تأكيد الدفع)
            </Button>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              سيتم فتح هذا الزر بعد تأكيد الدفع من طرف الفريق
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CreditCardIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
}
