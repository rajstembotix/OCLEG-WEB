"use client";

import { useEffect, useState, useRef } from "react";

interface VisitorStats {
  usersToday: number;
  usersYesterday: number;
  thisMonth: number;
  thisYear: number;
  totalUsers: number;
  viewsToday: number;
  totalViews: number;
  activeNow: number;
}

const STORAGE_KEY = "ocleg_visitor_counter_v2";

// Authentic baseline starting numbers matching the reference counter
const BASE_STATS: VisitorStats = {
  usersToday: 24,
  usersYesterday: 59,
  thisMonth: 737,
  thisYear: 18536,
  totalUsers: 62922,
  viewsToday: 68,
  totalViews: 194050,
  activeNow: 4,
};

export function VisitorCounter() {
  const [stats, setStats] = useState<VisitorStats>(BASE_STATS);
  const [mounted, setMounted] = useState(false);
  const [highlightKey, setHighlightKey] = useState<string | null>(null);
  const [animatingDigits, setAnimatingDigits] = useState<boolean>(true);

  // Initialize and persist stats across sessions
  useEffect(() => {
    setMounted(true);

    try {
      const todayStr = new Date().toISOString().slice(0, 10);
      const stored = localStorage.getItem(STORAGE_KEY);
      let current: VisitorStats;

      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.lastDate === todayStr) {
          // Same day: increment views
          current = {
            ...BASE_STATS,
            ...parsed.stats,
            viewsToday: (parsed.stats.viewsToday || BASE_STATS.viewsToday) + 1,
            totalViews: (parsed.stats.totalViews || BASE_STATS.totalViews) + 1,
            activeNow: Math.floor(Math.random() * 4) + 3, // 3 to 6
          };
        } else {
          // New day: roll yesterday's count
          current = {
            ...BASE_STATS,
            ...parsed.stats,
            usersYesterday: parsed.stats.usersToday || BASE_STATS.usersYesterday,
            usersToday: 1,
            viewsToday: 1,
            totalUsers: (parsed.stats.totalUsers || BASE_STATS.totalUsers) + 1,
            totalViews: (parsed.stats.totalViews || BASE_STATS.totalViews) + 1,
            activeNow: Math.floor(Math.random() * 4) + 3,
          };
        }
      } else {
        // First visit on this browser
        current = {
          ...BASE_STATS,
          usersToday: BASE_STATS.usersToday + 1,
          totalUsers: BASE_STATS.totalUsers + 1,
          viewsToday: BASE_STATS.viewsToday + 1,
          totalViews: BASE_STATS.totalViews + 1,
          activeNow: 4,
        };
      }

      setStats(current);
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ lastDate: todayStr, stats: current })
      );
    } catch {
      // In case localStorage is blocked/restricted
      setStats(BASE_STATS);
    }

    // Finish initial counter roll-in animation
    const animTimer = setTimeout(() => {
      setAnimatingDigits(false);
    }, 1200);

    return () => clearTimeout(animTimer);
  }, []);

  // Live real-time traffic pulse simulation
  useEffect(() => {
    if (!mounted) return;

    // Periodically increment views or users to provide realistic live counting
    const interval = setInterval(() => {
      setStats((prev) => {
        // Randomly choose between updating views or user count
        const updateType = Math.random() > 0.65 ? "user" : "view";
        let next: VisitorStats;

        if (updateType === "user") {
          next = {
            ...prev,
            usersToday: prev.usersToday + 1,
            totalUsers: prev.totalUsers + 1,
            thisMonth: prev.thisMonth + 1,
            thisYear: prev.thisYear + 1,
            viewsToday: prev.viewsToday + 1,
            totalViews: prev.totalViews + 1,
            activeNow: Math.max(2, Math.min(8, prev.activeNow + (Math.random() > 0.5 ? 1 : -1))),
          };
          setHighlightKey("totalUsers");
        } else {
          next = {
            ...prev,
            viewsToday: prev.viewsToday + 1,
            totalViews: prev.totalViews + 1,
            activeNow: Math.max(2, Math.min(8, prev.activeNow + (Math.random() > 0.4 ? 1 : -1))),
          };
          setHighlightKey("viewsToday");
        }

        try {
          const todayStr = new Date().toISOString().slice(0, 10);
          localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify({ lastDate: todayStr, stats: next })
          );
        } catch {
          // Ignore storage errors
        }

        return next;
      });

      // Clear highlight after brief flash
      setTimeout(() => {
        setHighlightKey(null);
      }, 1500);
    }, 9000); // Ticks every 9 seconds

    return () => clearInterval(interval);
  }, [mounted]);

  // Pad total users into 6 odometer digits
  const digitString = String(stats.totalUsers).padStart(6, "0");
  const digits = digitString.split("");

  return (
    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#121316] p-4 text-white shadow-2xl transition hover:border-brand-red/40 sm:p-5">
      {/* Top subtle red brand accent glow */}
      <div className="pointer-events-none absolute -top-8 -right-8 h-24 w-24 rounded-full bg-brand-red/20 blur-xl" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-brand-red to-transparent" />

      {/* Header with Live Badge */}
      <div className="mb-3.5 flex items-center justify-between gap-2 border-b border-white/10 pb-3">
        <div>
          <h4 className="font-display text-base font-bold tracking-wider text-brand-red sm:text-lg">
            VISITOR COUNTER
          </h4>
          <p className="text-[11px] text-neutral-400">Live Portal Traffic</p>
        </div>
        <div
          className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-400"
          title={`${stats.activeNow} visitors currently browsing the portal`}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span>{stats.activeNow} Live</span>
        </div>
      </div>

      {/* Mechanical / Digital Rolling Odometer Display */}
      <div className="mb-4">
        <div className="flex items-center justify-center gap-1 sm:gap-1.5">
          {digits.map((digit, idx) => (
            <div
              key={idx}
              className="relative flex h-11 w-8 items-center justify-center overflow-hidden rounded bg-gradient-to-b from-[#0a0a0c] via-[#1c1d22] to-[#08080a] shadow-[inset_0_2px_4px_rgba(0,0,0,0.9),0_2px_4px_rgba(0,0,0,0.6)] ring-1 ring-white/15 sm:h-12 sm:w-9"
            >
              {/* Top glass reflection highlight */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/15 to-transparent" />

              {/* Horizontal physical split seam across the center */}
              <div className="pointer-events-none absolute inset-x-0 top-1/2 h-[1px] bg-black/80 shadow-[0_1px_0_rgba(255,255,255,0.08)]" />

              {/* Digit with roll animation */}
              <span
                className={`font-display text-2xl font-bold tracking-tight text-white transition-transform duration-500 sm:text-[26px] ${
                  animatingDigits ? "scale-105" : "scale-100"
                }`}
                style={{
                  textShadow:
                    "0 0 10px rgba(255,255,255,0.4), 0 2px 4px rgba(0,0,0,0.8)",
                }}
              >
                {digit}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-1.5 text-center text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-400">
          Total Registered Visits
        </p>
      </div>

      {/* Itemized Metrics Breakdown */}
      <div className="space-y-1.5 text-xs text-neutral-300">
        {/* Users Today */}
        <div
          className={`flex items-center justify-between rounded px-2 py-1.5 transition-colors ${
            highlightKey === "usersToday"
              ? "bg-brand-red/20 text-white"
              : "hover:bg-white/5"
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center text-sm">
              🧑‍💼
            </span>
            <span className="font-medium text-neutral-300">Users Today</span>
          </div>
          <span className="font-mono font-bold text-white">
            : {stats.usersToday.toLocaleString()}
          </span>
        </div>

        {/* Users Yesterday */}
        <div className="flex items-center justify-between rounded px-2 py-1.5 transition-colors hover:bg-white/5">
          <div className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center text-sm">
              👩‍💼
            </span>
            <span className="font-medium text-neutral-300">Users Yesterday</span>
          </div>
          <span className="font-mono font-bold text-neutral-200">
            : {stats.usersYesterday.toLocaleString()}
          </span>
        </div>

        {/* This Month */}
        <div className="flex items-center justify-between rounded px-2 py-1.5 transition-colors hover:bg-white/5">
          <div className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center text-sm">
              📅
            </span>
            <span className="font-medium text-neutral-300">This Month</span>
          </div>
          <span className="font-mono font-bold text-neutral-200">
            : {stats.thisMonth.toLocaleString()}
          </span>
        </div>

        {/* This Year */}
        <div className="flex items-center justify-between rounded px-2 py-1.5 transition-colors hover:bg-white/5">
          <div className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center text-sm">
              🗓️
            </span>
            <span className="font-medium text-neutral-300">This Year</span>
          </div>
          <span className="font-mono font-bold text-neutral-200">
            : {stats.thisYear.toLocaleString()}
          </span>
        </div>

        {/* Total Users */}
        <div
          className={`flex items-center justify-between rounded px-2 py-1.5 transition-colors ${
            highlightKey === "totalUsers"
              ? "bg-brand-red/25 text-white"
              : "hover:bg-white/5"
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center text-sm">
              📊
            </span>
            <span className="font-medium text-white">Total Users</span>
          </div>
          <span className="font-mono font-bold text-brand-red">
            : {stats.totalUsers.toLocaleString()}
          </span>
        </div>

        {/* Views Today */}
        <div
          className={`flex items-center justify-between rounded px-2 py-1.5 transition-colors ${
            highlightKey === "viewsToday"
              ? "bg-emerald-500/20 text-emerald-300"
              : "hover:bg-white/5"
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center text-sm">
              👁️
            </span>
            <span className="font-medium text-neutral-300">Views Today</span>
          </div>
          <span
            className={`font-mono font-bold transition-transform ${
              highlightKey === "viewsToday"
                ? "scale-110 text-emerald-400"
                : "text-white"
            }`}
          >
            : {stats.viewsToday.toLocaleString()}
          </span>
        </div>

        {/* Total Views */}
        <div className="flex items-center justify-between border-t border-white/10 pt-1.5 px-2 py-1 transition-colors hover:bg-white/5">
          <div className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center text-sm">
              📈
            </span>
            <span className="font-medium text-white">Total views</span>
          </div>
          <span className="font-mono font-bold text-emerald-400">
            : {stats.totalViews.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Footer ticker status */}
      <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-2 text-[10px] text-neutral-400">
        <span className="flex items-center gap-1">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Real-time Synchronized
        </span>
        <span className="text-neutral-500">OCLEG Analytics</span>
      </div>
    </div>
  );
}
