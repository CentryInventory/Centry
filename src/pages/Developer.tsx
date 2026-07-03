import React from 'react';
import { Users, Code, Layout } from 'lucide-react';
import './Pages.css';

export const Developer: React.FC = () => {
  return (
    <div className="page-container page-enter">
      <div className="container">
        <div className="page-header">
          <div className="page-icon icon-indigo">
            <Users size={32} />
          </div>
          <h1>Información del Desarrollador</h1>
          <p>Conoce más sobre nuestro equipo y proceso de desarrollo</p>
        </div>

        <div className="glass-card mb-8">
          <h2 className="mb-4">Sobre Nosotros</h2>
          <p className="mb-4">
            Centry está formado por un equipo de desarrolladores especializados en aplicaciones empresariales y soluciones en la nube. 
            Contamos con años de experiencia creando herramientas que optimizan procesos comerciales, desde plataformas independientes 
            como <strong>Centry Inventory</strong> hasta extensiones robustas para <strong>Google Workspace</strong>.
          </p>
          <p>
            Nuestro enfoque es construir software que sea no solo poderoso, sino extremadamente intuitivo y elegante, 
            garantizando que las empresas puedan escalar sin fricciones.
          </p>
        </div>

        <div className="grid-2 gap-6 mt-8">
          <div className="glass-card">
            <h3 className="flex items-center gap-2 mb-4">
              <Code className="text-brand-primary" /> 
              Nuestro Proceso
            </h3>
            <ul className="feature-list">
              <li>Análisis detallado de requerimientos comerciales.</li>
              <li>Arquitectura de software escalable en la nube (GCP, AWS).</li>
              <li>Diseño centrado en la experiencia de usuario (UX/UI).</li>
              <li>Pruebas de seguridad y auditorías continuas.</li>
            </ul>
          </div>
          <div className="glass-card">
            <h3 className="flex items-center gap-2 mb-4">
              <Layout className="text-brand-secondary" /> 
              Google Workspace
            </h3>
            <p>
              Centry es un desarrollador registrado y verificado en Google Workspace Marketplace. 
              Nuestras extensiones pasan por estrictas revisiones de seguridad de Google para asegurar 
              que los datos de tu organización estén siempre protegidos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
