import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  TrendingUp, 
  Clock, 
  DollarSign, 
  Shield, 
  Zap, 
  Users,
  Target,
  BarChart3
} from 'lucide-react';

const InteractiveCharts = () => {
  const [activeMetric, setActiveMetric] = useState('time');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const metrics = [
    {
      id: 'time',
      label: 'Ahorro de Tiempo',
      icon: Clock,
      traditional: 100,
      aiEnhanced: 60,
      improvement: '40%',
      color: 'blue',
      description: 'Reducción en tiempo de diseño y construcción'
    },
    {
      id: 'cost',
      label: 'Reducción de Costos',
      icon: DollarSign,
      traditional: 100,
      aiEnhanced: 75,
      improvement: '25%',
      color: 'green',
      description: 'Ahorro en costos totales del proyecto'
    },
    {
      id: 'quality',
      label: 'Mejora de Calidad',
      icon: Shield,
      traditional: 70,
      aiEnhanced: 95,
      improvement: '36%',
      color: 'purple',
      description: 'Incremento en calidad y precisión'
    },
    {
      id: 'energy',
      label: 'Eficiencia Energética',
      icon: Zap,
      traditional: 80,
      aiEnhanced: 95,
      improvement: '19%',
      color: 'yellow',
      description: 'Optimización de consumo energético'
    },
    {
      id: 'collaboration',
      label: 'Colaboración',
      icon: Users,
      traditional: 60,
      aiEnhanced: 90,
      improvement: '50%',
      color: 'indigo',
      description: 'Mejora en coordinación de equipos'
    },
    {
      id: 'accuracy',
      label: 'Precisión',
      icon: Target,
      traditional: 75,
      aiEnhanced: 98,
      improvement: '31%',
      color: 'red',
      description: 'Exactitud en detección de conflictos'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-500',
      green: 'bg-green-500',
      purple: 'bg-purple-500',
      yellow: 'bg-yellow-500',
      indigo: 'bg-indigo-500',
      red: 'bg-red-500'
    };
    return colors[color] || colors.blue;
  };

  const getGradientClasses = (color) => {
    const gradients = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      purple: 'from-purple-500 to-purple-600',
      yellow: 'from-yellow-500 to-yellow-600',
      indigo: 'from-indigo-500 to-indigo-600',
      red: 'from-red-500 to-red-600'
    };
    return gradients[color] || gradients.blue;
  };

  const activeMetricData = metrics.find(m => m.id === activeMetric);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
            Comparativa <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">BIM Tradicional vs BIM+AI</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Descubre cómo la integración de IA transforma los resultados del BIM, 
            proporcionando mejoras significativas en todos los aspectos del proyecto.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Chart */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              Métricas de Rendimiento
            </h3>
            
            {/* Metric Selector */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
              {metrics.map((metric) => (
                <button
                  key={metric.id}
                  onClick={() => setActiveMetric(metric.id)}
                  className={`p-3 rounded-lg text-center transition-all duration-200 ${
                    activeMetric === metric.id
                      ? `bg-gradient-to-r ${getGradientClasses(metric.color)} text-white shadow-lg`
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <metric.icon className="w-5 h-5 mx-auto mb-1" />
                  <div className="text-xs font-medium">{metric.label}</div>
                </button>
              ))}
            </div>

            {/* Chart Visualization */}
            <div className="space-y-6">
              <div className="text-center mb-4">
                <h4 className="text-lg font-semibold text-slate-900 mb-2">
                  {activeMetricData?.label}
                </h4>
                <p className="text-sm text-slate-600">
                  {activeMetricData?.description}
                </p>
              </div>

              <div className="space-y-4">
                {/* Traditional BIM */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-slate-600">BIM Tradicional</span>
                    <span className="text-sm font-bold text-slate-700">{activeMetricData?.traditional}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <div 
                      className="bg-slate-400 h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${activeMetricData?.traditional}%` }}
                    ></div>
                  </div>
                </div>

                {/* AI-Enhanced BIM */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-slate-600">BIM + IA</span>
                    <span className="text-sm font-bold text-blue-600">{activeMetricData?.aiEnhanced}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <div 
                      className={`${getColorClasses(activeMetricData?.color)} h-3 rounded-full transition-all duration-1000`}
                      style={{ width: `${activeMetricData?.aiEnhanced}%` }}
                    ></div>
                  </div>
                </div>

                {/* Improvement */}
                <div className="text-center pt-4">
                  <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full">
                    <TrendingUp className="w-4 h-4" />
                    <span className="font-semibold">Mejora: {activeMetricData?.improvement}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Detailed Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">
                Beneficios Clave de BIM+AI
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Detección Automática de Conflictos",
                    description: "IA identifica y resuelve conflictos MEP antes de la construcción",
                    improvement: "90% más rápido"
                  },
                  {
                    title: "Optimización Energética",
                    description: "Análisis predictivo de sistemas HVAC y eléctricos",
                    improvement: "30% ahorro energético"
                  },
                  {
                    title: "Planificación Predictiva",
                    description: "Algoritmos de IA optimizan cronogramas y recursos",
                    improvement: "40% reducción de tiempo"
                  },
                  {
                    title: "Gestión de Activos",
                    description: "Gemelos digitales para monitoreo en tiempo real",
                    improvement: "50% menos tiempo de inactividad"
                  }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="bg-white/10 rounded-lg p-4"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">{benefit.title}</h4>
                      <span className="text-yellow-300 text-sm font-bold">{benefit.improvement}</span>
                    </div>
                    <p className="text-blue-100 text-sm">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ROI Summary */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                Resumen de ROI
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Ahorro Promedio", value: "25%", color: "green" },
                  { label: "Tiempo Reducido", value: "40%", color: "blue" },
                  { label: "Mejora Calidad", value: "90%", color: "purple" },
                  { label: "ROI Estimado", value: "300%", color: "indigo" }
                ].map((metric, index) => (
                  <div key={index} className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className={`text-2xl font-bold text-${metric.color}-600 mb-1`}>
                      {metric.value}
                    </div>
                    <div className="text-sm text-slate-600">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              ¿Listo para Transformar tu Proyecto?
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Descubre cómo BIM+AI puede optimizar tu próximo proyecto de centro de datos 
              con nuestra calculadora de ROI personalizada.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 flex items-center gap-2 mx-auto">
              <BarChart3 className="w-5 h-5" />
              Calcular ROI Personalizado
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveCharts; 