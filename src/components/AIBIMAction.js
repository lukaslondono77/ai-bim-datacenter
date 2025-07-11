import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box, Cylinder } from '@react-three/drei';
import { 
  Building2, 
  Wrench, 
  Settings,
  Server,
  Zap,
  Thermometer,
  Wifi
} from 'lucide-react';

// Enhanced 3D Data Center Component with System Views
const DataCenterModel = ({ activeView }) => {
  const showElectrical = activeView === 'electrical' || activeView === 'all';
  const showHVAC = activeView === 'hvac' || activeView === 'all';
  const showServerLayout = activeView === 'server' || activeView === 'all';
  const showFireSafety = activeView === 'fire' || activeView === 'all';

  return (
    <group>
      {/* Floor */}
      <Box args={[20, 0.5, 15]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#6b7280" />
      </Box>
      
      {/* Server Racks - Always visible */}
      {showServerLayout && Array.from({ length: 8 }, (_, i) => (
        <Box key={i} args={[1, 3, 2]} position={[-6 + i * 1.5, 1.5, -4]}>
          <meshStandardMaterial color="#374151" />
        </Box>
      ))}
      
      {/* Cooling Units - HVAC System */}
      {showHVAC && Array.from({ length: 4 }, (_, i) => (
        <Cylinder key={i} args={[0.5, 0.5, 2]} position={[-4 + i * 2, 1, 4]}>
          <meshStandardMaterial color="#3b82f6" />
        </Cylinder>
      ))}
      
      {/* HVAC Ducts */}
      {showHVAC && (
        <>
          <Box args={[12, 0.3, 0.3]} position={[0, 2.5, -2]}>
            <meshStandardMaterial color="#60a5fa" />
          </Box>
          <Box args={[0.3, 0.3, 8]} position={[-6, 2.5, 0]}>
            <meshStandardMaterial color="#60a5fa" />
          </Box>
        </>
      )}
      
      {/* Electrical Panels */}
      {showElectrical && (
        <Box args={[2, 4, 0.5]} position={[8, 2, 0]}>
          <meshStandardMaterial color="#f59e0b" />
        </Box>
      )}
      
      {/* Electrical Conduits */}
      {showElectrical && (
        <>
          <Box args={[0.2, 0.2, 12]} position={[6, 1, 0]}>
            <meshStandardMaterial color="#fbbf24" />
          </Box>
          <Box args={[0.2, 0.2, 8]} position={[0, 1, -6]}>
            <meshStandardMaterial color="#fbbf24" />
          </Box>
        </>
      )}
      
      {/* Fire Safety Zones */}
      {showFireSafety && (
        <>
          <Box args={[18, 0.1, 13]} position={[0, 0.3, 0]}>
            <meshStandardMaterial color="#ef4444" opacity={0.3} transparent />
          </Box>
          {/* Fire Sprinklers */}
          {Array.from({ length: 6 }, (_, i) => (
            <Cylinder key={i} args={[0.1, 0.1, 0.5]} position={[-5 + i * 2, 3, -3]}>
              <meshStandardMaterial color="#dc2626" />
            </Cylinder>
          ))}
        </>
      )}
      
      {/* Lighting */}
      <ambientLight intensity={0.8} />
      <pointLight position={[10, 10, 10]} intensity={1.2} />
      <pointLight position={[-10, 5, -10]} intensity={0.8} />
    </group>
  );
};

const AIBIMAction = () => {
  const [activeTab, setActiveTab] = useState('design');
  const [activeView, setActiveView] = useState('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const tabs = [
    { id: 'design', label: 'Diseño', icon: Building2 },
    { id: 'construction', label: 'Construcción', icon: Wrench },
    { id: 'operations', label: 'Operaciones', icon: Settings }
  ];

  const systemViews = [
    { id: 'all', label: 'Vista General', color: 'gray' },
    { id: 'electrical', label: 'Sistema Eléctrico', color: 'yellow' },
    { id: 'hvac', label: 'Sistema HVAC', color: 'blue' },
    { id: 'server', label: 'Infraestructura IT', color: 'green' },
    { id: 'fire', label: 'Protección contra Incendios', color: 'red' }
  ];

  const tabContent = {
    design: {
      title: "Optimización de Diseño Impulsada por IA",
      description: "Los algoritmos inteligentes analizan miles de permutaciones de diseño para crear los diseños de centros de datos más eficientes.",
      features: [
        { icon: Server, text: "Colocación óptima de racks de servidores para eficiencia de refrigeración", color: "blue" },
        { icon: Zap, text: "Planificación inteligente de distribución de energía", color: "yellow" },
        { icon: Thermometer, text: "Diseño avanzado de sistemas HVAC", color: "green" }
      ]
    },
    construction: {
      title: "Gestión Inteligente de Construcción",
      description: "El monitoreo en tiempo real y las ideas impulsadas por IA aseguran que la construcción se mantenga en cronograma y dentro del presupuesto.",
      features: [
        { icon: Wrench, text: "Detección y resolución automática de conflictos", color: "purple" },
        { icon: Building2, text: "Programación predictiva y asignación de recursos", color: "orange" },
        { icon: Wifi, text: "Sensores IoT para seguimiento de progreso en tiempo real", color: "indigo" }
      ]
    },
    operations: {
      title: "Operaciones y Mantenimiento Inteligentes",
      description: "Los gemelos digitales y el análisis de IA permiten mantenimiento predictivo y rendimiento óptimo.",
      features: [
        { icon: Settings, text: "Programación de mantenimiento predictivo", color: "green" },
        { icon: Zap, text: "Optimización energética dinámica", color: "blue" },
        { icon: Server, text: "Monitoreo de rendimiento en tiempo real", color: "purple" }
      ]
    }
  };

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      yellow: "bg-yellow-100 text-yellow-600",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600",
      orange: "bg-orange-100 text-orange-600",
      indigo: "bg-indigo-100 text-indigo-600"
    };
    return colors[color] || colors.blue;
  };

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            IA + BIM en <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Acción</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Experimenta cómo la inteligencia artificial transforma la construcción de centros de datos 
            a través de cada fase del ciclo de vida del proyecto con soluciones innovadoras y eficientes.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 3D Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-slate-800 rounded-xl p-8 shadow-2xl border border-slate-700"
          >
            {/* System View Toggles */}
            <div className="flex flex-wrap gap-3 mb-6">
              {systemViews.map((view) => (
                <button
                  key={view.id}
                  onClick={() => setActiveView(view.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeView === view.id
                      ? `bg-${view.color}-600 text-white shadow-lg`
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white'
                  }`}
                >
                  {view.label}
                </button>
              ))}
            </div>
            
            <div className="w-full h-80 bg-white rounded-lg overflow-hidden">
              <Canvas 
                camera={{ position: [10, 10, 10], fov: 50 }}
                style={{ background: 'white' }}
              >
                <DataCenterModel activeView={activeView} />
                <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
              </Canvas>
            </div>
            <p className="text-center text-slate-400 mt-6 text-sm font-medium">
              Modelo 3D Interactivo del Centro de Datos • Alterna sistemas y arrastra para rotar
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Tabs */}
            <div className="flex space-x-1 bg-slate-800 rounded-xl p-1 mb-10">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                      : 'text-slate-400 hover:text-white hover:bg-slate-700'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4">{tabContent[activeTab].title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {tabContent[activeTab].description}
              </p>

              <div className="space-y-4">
                {tabContent[activeTab].features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className={`w-10 h-10 ${getColorClasses(feature.color)} rounded-lg flex items-center justify-center`}>
                      <feature.icon className="w-5 h-5" />
                    </div>
                    <span className="text-gray-200">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { label: "Ahorro de Tiempo", value: "40%", color: "blue" },
            { label: "Reducción de Costos", value: "25%", color: "green" },
            { label: "Eficiencia Energética", value: "30%", color: "yellow" },
            { label: "Reducción de Errores", value: "90%", color: "purple" }
          ].map((metric, index) => (
            <div key={index} className="text-center">
              <div className={`text-3xl font-bold mb-2 text-${metric.color}-400`}>
                {metric.value}
              </div>
              <div className="text-gray-400">{metric.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AIBIMAction; 