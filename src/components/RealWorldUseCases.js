import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ChevronDown, 
  ChevronRight,
  Zap,
  Thermometer,
  Wrench,
  Building2,
  Database,
  Shield,
  Clock
} from 'lucide-react';

const RealWorldUseCases = () => {
  const [expandedCase, setExpandedCase] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const useCases = [
    {
      id: 1,
      title: "Detección Coordinada de Conflictos MEP",
      icon: Wrench,
      category: "Coordinación",
      description: "Sistema automatizado de detección y resolución de conflictos entre sistemas MEP",
      shortDescription: "IA identifica automáticamente conflictos entre sistemas mecánicos, eléctricos y de plomería",
      details: {
        challenge: "Los conflictos MEP tradicionalmente se detectan tarde en el proceso, causando retrasos costosos",
        solution: "Algoritmos de IA analizan modelos BIM en tiempo real para identificar conflictos antes de la construcción",
        results: [
          "90% reducción en tiempo de detección de conflictos",
          "75% menos cambios de campo",
          "Ahorro estimado de $500K por proyecto"
        ],
        technologies: ["Autodesk Navisworks", "AI Clash Detection", "Machine Learning"],
        timeline: "Implementación: 2-3 meses"
      },
      metrics: {
        timeReduction: "90%",
        costSavings: "$500K",
        accuracy: "95%"
      }
    },
    {
      id: 2,
      title: "Prefabricación y MEP Modular",
      icon: Building2,
      category: "Fabricación",
      description: "Optimización de prefabricación mediante análisis predictivo de IA",
      shortDescription: "IA optimiza el diseño modular para maximizar la eficiencia de prefabricación",
      details: {
        challenge: "La prefabricación tradicional requiere múltiples iteraciones y ajustes manuales",
        solution: "IA analiza patrones de construcción y optimiza diseños para prefabricación eficiente",
        results: [
          "40% reducción en tiempo de fabricación",
          "30% ahorro en costos de materiales",
          "Mejora del 60% en precisión de instalación"
        ],
        technologies: ["Generative Design", "3D Printing", "IoT Sensors"],
        timeline: "Implementación: 4-6 meses"
      },
      metrics: {
        timeReduction: "40%",
        costSavings: "30%",
        accuracy: "60%"
      }
    },
    {
      id: 3,
      title: "Planificación Térmica y Optimización de Flujo de Aire",
      icon: Thermometer,
      category: "HVAC",
      description: "Análisis térmico avanzado y optimización de sistemas de refrigeración",
      shortDescription: "Simulación térmica impulsada por IA para optimizar sistemas de refrigeración",
      details: {
        challenge: "Los centros de datos requieren refrigeración precisa para mantener temperaturas óptimas",
        solution: "IA simula patrones de flujo de aire y optimiza la distribución de sistemas HVAC",
        results: [
          "25% reducción en consumo energético de HVAC",
          "Mejora del 40% en eficiencia térmica",
          "Reducción del 30% en costos operacionales"
        ],
        technologies: ["Computational Fluid Dynamics", "Thermal Modeling", "EnergyPlus"],
        timeline: "Implementación: 3-4 meses"
      },
      metrics: {
        energySavings: "25%",
        efficiency: "40%",
        costReduction: "30%"
      }
    },
    {
      id: 4,
      title: "Gestión de Activos mediante COBie y Gemelos Digitales",
      icon: Database,
      category: "Operaciones",
      description: "Sistema integral de gestión de activos con gemelos digitales",
      shortDescription: "Gemelos digitales conectados con COBie para gestión inteligente de activos",
      details: {
        challenge: "La gestión manual de activos es propensa a errores y no proporciona insights en tiempo real",
        solution: "Gemelos digitales integrados con COBie proporcionan monitoreo y mantenimiento predictivo",
        results: [
          "50% reducción en tiempo de inactividad",
          "Mantenimiento predictivo con 85% de precisión",
          "ROI del 300% en 2 años"
        ],
        technologies: ["Digital Twins", "COBie Standard", "IoT Integration"],
        timeline: "Implementación: 6-8 meses"
      },
      metrics: {
        downtime: "50%",
        accuracy: "85%",
        roi: "300%"
      }
    },
    {
      id: 5,
      title: "Optimización de Distribución de Energía",
      icon: Zap,
      category: "Eléctrico",
      description: "Sistema inteligente de distribución y monitoreo de energía",
      shortDescription: "IA optimiza la distribución de energía para máxima eficiencia y redundancia",
      details: {
        challenge: "Los sistemas de energía tradicionales no optimizan automáticamente la distribución",
        solution: "IA monitorea y optimiza la distribución de energía en tiempo real",
        results: [
          "20% mejora en eficiencia energética",
          "99.99% uptime garantizado",
          "Reducción del 35% en costos de energía"
        ],
        technologies: ["Smart Grid", "Energy Management", "Predictive Analytics"],
        timeline: "Implementación: 5-7 meses"
      },
      metrics: {
        efficiency: "20%",
        uptime: "99.99%",
        costSavings: "35%"
      }
    },
    {
      id: 6,
      title: "Monitoreo de Seguridad y Control de Acceso",
      icon: Shield,
      category: "Seguridad",
      description: "Sistema integrado de seguridad y control de acceso inteligente",
      shortDescription: "IA monitorea y gestiona sistemas de seguridad y control de acceso",
      details: {
        challenge: "Los sistemas de seguridad tradicionales son reactivos y no predictivos",
        solution: "IA analiza patrones de comportamiento y detecta amenazas potenciales",
        results: [
          "95% precisión en detección de amenazas",
          "Respuesta automática en menos de 30 segundos",
          "Reducción del 80% en falsas alarmas"
        ],
        technologies: ["Computer Vision", "Behavioral Analytics", "Access Control"],
        timeline: "Implementación: 3-5 meses"
      },
      metrics: {
        accuracy: "95%",
        responseTime: "30s",
        falseAlarms: "80%"
      }
    }
  ];

  const toggleCase = (id) => {
    setExpandedCase(expandedCase === id ? null : id);
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Coordinación': 'blue',
      'Fabricación': 'green',
      'HVAC': 'yellow',
      'Operaciones': 'purple',
      'Eléctrico': 'orange',
      'Seguridad': 'red'
    };
    return colors[category] || 'blue';
  };

  const getGradientClasses = (color) => {
    const gradients = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      yellow: 'from-yellow-500 to-yellow-600',
      purple: 'from-purple-500 to-purple-600',
      orange: 'from-orange-500 to-orange-600',
      red: 'from-red-500 to-red-600'
    };
    return gradients[color] || gradients.blue;
  };

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
            Casos de Uso <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Reales</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Descubre cómo BIM+AI se está implementando exitosamente en proyectos reales de centros de datos, 
            con resultados medibles y beneficios tangibles.
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="space-y-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden"
            >
              {/* Header */}
              <div 
                className="p-6 cursor-pointer hover:bg-slate-50 transition-colors"
                onClick={() => toggleCase(useCase.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${getGradientClasses(getCategoryColor(useCase.category))} rounded-lg flex items-center justify-center`}>
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-slate-900">{useCase.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium bg-${getCategoryColor(useCase.category)}-100 text-${getCategoryColor(useCase.category)}-700`}>
                          {useCase.category}
                        </span>
                      </div>
                      <p className="text-slate-600">{useCase.shortDescription}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    {/* Metrics Preview */}
                    <div className="hidden md:flex items-center gap-4 text-sm">
                      {Object.entries(useCase.metrics).slice(0, 2).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="font-bold text-slate-900">{value}</div>
                          <div className="text-slate-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                        </div>
                      ))}
                    </div>
                    {expandedCase === useCase.id ? (
                      <ChevronDown className="w-6 h-6 text-slate-400" />
                    ) : (
                      <ChevronRight className="w-6 h-6 text-slate-400" />
                    )}
                  </div>
                </div>
              </div>

              {/* Expanded Content */}
              <AnimatePresence>
                {expandedCase === useCase.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-slate-100"
                  >
                    <div className="p-6 bg-slate-50">
                      <div className="grid lg:grid-cols-2 gap-8">
                        {/* Details */}
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-lg font-semibold text-slate-900 mb-3">Desafío</h4>
                            <p className="text-slate-600">{useCase.details.challenge}</p>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-slate-900 mb-3">Solución</h4>
                            <p className="text-slate-600">{useCase.details.solution}</p>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-slate-900 mb-3">Resultados</h4>
                            <ul className="space-y-2">
                              {useCase.details.results.map((result, resultIndex) => (
                                <li key={resultIndex} className="flex items-start text-slate-600">
                                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                  {result}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Metrics and Timeline */}
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-lg font-semibold text-slate-900 mb-3">Métricas Clave</h4>
                            <div className="grid grid-cols-2 gap-4">
                              {Object.entries(useCase.metrics).map(([key, value]) => (
                                <div key={key} className="bg-white rounded-lg p-4 text-center border border-slate-200">
                                  <div className="text-2xl font-bold text-blue-600 mb-1">{value}</div>
                                  <div className="text-sm text-slate-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-slate-900 mb-3">Tecnologías Utilizadas</h4>
                            <div className="flex flex-wrap gap-2">
                              {useCase.details.technologies.map((tech, techIndex) => (
                                <span key={techIndex} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-slate-900 mb-3">Timeline</h4>
                            <div className="flex items-center gap-2 text-slate-600">
                              <Clock className="w-4 h-4" />
                              {useCase.details.timeline}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Implementation Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            Timeline de Implementación
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { phase: "Fase 1", title: "Evaluación", duration: "2-4 semanas", description: "Análisis de necesidades y planificación" },
              { phase: "Fase 2", title: "Diseño", duration: "4-8 semanas", description: "Configuración de sistemas y integración" },
              { phase: "Fase 3", title: "Implementación", duration: "8-16 semanas", description: "Despliegue y configuración" },
              { phase: "Fase 4", title: "Optimización", duration: "4-8 semanas", description: "Ajustes y mejora continua" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold">{index + 1}</span>
                </div>
                <div className="text-sm font-semibold mb-1">{phase.phase}</div>
                <div className="text-lg font-bold mb-2">{phase.title}</div>
                <div className="text-blue-100 text-sm mb-2">{phase.duration}</div>
                <div className="text-blue-100 text-xs">{phase.description}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RealWorldUseCases; 