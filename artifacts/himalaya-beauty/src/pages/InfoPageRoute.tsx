import InfoPage from '@/components/InfoPage';

export default function InfoPageRoute() {
  return (
    <div className="min-h-[100dvh] w-full bg-background" dir="rtl">
      <div className="max-w-3xl mx-auto p-4 sm:p-6 lg:p-8 pt-6">
        <InfoPage onBack={() => { window.location.href = import.meta.env.BASE_URL; }} />
      </div>
    </div>
  );
}
