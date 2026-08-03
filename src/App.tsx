import React from 'react';
import { Phone, ShieldCheck, Heart } from 'lucide-react';
import { TbBrain, TbWheelchair, TbBone, TbActivity, TbWalk, TbFirstAidKit, TbLungs, TbMessageCircle } from "react-icons/tb";

const icons = {
  stroke: <TbBrain strokeWidth={1} />,
  paralysis: <TbWheelchair strokeWidth={1} />,
  ortho: <TbBone strokeWidth={1} />,
  neuro: <TbActivity strokeWidth={1} />,
  geriatric: <TbWalk strokeWidth={1} />,
  polytrauma: <TbFirstAidKit strokeWidth={1} />,
  respiratory: <TbLungs strokeWidth={1} />,
  speech: <TbMessageCircle strokeWidth={1} />
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
            <div style={{ whiteSpace: 'nowrap', fontSize: 'min(3.6vh, 5.2vw)' }}>
              <span className="navy-text">Comprehensive </span>
              <span className="orange-text">Rehabilitation Care</span>
            </div>
            <div className="navy-text" style={{ fontSize: 'min(3.6vh, 4.8vw)' }}>
              For Every Stage of Recovery
            </div>
          </h1>
          <div className="divider-container">
            <div className="divider-line"></div>
            <Heart size={14} className="heart-icon" />
            <div className="divider-line"></div>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="hero-image-container">
        <div className="hero-image-wrapper">
          <img src="/hero-landscape-new.png" alt="Rehabilitation Care" className="hero-img" />
          <svg className="curve-svg" viewBox="0 0 1000 150" preserveAspectRatio="none" style={{ position: 'absolute', bottom: '-1px', left: 0, width: '100%', height: '35%', zIndex: 10 }}>
            {/* Orange tapers into the blue */}
            <path d="M0,0 Q200,60 500,80 L500,150 L0,150 Z" fill="#f6921e" />
            {/* Blue sweeps down and up on the right */}
            <path d="M0,25 Q400,120 1000,0 L1000,150 L0,150 Z" fill="#026fa6" />
            {/* White forms the bottom mask */}
            <path d="M0,50 Q400,145 1000,25 L1000,150 L0,150 Z" fill="#ffffff" />
          </svg>
        </div>
      </div>

      {/* Description */}
      <div className="description-section">
        <p>
          At Brinnova Care, we deliver personalized rehabilitation
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
            <Phone size={16} fill="#026fa6" color="#026fa6" />
          </div>
          <span>Call us to Book an Appointment worth <strong>Rs. 2,000 FREE</strong></span>
        </div>

        <div className="footer-bar">
          <ShieldCheck size={14} className="shield-icon" />
          <span>Expert Care. Personalized Recovery. Better Outcomes.</span>
        </div>
      </div>

    </div>
  );
}

export default App;
