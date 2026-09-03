import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Building2,
  Hash,
  Clock,
  MapPin,
  Users,
  Star,
  Phone,
  Package,
  Truck,
  ShieldCheck,
  Warehouse,
  BadgeCheck,
  Heart,
} from 'lucide-react';
import warehouseImg from '@/assets/warehouse.png';

type Props = { onBack: () => void };

// ─── testimonials ────────────────────────────────────────────────────────────

const ALL_TESTIMONIALS = [
  { phone: '+213 555 12 34 56', text: 'Walah 3mlat marahet bezzaf, les colis simples et l\'argent ki jiw f waqthom 🩷', stars: 5 },
  { phone: '+213 770 98 76 54', text: 'Kifkif nta3 el khedma sahla, ana ghaya m3ahom, ma3andich hta complaints. Nraho f dari w nkhdm — ahsen ma lik!', stars: 5 },
  { phone: '+213 661 45 23 11', text: 'Le travail est vraiment simple, les vidéos de formation sont claires et l\'équipe répond rapidement. Je recommande vivement 👏', stars: 5 },
  { phone: '+213 540 33 21 09', text: 'Kont xayfa fil awal bs ma ndmtch, dakhli f sabou3 lwl kan 8500 dj 🎉 — fel waqt belwaqt!', stars: 5 },
  { phone: '+213 699 87 65 43', text: 'Franchement c\'est un vrai job sérieux. J\'ai reçu mon kit rapidement et tout était bien expliqué, rien à redire.', stars: 5 },
  { phone: '+213 778 56 34 12', text: 'Barak Allah fihom, kaynin hit nraha f dar w nkhdm wqt ma nbghi. Hsen bktr men khedma barra 💪', stars: 5 },
  { phone: '+213 551 23 45 67', text: 'Ana mertaha bezzaf, l\'équipe est toujours disponible et très sympa. Les paiements sont ponctuels chaque semaine ✅', stars: 5 },
  { phone: '+213 660 11 22 33', text: '3 chhor wlit n3tik l\'assurance, hna vrai hasel ma ken 😍 — kanet khedma b khedma m3ahom!', stars: 5 },
  { phone: '+213 776 44 55 22', text: 'J\'hésitais au début mais franchement c\'est top ! Le kit arrive à l\'heure et le salaire aussi 💰', stars: 5 },
  { phone: '+213 558 90 12 45', text: 'Ma3ndich hta kalma bghir positif, l\'équipe professionnelle et les colis faciles. Manouche nraha f dari wala khdmt m3ahom!', stars: 5 },
];

function pickTestimonials() {
  return [...ALL_TESTIMONIALS].sort(() => Math.random() - 0.5).slice(0, 8);
}

// ─── packaging steps ─────────────────────────────────────────────────────────

const PACKAGING_STEPS = [
  { n: 1, label: 'استلام المنتج والملصق', icon: '📦' },
  { n: 2, label: 'غلف المنتج بعناية', icon: '🛡️' },
  { n: 3, label: 'لصق الملصق على العبوة', icon: '🏷️' },
  { n: 4, label: 'ضع 32 قطعة في الكرتون', icon: '📫' },
  { n: 5, label: 'أغلق الكرتون وجاهز للتسليم', icon: '✅' },
];

const BOTTOM_FEATURES = [
  { icon: <Warehouse className="w-5 h-5" />, label: 'مستودع منظم وجاهز للشحن' },
  { icon: <ShieldCheck className="w-5 h-5" />, label: 'تغليف آمن لحماية المنتجات' },
  { icon: <Package className="w-5 h-5" />, label: 'مخزون متوفر بشكل دائم' },
  { icon: <Users className="w-5 h-5" />, label: 'فريق عمل محترف يدعمك دائمًا' },
  { icon: <Truck className="w-5 h-5" />, label: 'شحن سريع لكافة الولايات' },
];

const BADGES = [
  { icon: <BadgeCheck className="w-5 h-5 text-primary" />, label: 'منتجات أصلية 100%' },
  { icon: <Star className="w-5 h-5 text-amber-500 fill-amber-400" />, label: 'جودة مضمونة' },
  { icon: <ShieldCheck className="w-5 h-5 text-green-600" />, label: 'تغليف آمن وأثيق' },
  { icon: <Heart className="w-5 h-5 text-rose-500 fill-rose-400" />, label: 'ثقة عملائنا' },
];

