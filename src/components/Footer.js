import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  Send,
  Building2,
  Brain,
  Database
} from 'lucide-react';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6">
              ¿Listo para Transformar tu Centro de Datos?
            </h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Ponte en contacto con nuestros expertos en IA-BIM para discutir cómo podemos ayudar 
              a optimizar tu proyecto de construcción de centro de datos con soluciones 
              tecnológicas de vanguardia.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Tu Nombre"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Tu Email"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Nombre de la Empresa"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
              />
              
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Cuéntanos sobre tu proyecto..."
                rows="4"
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none"
              ></textarea>
              
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Enviar Mensaje
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Resources */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Información de Contacto</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">info@ai-bim-datacenter.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">San Francisco, CA 94105</span>
                </div>
              </div>
            </div>

            {/* Download Report */}
            <div className="bg-gray-800 rounded-xl p-6">
              <h4 className="text-xl font-semibold mb-4">Descarga Nuestro Reporte</h4>
              <p className="text-gray-300 mb-4">
                Obtén nuestra guía completa sobre la implementación de soluciones AI-BIM 
                para la construcción de centros de datos.
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center gap-2">
                <Download className="w-5 h-5" />
                Descargar Reporte PDF
              </button>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Enlaces Rápidos</h4>
                             <div className="space-y-2">
                 <a href="#use-cases" className="block text-gray-300 hover:text-white transition-colors">
                   Casos de Uso
                 </a>
                 <button className="block text-gray-300 hover:text-white transition-colors text-left w-full">
                   Stack de Tecnología
                 </button>
                 <button className="block text-gray-300 hover:text-white transition-colors text-left w-full">
                   Beneficios
                 </button>
                 <button className="block text-gray-300 hover:text-white transition-colors text-left w-full">
                   Casos de Estudio
                 </button>
               </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="flex items-center gap-2">
                <Building2 className="w-6 h-6 text-blue-400" />
                <Brain className="w-6 h-6 text-green-400" />
                <Database className="w-6 h-6 text-purple-400" />
              </div>
              <span className="text-lg font-semibold">IA en BIM para Centros de Datos</span>
            </div>
            
            <div className="text-gray-400 text-sm">
              © 2024 Soluciones IA-BIM para Centros de Datos. Todos los derechos reservados.
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 