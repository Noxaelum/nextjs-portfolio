"use client";

import useNavHeightGetter from "@/lib/useNavHeightGetter";
import { InView } from "react-intersection-observer";
import React, { createContext, useState } from "react";
import { HOME_VALUES } from "@/lib/values";
import Navbar from "@/app/_components/organisms/navbar";

export const ViewContext = createContext("");

export default function Home() {
  useNavHeightGetter();

  const [visibleSection, setVisibleSection] = useState(HOME_VALUES[0].section);

  function setInView(inView: boolean, entry: IntersectionObserverEntry) {
    if (inView) {
      setVisibleSection(entry.target.getAttribute("id") || "");
    }
  }

  return (
    <main>
      <ViewContext.Provider value={visibleSection}>
        <Navbar />
      </ViewContext.Provider>
      {HOME_VALUES.map(({ section, content }) => (
        <InView key={section} threshold={0.8} onChange={setInView}>
          {({ ref }) => (
            <section className="h-screen" id={section} ref={ref}>
              {content}
            </section>
          )}
        </InView>
      ))}
    </main>
  );
}