// ─── component ───────────────────────────────────────────────────────────────

export default function InfoPage({ onBack }: Props) {
  const userCount = useMemo(() => Math.floor(Math.random() * 101) + 200, []);
  const testimonials = useMemo(pickTestimonials, []);

  return (
    <div className="w-full pb-20 max-w-2xl mx-auto" dir="rtl">
      {/* Back */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-primary font-semibold mb-6 hover:opacity-75 transition-opacity"
      >
        <ArrowRight className="w-5 h-5" />
        رجوع
      </button>

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
          <span className="text-4xl">🌸</span>
        </div>
        <h1 className="text-3xl font-black text-foreground">Himalaya Beauty</h1>
        <p className="text-muted-foreground mt-1">هيمالايا بيوتي — الجزائر</p>
      </motion.div>

      {/* ── Work opportunity banner ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="bg-gradient-to-br from-rose-50 to-pink-50 border border-rose-100 rounded-2xl p-6 mb-5 shadow-sm"
      >
        <h2 className="text-2xl font-black text-foreground mb-1">فرصة عمل من المنزل 🏠</h2>
        <p className="text-foreground/70 mb-5 leading-relaxed">
          شارك في تجهيز وتغليف منتجات هيمالايا بيوتي — منتجات تجميل أصلية بجودة عالية
        </p>

        {/* 4 badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {BADGES.map((b, i) => (
            <div key={i} className="bg-white rounded-xl p-3 flex flex-col items-center gap-1.5 border border-border shadow-sm text-center">
              {b.icon}
              <span className="text-xs font-semibold text-foreground/80">{b.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Pricing cards ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 gap-4 mb-5"
      >
        <div className="bg-white border border-border rounded-2xl p-5 text-center shadow-sm">
          <p className="text-sm text-muted-foreground mb-1 leading-snug">مقابل كل منتج تقوم بتغليفه تحصل على</p>
          <p className="text-4xl font-black text-primary mt-2">50</p>
          <p className="text-lg font-bold text-primary">DZD</p>
        </div>
        <div className="bg-primary text-white rounded-2xl p-5 text-center shadow-md">
          <p className="text-sm opacity-80 mb-1 leading-snug">عند تغليف 250 قطعة تحصل على</p>
          <p className="text-4xl font-black mt-2">12,500</p>
          <p className="text-lg font-bold">DZD</p>
        </div>
      </motion.div>

      {/* ── Carton info ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.13 }}
        className="bg-amber-50 border border-amber-100 rounded-2xl p-5 mb-5 flex items-center gap-5"
      >
        <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-amber-100 flex items-center justify-center">
          <span className="text-3xl">📦</span>
        </div>
        <div>
          <p className="text-2xl font-black text-amber-700">32 قطعة في كل كرتون</p>
          <p className="text-sm text-amber-600 mt-0.5">حجم الكرتون 39 سم — كل تعبك يقدر وكل تغليف يصنع فرق ✨</p>
        </div>
      </motion.div>

      {/* ── Packaging steps ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="bg-white border border-border rounded-2xl p-6 mb-5 shadow-sm"
      >
        <h2 className="text-xl font-bold text-foreground mb-5 flex items-center gap-2">
          <Package className="w-5 h-5 text-primary" />
          خطوات التغليف
        </h2>
        <ol className="space-y-3">
          {PACKAGING_STEPS.map((s) => (
            <li key={s.n} className="flex items-center gap-4">
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-primary/10 text-primary font-black text-sm flex items-center justify-center">
                {s.n}
              </div>
              <span className="text-lg">{s.icon}</span>
              <span className="text-foreground/85 font-medium">{s.label}</span>
            </li>
          ))}
        </ol>
      </motion.div>

      {/* ── Warehouse photo ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.17 }}
        className="rounded-2xl overflow-hidden border border-border shadow-md mb-5"
      >
        <img
          src={warehouseImg}
          alt="مستودع هيمالايا بيوتي"
          className="w-full object-cover"
          style={{ maxHeight: '340px', objectPosition: 'center top' }}
        />
        <div className="bg-white px-5 py-3 flex items-center gap-2">
          <Warehouse className="w-5 h-5 text-primary shrink-0" />
          <p className="text-sm font-semibold text-foreground/80">مستودع هيمالايا بيوتي — منظم ومجهز للشحن</p>
        </div>
      </motion.div>

      {/* ── 5 bottom features ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.19 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5"
      >
        {BOTTOM_FEATURES.map((f, i) => (
          <div key={i} className="bg-white border border-border rounded-xl p-4 flex items-center gap-3 shadow-sm">
            <div className="flex-shrink-0 w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center">
              {f.icon}
            </div>
            <span className="text-sm font-semibold text-foreground/80">{f.label}</span>
          </div>
        ))}
      </motion.div>

      {/* ── Company info card ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.21 }}
        className="bg-white border border-border rounded-2xl p-6 mb-5 shadow-sm space-y-4"
      >
        <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
          <Building2 className="w-5 h-5 text-primary" />
          معلومات الشركة
        </h2>

        <div className="flex items-center gap-3">
          <Hash className="w-4 h-4 text-primary shrink-0" />
          <div>
            <p className="text-xs text-muted-foreground">رقم السجل التجاري</p>
            <p className="font-bold tracking-wider text-foreground">900151897</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Building2 className="w-4 h-4 text-primary shrink-0" />
          <div>
            <p className="text-xs text-muted-foreground">اسم الشركة</p>
            <p className="font-bold text-foreground">Himalaya Beauty — هيمالايا بيوتي</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Phone className="w-4 h-4 text-primary shrink-0 mt-0.5" />
          <div>
            <p className="text-xs text-muted-foreground">أوقات الاتصال والتواصل</p>
            <p className="font-bold text-foreground">13:30 – 19:00</p>
            <p className="text-xs text-muted-foreground mt-0.5">من الإثنين إلى السبت</p>
          </div>
        </div>
      </motion.div>

      {/* ── Active users ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.23 }}
        className="bg-rose-50 border border-rose-100 rounded-2xl p-6 mb-5 flex items-center gap-5"
      >
        <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/15 flex items-center justify-center">
          <Users className="w-7 h-7 text-primary" />
        </div>
        <div>
          <p className="text-3xl font-black text-primary">{userCount.toLocaleString('ar-DZ')}</p>
          <p className="text-sm text-foreground/70 mt-0.5">عاملة نشطة حاليًا في هيمالايا بيوتي 🌸</p>
        </div>
      </motion.div>

      {/* ── Map ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="bg-white border border-border rounded-2xl overflow-hidden mb-5 shadow-sm"
      >
        <div className="p-4 border-b border-border flex items-center gap-2">
          <MapPin className="w-5 h-5 text-primary" />
          <span className="font-bold text-foreground">الموقع الجغرافي</span>
        </div>
        <div className="relative w-full" style={{ paddingBottom: '56%' }}>
          <iframe
            title="Himalaya Beauty Location"
            src="https://maps.google.com/maps?q=36.7188,3.1341&hl=ar&z=15&output=embed"
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="p-4 flex items-center justify-between gap-3 flex-wrap">
          <p className="text-sm text-muted-foreground">الجزائر العاصمة، الجزائر</p>
          <a href="https://maps.app.goo.gl/7UsMcdYmaXoF9uMPA" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm" className="gap-2 text-sm">
              <MapPin className="w-4 h-4" />
              فتح في خرائط Google
            </Button>
          </a>
        </div>
      </motion.div>

      {/* ── Testimonials ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.27 }}
        className="mb-6"
      >
        <h2 className="text-xl font-bold text-foreground flex items-center gap-2 mb-4">
          <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
          آراء العاملات 💬
        </h2>
        <div className="space-y-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.29 + i * 0.04 }}
              className="bg-white border border-border rounded-xl p-4 shadow-sm"
            >
              <div className="flex items-center justify-between mb-2 gap-2 flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-base">👩</span>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">
                    {t.phone.slice(0, -4) + '••••'}
                  </span>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: t.stars }).map((_, s) => (
                    <Star key={s} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-sm text-foreground/85 leading-relaxed">"{t.text}"</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <Button onClick={onBack} className="w-full h-14 text-lg font-bold">
        رجوع للتسجيل
      </Button>
    </div>
  );
}
