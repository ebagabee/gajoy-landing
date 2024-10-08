"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Code,
  Database,
  Globe,
  Instagram,
  Layout,
  Server,
  Smartphone,
  Youtube,
} from "lucide-react";
import Image from "next/image";

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

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Quem Somos</h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
            <motion.div
              className="bg-white bg-opacity-10 p-8 rounded-lg shadow-xl backdrop-blur-sm max-w-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="./assets/placeholder.svg"
                width={150}
                height={150}
                alt="Joy"
                className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-purple-400"
              />
              <h3 className="text-2xl font-semibold mb-4 text-center">Joy</h3>
              <p className="text-gray-300 text-center">
                Desenvolvedora Frontend com paixão por UX/UI e arquitetura de
                sistemas. Especialista em design responsivo e moderno.
              </p>
            </motion.div>
            <motion.div
              className="bg-white bg-opacity-10 p-8 rounded-lg shadow-xl backdrop-blur-sm max-w-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="./assets/placeholder.svg"
                width={150}
                height={150}
                alt="Gabe"
                className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-400"
              />
              <h3 className="text-2xl font-semibold mb-4 text-center">Gabe</h3>
              <p className="text-gray-300 text-center">
                Desenvolvedor Full Stack com foco em Web e Mobile. Experiente em
                TypeScript, Rails e PHP.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects & Skills Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex justify-center mb-12">
            <button
              className={`px-6 py-2 rounded-l-full ${
                activeTab === "projects" ? "bg-purple-600" : "bg-gray-700"
              }`}
              onClick={() => setActiveTab("projects")}
            >
              Projetos
            </button>
            <button
              className={`px-6 py-2 rounded-r-full ${
                activeTab === "skills" ? "bg-purple-600" : "bg-gray-700"
              }`}
              onClick={() => setActiveTab("skills")}
            >
              Habilidades
            </button>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === "projects" && (
              <motion.div
                key="projects"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.map((project, index) => (
                    <motion.div
                      key={index}
                      className="bg-white bg-opacity-10 rounded-lg overflow-hidden shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Image
                        width={150}
                        height={150}
                        src={project.image}
                        alt={project.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <h3 className="text-2xl font-semibold mb-2">
                          {project.name}
                        </h3>
                        <p className="text-gray-300">{project.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "skills" && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="flex flex-col items-center bg-white bg-opacity-10 p-6 rounded-lg shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {skill.icon}
                      <h3 className="mt-4 text-xl font-semibold">
                        {skill.name}
                      </h3>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Gajoy. Todos os direitos
            reservados.
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Youtube size={24} />
              <span className="sr-only">YouTube</span>
            </a>
            <a
              href="https://www.instagram.com/gajoytech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Instagram size={22} />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
