import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserCheck, Briefcase } from 'lucide-react';

const ALGERIAN_NAMES = [
  'أميرة', 'نور', 'سارة', 'ريم', 'ياسمين', 'ليلى', 'سلمى', 'هناء',
  'رنا', 'فاطمة', 'خديجة', 'مريم', 'آية', 'حنان', 'زينب', 'نادية',
  'سمية', 'وردة', 'إيمان', 'هيفاء', 'لمى', 'رهف', 'شيماء', 'أسماء',
  'دنيا', 'بسمة', 'نسرين', 'روان', 'مروة', 'إنصاف', 'كوثر', 'أحلام',
  'حياة', 'وفاء', 'نجوى', 'صفية', 'لطيفة', 'نعيمة', 'زهرة', 'رشيدة',
  'أمال', 'ثريا', 'هدى', 'سعيدة', 'جميلة', 'رفيقة', 'فريدة', 'زليخة',
  'لويزة', 'تيزيري', 'نسيمة', 'صونية', 'رابحة', 'نوارة', 'منى', 'وسيلة',
];

const MESSAGES = [
  { text: 'قامت بالتسجيل للتو', type: 'signup', icon: UserCheck },
  { text: 'بدأت العمل اليوم', type: 'work', icon: Briefcase },
  { text: 'انضمت لفريق العمل', type: 'signup', icon: UserCheck },
  { text: 'بدأت تغليف طرودها', type: 'work', icon: Briefcase },
];

interface Notification {
  id: number;
  name: string;
  message: string;
  type: string;
  Icon: typeof UserCheck;
}

let notifId = 0;

export default function NotificationToast() {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    const fire = () => {
      const name = ALGERIAN_NAMES[Math.floor(Math.random() * ALGERIAN_NAMES.length)];
      const msg = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];
      const id = ++notifId;

      setNotifications((prev) => [
        ...prev.slice(-2), // keep max 3 at once
        { id, name, message: msg.text, type: msg.type, Icon: msg.icon },
      ]);

      // Auto-remove after 4s
      setTimeout(() => {
        setNotifications((prev) => prev.filter((n) => n.id !== id));
      }, 4000);
    };

    // Fire first one after 5s then every 13s
    const initial = setTimeout(fire, 5000);
    const interval = setInterval(fire, 13000);

    return () => {
      clearTimeout(initial);
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className="fixed top-20 left-6 z-[100] flex flex-col gap-2 pointer-events-none"
      dir="rtl"
    >
      <AnimatePresence>
        {notifications.map((n) => (
          <motion.div
            key={n.id}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="bg-white border border-rose-100 shadow-lg rounded-xl px-4 py-3 flex items-center gap-3 max-w-[260px] pointer-events-auto"
          >
            <div
              className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center ${
                n.type === 'signup' ? 'bg-rose-50' : 'bg-amber-50'
              }`}
            >
              <n.Icon
                className={`w-4 h-4 ${
                  n.type === 'signup' ? 'text-rose-500' : 'text-amber-500'
                }`}
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-gray-800 truncate">{n.name}</p>
              <p className="text-xs text-gray-500">{n.message}</p>
            </div>
            {/* pulse dot */}
            <span className="flex-shrink-0 w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
