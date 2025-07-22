// src/app/idea/page.tsx
"use client";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import IdeaCard from "@/components/IdeaCard";

export default function IdeaPage() {
  const [idea, setIdea] = useState<string>("読み込み中…");

  useEffect(() => {
    (async () => {
      const snap = await getDocs(collection(db, "ideas"));
      const all = snap.docs.map((d) => d.data().text as string);
      const random = all[Math.floor(Math.random() * all.length)];
      setIdea(random);
    })();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <IdeaCard text={idea} />
      <button
        className="ml-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={() => window.location.reload()}
      >
        別のお題を表示
      </button>
    </div>
  );
}
