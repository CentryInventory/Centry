import React from 'react';
import { Mail, MessageCircle, HelpCircle } from 'lucide-react';
import './Pages.css';

export const Support: React.FC = () => {
  return (
    <div className="page-container page-enter">
      <div className="container">
        <div className="page-header">
          <div className="page-icon icon-emerald">
            <HelpCircle size={32} />
          </div>
          <h1>Centro de Soporte</h1>
          <p>Estamos aquí para ayudarte a sacar el máximo provecho de Centry</p>
        </div>

        <div className="grid-2 gap-6">
          {/* Contact Methods */}
          <div className="glass-card">
            <h2 className="mb-6">Contacto Directo</h2>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="page-icon icon-indigo" style={{ width: '3rem', height: '3rem', margin: 0 }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white">Correo Electrónico</h4>
                  <p className="text-sm">centrydev1@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="page-icon icon-emerald" style={{ width: '3rem', height: '3rem', margin: 0 }}>
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h4 className="text-white">Soporte Prioritario</h4>
                  <p className="text-sm">Disponible para usuarios Premium en app.centry.lol</p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ / Info */}
          <div className="glass-card">
            <h2 className="mb-6">Preguntas Frecuentes</h2>
            
            <div className="mb-6">
              <h4 className="text-white mb-2">¿Cómo accedo a Centry Inventory?</h4>
              <p className="text-sm">
                Puedes acceder al sistema de inventario haciendo clic en "Ingresar al Panel" en la esquina superior derecha o visitando app.centry.lol.
              </p>
            </div>
            
            <div>
              <h4 className="text-white mb-2">¿Qué pasa con mis datos en Google Workspace?</h4>
              <p className="text-sm">
                Todas nuestras extensiones utilizan los más altos estándares de seguridad y OAuth2, asegurando que tus datos nunca salgan de tu entorno de Google sin tu autorización.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
