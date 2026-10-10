import SpecularButton from './react-bits/SpecularButton';

// Padrão de CTA do site: SpecularButton (React Bits) com a configuração escolhida.
// Sempre abre o WhatsApp em nova aba.
export default function Cta({ href, label, size = 'lg', tint = '#ffffff', tintOpacity = 0, blur = 0, className = '' }) {
  return (
    <SpecularButton
      href={href}
      target="_blank"
      rel="noopener"
      size={size}
      radius={18}
      tint={tint}
      tintOpacity={tintOpacity}
      blur={blur}
      textColor="#f5f5f5"
      lineColor="#ffffff"
      baseColor="#525252"
      intensity={1}
      shineSize={10}
      shineFade={40}
      thickness={1}
      speed={0.35}
      followMouse
      proximity={250}
      autoAnimate={false}
      className={`cta ${className}`.trim()}
    >
      {label}
      <svg className="cta-seta" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </SpecularButton>
  );
}
