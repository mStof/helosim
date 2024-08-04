"use client";
import Articles from "@/components/Articles/Articles";
import { CircleContainer } from "@/components/Circle";
import { useState } from "react";

export default function Home() {
  const [showMain, setShowMain] = useState(false);

  return (
    // flex h-screen items-center justify-center overflow-hidden bg-[#DADCE7]
    <main className="relative flex h-auto w-full flex-col overflow-auto bg-yellow-50">
      {!showMain && <CircleContainer setShowMain={setShowMain} />}
      {showMain && <Articles />}
    </main>
  );
}
