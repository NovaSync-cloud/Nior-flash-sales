import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: Date;
}

export const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeBlocks = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="flex items-center gap-3 sm:gap-4">
      {timeBlocks.map((block, index) => (
        <div key={block.label} className="flex items-center gap-3 sm:gap-4">
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-card border border-border rounded-lg flex items-center justify-center">
                <span className="text-2xl sm:text-3xl font-bold text-foreground font-serif">
                  {String(block.value).padStart(2, '0')}
                </span>
              </div>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-primary/50 rounded-full" />
            </div>
            <span className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-widest mt-2">
              {block.label}
            </span>
          </div>
          {index < timeBlocks.length - 1 && (
            <span className="text-2xl sm:text-3xl text-primary font-light animate-pulse">:</span>
          )}
        </div>
      ))}
    </div>
  );
};
