'use client';
import { useState } from "react";
import { motion } from 'framer-motion';

export default function Home() {
  const [activeProject, setActiveProject] = useState(0)

  const projects = [
    { name: "FiveFPS Landing Page", description: "Descricao" },
    { name: "Next Ambient", description: "Descricao" },
    { name: "Rood Traffic", descripton: "Descricao" },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-blue-900"></div>
        </div>
      </section>
    </div>
  );
}
