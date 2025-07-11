import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Calendar, 
  DollarSign, 
  Zap, 
  Eye,
  X,
  Info,
  Shield,
  TrendingUp
} from 'lucide-react';

const UseCaseGallery = () => {
  const [selectedUseCase, setSelectedUseCase] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const useCases = [
    {
      id: 1,
      title: "IA para Optimización de Refrigeración",
      icon: Zap,
      color: "blue",
      description: "Algoritmos inteligentes optimizan sistemas HVAC y distribución de refrigeración para máxima eficiencia energética en centros de datos.",
      example: "La IA ajusta continuamente los sistemas de refrigeración basándose en la carga del servidor, temperatura externa y precios de energía para minimizar PUE (Eficacia en el Uso de Energía).",
      benefits: ["Reduce costos de energía en 30%", "Mejora PUE en 15%", "Permite mantenimiento predictivo"]
    },
    {
      id: 2,
      title: "Programación Predictiva con IA",
      icon: Calendar,
      color: "green",
      description: "Los algoritmos de aprendizaje automático predicen cronogramas de proyectos e identifican posibles retrasos antes de que ocurran.",
      example: "La IA analiza datos históricos y progreso actual para predecir que la instalación eléctrica se retrasará 3 días debido a la escasez de materiales.",
      benefits: ["Reduce retrasos de cronograma en 40%", "Mejora la asignación de recursos", "Permite gestión proactiva de riesgos"]
    },
    {
      id: 3,
      title: "Estimación de Costos usando ML",
      icon: DollarSign,
      color: "yellow",
      description: "La IA proporciona estimaciones de costos precisas analizando parámetros de diseño y datos históricos de proyectos.",
      example: "La IA estima que el sistema de refrigeración costará $2.3M basándose en el diseño actual, 15% menos que los métodos tradicionales de estimación.",
      benefits: ["Mejora la precisión en 85%", "Reduce tiempo de estimación en 70%", "Identifica oportunidades de optimización de costos"]
    },
    {
      id: 4,
      title: "Predicción de Riesgos de Seguridad",
      icon: Shield,
      color: "red",
      description: "La visión por computadora y la IA analizan las condiciones del sitio para identificar peligros de seguridad y predecir riesgos potenciales.",
      example: "El sistema de monitoreo de IA alerta a los trabajadores cuando ingresan a zonas de alto riesgo o condiciones inseguras basándose en análisis del sitio en tiempo real.",
      benefits: ["Reduce incidentes de seguridad en 60%", "Mejora el monitoreo de cumplimiento", "Permite alertas de seguridad en tiempo real"]
    },
    {
      id: 5,
      title: "Simulación Energética",
      icon: TrendingUp,
      color: "purple",
      description: "Modelado energético avanzado y simulación usando IA para predecir y optimizar el consumo energético de centros de datos.",
      example: "La IA simula 1000+ escenarios energéticos para encontrar la configuración óptima para mínimo consumo de energía.",
      benefits: ["Reduce consumo energético en 25%", "Mejora métricas de sostenibilidad", "Permite reducción de huella de carbono"]
    },
    {
      id: 6,
      title: "Gemelo Digital para Gestión del Ciclo de Vida",
      icon: Eye,
      color: "indigo",
      description: "Réplicas digitales en tiempo real de centros de datos físicos permiten mantenimiento predictivo y optimización operacional.",
      example: "El gemelo digital predice que el Rack de Servidores A-12 requerirá mantenimiento en 3 semanas basándose en patrones de temperatura y vibración.",
      benefits: ["Reduce tiempo de inactividad en 50%", "Mejora la utilización de activos", "Permite monitoreo remoto"]
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600 border-blue-200",
      purple: "bg-purple-100 text-purple-600 border-purple-200",
      green: "bg-green-100 text-green-600 border-green-200",
      yellow: "bg-yellow-100 text-yellow-600 border-yellow-200",
      orange: "bg-orange-100 text-orange-600 border-orange-200",
      indigo: "bg-indigo-100 text-indigo-600 border-indigo-200"
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="use-cases" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Casos de Uso <span className="text-gradient">IA + BIM</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre cómo la inteligencia artificial está transformando cada aspecto de la construcción 
            de centros de datos a través del Modelado de Información de Construcción inteligente.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 card-hover cursor-pointer"
              onClick={() => setSelectedUseCase(useCase)}
            >
              <div className={`w-16 h-16 ${getColorClasses(useCase.color)} rounded-xl flex items-center justify-center mb-4 border`}>
                <useCase.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{useCase.description}</p>
              
              <div className="flex items-center text-sm text-gray-500">
                <Info className="w-4 h-4 mr-2" />
                Haz clic para saber más
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {selectedUseCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedUseCase(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center">
                  <div className={`w-16 h-16 ${getColorClasses(selectedUseCase.color)} rounded-xl flex items-center justify-center mr-4 border`}>
                    <selectedUseCase.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedUseCase.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedUseCase(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Descripción</h4>
                  <p className="text-gray-600 leading-relaxed">{selectedUseCase.description}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Ejemplo</h4>
                  <p className="text-gray-600 leading-relaxed">{selectedUseCase.example}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Beneficios Clave</h4>
                  <ul className="space-y-2">
                    {selectedUseCase.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default UseCaseGallery; 