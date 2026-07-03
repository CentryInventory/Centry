import React from 'react';
import { Shield } from 'lucide-react';
import './Pages.css';

export const Privacy: React.FC = () => {
  return (
    <div className="page-container page-enter">
      <div className="container">
        <div className="page-header">
          <div className="page-icon icon-indigo">
            <Shield size={32} />
          </div>
          <h1>Política de Privacidad</h1>
          <p>Su privacidad y la seguridad de sus datos son nuestra prioridad</p>
        </div>

        <div className="glass-card document-card">
          <div className="document-section">
            <h2>1. Información que recopilamos</h2>
            <p>
              Recopilamos información básica necesaria para el funcionamiento de nuestras aplicaciones, como su dirección de correo electrónico
              y nombre cuando se registra en Centry Inventory o utiliza nuestras extensiones.
            </p>
          </div>

          <div className="document-section">
            <h2>2. Uso de la información</h2>
            <p>Utilizamos la información recopilada exclusivamente para:</p>
            <ul>
              <li>Proveer y mantener nuestros servicios.</li>
              <li>Notificarle sobre cambios en nuestros servicios.</li>
              <li>Brindar soporte al cliente.</li>
            </ul>
          </div>

          <div className="document-section">
            <h2>3. Google Workspace y Datos de Usuarios</h2>
            <p>
              Para nuestras extensiones de Google Workspace, solicitamos los permisos mínimos necesarios.
              <strong>Nunca</strong> leemos, almacenamos ni compartimos el contenido de sus correos, documentos o archivos 
              con terceros bajo ninguna circunstancia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
