import React from 'react';
import { Link } from 'react-router-dom';
import { Building2 } from 'lucide-react';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          
          <div className="footer-brand-section">
            <Link to="/" className="footer-brand">
              <div className="brand-icon">
                <Building2 size={24} />
              </div>
              <span className="brand-text">Centry</span>
            </Link>
            <p className="footer-description">
              Desarrollamos la plataforma de gestión de inventario más moderna y extensiones empresariales para Google Workspace que optimizan los procesos de tu negocio.
            </p>
            <p className="footer-rights">
              © {new Date().getFullYear()} Centry Solutions. Todos los derechos reservados.
            </p>
          </div>

          <div className="footer-links-section">
            <h4 className="footer-title">Recursos</h4>
            <ul className="footer-list">
              <li><Link to="/developer">Desarrollador</Link></li>
              <li><Link to="/support">Soporte</Link></li>
              <li><Link to="/terms">Términos</Link></li>
              <li><Link to="/privacy">Privacidad</Link></li>
            </ul>
          </div>

          <div className="footer-contact-section">
            <h4 className="footer-title">Contacto</h4>
            <ul className="footer-list">
              <li>centrydev1@gmail.com</li>
              <li>Soporte 24/7</li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};
