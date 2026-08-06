import React from 'react';
import { Phone, ShieldCheck, Heart } from 'lucide-react';
const StrokeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
    <path d="M12 4c-3 0-5 2-5 4.5 0 .5-.1 1-.2 1.5A3.5 3.5 0 0 0 5 14c0 2 1.5 3 3 3 .5 0 1 .1 1.5.2A4.5 4.5 0 0 0 14 15.5M12 4c3 0 5 2 5 4.5 0 .5.1 1 .2 1.5A3.5 3.5 0 0 1 19 14c0 2-1.5 3-3 3-.5 0-1 .1-1.5.2A4.5 4.5 0 0 1 10 15.5" />
    <g><path d="M13 3l-3 7h4l-3 8" /></g>
  </svg>
);

const ParalysisIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
    <path d="M9 11h4a2 2 0 0 1 2 2v3" />
    <path d="M11 7.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
    <path d="M15 16h3.5" />
    <path d="M9 11v6" />
    <path d="M7 19a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
    <g><circle cx="7" cy="15" r="2" /></g>
  </svg>
);

const OrthoIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
    <path d="M9 3c0 4 2 6 2 9s-2 5-2 9" />
    <path d="M15 3c0 4-2 6-2 9s2 5 2 9" />
    <g><circle cx="12" cy="12" r="3" /></g>
  </svg>
);

const NeuroIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
    <path d="M13 4a6 6 0 0 1 6 6c0 2.2-1 4-2 6a3 3 0 0 0-1.5 2.5V21h-5v-2.5A3 3 0 0 0 8.5 16c-1-2-2-3.8-2-6a6 6 0 0 1 6.5-6z" />
    <g>
      <path d="M12.5 7l3 1.5v3l-3 1.5-3-1.5v-3z" />
      <path d="M12.5 10v3" />
      <path d="M9.5 8.5l3 1.5 3-1.5" />
    </g>
  </svg>
);

const GeriatricIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
    <path d="M10 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
    <path d="M10 6c-1 3-3 5-3 8v7" />
    <path d="M10 6c2 1 4 1 5 3v6" />
    <path d="M7 14h5" />
    <g>
      <path d="M17 9c1 0 2 .5 2 1.5V21" />
      <path d="M15 9h2" />
    </g>
  </svg>
);

const PolytraumaIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
    <path d="M12 9a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
    <path d="M5 21v-3a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v3" />
    <g>
      <circle cx="12" cy="17" r="4" />
      <path d="M12 15.5v3M10.5 17h3" />
    </g>
  </svg>
);

const RespiratoryIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
    <path d="M12 3v5" />
    <path d="M12 8l-2 2" />
    <path d="M12 8l2 2" />
    <path d="M10 10c-2-2-5-1-5 3v3c0 3 2 5 5 2v-8z" />
    <path d="M14 10c2-2 5-1 5 3v3c0 3-2 5-5 2v-8z" />
    <g>
      <path d="M8 12v3M16 12v3" />
    </g>
  </svg>
);

const SpeechIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
    <path d="M11 4a6 6 0 0 1 6 6c0 2.2-1 4-2 6a3 3 0 0 0-1.5 2.5V21H8v-2.5A3 3 0 0 0 6.5 16c-1-2-2-3.8-2-6a6 6 0 0 1 6.5-6z" />
    <g>
      <path d="M18 10a4 4 0 0 1 0 4M21 8a8 8 0 0 1 0 8" />
    </g>
  </svg>
);

const icons = {
  stroke: <StrokeIcon />,
  paralysis: <ParalysisIcon />,
  ortho: <OrthoIcon />,
  neuro: <NeuroIcon />,
  geriatric: <GeriatricIcon />,
  polytrauma: <PolytraumaIcon />,
  respiratory: <RespiratoryIcon />,
  speech: <SpeechIcon />
};

