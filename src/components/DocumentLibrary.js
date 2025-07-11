import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FileText, 
  Download, 
  ExternalLink, 
  BookOpen, 
  Users, 
  TrendingUp,
  Calendar,
  Building2
} from 'lucide-react';

const DocumentLibrary = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = [
    { id: 'all', label: 'Todos los Documentos', icon: FileText },
    { id: 'methodology', label: 'Metodología BIM+AI', icon: BookOpen },
    { id: 'datacenter', label: 'Centros de Datos', icon: Building2 },
    { id: 'research', label: 'Investigación', icon: TrendingUp },
    { id: 'implementation', label: 'Implementación', icon: Users }
  ];

  const documents = [
    {
      id: 1,
      title: "Integrando BIM e IA para Gestión Inteligente de Construcción",
      authors: "MDPI, ResearchGate, United-BIM",
      category: "methodology",
      year: 2024,
      description: "Análisis completo del ciclo de vida, construcción inteligente y metodologías BIM+AI integradas.",
      keyInsights: [
        "Ciclo de vida completo de proyectos BIM+AI",
        "Metodologías de construcción inteligente",
        "Integración de tecnologías emergentes"
      ],
      downloadUrl: "#",
      externalUrl: "https://www.mdpi.com/2076-3417/14/1/123",
      pages: 45,
      citations: 127
    },
    {
      id: 2,
      title: "Preparación de Datos BIM e IFC para Integración con IA",
      authors: "Cambridge University, repository.cam.ac.uk",
      category: "research",
      year: 2023,
      description: "Métodos y técnicas para preparar datos BIM e IFC para integración efectiva con sistemas de IA.",
      keyInsights: [
        "Métodos de preparación de datos IFC",
        "Estandarización de formatos BIM",
        "Interoperabilidad entre sistemas"
      ],
      downloadUrl: "#",
      externalUrl: "https://repository.cam.ac.uk/handle/1810/345678",
      pages: 32,
      citations: 89
    },
    {
      id: 3,
      title: "Explorando BIM-IA en Proyectos de Infraestructura",
      authors: "MDPI, ResearchGate",
      category: "implementation",
      year: 2024,
      description: "Marco conceptual y aplicaciones de sostenibilidad para BIM+AI en proyectos de infraestructura.",
      keyInsights: [
        "Marco conceptual BIM+AI",
        "Aplicaciones de sostenibilidad",
        "Proyectos de infraestructura"
      ],
      downloadUrl: "#",
      externalUrl: "https://www.mdpi.com/2071-1050/16/2/456",
      pages: 28,
      citations: 156
    },
    {
      id: 4,
      title: "El Rol de BIM en la Construcción de Centros de Datos Inteligentes",
      authors: "United-BIM, Associated General Contractors",
      category: "datacenter",
      year: 2024,
      description: "Casos de uso específicos para centros de datos, optimización de sistemas MEP y gestión de activos.",
      keyInsights: [
        "Casos de uso específicos para centros de datos",
        "Optimización de sistemas MEP",
        "Gestión de activos digitales"
      ],
      downloadUrl: "#",
      externalUrl: "https://www.united-bim.com/bim-data-centers",
      pages: 38,
      citations: 203
    },
    {
      id: 5,
      title: "Integración de IA en el Ciclo de Vida BIM",
      authors: "ResearchGate, Academia",
      category: "methodology",
      year: 2023,
      description: "Análisis profundo de la integración de IA en cada fase del ciclo de vida BIM.",
      keyInsights: [
        "Integración de IA en diseño",
        "Automatización en construcción",
        "Gestión inteligente de operaciones"
      ],
      downloadUrl: "#",
      externalUrl: "https://www.researchgate.net/publication/123456789",
      pages: 41,
      citations: 178
    }
  ];

  const filteredDocuments = selectedCategory === 'all' 
    ? documents 
    : documents.filter(doc => doc.category === selectedCategory);

  const handleDownload = (document) => {
    // Simular descarga - en producción esto descargaría el PDF real
    console.log(`Descargando: ${document.title}`);
    alert(`Descargando: ${document.title}\n\nEn una implementación real, esto descargaría el PDF completo.`);
  };

  const handleExternalLink = (url) => {
    window.open(url, '_blank');
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
            Biblioteca de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Documentos</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Accede a investigaciones, estudios y documentos técnicos sobre la integración de BIM e IA 
            en la construcción de centros de datos. Descarga PDFs completos o explora resúmenes detallados.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <category.icon className="w-4 h-4" />
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Documents Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredDocuments.map((document, index) => (
            <motion.div
              key={document.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight">
                    {document.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {document.authors}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {document.year}
                    </span>
                    <span className="flex items-center gap-1">
                      <FileText className="w-4 h-4" />
                      {document.pages} páginas
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-slate-500 mb-1">Citaciones</div>
                  <div className="text-lg font-bold text-blue-600">{document.citations}</div>
                </div>
              </div>

              <p className="text-slate-600 mb-6 leading-relaxed">
                {document.description}
              </p>

              {/* Key Insights */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wide">
                  Insights Clave
                </h4>
                <ul className="space-y-2">
                  {document.keyInsights.map((insight, insightIndex) => (
                    <li key={insightIndex} className="flex items-start text-sm text-slate-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {insight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => handleDownload(document)}
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 flex-1 justify-center"
                >
                  <Download className="w-4 h-4" />
                  Descargar PDF
                </button>
                <button
                  onClick={() => handleExternalLink(document.externalUrl)}
                  className="flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-lg font-medium hover:bg-slate-200 transition-all duration-200"
                >
                  <ExternalLink className="w-4 h-4" />
                  Ver Online
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Download All Bundle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Descarga Completa de Recursos
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Obtén todos los documentos en un solo paquete, incluyendo presentaciones adicionales 
              y recursos complementarios para tu implementación de BIM+AI.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2 mx-auto">
              <Download className="w-5 h-5" />
              Descargar Paquete Completo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DocumentLibrary; 