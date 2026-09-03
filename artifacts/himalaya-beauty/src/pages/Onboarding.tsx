import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '@/assets/logo.png';
import NotificationToast from '@/components/NotificationToast';
import StepWelcome from '@/components/steps/StepWelcome';
import StepFAQ from '@/components/steps/StepFAQ';
import Step0Registration from '@/components/steps/Step0Registration';
import Step1Loading from '@/components/steps/Step1Loading';
import Step2Success from '@/components/steps/Step2Success';
import Step3Calendar from '@/components/steps/Step3Calendar';
import Step4PaymentDay from '@/components/steps/Step4PaymentDay';
import Step5Packages from '@/components/steps/Step5Packages';
import Step6Address from '@/components/steps/Step6Address';
import Step7Phone from '@/components/steps/Step7Phone';
import Step8PaymentInfo from '@/components/steps/Step8PaymentInfo';
import Step9Processing from '@/components/steps/Step9Processing';
import Step10Final from '@/components/steps/Step10Final';

// Step map:
// 0  → Welcome
// 1  → FAQ
// 2  → Registration form
// 3  → Loading (after submit)
// 4  → Acceptance success
// 5  → Calendar (start date)
// 6  → Payment day
// 7  → Packages
// 8  → Address
// 9  → Phone
// 10 → Payment info
// 11 → Processing (10s bar)
// 12 → Final (payment)

export type OnboardingData = {
  firstName: string;
  lastName: string;
  birthDate: string;
  rue: string;
  wilaya: string;
  commune: string;
  email: string;
  phone: string;
  isWorking: string;
  workedBefore: string;
  over18: string;
  hasSpace: string;
  startDate: Date | null;
  paymentDay: string;
  packageCount: number;
  deliveryRue: string;
  deliveryWilaya: string;
  deliveryCommune: string;
  pickupRue: string;
  pickupWilaya: string;
  pickupCommune: string;
  availablePhone: string;
  paymentMethod: 'CCP' | 'RIP';
  ccpName: string;
  ccpNumber: string;
  ccpKey: string;
  ribNumber: string;
};

const initialData: OnboardingData = {
  firstName: '',
  lastName: '',
  birthDate: '',
  rue: '',
  wilaya: '',
  commune: '',
  email: '',
  phone: '',
  isWorking: '',
  workedBefore: '',
  over18: '',
  hasSpace: '',
  startDate: null,
  paymentDay: '',
  packageCount: 250,
  deliveryRue: '',
  deliveryWilaya: '',
  deliveryCommune: '',
  pickupRue: '',
  pickupWilaya: '',
  pickupCommune: '',
  availablePhone: '',
  paymentMethod: 'CCP',
  ccpName: '',
  ccpNumber: '',
  ccpKey: '',
  ribNumber: '',
};

// Bump version whenever the step layout changes so saved sessions restart cleanly
const STORAGE_KEY = 'himalaya_beauty_session_v4';

function loadSession(): { step: number; data: OnboardingData } {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { step: 0, data: initialData };
    const parsed = JSON.parse(raw);
    if (parsed.data?.startDate) {
      parsed.data.startDate = new Date(parsed.data.startDate);
    }
    return {
      step: parsed.step ?? 0,
      data: { ...initialData, ...parsed.data },
    };
  } catch {
    return { step: 0, data: initialData };
  }
}

export default function Onboarding() {
  const saved = loadSession();
  const [step, setStep] = useState(saved.step);
  const [data, setData] = useState<OnboardingData>(saved.data);

  const nextStep = () => setStep((s) => s + 1);
  const updateData = (updates: Partial<OnboardingData>) =>
    setData((d) => ({ ...d, ...updates }));

  // Persist on every change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ step, data }));
    } catch {
      // quota exceeded — silently ignore
    }
  }, [step, data]);

  // Progress bar: only show on interactive steps (5–10 inclusive)
  const totalInteractiveSteps = 8;
  const getProgress = () => {
    if (step <= 4) return 1;
    if (step === 5) return 2;
    if (step === 6) return 3;
    if (step === 7) return 4;
    if (step === 8) return 5;
    if (step === 9) return 6;
    if (step === 10) return 7;
    return 8;
  };
  const progressPercent = (getProgress() / totalInteractiveSteps) * 100;
  const showProgress = step >= 5 && step !== 11 && step !== 12;

  // Hide header on loading screens
  const hideHeader = step === 3 || step === 11;

  return (
    <div className="min-h-[100dvh] w-full flex flex-col bg-background selection:bg-primary/20" dir="rtl">
      <NotificationToast />

      {!hideHeader && (
        <header className="w-full bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
          <div className="max-w-3xl mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src={logo}
                alt="هيمالايا بيوتي"
                className="h-14 w-auto object-contain"
                style={{ mixBlendMode: 'multiply' }}
              />
            </div>
            <a
              href={`${import.meta.env.BASE_URL}info`}
              title="معلومات الشركة"
              className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary font-bold text-lg transition-colors"
            >
              ℹ
            </a>
          </div>
          {showProgress && (
            <div className="w-full h-1 bg-muted">
              <div
                className="h-full bg-primary transition-all duration-500 ease-out"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          )}
        </header>
      )}

      <main className="flex-1 w-full flex flex-col items-center max-w-3xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="w-full flex-1 flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="flex-1 flex flex-col w-full"
            >
              {step === 0  && <StepWelcome nextStep={nextStep} />}
              {step === 1  && <StepFAQ nextStep={nextStep} />}
              {step === 2  && <Step0Registration data={data} updateData={updateData} nextStep={nextStep} />}
              {step === 3  && <Step1Loading nextStep={nextStep} />}
              {step === 4  && <Step2Success nextStep={nextStep} />}
              {step === 5  && <Step3Calendar data={data} updateData={updateData} nextStep={nextStep} />}
              {step === 6  && <Step4PaymentDay data={data} updateData={updateData} nextStep={nextStep} />}
              {step === 7  && <Step5Packages data={data} updateData={updateData} nextStep={nextStep} />}
              {step === 8  && <Step6Address data={data} updateData={updateData} nextStep={nextStep} />}
              {step === 9  && <Step7Phone data={data} updateData={updateData} nextStep={nextStep} />}
              {step === 10 && <Step8PaymentInfo data={data} updateData={updateData} nextStep={nextStep} />}
              {step === 11 && <Step9Processing nextStep={nextStep} />}
              {step === 12 && <Step10Final data={data} />}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
