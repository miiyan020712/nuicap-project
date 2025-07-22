// src/app/map/page.tsx
"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

// SpotMap を動的インポートし、SSR をオフにする
const SpotMap = dynamic(() => import("@/components/SpotMap"), { ssr: false });

type Spot = {
  id: string;
  name: string;
  lat: number;
  lng: number;
};

export default function MapPage() {
  const [spots, setSpots] = useState<Spot[]>([]);

  useEffect(() => {
    (async () => {
      const snap = await getDocs(collection(db, "spots"));
      const data: Spot[] = snap.docs.map((doc) => {
        const d = doc.data() as any;
        return {
          id: doc.id,
          name: d.name,
          lat: d.lat,
          lng: d.lng,
        };
      });
      setSpots(data);
    })();
  }, []);

  return (
    <div className="min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">撮影スポットマップ</h1>
      {spots.length > 0 ? (
        // SpotMap はクライアントサイドでのみレンダリング
        <SpotMap spots={spots} />
      ) : (
        <p>スポットを読み込み中…</p>
      )}
    </div>
  );
}
