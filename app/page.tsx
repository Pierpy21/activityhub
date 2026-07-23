'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Calendar, 
  Moon, 
  Users, 
  MapPin, 
  Clock, 
  ChevronRight,
  PhoneCall,
  ShieldAlert,
  UserCircle
} from 'lucide-react';

export default function Home() {
  // Leader selection state
  const [selectedGroup, setSelectedGroup] = useState("D'Alterio Group (Pierpaolo, Eleonora, Malak)");

  // Real data from the booklet for today, Thursday, July 23
  const [nextActivity] = useState({
    title: 'Excursion: Money Museum, Union Station & Skydeck',
    time: '2:00pm - 7:00pm',
    meetingPoint: 'The Quad',
    dinner: 'Dinner @ Giordano\'s (7:00pm)',
  });

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 pb-24">
      {/* HEADER WITH LEADER SELECTOR */}
      <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 px-4 py-3">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400">
              ISV DePaul University 2026
            </span>
            <div className="flex items-center gap-1.5 bg-rose-500/10 border border-rose-500/20 text-rose-400 px-2 py-1 rounded-full text-[10px] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></span>
              Emergency: 911
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <UserCircle className="w-4 h-4 text-slate-400" />
            </div>
            <select 
              value={selectedGroup}
              onChange={(e) => setSelectedGroup(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 text-sm text-white rounded-xl pl-9 pr-4 py-2.5 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            >
              <option value="D'Alterio Group (Pierpaolo, Eleonora, Malak)">D'Alterio Group (Pierpaolo, Eleonora, Malak)</option>
              <option value="Group 1 (Camilla & Juliana)">Group 1 (Camilla & Juliana)</option>
              <option value="Group 2 (Shahid & Erika)">Group 2 (Shahid & Erika)</option>
              <option value="All Groups (Global View)">All Groups (Global View)</option>
            </select>
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <ChevronRight className="w-4 h-4 text-slate-400 rotate-90" />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 pt-5 space-y-5">
        {/* DYNAMIC WELCOME MESSAGE */}
        <div>
          <h1 className="text-xl font-bold text-white mb-1">Leader Dashboard</h1>
          <p className="text-xs text-slate-400">
            Viewing data for: <strong className="text-blue-400">{selectedGroup}</strong>
          </p>
        </div>


        {/* GLOBAL NEXT ACTIVITY (HERO CARD) */}
        <section className="bg-gradient-to-br from-blue-600 to-indigo-800 rounded-2xl p-5 text-white shadow-lg shadow-blue-900/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="flex items-center justify-between mb-3 relative z-10">
            <span className="bg-rose-500/90 text-[10px] px-2 py-1 rounded-md font-bold uppercase tracking-wider text-white shadow-sm flex items-center gap-1">
              <Clock className="w-3 h-3" /> Today
            </span>
            <span className="text-xs text-blue-100 font-mono font-medium bg-black/20 px-2 py-1 rounded-md">
              {nextActivity.time}
            </span>
          </div>

          <h2 className="text-lg font-bold mb-3 leading-snug relative z-10">
            {nextActivity.title}
          </h2>

          <div className="space-y-2 text-xs text-blue-100/90 mb-5 relative z-10 font-medium">
            <div className="flex items-center gap-2 bg-black/10 p-2 rounded-lg">
              <MapPin className="w-4 h-4 text-emerald-300 shrink-0" />
              <span>Meeting point: <strong>{nextActivity.meetingPoint}</strong></span>
            </div>
            <div className="flex items-center gap-2 bg-black/10 p-2 rounded-lg">
              <Moon className="w-4 h-4 text-amber-300 shrink-0" />
              <span>{nextActivity.dinner}</span>
            </div>
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