"use client";

import Projects from "@/components/Projects";
import { Masonry } from "masonic";
import ExperimentCard from "@/components/ExperimentCard";
import { profile } from "@/data/profile";
import { useTab } from "@/components/TabContext";

export default function Home() {
  const { tab } = useTab();

  return (
    <div key={tab} className="fade">
      {tab === "work" ? (
        <Projects />
      ) : (
        <section className="w-full px-8 py-24">
          <Masonry
            items={profile.experiments}
            columnWidth={300}
            columnGutter={6}
            ssrWidth={1200}
            render={({ index, data: item }) => (
              <ExperimentCard item={item} index={index} />
            )}
          />
        </section>
      )}
    </div>
  );
}
