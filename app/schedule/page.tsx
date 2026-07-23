'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Clock, Info, Coffee, Utensils, Moon, Navigation } from 'lucide-react';
import { scheduleData } from '@/data/scheduleData';

// Helper per assegnare colori ed icone ai tipi di evento
const getEventStyles = (type: string) => {
  switch (type) {
    case 'meal': return { color: 'text-amber-400', bg: 'bg-amber-400', icon: <Utensils className="w-4 h-4" /> };
    case 'class': return { color: 'text-blue-400', bg: 'bg-blue-400', icon: <Info className="w-4 h-4" /> };
    case 'excursion': return { color: 'text-emerald-400', bg: 'bg-emerald-400', icon: <MapPin className="w-4 h-4" /> };
    case 'night': return { color: 'text-purple-400', bg: 'bg-purple-400', icon: <Moon className="w-4 h-4" /> };
    case 'transport': return { color: 'text-cyan-400', bg: 'bg-cyan-400', icon: <Navigation className="w-4 h-4" /> };
    case 'free': return { color: 'text-teal-400', bg: 'bg-teal-400', icon: <Coffee className="w-4 h-4" /> };
    case 'info': return { color: 'text-slate-400', bg: 'bg-slate-400', icon: <Info className="w-4 h-4" /> };
    default: return { color: 'text-slate-400', bg: 'bg-slate-400', icon: <Clock className="w-4 h-4" /> };
  }
};

export default function SchedulePage() {
  const [currentIndex, setCurrentIndex] = useState(1); // Parte dal 23 Luglio (Indice 1)
  const scrollRef = useRef<HTMLDivElement>(null);
  const currentDay = scheduleData[currentIndex];

  // Navigazione frecce
  const handlePrev = () => setCurrentIndex(prev => Math.max(0, prev - 1));
  const handleNext = () => setCurrentIndex(prev => Math.min(scheduleData.length - 1, prev + 1));

  // Centra il bottone del calendario quando cambia il giorno
  useEffect(() => {
    if (scrollRef.current) {
      const selectedButton = scrollRef.current.children[currentIndex] as HTMLElement;
      if (selectedButton) {
        selectedButton.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [currentIndex]);

  if (!currentDay) return null; // Fallback di sicurezza

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 pb-24">
      {/* HEADER STICKY CON NAVIGAZIONE */}
      <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800">
        
        {/* Frecce e Titolo Giorno */}
        <div className="flex items-center justify-between px-4 py-3">
          <button 
            onClick={handlePrev} 
            disabled={currentIndex === 0}
            className="p-2 bg-slate-800 hover:bg-slate-700 rounded-full disabled:opacity-30 transition-all active:scale-95"
          >
            <ChevronLeft className="w-5 h-5 text-slate-300" />
          </button>
          
          <div className="text-center">
            <h1 className="text-lg font-bold text-white tracking-wide">
              {currentDay.dayName}, {currentDay.shortDate}
            </h1>
            <p className="text-[10px] uppercase text-blue-400 font-semibold tracking-wider">
              {currentDay.highlight}
            </p>
          </div>

          <button 
            onClick={handleNext} 
            disabled={currentIndex === scheduleData.length - 1}
            className="p-2 bg-slate-800 hover:bg-slate-700 rounded-full disabled:opacity-30 transition-all active:scale-95"
          >
            <ChevronRight className="w-5 h-5 text-slate-300" />
          </button>
        </div>

        {/* Striscia Calendario Orizzontale */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-2 px-4 pb-3 no-scrollbar snap-x"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {scheduleData.map((day, idx) => {
            // Estrapoliamo il numero dal "22 Jul" per il quadratino
            const dayNum = day.shortDate.split(' ')[0];
            
            return (
              <button
                key={day.id}
                onClick={() => setCurrentIndex(idx)}
                className={`flex-shrink-0 snap-center px-4 py-2 rounded-xl border transition-all flex flex-col items-center min-w-[4rem]
                  ${currentIndex === idx 
                    ? 'bg-blue-600 border-blue-500 shadow-md shadow-blue-900/30 text-white' 
                    : 'bg-slate-800/50 border-slate-700 text-slate-400 hover:bg-slate-800'
                  }`}
              >
                <span className="text-[10px] font-bold uppercase">{day.dayName.substring(0, 3)}</span>
                <span className="text-lg font-extrabold leading-tight">{dayNum}</span>
              </button>
            );
          })}
        </div>
      </header>

      {/* TIMELINE EVENTI */}
      <main className="max-w-md mx-auto px-6 pt-6">
        <div className="relative border-l-2 border-slate-700/60 ml-3 space-y-8">
          
          {currentDay.activities.map((activity, idx) => {
            const styles = getEventStyles(activity.type);
            
            return (
              <div key={idx} className="relative pl-6">
                {/* Pallino sulla timeline */}
                <span className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-4 border-slate-900 ${styles.bg}`}></span>
                
                <div className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-xs font-bold font-mono px-2 py-0.5 rounded-md bg-slate-900 ${styles.color}`}>
                      {activity.time}
                    </span>
                    {styles.icon}
                  </div>
                  
                  <h3 className="text-base font-bold text-slate-100 mb-1 leading-snug">
                    {activity.title}
                  </h3>
                  
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{activity.location}</span>
                  </div>

                  {/* Mostra le note solo se esistono */}
                  {activity.notes && (
                    <p className="text-[10px] text-slate-400 mt-2 italic bg-slate-900/50 p-2 rounded-md border border-slate-700/50">
                      {activity.notes}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
          
        </div>
      </main>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}