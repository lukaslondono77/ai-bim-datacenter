import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Building2, 
  Brain, 
  Database, 
  Cloud, 
  Cpu, 
  Zap,
  Shield,
  Globe
} from 'lucide-react';

const TechnologyStack = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const technologies = [
    {
      category: "Plataformas BIM",
      tools: [
        {
          name: "Autodesk Revit",
          description: "Software BIM líder en la industria para diseño arquitectónico, estructural y MEP",
          icon: Building2,
          color: "blue"
        },
        {
          name: "BIM 360",
          description: "Plataforma de colaboración basada en la nube para gestión de proyectos de construcción",
          icon: Cloud,
          color: "indigo"
        },
        {
          name: "Navisworks",
          description: "Software avanzado de detección de conflictos y coordinación",
          icon: Shield,
          color: "purple"
        }
      ]
    },
    {
      category: "IA y Análisis",
      tools: [
        {
          name: "ALICE Technologies",
          description: "Plataforma de simulación y optimización de construcción impulsada por IA",
          icon: Brain,
          color: "green"
        },
        {
          name: "Spacemaker",
          description: "Plataforma de diseño generativo para desarrollo urbano y planificación de sitios",
          icon: Cpu,
          color: "orange"
        },
        {
          name: "Azure Digital Twins",
          description: "Plataforma IoT para crear representaciones digitales de entornos físicos",
          icon: Database,
          color: "blue"
        }
      ]
    },
    {
      category: "Herramientas Especializadas",
      tools: [
        {
          name: "EnergyPlus",
          description: "Software de simulación energética de edificios para análisis HVAC y energético",
          icon: Zap,
          color: "yellow"
        },
        {
          name: "IES VE",
          description: "Soluciones ambientales integradas para análisis de rendimiento de edificios",
          icon: Globe,
          color: "green"
        },
        {
          name: "OpenStudio",
          description: "Plataforma de código abierto para modelado y análisis energético de edificios",
          icon: Building2,
          color: "purple"
        }
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600 border-blue-200",
      indigo: "bg-indigo-100 text-indigo-600 border-indigo-200",
      purple: "bg-purple-100 text-purple-600 border-purple-200",
      green: "bg-green-100 text-green-600 border-green-200",
      orange: "bg-orange-100 text-orange-600 border-orange-200",
      yellow: "bg-yellow-100 text-yellow-600 border-yellow-200"
    };
    return colors[color] || colors.blue;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Stack de <span className="text-gradient">Tecnología</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre las herramientas y plataformas de vanguardia que impulsan las soluciones BIM 
            basadas en IA para la construcción de centros de datos.
          </p>
        </motion.div>

        <div className="space-y-16">
          {technologies.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                {category.category}
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                {category.tools.map((tool, toolIndex) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: categoryIndex * 0.2 + toolIndex * 0.1 }}
                    className="bg-gray-50 rounded-2xl p-6 card-hover border border-gray-100"
                  >
                    <div className={`w-16 h-16 ${getColorClasses(tool.color)} rounded-xl flex items-center justify-center mb-4 border`}>
                      <tool.icon className="w-8 h-8" />
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{tool.name}</h4>
                    <p className="text-gray-600 leading-relaxed">{tool.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Integration Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Integración Perfecta
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estas tecnologías trabajan juntas para crear un ecosistema AI-BIM integral 
              que optimiza la construcción de centros de datos desde el concepto hasta las operaciones.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Interoperabilidad de Datos",
                description: "Intercambio perfecto de datos entre diferentes plataformas y herramientas",
                icon: Database,
                color: "blue"
              },
              {
                title: "Colaboración en Tiempo Real",
                description: "Plataformas basadas en la nube permiten que los equipos trabajen juntos simultáneamente",
                icon: Cloud,
                color: "purple"
              },
              {
                title: "Arquitectura Escalable",
                description: "Soluciones modulares que crecen con los requisitos de tu proyecto",
                icon: Building2,
                color: "green"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 ${getColorClasses(benefit.color)} rounded-xl flex items-center justify-center mx-auto mb-4 border`}>
                  <benefit.icon className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologyStack; 