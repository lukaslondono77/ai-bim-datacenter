import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FileText, 
  Download, 
  ExternalLink, 
  Search, 
  Filter,
  BookOpen,
  TrendingUp,
  Calendar,
  Users,
  ArrowRight
} from 'lucide-react';

const DocumentLibrary = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState('Todos los Documentos');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    'Todos los Documentos',
    'Metodología BIM+AI',
    'Centros de Datos',
    'Investigación',
    'Implementación'
  ];

  const documents = [
    {
      id: 1,
      title: "Integrando BIM e IA para Gestión Inteligente de Construcción",
      authors: "MDPI, ResearchGate, United-BIM",
      year: "2024",
      pages: "45 páginas",
      citations: "127",
      category: "Metodología BIM+AI",
      description: "Análisis completo del ciclo de vida, construcción inteligente y metodologías BIM+AI integradas.",
      insights: [
        "Ciclo de vida completo de proyectos BIM+AI",
        "Metodologías de construcción inteligente",
        "Integración de tecnologías emergentes"
      ],
      pdfUrl: "#",
      onlineUrl: "#"
    },
    {
      id: 2,
      title: "Preparación de Datos BIM e IFC para Integración con IA",
      authors: "Cambridge University, repository.cam.ac.uk",
      year: "2023",
      pages: "32 páginas",
      citations: "89",
      category: "Investigación",
      description: "Métodos y técnicas para preparar datos BIM e IFC para integración efectiva con sistemas de IA.",
      insights: [
        "Métodos de preparación de datos IFC",
        "Estandarización de formatos BIM",
        "Interoperabilidad entre sistemas"
      ],
      pdfUrl: "#",
      onlineUrl: "#"
    },
    {
      id: 3,
      title: "Explorando BIM-IA en Proyectos de Infraestructura",
      authors: "MDPI, ResearchGate",
      year: "2024",
      pages: "28 páginas",
      citations: "156",
      category: "Implementación",
      description: "Marco conceptual y aplicaciones de sostenibilidad para BIM+AI en proyectos de infraestructura.",
      insights: [
        "Marco conceptual BIM+AI",
        "Aplicaciones de sostenibilidad",
        "Proyectos de infraestructura"
      ],
      pdfUrl: "#",
      onlineUrl: "#"
    },
    {
      id: 4,
      title: "El Rol de BIM en la Construcción de Centros de Datos Inteligentes",
      authors: "United-BIM, Associated General Contractors",
      year: "2024",
      pages: "38 páginas",
      citations: "203",
      category: "Centros de Datos",
      description: "Casos de uso específicos para centros de datos, optimización de sistemas MEP y gestión de activos.",
      insights: [
        "Casos de uso específicos para centros de datos",
        "Optimización de sistemas MEP",
        "Gestión de activos digitales"
      ],
      pdfUrl: "#",
      onlineUrl: "#"
    },
    {
      id: 5,
      title: "Integración de IA en el Ciclo de Vida BIM",
      authors: "ResearchGate, Academia",
      year: "2023",
      pages: "41 páginas",
      citations: "178",
      category: "Metodología BIM+AI",
      description: "Análisis profundo de la integración de IA en cada fase del ciclo de vida BIM.",
      insights: [
        "Integración de IA en diseño",
        "Automatización en construcción",
        "Gestión inteligente de operaciones"
      ],
      pdfUrl: "#",
      onlineUrl: "#"
    }
  ];

  const filteredDocuments = documents.filter(doc => {
    const matchesCategory = selectedCategory === 'Todos los Documentos' || doc.category === selectedCategory;
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
            Accede a investigaciones, estudios y documentos técnicos sobre la integración de BIM e IA en la construcción de centros de datos. 
            Descarga PDFs completos o explora resúmenes detallados.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-100">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Buscar documentos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Documents Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid lg:grid-cols-2 gap-8 mb-12"
        >
          {filteredDocuments.map((doc, index) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-300"
            >
              {/* Document Header */}
              <div className="mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight">
                      {doc.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-slate-600 mb-3">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {doc.authors}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {doc.year}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <FileText className="w-4 h-4" />
                    {doc.pages}
                  </div>
                </div>

                {/* Citations */}
                <div className="flex items-center gap-2 text-sm text-slate-600 mb-4">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                  <span className="font-medium">{doc.citations} citaciones</span>
                </div>

                {/* Category Badge */}
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                  {doc.category}
                </span>
              </div>

              {/* Description */}
              <p className="text-slate-600 mb-6 leading-relaxed">
                {doc.description}
              </p>

              {/* Key Insights */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-blue-600" />
                  Insights Clave
                </h4>
                <ul className="space-y-2">
                  {doc.insights.map((insight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      {insight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <a
                  href={doc.pdfUrl}
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105"
                >
                  <Download className="w-4 h-4" />
                  Descargar PDF
                </a>
                <a
                  href={doc.onlineUrl}
                  className="flex items-center gap-2 border border-slate-300 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Ver Online
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Complete Package Download */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Descarga Completa de Recursos
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Obtén todos los documentos en un solo paquete, incluyendo presentaciones adicionales y recursos complementarios para tu implementación de BIM+AI.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105"
            >
              <Download className="w-5 h-5" />
              Descargar Paquete Completo
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DocumentLibrary; 