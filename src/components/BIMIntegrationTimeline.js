import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Palette, 
  Wrench, 
  Settings,
  ChevronRight,
  Lightbulb,
  Shield,
  Zap,
  Clock,
  TrendingUp,
  Database
} from 'lucide-react';

const BIMIntegrationTimeline = () => {
  const [activeStage, setActiveStage] = useState('planning');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stages = [
    {
      id: 'planning',
      title: 'Planificación y Diseño',
      icon: Palette,
      color: 'blue',
      description: 'Optimización de diseño impulsada por IA y planificación inteligente',
      features: [
        {
          title: 'Diseño Generativo',
          description: 'La IA crea miles de variaciones de diseño optimizando eficiencia, costo y rendimiento',
          icon: Lightbulb,
          example: 'La IA genera 100+ diseños de centros de datos, seleccionando automáticamente la configuración más eficiente energéticamente'
        },
        {
          title: 'Detección Automática de Conflictos',
          description: 'Los algoritmos de aprendizaje automático identifican y resuelven conflictos de sistemas antes de la construcción',
          icon: Shield,
          example: 'La IA detecta conflictos entre conductos HVAC y conductos eléctricos y sugiere soluciones de enrutamiento óptimas'
        },
        {
          title: 'Planificación Inteligente de Espacios',
          description: 'Algoritmos inteligentes optimizan la colocación de racks de servidores y la distribución de zonas de refrigeración',
          icon: Database,
          example: 'La IA analiza mapas de calor y patrones de tráfico para posicionar equipos con máxima eficiencia'
        }
      ]
    },
    {
      id: 'construction',
      title: 'Construcción',
      icon: Wrench,
      color: 'green',
      description: 'Monitoreo en tiempo real y gestión de construcción impulsada por IA',
      features: [
        {
          title: 'Programación Predictiva',
          description: 'Los algoritmos de ML predicen cronogramas de proyectos e identifican posibles retrasos',
          icon: Clock,
          example: 'La IA pronostica que la instalación eléctrica se retrasará 3 días debido a la escasez de materiales'
        },
        {
          title: 'Predicción de Riesgos de Seguridad',
          description: 'La visión por computadora y la IA analizan las condiciones del sitio para identificar peligros de seguridad',
          icon: Shield,
          example: 'El sistema de monitoreo de IA alerta a los trabajadores cuando ingresan a zonas de alto riesgo o condiciones inseguras'
        },
        {
          title: 'Control de Calidad',
          description: 'Inspección automatizada usando visión por computadora y aprendizaje automático',
          icon: TrendingUp,
          example: 'Las cámaras de IA detectan automáticamente defectos de construcción y problemas de calidad en tiempo real'
        }
      ]
    },
    {
      id: 'operations',
      title: 'Operaciones',
      icon: Settings,
      color: 'purple',
      description: 'Gemelos digitales y mantenimiento predictivo para rendimiento óptimo',
      features: [
        {
          title: 'Gestión de Gemelos Digitales',
          description: 'Réplicas digitales en tiempo real permiten mantenimiento predictivo y optimización operacional',
          icon: Database,
          example: 'El gemelo digital predice que el Rack de Servidores A-12 requerirá mantenimiento en 3 semanas basado en patrones de temperatura'
        },
        {
          title: 'Optimización Energética',
          description: 'La IA optimiza continuamente los sistemas de refrigeración y distribución de energía',
          icon: Zap,
          example: 'La IA ajusta la configuración HVAC basándose en la carga del servidor, temperatura externa y precios de energía'
        },
        {
          title: 'Mantenimiento Predictivo',
          description: 'El aprendizaje automático predice fallas de equipos antes de que ocurran',
          icon: Clock,
          example: 'La IA alerta al equipo de mantenimiento que la unidad de refrigeración #3 fallará en 48 horas basándose en análisis de vibración'
        }
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600 border-blue-200",
      green: "bg-green-100 text-green-600 border-green-200",
      purple: "bg-purple-100 text-purple-600 border-purple-200"
    };
    return colors[color] || colors.blue;
  };

  const getGradientClasses = (color) => {
    const gradients = {
      blue: "from-blue-500 to-blue-600",
      green: "from-green-500 to-green-600",
      purple: "from-purple-500 to-purple-600"
    };
    return gradients[color] || gradients.blue;
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Integración <span className="text-gradient">BIM + IA</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre cómo la inteligencia artificial mejora cada etapa del ciclo de vida BIM, 
            desde el diseño inicial hasta las operaciones continuas.
          </p>
        </motion.div>

        {/* Timeline Navigation */}
        <div className="flex flex-col md:flex-row justify-center mb-12">
          {stages.map((stage, index) => (
            <motion.button
              key={stage.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setActiveStage(stage.id)}
              className={`flex items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeStage === stage.id
                  ? `bg-gradient-to-r ${getGradientClasses(stage.color)} text-white shadow-lg`
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              } ${index > 0 ? 'md:ml-4 mt-4 md:mt-0' : ''}`}
            >
              <stage.icon className="w-5 h-5" />
              {stage.title}
              {index < stages.length - 1 && (
                <ChevronRight className="w-4 h-4 hidden md:block" />
              )}
            </motion.button>
          ))}
        </div>

        {/* Content Area */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Stage Overview */}
          <motion.div
            key={activeStage}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="flex items-center mb-6">
              <div className={`w-16 h-16 ${getColorClasses(stages.find(s => s.id === activeStage).color)} rounded-xl flex items-center justify-center mr-4 border`}>
                {(() => {
                  const StageIcon = stages.find(s => s.id === activeStage).icon;
                  return <StageIcon className="w-8 h-8" />;
                })()}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {stages.find(s => s.id === activeStage).title}
                </h3>
                <p className="text-gray-600">
                  {stages.find(s => s.id === activeStage).description}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {stages.find(s => s.id === activeStage).features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border-l-4 border-blue-500 pl-6"
                >
                  <div className="flex items-start gap-3 mb-2">
                    <feature.icon className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <h4 className="text-lg font-semibold text-gray-900">{feature.title}</h4>
                  </div>
                  <p className="text-gray-600 mb-3">{feature.description}</p>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <p className="text-sm text-blue-800 font-medium">Ejemplo:</p>
                    <p className="text-sm text-blue-700">{feature.example}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Ciclo de Vida BIM con IA</h3>
              
              <div className="space-y-6">
                {stages.map((stage, index) => (
                  <div key={stage.id} className="flex items-center">
                    <div className={`w-12 h-12 ${getColorClasses(stage.color)} rounded-full flex items-center justify-center border`}>
                      <stage.icon className="w-6 h-6" />
                    </div>
                    <div className="ml-4 flex-1">
                      <h4 className="font-semibold text-gray-900">{stage.title}</h4>
                      <p className="text-sm text-gray-600">{stage.description}</p>
                    </div>
                    {index < stages.length - 1 && (
                      <div className="w-px h-12 bg-gray-300 mx-4"></div>
                    )}
                  </div>
                ))}
              </div>

              {/* Key Metrics */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Mejoras Clave con IA</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">40%</div>
                    <div className="text-sm text-gray-600">Ahorro de Tiempo</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">25%</div>
                    <div className="text-sm text-gray-600">Reducción de Costos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">90%</div>
                    <div className="text-sm text-gray-600">Reducción de Errores</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">30%</div>
                    <div className="text-sm text-gray-600">Eficiencia Energética</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BIMIntegrationTimeline; 