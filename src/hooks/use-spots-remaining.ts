"use client";

import { useState, useEffect } from "react";

const INITIAL_SPOTS = 23;
const MIN_SPOTS = 18;
const STORAGE_KEY = "tti_spots_remaining";

function canUseStorage() {
  try {
    return typeof window !== 'undefined' && typeof window.localStorage?.getItem === 'function';
  } catch {
    return false;
  }
}

export function useSpotsRemaining() {
  const [spotsLeft, setSpotsLeft] = useState<number>(INITIAL_SPOTS);

  // Load from localStorage on mount
  useEffect(() => {
    if (!canUseStorage()) return;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = parseInt(stored, 10);
      if (!isNaN(parsed) && parsed >= MIN_SPOTS && parsed <= INITIAL_SPOTS) {
        setSpotsLeft(parsed);
      }
    }
  }, []);

  // Save to localStorage whenever it changes
  useEffect(() => {
    if (!canUseStorage()) return;
    window.localStorage.setItem(STORAGE_KEY, spotsLeft.toString());
  }, [spotsLeft]);

  const decrementSpots = () => {
    setSpotsLeft(prev => Math.max(MIN_SPOTS, prev - 1));
  };

  const resetSpots = () => {
    setSpotsLeft(INITIAL_SPOTS);
    if (canUseStorage()) window.localStorage.setItem(STORAGE_KEY, INITIAL_SPOTS.toString());
  };

  return {
    spotsLeft,
    decrementSpots,
    resetSpots,
    isAlmostFull: spotsLeft <= MIN_SPOTS
  };
}
