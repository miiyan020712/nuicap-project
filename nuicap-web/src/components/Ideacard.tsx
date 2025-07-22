// src/components/IdeaCard.tsx
import React from "react";

type IdeaCardProps = {
  text: string;
};

export default function IdeaCard({ text }: IdeaCardProps) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <p className="text-lg font-medium">{text}</p>
    </div>
  );
}
