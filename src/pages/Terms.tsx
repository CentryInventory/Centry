import React from 'react';
import { FileText } from 'lucide-react';
import './Pages.css';

export const Terms: React.FC = () => {
  return (
    <div className="page-container page-enter">
      <div className="container">
        <div className="page-header">
          <div className="page-icon icon-emerald">
            <FileText size={32} />
          </div>
          <h1>Términos de Servicio</h1>
          <p>Última actualización: Julio 2026</p>
        </div>

        <div className="glass-card document-card">
          <div className="document-section">
            <h2>1. Aceptación de los Términos</h2>
            <p>
              Al acceder y utilizar los servicios de Centry (incluyendo Centry Inventory y nuestras extensiones de Google Workspace),
              usted acepta estar sujeto a estos términos y condiciones.
            </p>
          </div>

          <div className="document-section">
            <h2>2. Uso del Servicio</h2>
            <p>
              Usted se compromete a utilizar nuestros servicios de manera legal y ética. No debe:
            </p>
            <ul>
              <li>Utilizar el servicio para fines ilegales.</li>
              <li>Intentar vulnerar la seguridad de la plataforma.</li>
              <li>Revender o distribuir el servicio sin autorización.</li>
            </ul>
          </div>

          <div className="document-section">
            <h2>3. Cuentas y Seguridad</h2>
            <p>
              Usted es responsable de mantener la confidencialidad de su cuenta y contraseña. 
              Centry no se hace responsable por cualquier pérdida o daño que resulte de su incumplimiento de esta obligación de seguridad.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
