"use client";
import { useState } from "react";
import { motion, AnimatePresnece } from "framer-motion";
import {
  ChevronDown,
  Code,
  Database,
  Globe,
  Layout,
  Mail,
  Server,
  Smartphone,
} from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("projects");

  const projects = [
    {
      name: "Next Ambient",
      description: "Descricao",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Rood Traffic",
      description: "Descricao",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "FiveFPS",
      description: "Descricao",
      image: "/placeholder.svg?height=300&width=400",
    },
  ];

  const skills = [
    { icon: <Globe size={24} />, name: "Desenvolvimento Web" },
    { icon: <Smartphone size={24} />, name: "Apps Móveis" },
    { icon: <Database size={24} />, name: "Banco de Dados" },
    { icon: <Code size={24} />, name: "Clean Code" },
    { icon: <Server size={24} />, name: "DevOps" },
    { icon: <Layout size={24} />, name: "UI/UX Design" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-opacity-90 bg-gray-900 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <motion.div
              className="text-2xl font-bold"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Gajoy
            </motion.div>
            <motion.div
              className="space-x-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a
                href="#about"
                className="hover:text-purple-400 transition-colors"
              >
                Sobre
              </a>
              <a
                href="#projects"
                className="hover:text-purple-400 transition-colors"
              >
                Projetos
              </a>
              <a
                href="#contact"
                className="hover:text-purple-400 transition-colors"
              >
                Contato
              </a>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-20"></div>
          <motion.div
            className="absolute inset-0"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.2"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            }}
          ></motion.div>
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.h1
            className="text-5xl md: text-7x1 font-bold mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Transformando ideias em realidade digital
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Somos uma equipe de desenvolvedores apaixonados por criar soluções
            inovadoras e impactantes.
          </motion.p>
          <motion.a
            href="#projects"
            className="inline-block bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Conheça Nossos Projetos
          </motion.a>
        </div>
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>
    </div>
  );
}
