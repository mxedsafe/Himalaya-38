import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { CheckCircle2, Star } from 'lucide-react';

type Props = { nextStep: () => void };

const conditions = [
  'لديك مكان نظيف في المنزل أو في مرآب',
  'عمرك بين 19 سنة و 65 سنة',
  'لا تعمل عملًا آخر خلال عملك معنا',
  'تسكن في الجزائر',
  'لديك حساب بنكي أو بريدي لاستقبال الدخل الأسبوعي',
];

const benefits = [
  { icon: '🏠', text: 'العمل في البيت' },
  { icon: '💰', text: 'دخل أسبوعي مغري' },
  { icon: '🆓', text: 'منتجات مجانية للتجربة كل أسبوع (ماكياج، مواد تنظيف…)' },
  {
    icon: '🎁',
    text: 'مكافآت أسبوعية — تُحسب حسب العمل المنجز، وأفضل عشرة عاملات تأخذ المكافأة زائد الدخل الأسبوعي',
  },
  { icon: '💳', text: 'تأمين بعد ثلاثة أشهر عمل مع CNAS' },
  { icon: '🎉', text: 'مفاجآت شهرية منها أكواد برومو يسير وأوريدو' },
];

export default function StepWelcome({ nextStep }: Props) {
  return (
    <div className="w-full pb-16 max-w-2xl mx-auto">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
          <span className="text-4xl">🌸</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-foreground mb-3">
          مرحبًا بكم 🩷
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          نقوم بتوظيف ماكثات في البيت لتغليف طرود أوردرات لشركة{' '}
          <span className="text-primary font-bold">هيمالايا بيوتي 🌸</span>
        </p>
      </motion.div>

      {/* Who are we */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="bg-rose-50 border border-rose-100 rounded-2xl p-6 mb-6"
      >
        <h2 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
          <span>🌸</span> من نحن؟
        </h2>
        <p className="text-foreground/80 leading-relaxed">
          نحن شركة توظيف تابعة لـ <strong>هيمالايا بيوتي</strong>، نوفر فرص عمل من المنزل
          لربّات البيوت والنساء الراغبات في دخل إضافي.
        </p>
      </motion.div>

      {/* Who can work */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="bg-white border border-border rounded-2xl p-6 mb-6 shadow-sm"
      >
        <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
          <span>👩‍💼</span> من يستطيع العمل معنا؟
        </h2>
        <ul className="space-y-3">
          {conditions.map((cond, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">
                {i + 1}
              </span>
              <span className="text-foreground/85 leading-snug pt-0.5">{cond}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Benefits */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="bg-white border border-border rounded-2xl p-6 mb-8 shadow-sm"
      >
        <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
          <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
          مميزات العمل 🏅
        </h2>
        <ul className="space-y-3">
          {benefits.map((b, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="flex-shrink-0 text-xl leading-snug">{b.icon}</span>
              <span className="text-foreground/85 leading-snug pt-0.5">{b.text}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Accept button */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.4 }}
      >
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <p className="text-sm text-amber-800 leading-relaxed">
            بالنقر على "أوافق وأكمل"، تؤكدين أنك اطلعت على الشروط أعلاه وتوافقين عليها.
          </p>
        </div>
        <Button onClick={nextStep} className="w-full h-14 text-lg font-bold">
          أوافق وأكمل ←
        </Button>
      </motion.div>
    </div>
  );
}
