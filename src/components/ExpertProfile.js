import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Building2, 
  Award, 
  Users, 
  BookOpen,
  MapPin,
  GraduationCap,
  Briefcase,
  CheckCircle,
  FileText,
  Linkedin
} from 'lucide-react';

const ExpertProfile = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const expertise = [
    "Metodología BIM",
    "Gestión Documental",
    "Optimización de Activos",
    "Interventoría y Control de Presupuestos",
    "Coordinación de Especialidades",
    "Diseño Arquitectónico"
  ];

  const experience = [
    {
      company: "Cotel",
      position: "BIM Manager",
      duration: "Agosto 2023 - Presente (2 años)",
      location: "Bogotá, D.C., Colombia",
      description: "Gestión estratégica de proyectos bajo metodología BIM, liderar planificación y administración de recursos humanos y tecnológicos, estandarización de procesos tecnológicos, desarrollo del plan de ejecución BIM (BEP), gestión de calidad del modelo BIM."
    },
    {
      company: "Cotel",
      position: "BIM Coordinator",
      duration: "Marzo 2021 - Agosto 2023 (2 años 6 meses)",
      location: "Bogotá, D.C., Colombia",
      description: "Implementación y capacitación al equipo de diseño y obra en metodología BIM, desarrollo del BEP, liderar comités BIM, coordinación de modelos y gestión de calidad del modelo BIM."
    },
    {
      company: "COLVATEL S.A. E.S.P.",
      position: "Analista de Información",
      duration: "Octubre 2020 - Marzo 2021 (6 meses)",
      location: "Bogotá, D.C., Colombia",
      description: "Proyecto Secretaría Distrital de Planeación Bogotá - Liderar equipo para identificación, recopilación, clasificación y análisis de información jurídico territorial."
    },
    {
      company: "Construvid",
      position: "BIM Architect",
      duration: "Agosto 2015 - Febrero 2020 (4 años 7 meses)",
      location: "Valledupar, Cesar, Colombia",
      description: "Montaje de proyectos en formato BIM, implementación y capacitación en BIM, gestión documental, coordinación entre disciplinas, optimización de cantidades de obra, elaboración de propuestas urbanísticas."
    }
  ];

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
            Conoce a Nuestro <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Experto BIM</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Nuestro especialista en metodología BIM con más de 8 años de experiencia en la optimización 
            de procesos de construcción y gestión de activos para centros de datos.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100 sticky top-8"
          >
            <div className="text-center mb-8">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg border-4 border-blue-500">
                <img 
                  src={process.env.PUBLIC_URL + "/arturofoto.jpeg"} 
                  alt="Arturo Quintero - Especialista en BIM"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-6xl font-bold" style={{ display: 'none' }}>
                  AQ
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Arturo Quintero
              </h3>
              <p className="text-lg text-blue-600 font-semibold mb-3">
                BIM Manager - Especialista en Metodología BIM
              </p>
              
              <div className="flex items-center justify-center gap-4 text-sm text-slate-600 mb-4">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  Bogotá, Colombia
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  126 conexiones
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 text-sm text-slate-500 mb-4">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>1st degree connection</span>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-3 mb-6">
                <a 
                  href="https://www.linkedin.com/in/arturo-q-208493128/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
                  title="Conectar en LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>

              {/* Connect Button */}
              <a 
                href="https://www.linkedin.com/in/arturo-q-208493128/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105"
              >
                <Users className="w-4 h-4" />
                Conectar con Arturo
              </a>
            </div>

            {/* Expertise */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-600" />
                Áreas de Especialización
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {expertise.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-slate-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Current Position */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200">
              <div className="flex items-center gap-3 mb-2">
                <Briefcase className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-slate-900">Posición Actual</span>
              </div>
              <p className="text-slate-700 font-medium">BIM Manager</p>
              <p className="text-blue-600 font-semibold">Cotel</p>
              <p className="text-sm text-slate-600 mt-1">Agosto 2023 - Presente</p>
              <div className="mt-2 flex items-center gap-1 text-xs text-slate-500">
                <MapPin className="w-3 h-3" />
                Bogotá, Colombia
              </div>
            </div>
          </motion.div>

          {/* Professional Background */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* About */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-blue-600" />
                Sobre Arturo
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Profesional en Arquitectura con más de 8 años de experiencia especializado en Metodología BIM. 
                Actual BIM Manager en Cotel, con amplio conocimiento en gestión documental, optimización de 
                procesos tecnológicos y coordinación de proyectos complejos desde el diseño hasta el mantenimiento 
                mediante herramientas BIM.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Experto en interventoría y control de presupuestos en obra, desarrollo de planes de ejecución BIM (BEP), 
                y coordinación de diseños de las especialidades de la construcción para proyectos complejos. 
                Certificado en LEED y con amplia experiencia en construcción sostenible.
              </p>
            </div>

            {/* Experience Timeline */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-blue-600" />
                Experiencia Profesional
              </h3>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-900">{exp.position}</h4>
                      <p className="text-blue-600 font-medium">{exp.company}</p>
                      <p className="text-sm text-slate-500 mb-1">{exp.duration}</p>
                      <p className="text-xs text-slate-400 mb-2">{exp.location}</p>
                      <p className="text-slate-600 text-sm leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <FileText className="w-6 h-6 text-blue-600" />
                Certificaciones y Licencias
              </h3>
              <div className="space-y-4">
                {[
                  {
                    name: "BD+C 251: Construction LEED",
                    issuer: "Open Ingenieria Expertos en Conocimiento",
                    date: "Abril 2024"
                  },
                  {
                    name: "BIM Autodesk Revit",
                    issuer: "Autodesk",
                    date: "Agosto 2023",
                    credential: "AM0183097550525295068"
                  },
                  {
                    name: "Revit Architecture: Modelado digital",
                    issuer: "Pontificia Universidad Javeriana",
                    date: "2014",
                    type: "Diplomado"
                  },
                  {
                    name: "BIM Coordinator",
                    issuer: "DisBIM Smart-Up S.A.S.",
                    date: "Septiembre - Diciembre 2019"
                  }
                ].map((cert, index) => (
                  <div key={index} className="border border-slate-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-slate-900">{cert.name}</h4>
                      <span className="text-sm text-slate-500">{cert.date}</span>
                    </div>
                    <p className="text-blue-600 text-sm mb-1">{cert.issuer}</p>
                    {cert.credential && (
                      <p className="text-xs text-slate-500">ID: {cert.credential}</p>
                    )}
                    {cert.type && (
                      <p className="text-xs text-slate-500">{cert.type}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Key Achievements */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Award className="w-6 h-6" />
                Logros Clave
              </h3>
              <div className="space-y-4">
                {[
                  "Más de 8 años de experiencia en implementación y gestión de metodología BIM",
                  "Liderazgo en equipos de diseño y obra para optimización de procesos BIM",
                  "Desarrollo e implementación de planes de ejecución BIM (BEP) exitosos",
                  "Certificación LEED y especialización en construcción sostenible",
                  "Gestión estratégica de proyectos complejos con múltiples especialidades"
                ].map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-blue-100 leading-relaxed">{achievement}</span>
                  </motion.div>
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
              ¿Interesado en Colaborar?
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Conecta con nuestro experto en BIM para discutir cómo podemos optimizar 
              tu próximo proyecto de centro de datos con metodologías avanzadas.
            </p>
            <a 
              href="https://www.linkedin.com/in/arturo-q-208493128/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 flex items-center gap-2 mx-auto hover:scale-105 transform"
            >
              <Users className="w-5 h-5" />
              Conectar con Arturo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertProfile; 