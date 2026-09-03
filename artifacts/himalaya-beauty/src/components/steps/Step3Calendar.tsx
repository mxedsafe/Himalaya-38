import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Calendar as CalendarIcon } from 'lucide-react';
import { OnboardingData } from '@/pages/Onboarding';
import { format, addMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSunday, isSameDay, isBefore, startOfToday } from 'date-fns';
import { ar } from 'date-fns/locale';

type Props = {
  data: OnboardingData;
  updateData: (d: Partial<OnboardingData>) => void;
  nextStep: () => void;
};

export default function Step3Calendar({ data, updateData, nextStep }: Props) {
  const today = startOfToday();
  const currentMonth = startOfMonth(today);
  const nextMonth = addMonths(currentMonth, 1);

  const renderMonth = (monthStart: Date) => {
    const days = eachDayOfInterval({
      start: monthStart,
      end: endOfMonth(monthStart)
    });

    // Padding for first day
    const firstDayOfWeek = monthStart.getDay(); // 0 is Sunday, 6 is Saturday
    // Arabic calendar usually starts on Sunday (0)
    const padding = Array.from({ length: firstDayOfWeek }).map((_, i) => (
      <div key={`pad-${i}`} className="h-12 w-full" />
    ));

    return (
      <div className="w-full">
        <h4 className="font-bold text-lg mb-4 text-center text-primary/80">
          {format(monthStart, 'MMMM yyyy', { locale: ar })}
        </h4>
        <div className="grid grid-cols-7 gap-1 text-center mb-2">
          {['أحد', 'إثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'].map(day => (
            <div key={day} className="text-xs font-semibold text-muted-foreground pb-2">{day}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {padding}
          {days.map(day => {
            const isPast = isBefore(day, today);
            const isClickable = isSunday(day) && !isPast;
            const isSelected = data.startDate && isSameDay(day, data.startDate);

            return (
              <button
                key={day.toISOString()}
                type="button"
                disabled={!isClickable}
                onClick={() => updateData({ startDate: day })}
                className={`
                  h-12 w-full rounded-md flex items-center justify-center text-sm transition-all duration-200 relative
                  ${isSelected ? 'bg-primary text-white font-bold shadow-md scale-105' : ''}
                  ${isClickable && !isSelected ? 'bg-white hover:bg-primary/10 hover:border-primary text-foreground border border-border cursor-pointer shadow-sm' : ''}
                  ${!isClickable && !isSelected ? 'text-muted-foreground/40 opacity-50 cursor-not-allowed bg-slate-50' : ''}
                `}
              >
                {format(day, 'd')}
                {isSelected && (
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full shadow-sm flex items-center justify-center">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full pb-12">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <CalendarIcon className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-3xl font-bold text-foreground mb-2">اختر تاريخ بدء العمل</h2>
        <p className="text-muted-foreground">يمكنك الاختيار فقط يوم الأحد</p>
      </div>

      <Card className="p-4 md:p-8 bg-[#FFFBF8] border-primary/20">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          <div className="flex-1">
            {renderMonth(currentMonth)}
          </div>
          <div className="hidden md:block w-px bg-border"></div>
          <div className="flex-1">
            {renderMonth(nextMonth)}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center">
          {data.startDate && (
            <p className="mb-6 text-lg font-medium text-primary bg-white px-6 py-3 rounded-full shadow-sm border border-primary/20">
              التاريخ المختار: <span className="font-bold">{format(data.startDate, 'EEEE, d MMMM yyyy', { locale: ar })}</span>
            </p>
          )}
          <Button 
            onClick={nextStep} 
            disabled={!data.startDate} 
            className="w-full max-w-sm h-14 text-lg font-bold"
          >
            متابعة
          </Button>
        </div>
      </Card>
    </div>
  );
}
