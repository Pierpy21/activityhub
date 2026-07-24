'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Calendar, 
  Moon, 
  Users, 
  MapPin, 
  Clock, 
  ChevronRight, 
  ShieldAlert 
} from 'lucide-react';
import { scheduleData } from '@/data/scheduleData';

export default function Home() {
  // Stato per la giornata (parte di default dal primo giorno)
  const [todaySchedule, setTodaySchedule] = useState(scheduleData[0]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Formatta la data di oggi in YYYY-MM-DD
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const todayStr = `${year}-${month}-${day}`;

    // Cerca il giorno odierno
    const currentDayData = scheduleData.find(d => d.date === todayStr);

    if (currentDayData) {
      setTodaySchedule(currentDayData);
    }
  }, []);

  // Estraiamo l'escursione o evento principale
  const mainActivity = todaySchedule.activities.find(a => a.type === 'excursion') || todaySchedule.activities[0];
  const dinnerActivity = todaySchedule.activities.find(a => a.type === 'meal' && a.title.toLowerCase().includes('dinner'));

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 pb-24">
      {/* HEADER PULITO SENZA SELETTORE */}
      <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 px-4 py-3.5">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400 block">
              ISV DePaul University 2026
            </span>
            <h1 className="text-lg font-bold text-white leading-tight">
              Leader Dashboard
            </h1>
          </div>
          <div className="flex items-center gap-1.5 bg-rose-500/10 border border-rose-500/20 text-rose-400 px-2.5 py-1 rounded-full text-[10px] font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></span>
            911
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 pt-5 space-y-5">

        {/* TODAY'S DYNAMIC HERO CARD */}
        <section className="bg-gradient-to-br from-blue-600 to-indigo-800 rounded-2xl p-5 text-white shadow-lg shadow-blue-900/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="flex items-center justify-between mb-3 relative z-10">
            <span className="bg-rose-500/90 text-[10px] px-2 py-1 rounded-md font-bold uppercase tracking-wider text-white shadow-sm flex items-center gap-1">
              <Clock className="w-3 h-3" /> Today ({isMounted ? todaySchedule.shortDate : '...'})
            </span>
            <span className="text-xs text-blue-100 font-mono font-medium bg-black/20 px-2 py-1 rounded-md">
              {todaySchedule.dayName}
            </span>
          </div>

          <h2 className="text-lg font-bold mb-1 leading-snug relative z-10">
            {todaySchedule.highlight}
          </h2>

          <p className="text-xs text-blue-200/80 mb-4 relative z-10">
            {mainActivity ? mainActivity.title : 'See schedule for details'}
          </p>

          <div className="space-y-2 text-xs text-blue-100/90 mb-5 relative z-10 font-medium">
            <div className="flex items-center gap-2 bg-black/10 p-2 rounded-lg">
              <MapPin className="w-4 h-4 text-emerald-300 shrink-0" />
              <span>Location: <strong>{mainActivity ? mainActivity.location : 'Campus'}</strong></span>
            </div>
            {dinnerActivity && (
              <div className="flex items-center gap-2 bg-black/10 p-2 rounded-lg">
                <Moon className="w-4 h-4 text-amber-300 shrink-0" />
                <span>Dinner: <strong>{dinnerActivity.location} ({dinnerActivity.time})</strong></span>
              </div>
            )}
          </div>

          <Link 
            href="/schedule"
            className="w-full bg-white text-blue-900 hover:bg-blue-50 active:scale-[0.98] transition-all rounded-xl py-3 px-4 text-sm font-bold flex items-center justify-center gap-1 shadow-md relative z-10"
          >
            View Full Schedule
            <ChevronRight className="w-4 h-4" />
          </Link>
        </section>

        {/* FIXED MEAL TIMES */}
        <section className="grid grid-cols-3 gap-2">
          <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-2.5 text-center flex flex-col items-center justify-center gap-1">
            <span className="text-[10px] text-slate-400 font-bold uppercase">Breakfast</span>
            <span className="text-xs font-mono font-medium text-slate-200">07:30-08:15</span>
          </div>
          <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-2.5 text-center flex flex-col items-center justify-center gap-1">
            <span className="text-[10px] text-slate-400 font-bold uppercase">Lunch</span>
            <span className="text-xs font-mono font-medium text-slate-200">12:45-13:30</span>
          </div>
          <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-2.5 text-center flex flex-col items-center justify-center gap-1">
            <span className="text-[10px] text-slate-400 font-bold uppercase">Dinner</span>
            <span className="text-xs font-mono font-medium text-slate-200">18:45-19:30</span>
          </div>
        </section>

        {/* QUICK MENU GRID */}
        <section>
          <div className="grid grid-cols-2 gap-3">
            <Link href="/schedule" className="bg-slate-800/90 border border-slate-700/70 rounded-2xl p-4 flex flex-col justify-between active:scale-[0.98] transition-transform">
              <div className="w-9 h-9 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center mb-2">
                <Calendar className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-sm text-slate-100">Schedule</h4>
              <p className="text-[10px] text-slate-400 mt-0.5">Day-by-day itinerary</p>
            </Link>

            <Link href="/groups" className="bg-slate-800/90 border border-slate-700/70 rounded-2xl p-4 flex flex-col justify-between active:scale-[0.98] transition-transform">
              <div className="w-9 h-9 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-2">
                <Users className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-sm text-slate-100">Students</h4>
              <p className="text-[10px] text-slate-400 mt-0.5">Your group roster</p>
            </Link>

            <Link href="/night-activities" className="bg-slate-800/90 border border-slate-700/70 rounded-2xl p-4 flex flex-col justify-between active:scale-[0.98] transition-transform">
              <div className="w-9 h-9 rounded-full bg-purple-500/10 text-purple-400 flex items-center justify-center mb-2">
                <Moon className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-sm text-slate-100">Night Activities</h4>
              <p className="text-[10px] text-slate-400 mt-0.5">Evening plans (8-11pm)</p>
            </Link>

            <Link href="/directions" className="bg-slate-800/90 border border-slate-700/70 rounded-2xl p-4 flex flex-col justify-between active:scale-[0.98] transition-transform">
              <div className="w-9 h-9 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center mb-2">
                <MapPin className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-sm text-slate-100">Directions</h4>
              <p className="text-[10px] text-slate-400 mt-0.5">Maps & CTA transit</p>
            </Link>
          </div>
        </section>

        {/* SAFETY */}
        <section className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-3">
          <div className="flex items-center gap-2 text-slate-300 text-xs">
            <ShieldAlert className="w-4 h-4 text-blue-400" />
            <span>DePaul Public Safety: <a href="tel:+13123628400" className="text-blue-400 font-bold underline decoration-blue-400/30 underline-offset-2">Call Campus Security</a></span>
          </div>
        </section>
      </main>
    </div>
  );
}