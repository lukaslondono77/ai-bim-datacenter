import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building2, Brain, Database, Cpu } from 'lucide-react';

const OverviewSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
            Fundamentos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">BIM + IA</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            El Modelado de Información de Construcción (BIM) y la Inteligencia Artificial están transformando 
            la industria de la construcción. Descubre cómo esta sinergia revoluciona el diseño, construcción 
            y operación de centros de datos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* BIM Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-xl p-10 shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-6 shadow-lg">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">¿Qué es BIM?</h3>
            </div>
            
            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
              El Modelado de Información de Construcción (BIM) es una metodología que crea representaciones 
              digitales precisas de las características físicas y funcionales de una instalación. 
              Proporciona una base de conocimiento compartida para la toma de decisiones informadas 
              durante todo el ciclo de vida del proyecto.
            </p>

            <div className="space-y-4">
              <div className="flex items-center p-3 bg-slate-50 rounded-lg">
                <Database className="w-5 h-5 text-blue-600 mr-4" />
                <span className="text-slate-700 font-medium">Modelos digitales 3D con datos integrados</span>
              </div>
              <div className="flex items-center p-3 bg-slate-50 rounded-lg">
                <Cpu className="w-5 h-5 text-blue-600 mr-4" />
                <span className="text-slate-700 font-medium">Colaboración y coordinación en tiempo real</span>
              </div>
              <div className="flex items-center p-3 bg-slate-50 rounded-lg">
                <Building2 className="w-5 h-5 text-blue-600 mr-4" />
                <span className="text-slate-700 font-medium">Gestión integral del ciclo de vida del proyecto</span>
              </div>
            </div>
          </motion.div>

          {/* AI in Construction Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-xl p-10 shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mr-6 shadow-lg">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">IA en Construcción</h3>
            </div>
            
            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
              La Inteligencia Artificial en construcción aprovecha el aprendizaje automático, la visión 
              por computadora y el análisis predictivo para automatizar procesos complejos, optimizar 
              diseños y mejorar la toma de decisiones estratégicas durante todo el ciclo de vida del proyecto.
            </p>

            <div className="space-y-4">
              <div className="flex items-center p-3 bg-slate-50 rounded-lg">
                <Brain className="w-5 h-5 text-indigo-600 mr-4" />
                <span className="text-slate-700 font-medium">Optimización automática del diseño</span>
              </div>
              <div className="flex items-center p-3 bg-slate-50 rounded-lg">
                <Cpu className="w-5 h-5 text-indigo-600 mr-4" />
                <span className="text-slate-700 font-medium">Análisis predictivo y evaluación de riesgos</span>
              </div>
              <div className="flex items-center p-3 bg-slate-50 rounded-lg">
                <Database className="w-5 h-5 text-indigo-600 mr-4" />
                <span className="text-slate-700 font-medium">Gestión inteligente de proyectos</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Connection Line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="hidden md:block relative mt-12"
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-4 border-blue-500 rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default OverviewSection; 