import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="bg-gray-950 text-white font-sans">

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
        
        <div className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl"></div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold z-10"
        >
          Oleh Cherniavskyi
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-gray-400 mt-4 z-10"
        >
          Frontend Entwickler (React / TypeScript)
        </motion.p>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-gray-500 mt-4 max-w-xl z-10"
        >
          Ich entwickle moderne, performante und benutzerfreundliche Webanwendungen.
        </motion.p>

        <div className="flex gap-4 mt-8 z-10">
          <a className="bg-blue-500 px-6 py-3 rounded-xl hover:bg-blue-600 transition">
            Lebenslauf
          </a>
          <a href="#kontakt" className="border border-gray-600 px-6 py-3 rounded-xl hover:bg-gray-800 transition">
            Kontakt
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Über mich</h2>
        <p className="text-gray-300 leading-relaxed">
          Frontend Entwickler mit über 5 Jahren Erfahrung in der Entwicklung moderner Webanwendungen.
          Fokus auf React, TypeScript und performante Benutzeroberflächen.
        </p>
      </section>

      {/* EXPERIENCE */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10 text-center">Berufserfahrung</h2>

        <div className="space-y-8">
          <div className="bg-gray-900 p-6 rounded-2xl hover:scale-[1.02] transition">
            <h3 className="text-xl font-bold">Frontend Developer – Evoplay</h3>
            <p className="text-gray-400 mb-4">2020 – heute</p>
            <ul className="text-gray-300 space-y-2">
              <li>• Entwicklung von Anwendungen mit React & TypeScript</li>
              <li>• Migration von Twig zu React</li>
              <li>• Code Reviews und Teamarbeit</li>
              <li>• Performance-Optimierung</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="py-20 px-6 bg-gray-900 text-center">
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>

        <div className="flex flex-wrap justify-center gap-4">
          {["React", "TypeScript", "JavaScript", "Redux", "SCSS", "Webpack", "Git"].map(skill => (
            <span key={skill} className="bg-gray-800 px-4 py-2 rounded-xl hover:bg-blue-500 transition">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="kontakt" className="py-20 text-center">
        <h2 className="text-3xl mb-6">Kontakt</h2>
        <p className="text-gray-300">cherniavskyi.web@gmail.com</p>
      </section>

    </div>
  );
}