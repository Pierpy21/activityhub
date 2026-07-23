'use client';

import React from 'react';
import { Moon, MapPin, Sparkles } from 'lucide-react';
import { scheduleData } from '@/data/scheduleData';

export default function NightActivitiesPage() {
  // Estrapoliamo dinamicamente tutte le attività di tipo 'night' da tutti i giorni
  const nightEvents = scheduleData.flatMap(day =>
    day.activities
      .filter(activity => activity.type === 'night')
      .map(activity => ({
        // Creiamo un ID univoco unendo data e titolo
        id: `${day.shortDate}-${activity.title}`,
        // Formattiamo la data per farla apparire come "WED, 22 Jul"
        dateLabel: `${day.dayName.substring(0, 3).toUpperCase()}, ${day.shortDate}`,
        ...activity
      }))
  );

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 pb-24 px-4 pt-6">
      <header className="mb-6">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Moon className="w-6 h-6 text-purple-400" />
          Night Activities
        </h1>
        <p className="text-sm text-slate-400 mt-1">
          Evening events and campus entertainment.
        </p>
      </header>

      <div className="space-y-4">
        {nightEvents.length > 0 ? (
          nightEvents.map((event) => (
            <div
              key={event.id}
              className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-4 space-y-3 relative overflow-hidden"
            >
              {/* HEADER CARD: Data e Ora */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-400 border border-purple-500/20 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> {event.dateLabel}
                </span>
                <span className="text-xs font-mono text-slate-400 bg-slate-900 px-2 py-1 rounded-md">
                  {event.time}
                </span>
              </div>

              {/* CORPO CARD: Titolo e Note */}
              <div>
                <h2 className="text-lg font-bold text-white">{event.title}</h2>
                {event.notes && (
                  <p className="text-[11px] text-slate-300 mt-1.5 leading-relaxed bg-slate-900/50 p-2 rounded-lg border border-slate-700/50">
                    {event.notes}
                  </p>
                )}
              </div>

              {/* FOOTER CARD: Location */}
              <div className="flex items-center gap-1.5 text-xs text-slate-400 pt-2 border-t border-slate-700/50">
                <MapPin className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>{event.location}</span>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-10 bg-slate-800/40 rounded-2xl border border-slate-700/50">
            <Moon className="w-8 h-8 text-slate-500 mx-auto mb-2 opacity-50" />
            <p className="text-sm text-slate-400">No night activities scheduled.</p>
          </div>
        )}
      </div>
    </div>
  );
}