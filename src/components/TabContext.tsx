"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type Tab = "work" | "exp";

type TabContextValue = {
  tab: Tab;
  setTab: (tab: Tab) => void;
};

const TabContext = createContext<TabContextValue | null>(null);

export function TabProvider({ children }: { children: ReactNode }) {
  const [tab, setTab] = useState<Tab>("work");
  return (
    <TabContext.Provider value={{ tab, setTab }}>
      {children}
    </TabContext.Provider>
  );
}

export function useTab() {
  const ctx = useContext(TabContext);
  if (!ctx) throw new Error("useTab must be used within TabProvider");
  return ctx;
}
