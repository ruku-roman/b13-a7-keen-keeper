"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';

const STORAGE_KEY = 'B13-Keen-Keeper-data-Assignment-07-Alamin';
const TimelineContext = createContext(undefined);

export const TimelineProvider = ({ children }) => {
  const [entries, setEntries] = useState([]);
  const [isHydrated, setIsHydrated] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  useEffect(() => {
    const initStorage = () => {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          setEntries(JSON.parse(saved));
        }
      } catch (err) {
        console.error("Storage Hydration Failed:", err);
      } finally {
        setIsHydrated(true);
      }
    };

    initStorage();
  }, []);
  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    }
  }, [entries, isHydrated]);

  const addEntry = useCallback(async (newEntry) => {
    setIsProcessing(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 100));
      const processedEntry = {
        ...newEntry,
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
      };
      setEntries(prev => [processedEntry, ...prev]);
    } catch (error) {
      console.error("Failed to add entry:", error);
    } finally {
      setIsProcessing(false);
    }
  }, []);

  const contextValue = useMemo(() => ({
    entries,
    addEntry,
    isHydrated,
    isProcessing,
    entryCount: entries.length
  }), [entries, addEntry, isHydrated, isProcessing]);

  /**
   * HYDRATION GUARD:
   * To prevent "Server vs Client" mismatch, we return null or a loader 
   * until the client-side useEffect has finished (isHydrated = true).
   */
  if (!isHydrated) {
    return null;
  }

  return (
    <TimelineContext.Provider value={contextValue}>
      {children}
    </TimelineContext.Provider>
  );
};

export const useTimeline = () => {
  const context = useContext(TimelineContext);
  if (context === undefined) {
    throw new Error("useTimeline must be used within a TimelineProvider");
  }
  return context;
};