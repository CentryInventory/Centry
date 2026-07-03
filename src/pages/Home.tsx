import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Package, LayoutDashboard, Cloud, Users, Shield, Zap } from 'lucide-react';
import './Home.css';

export const Home: React.FC = () => {
  return (
    <div className="home page-enter">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="badge badge-primary mb-6">
              Nueva Plataforma 2026
            </div>
            <h1 className="hero-title">
              Potencia tu negocio con <br />
              <span className="gradient-text">aplicaciones inteligentes</span>
            </h1>
            <p className="hero-subtitle">
              Descubre <strong>Centry Suite</strong>. Desde nuestro nuevo sistema avanzado de inventario en la nube hasta nuestras integraciones empresariales líderes para Google Workspace.
            </p>
            
            <div className="hero-actions">
              <a href="https://app.centry.lol" className="btn btn-primary">
                Ingresar al Panel <ArrowRight size={18} />
              </a>
              <Link to="/support" className="btn btn-secondary">
                Contactar Ventas
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Products Section */}
      <section className="products-section">
        <div className="container">
          
          <div className="section-header">
            <h2>Nuestras Soluciones</h2>
            <p>Herramientas diseñadas para escalar junto con tu empresa.</p>
          </div>

          <div className="products-grid">
            {/* Product 1: Centry Inventory (Smart Stock) */}
            <div className="glass-card product-card highlight-card">
              <div className="product-icon icon-emerald">
                <Package size={28} />
              </div>
              <div className="badge badge-primary mb-4">Destacado</div>
              <h3>Centry Inventory</h3>
              <p>
                Nuestro sistema de Punto de Venta (POS) e Inventario en la nube. 
                Gestiona stock, controla ventas en tiempo real y obtén métricas detalladas 
                de rendimiento.
              </p>
              <ul className="feature-list mt-8">
                <li><LayoutDashboard size={18} /> Panel de métricas en tiempo real</li>
                <li><Cloud size={18} /> Arquitectura Multi-tenant segura</li>
                <li><Zap size={18} /> Gestión instantánea de productos</li>
              </ul>
              <div className="mt-8">
                <a href="https://app.centry.lol" className="btn btn-primary w-full">
                  Probar Centry Inventory
                </a>
              </div>
            </div>

            {/* Product 2: Workspace Addons */}
            <div className="glass-card product-card">
              <div className="product-icon icon-indigo">
                <Users size={28} />
              </div>
              <div className="badge badge-indigo mb-4">Google Workspace</div>
              <h3>Extensiones Empresariales</h3>
              <p>
                Integraciones perfectas con el ecosistema de Google. 
                Nuestras aplicaciones del Marketplace optimizan flujos de trabajo en Sheets y Docs.
              </p>
              <ul className="feature-list mt-8">
                <li><Shield size={18} /> Seguridad avalada por Google</li>
                <li><Zap size={18} /> Automatización de hojas de cálculo</li>
                <li><Users size={18} /> Colaboración en equipo sin fricción</li>
              </ul>
              <div className="mt-8">
                <Link to="/developer" className="btn btn-outline w-full">
                  Ver Información
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
