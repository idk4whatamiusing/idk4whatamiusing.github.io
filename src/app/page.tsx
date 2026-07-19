"use client";

import { useSyncExternalStore } from "react";
import Projects from "@/components/Projects";
import { Masonry } from "masonic";
import ExperimentCard from "@/components/ExperimentCard";
import { profile } from "@/data/profile";
import { useTab } from "@/components/TabContext";

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export default function Home() {
  const { tab } = useTab();
  const mounted = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <div key={tab} className="fade">
      {tab === "work" ? (
        <Projects />
      ) : mounted ? (
        <section className="w-full px-0 pt-0 pb-24">
          <Masonry
            items={profile.experiments}
            columnWidth={420}
            columnGutter={6}
            ssrWidth={1200}
            render={({ index, data: item }) => (
              <ExperimentCard item={item} index={index} />
            )}
          />
        </section>
      ) : null}
    </div>
  );
}
