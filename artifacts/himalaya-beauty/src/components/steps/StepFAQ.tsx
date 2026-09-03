import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { HelpCircle, Clock } from 'lucide-react';
import { useState } from 'react';

type Props = { nextStep: () => void };

const faqs = [
  {
    q: 'هل يمكنني التسجيل في أي ولاية 📍؟',
    a: 'نعم، تستطيعين التسجيل في جميع ولايات الوطن.',
  },
  {
    q: 'من يقوم بتوصيل الطرود قبل وبعد العمل 📦؟',
    a: 'نحن نتكفل بتوصيل وتسليم طاقم العمل كل أسبوع بالتعاون مع شركة يسير Inc.',
  },
  {
    q: 'ما هي أيام التوصيل والتسليم 🗓️؟',
    a: 'نقوم بتوصيل الطاقم كل يوم سبت، وتسليم عمل الأسبوع السابق يكون في نفس اللحظة مع نفس عامل التوصيل. (إذا كان أسبوعك الأول ستقومين باستقبال الطاقم فقط بدون تسليم)',
  },
  {
    q: 'كم هو الدخل 💰؟',
    a: 'الدخل يكون حسب العمل المنجز. إذا قمتِ بتغليف 250 طرد في الأسبوع (ستة أيام بدون حساب يوم التسليم) سيكون دخلك 12,500 دج — أي دخل الطرد الواحد 50 دج.',
  },
  {
    q: 'هل عملية التغليف صعبة 🧩؟',
    a: 'لا. عملية تغليف طرد واحد تأخذ حوالي 4 دقائق فقط.',
  },
  {
    q: 'ماذا لو لم أعرف كيفية العمل 🖥️؟',
    a: 'لا تقلقي! في أسبوعك الأول سنقوم بتدريبك من خلال فيديوهات ونصائح لتجهيزك.',
  },
  {
    q: 'هل يمكن أن يعمل معي شخص آخر 👭؟',
    a: 'إذا كان مسجلًا معنا لا يمكنك. أي اكتشاف لتصرف مثل هذا سنقوم بحظرك مباشرة بدون سابق إنذار.',
  },
];

export default function StepFAQ({ nextStep }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full pb-16 max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center mb-8"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
          <HelpCircle className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-3xl font-black text-foreground mb-2">أسئلة شائعة ❓</h2>
        <p className="text-muted-foreground">اقرئي الإجابات قبل المتابعة</p>
      </motion.div>

      <div className="space-y-3 mb-8">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.35 }}
            className="bg-white border border-border rounded-xl shadow-sm overflow-hidden"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full text-right px-5 py-4 flex items-center justify-between gap-3 hover:bg-rose-50/50 transition-colors"
            >
              <span className="font-semibold text-foreground text-base leading-snug">
                {faq.q}
              </span>
              <span
                className={`flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold transition-transform duration-200 ${
                  openIndex === i ? 'rotate-45' : ''
                }`}
              >
                +
              </span>
            </button>

            {openIndex === i && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="px-5 pb-4 text-foreground/80 leading-relaxed border-t border-border/50 pt-3"
              >
                {faq.a}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 flex items-start gap-3"
      >
        <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <p className="text-sm text-amber-800 leading-relaxed">
          <strong>ملاحظة:</strong> يجب القيام بعملية التسجيل بين{' '}
          <strong>8:00 صباحًا و 20:00 مساءً</strong>. أي تسجيل خارج هذا الوقت سيتم الرد عليه اليوم الموالي.
        </p>
      </motion.div>

      <Button onClick={nextStep} className="w-full h-14 text-lg font-bold">
        فهمت — المتابعة للتسجيل ←
      </Button>
    </div>
  );
}
