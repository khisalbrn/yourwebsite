import { useState, useEffect } from 'react';
import type { CategoryKey } from '../data/content';

interface EmergencyOption {
  label: string;
  sub: string;
  key: CategoryKey;
}

const emergencyOptions: EmergencyOption[] = [
  {
    label: 'Open this if you quitted',
    sub: "",
    key: 'emergency-quitting',
  },
  {
    label: 'Open this if you got rolled',
    sub: '',
    key: 'emergency-rolled',
  },
  {
    label: 'Open this if you got dropped',
    sub: '',
    key: 'emergency-dropped',
  },
];

interface Props {
  onSelect: (category: CategoryKey) => void;
  onBack: () => void;
}

export default function EmergencyPage({ onSelect, onBack }: Props) {
  const [visible, setVisible] = useState(false);
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col px-6 py-16"
      style={{
        background: 'linear-gradient(160deg, #1A0E0C 0%, #18120E 50%, #12100E 100%)',
      }}
    >
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 30%, rgba(180,60,50,0.07) 0%, transparent 60%)',
        }}
      />

      <div
        className="relative w-full max-w-md mx-auto flex flex-col flex-1"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(14px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}
      >
        <button
          onClick={onBack}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#A89880',
            fontFamily: "'DM Sans', system-ui, sans-serif",
            fontSize: '0.875rem',
            padding: 0,
            marginBottom: 40,
            opacity: 0.7,
            transition: 'opacity 0.2s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.7')}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 2L4 7l5 5" stroke="#A89880" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back
        </button>

        <div className="mb-12">
          <h1
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(1.6rem, 5vw, 2.25rem)',
              fontWeight: 400,
              color: '#EDE8E0',
              lineHeight: 1.3,
              letterSpacing: '-0.01em',
              marginBottom: 10,
            }}
          >
            I know this won't happen, but just in case.
          </h1>
          <p
            style={{
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontSize: '0.9375rem',
              color: '#A89880',
              fontWeight: 300,
            }}
          >
            I am by your side no matter what.
          </p>
        </div>

        <div className="flex flex-col gap-4 flex-1">
          {emergencyOptions.map((opt, i) => (
            <button
              key={opt.key}
              onClick={() => onSelect(opt.key)}
              onMouseEnter={() => setHoveredKey(opt.key)}
              onMouseLeave={() => setHoveredKey(null)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '22px 24px',
                background: hoveredKey === opt.key
                  ? 'rgba(180,60,50,0.14)'
                  : 'rgba(36,27,20,0.5)',
                border: `1px solid ${hoveredKey === opt.key ? 'rgba(200,80,60,0.4)' : 'rgba(180,60,50,0.2)'}`,
                borderRadius: '4px',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.22s ease',
                transform: hoveredKey === opt.key ? 'translateX(4px)' : 'translateX(0)',
                opacity: visible ? 1 : 0,
                transitionDelay: `${0.05 + i * 0.09}s`,
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "'DM Sans', system-ui, sans-serif",
                    fontSize: '0.9375rem',
                    fontWeight: 400,
                    color: hoveredKey === opt.key ? 'rgba(230,130,110,0.95)' : '#EDE8E0',
                    marginBottom: '3px',
                    transition: 'color 0.2s ease',
                  }}
                >
                  {opt.label}
                </div>
                <div
                  style={{
                    fontFamily: "'DM Sans', system-ui, sans-serif",
                    fontSize: '0.8rem',
                    color: '#A89880',
                    fontWeight: 300,
                    fontStyle: 'italic',
                  }}
                >
                  {opt.sub}
                </div>
              </div>

              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                style={{
                  opacity: hoveredKey === opt.key ? 0.7 : 0.25,
                  transition: 'opacity 0.2s ease',
                  flexShrink: 0,
                  marginLeft: 12,
                }}
              >
                <path
                  d="M6 3l5 5-5 5"
                  stroke="#D46050"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          ))}
        </div>

        <p
          className="mt-12 text-center"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontStyle: 'italic',
            fontSize: '0.8125rem',
            color: 'rgba(168,152,128,0.35)',
          }}
        >
          I love you so much and you are not alone.
        </p>
      </div>
    </div>
  );
}
