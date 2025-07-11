import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, 
  Zap,
  Users,
  ExternalLink,
  Github,
  Linkedin,
  Globe,
  Award,
  Briefcase,
  GraduationCap,
  CheckCircle
} from 'lucide-react';

const DeveloperProfile = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    "AWS (EKS, RDS, S3, Lambda, CloudFormation)",
    "Docker & Kubernetes",
    "Python & Flask",
    "CI/CD Pipelines",
    "PostgreSQL & SQLAlchemy",
    "WebRTC & Real-time Communication",
    "DevOps & Infrastructure as Code",
    "Security Best Practices"
  ];

  const experience = [
    {
      company: "G&L Interpreters",
      position: "DevOps Technical Lead",
      duration: "Marzo 2018 - Presente (7 años 5 meses)",
      location: "Georgia, Estados Unidos · Remoto",
      description: "Lidero el diseño y optimización de infraestructura cloud y pipelines CI/CD. Despliegue en AWS EKS, automatización con CodePipeline, gestión de bases de datos RDS, integración WebRTC para comunicación en tiempo real, y monitoreo con CloudWatch."
    },
    {
      company: "Colombiana de Comercio / Corbeta / Alkosto S.A",
      position: "Software Engineer",
      duration: "Agosto 2024 - Diciembre 2024 (5 meses)",
      location: "Remoto",
      description: "Diseño e implementación de scripts de automatización, mantenimiento de bases de datos, desarrollo de procesos ETL, creación de dashboards interactivos, análisis estadístico y predictivo, y documentación técnica."
    }
  ];

  const certifications = [
    {
      name: "Advanced Kubernetes Operators",
      issuer: "IBM",
      date: "Julio 2025"
    },
    {
      name: "IBM MicroBachelors Program in Full Stack Cloud Development",
      issuer: "IBM",
      date: "Julio 2025"
    },
    {
      name: "AWS Certified DevOps Engineer",
      issuer: "Amazon Web Services",
      date: "Certificación Profesional"
    }
  ];

  const projects = [
    {
      name: "Cloud DevOps Pipeline",
      description: "Implementación de pipeline CI/CD usando Kubernetes, ArgoCD y GitHub Actions para despliegues automatizados en la nube.",
      technologies: ["Kubernetes", "ArgoCD", "GitHub Actions", "AWS CLI"],
      link: "https://github.com/lukaslondono77/cloud_devops"
    },
    {
      name: "DevOps Capstone Project",
      description: "Microservicio de cuentas de clientes con TDD, Docker, Kubernetes y pipelines Tekton para despliegue continuo.",
      technologies: ["Flask", "Docker", "Kubernetes", "PostgreSQL", "GitHub Actions"],
      link: "https://github.com/lukaslondono77/devops-capstone-project"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Desarrollado por <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Lukas Londono</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            DevOps Technical Lead especializado en infraestructura cloud, automatización y desarrollo de soluciones tecnológicas innovadoras.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-700"
          >
            <div className="text-center mb-8">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg border-4 border-blue-500">
                <img 
                  src={process.env.PUBLIC_URL + "/lukasfotodevops.jpeg"} 
                  alt="Lukas Londono - DevOps Technical Lead"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-6xl font-bold" style={{ display: 'none' }}>
                  LL
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">
                Lukas Londono
              </h3>
              <p className="text-lg text-blue-400 font-semibold mb-3">
                DevOps Technical Lead
              </p>
              
              <div className="flex items-center justify-center gap-4 text-sm text-slate-400 mb-4">
                <div className="flex items-center gap-1">
                  <Globe className="w-4 h-4" />
                  Georgia, Estados Unidos
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  710 seguidores
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 text-sm text-slate-400 mb-4">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Disponible para proyectos</span>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-3 mb-6">
                <a 
                  href="https://www.linkedin.com/in/lukas-londono-688829110/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://github.com/lukaslondono77" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-700 text-white p-2 rounded-lg hover:bg-slate-600 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>

              {/* Current Position */}
              <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-xl p-4 border border-slate-600">
                <div className="flex items-center gap-3 mb-2">
                  <Briefcase className="w-5 h-5 text-blue-400" />
                  <span className="font-semibold text-white">Posición Actual</span>
                </div>
                <p className="text-slate-300 font-medium">DevOps Technical Lead</p>
                <p className="text-blue-400 font-semibold">G&L Interpreters</p>
                <p className="text-sm text-slate-400 mt-1">Marzo 2018 - Presente</p>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-blue-400" />
                Tecnologías Principales
              </h4>
              <div className="grid grid-cols-1 gap-2">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-slate-300">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    {skill}
                  </div>
                ))}
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
            <div className="bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Code className="w-6 h-6 text-blue-400" />
                Sobre Lukas
              </h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Como DevOps Technical Lead en G&L Interpreters, lidero el diseño y optimización de nuestra infraestructura cloud y pipelines CI/CD. 
                Mi enfoque se centra en automatización, escalabilidad y confiabilidad, asegurando que nuestra tecnología impulse servicios de interpretación 
                sin problemas en todas las plataformas.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Apasionado por la cultura DevOps moderna, infraestructura como código y mejora continua, me esfuerzo por crear soluciones tecnológicas 
                que generen un impacto real para los usuarios y el negocio. Con más de 7 años de experiencia en el campo, he desarrollado experiencia 
                en AWS, Kubernetes, Docker, Python y metodologías DevOps.
              </p>
            </div>

            {/* Experience Timeline */}
            <div className="bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-blue-400" />
                Experiencia Profesional
              </h3>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white">{exp.position}</h4>
                      <p className="text-blue-400 font-medium">{exp.company}</p>
                      <p className="text-sm text-slate-400 mb-1">{exp.duration}</p>
                      <p className="text-xs text-slate-500 mb-2">{exp.location}</p>
                      <p className="text-slate-300 text-sm leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-blue-400" />
                Certificaciones
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="border border-slate-600 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-white">{cert.name}</h4>
                      <span className="text-sm text-slate-400">{cert.date}</span>
                    </div>
                    <p className="text-blue-400 text-sm">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Github className="w-6 h-6 text-blue-400" />
                Proyectos Destacados
              </h3>
              <div className="space-y-4">
                {projects.map((project, index) => (
                  <div key={index} className="border border-slate-600 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-white">{project.name}</h4>
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    <p className="text-slate-300 text-sm mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-slate-700 text-slate-300 text-xs px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Achievements */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Zap className="w-6 h-6" />
                Logros Clave
              </h3>
              <div className="space-y-4">
                {[
                  "Más de 7 años de experiencia en DevOps y desarrollo de software",
                  "Liderazgo en despliegue de plataformas cloud en AWS",
                  "Implementación exitosa de pipelines CI/CD automatizados",
                  "Especialización en Kubernetes y contenedores Docker",
                  "Desarrollo de soluciones de comunicación en tiempo real con WebRTC"
                ].map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-blue-100">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperProfile; 