const whatsappSvg = (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

const DotMatrix = () => (
  <div className="dot-matrix">
    {[...Array(9)].map((_, i) => (
      <div key={i} className="dot"></div>
    ))}
  </div>
);

function App() {
  return (
    <div className="container">

      {/* Header Info */}
      <header className="header">
        <div className="logo-section">
          <div className="logo">
            <img src="/logo.png" alt="Brinnova Transitional Care" className="logo-image" />
          </div>
          <DotMatrix />
        </div>

        <div className="hero-text-section">
          <h1 className="hero-title">
            <div className="navy-text title-line-1">Comprehensive</div>
            <div className="orange-text title-line-2">Rehabilitation Care</div>
            <div className="navy-text title-line-3">For Every Stage of Recovery</div>
          </h1>
        </div>
      </header>

      {/* Hero Image */}
      <div className="hero-image-container">
        <div className="hero-image-wrapper">
          <img src="/hero-new-image-2.jpg" alt="Rehabilitation Care" className="hero-img" />
          <svg className="curve-svg" viewBox="0 0 1000 110" preserveAspectRatio="none" style={{ position: 'absolute', bottom: '-1px', left: 0, width: '100%', height: '18%', zIndex: 10 }}>
            {/* Orange band (behind blue) */}
            <path d="M0,35 Q300,130 1000,60 L1000,110 L0,110 Z" fill="#f6921e" />
            {/* Blue sweeps down and up on the right */}
            <path d="M0,55 Q450,130 1000,20 L1000,110 L0,110 Z" fill="#026fa6" />
            {/* White forms the bottom mask */}
            <path d="M0,80 Q450,150 1000,45 L1000,110 L0,110 Z" fill="#ffffff" />
          </svg>
        </div>
      </div>

      {/* Description */}
      <div className="description-section">
        <p>
          At Brinnova Care, we deliver personalised rehabilitation
          programs for a wide range of conditions. Our expert
          team focuses on restoring independence, improving
          mobility and enhancing quality of life with compassion
          and clinical excellence.
        </p>
      </div>

      {/* Conditions */}
      <div className="conditions-section">
        <div className="conditions-title-container">
          <div className="conditions-line"></div>
          <h2 className="conditions-title">Conditions We Care For</h2>
          <div className="conditions-line"></div>
        </div>

        <div className="conditions-grid">
          {[
            { icon: icons.stroke, label: "Stroke\nRehabilitation" },
            { icon: icons.paralysis, label: "Paralysis\nRehabilitation" },
            { icon: icons.ortho, label: "Orthopedic\nRehabilitation" },
            { icon: icons.neuro, label: "Neuro\nRehabilitation" },
            { icon: icons.geriatric, label: "Geriatric\nCare" },
            { icon: icons.polytrauma, label: "Polytrauma\nCare" },
            { icon: icons.respiratory, label: "Respiratory\nCare" },
            { icon: icons.speech, label: "Speech &\nSwallow Therapy" }
          ].map((item, index) => (
            <div key={index} className="condition-item">
              <div className="condition-icon-circle">
                {item.icon}
              </div>
              <span className="condition-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer / CTA */}
      <div className="cta-section">
        <div className="buttons-row">
          <button className="btn btn-whatsapp" onClick={() => window.open('https://wa.me/919100555511', '_blank')}>
            {whatsappSvg}
            <span>WhatsApp Us</span>
          </button>
          <button className="btn btn-call" onClick={() => window.location.href = 'tel:09100555511'}>
            <Phone size={18} fill="white" />
            <span>Call Now</span>
          </button>
        </div>

        <div className="long-cta" onClick={() => window.location.href = 'tel:09100555511'}>
          <div className="phone-circle">
            <Phone size={13} fill="#026fa6" color="#026fa6" />
          </div>
          <span>Call us to Book an Appointment worth <strong>Rs. 2,000 FREE</strong></span>
        </div>

        <div className="footer-bar">
          <ShieldCheck size={14} className="shield-icon" />
          <span>Expert Care. personalised Recovery. Better Outcomes.</span>
        </div>
      </div>

    </div>
  );
}

export default App;
