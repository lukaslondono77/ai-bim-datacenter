import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Palette, 
  Wrench, 
  DollarSign, 
  Settings,
  Clock,
  Shield,
  Zap,
  X,
  Calculator,
  Users,
  TrendingUp
} from 'lucide-react';

const BenefitsSection = () => {
  const [showROICalculator, setShowROICalculator] = useState(false);
  const [roiData, setRoiData] = useState({
    projectSize: 50000000,
    constructionTime: 18,
    teamSize: 50
  });
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const benefits = [
    {
      area: "Diseño",
      icon: Palette,
      color: "blue",
      benefits: [
        "90% reducción en iteraciones de diseño",
        "60% más rápido en completar el diseño",
        "25% mejora en eficiencia energética",
        "Detección y resolución automática de conflictos"
      ]
    },
    {
      area: "Construcción",
      icon: Wrench,
      color: "green",
      benefits: [
        "40% reducción en tiempo de construcción",
        "30% disminución en desperdicio de materiales",
        "50% menos órdenes de cambio",
        "Monitoreo de progreso en tiempo real"
      ]
    },
    {
      area: "Costos",
      icon: DollarSign,
      color: "yellow",
      benefits: [
        "25% reducción general de costos",
        "85% estimaciones de costos más precisas",
        "15% ahorro en costos operacionales",
        "Optimización predictiva de costos"
      ]
    },
    {
      area: "Operaciones",
      icon: Settings,
      color: "purple",
      benefits: [
        "30% reducción en consumo energético",
        "50% disminución en tiempo de inactividad",
        "Programación de mantenimiento predictivo",
        "Optimización de rendimiento en tiempo real"
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600 border-blue-200",
      green: "bg-green-100 text-green-600 border-green-200",
      yellow: "bg-yellow-100 text-yellow-600 border-yellow-200",
      purple: "bg-purple-100 text-purple-600 border-purple-200"
    };
    return colors[color] || colors.blue;
  };

  const getGradientClasses = (color) => {
    const gradients = {
      blue: "from-blue-500 to-blue-600",
      green: "from-green-500 to-green-600",
      yellow: "from-yellow-500 to-yellow-600",
      purple: "from-purple-500 to-purple-600"
    };
    return gradients[color] || gradients.blue;
  };

  const calculateROI = () => {
    const { projectSize, constructionTime, teamSize } = roiData;
    
    // Cálculos basados en estadísticas de la industria
    const timeSavings = constructionTime * 0.4; // 40% ahorro de tiempo
    const costSavings = projectSize * 0.25; // 25% ahorro de costos
    const laborSavings = teamSize * 0.3; // 30% reducción en mano de obra
    const qualityImprovement = 0.9; // 90% mejora en calidad
    
    return {
      timeSavings: Math.round(timeSavings),
      costSavings: Math.round(costSavings),
      laborSavings: Math.round(laborSavings),
      qualityImprovement: Math.round(qualityImprovement * 100),
      totalSavings: Math.round(costSavings + (laborSavings * 50000)), // Estimación de costo por persona
      roi: Math.round(((costSavings + (laborSavings * 50000)) / projectSize) * 100)
    };
  };

  const handleInputChange = (field, value) => {
    setRoiData(prev => ({
      ...prev,
      [field]: value
    }));
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
            Beneficios <span className="text-gradient">Medibles</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            BIM impulsado por IA entrega mejoras cuantificables en todos los aspectos 
            de la construcción y operación de centros de datos.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((area, index) => (
            <motion.div
              key={area.area}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg card-hover"
            >
              <div className={`w-16 h-16 ${getColorClasses(area.color)} rounded-xl flex items-center justify-center mb-4 border`}>
                <area.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{area.area}</h3>
              
              <ul className="space-y-3">
                {area.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-start text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Key Metrics Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-3xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Indicadores Clave de Rendimiento
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Ahorro de Tiempo", value: "40%", icon: Clock, color: "blue" },
              { label: "Reducción de Costos", value: "25%", icon: DollarSign, color: "green" },
              { label: "Mejora de Calidad", value: "90%", icon: Shield, color: "purple" },
              { label: "Eficiencia Energética", value: "30%", icon: Zap, color: "yellow" }
            ].map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${getGradientClasses(metric.color)} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <metric.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                <div className="text-gray-600">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ROI Calculator Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">
              Calcula tu ROI
            </h3>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Ve cómo BIM impulsado por IA puede transformar tu proyecto de centro de datos 
              con nuestra calculadora de ROI interactiva.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            {[
              { label: "Tamaño Promedio del Proyecto", value: "$50M", description: "Costo típico de construcción de centro de datos" },
              { label: "Ahorros Potenciales", value: "$12.5M", description: "25% reducción de costos con AI-BIM" },
              { label: "Tiempo de Implementación", value: "3-6 meses", description: "Tiempo para implementación completa" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-2xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg font-semibold mb-1">{stat.label}</div>
                <div className="text-blue-100 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button 
              onClick={() => setShowROICalculator(true)}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2 mx-auto"
            >
              <Calculator className="w-5 h-5" />
              Probar Calculadora ROI
            </button>
          </div>
        </motion.div>
      </div>

      {/* ROI Calculator Modal */}
      {showROICalculator && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Calculator className="w-6 h-6 text-blue-600" />
                Calculadora de ROI
              </h3>
              <button
                onClick={() => setShowROICalculator(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-6">
              {/* Input Fields */}
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tamaño del Proyecto (USD)
                  </label>
                  <input
                    type="text"
                    value={roiData.projectSize.toLocaleString()}
                    onChange={(e) => {
                      const value = e.target.value.replace(/[^0-9]/g, '');
                      handleInputChange('projectSize', parseInt(value) || 0);
                    }}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="50,000,000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tiempo de Construcción (meses)
                  </label>
                  <input
                    type="number"
                    value={roiData.constructionTime}
                    onChange={(e) => handleInputChange('constructionTime', parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="18"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tamaño del Equipo
                  </label>
                  <input
                    type="number"
                    value={roiData.teamSize}
                    onChange={(e) => handleInputChange('teamSize', parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="50"
                  />
                </div>
              </div>

              {/* Results */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-blue-600" />
                  Resultados Estimados
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {(() => {
                    const results = calculateROI();
                    return [
                      { 
                        label: "Ahorro de Tiempo", 
                        value: `${results.timeSavings} meses`, 
                        color: "blue",
                        icon: Clock,
                        description: "Reducción en tiempo de construcción"
                      },
                      { 
                        label: "Ahorro de Costos", 
                        value: `$${(results.costSavings / 1000000).toFixed(1)}M`, 
                        color: "green",
                        icon: DollarSign,
                        description: "Reducción en costos directos"
                      },
                      { 
                        label: "Reducción de Equipo", 
                        value: `${results.laborSavings} personas`, 
                        color: "purple",
                        icon: Users,
                        description: "Optimización de recursos humanos"
                      },
                      { 
                        label: "Mejora de Calidad", 
                        value: `${results.qualityImprovement}%`, 
                        color: "yellow",
                        icon: Shield,
                        description: "Incremento en calidad del proyecto"
                      },
                      { 
                        label: "Ahorro Total", 
                        value: `$${(results.totalSavings / 1000000).toFixed(1)}M`, 
                        color: "indigo",
                        icon: Zap,
                        description: "Ahorro total combinado"
                      },
                      { 
                        label: "ROI Estimado", 
                        value: `${results.roi}%`, 
                        color: "red",
                        icon: TrendingUp,
                        description: "Retorno de inversión esperado"
                      }
                    ].map((result, index) => (
                      <div key={index} className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`w-8 h-8 bg-${result.color}-100 rounded-lg flex items-center justify-center`}>
                            <result.icon className={`w-4 h-4 text-${result.color}-600`} />
                          </div>
                          <div className="text-sm text-gray-600">{result.label}</div>
                        </div>
                        <div className={`text-2xl font-bold text-${result.color}-600 mb-1`}>{result.value}</div>
                        <div className="text-xs text-gray-500">{result.description}</div>
                      </div>
                    ));
                  })()}
                </div>
              </div>

              {/* Additional Information */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h5 className="font-semibold text-yellow-800 mb-2">ℹ️ Información Importante</h5>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• Los cálculos están basados en estadísticas de la industria BIM</li>
                  <li>• Los resultados pueden variar según las condiciones específicas del proyecto</li>
                  <li>• Se recomienda consultar con expertos BIM para estimaciones más precisas</li>
                </ul>
              </div>

              <div className="text-center">
                <button
                  onClick={() => setShowROICalculator(false)}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default BenefitsSection; 