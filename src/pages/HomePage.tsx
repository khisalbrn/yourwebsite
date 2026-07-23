import { useState, useEffect } from 'react';
import type { CategoryKey } from '../data/content';

interface Props {
  onSelect: (category: CategoryKey | 'emergency') => void;
}

interface MenuOption {
  label: string;
  sub: string;
  key: CategoryKey | 'emergency';
  isEmergency?: boolean;
}

const options: MenuOption[] = [
  {
    label: 'Memories',
    sub: 'because you miss me',
    key: 'memories',
  },
  {
    label: 'Encouragement',
    sub: 'and strength',
    key: 'encouragement',
  },
  {
    label: 'A Joke',
    sub: "just because",
    key: 'jokes',
  },
  {
    label: 'Emergency',
    sub: 'you won\'t need this knock on wood',
    key: 'emergency',
    isEmergency: true,
  },
];

export default function HomePage({ onSelect }: Props) {
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
        background: 'linear-gradient(160deg, #1E140D 0%, #18120E 50%, #12100E 100%)',
      }}
    >
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 15%, rgba(200,132,90,0.07) 0%, transparent 55%), radial-gradient(circle at 80% 85%, rgba(200,132,90,0.04) 0%, transparent 45%)',
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
        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-8">
            <div style={{ width: 24, height: 1, background: 'rgba(200,132,90,0.4)' }} />
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <circle cx="6" cy="6" r="2" fill="#C8845A" opacity="0.7" />
            </svg>
            <div style={{ width: 24, height: 1, background: 'rgba(200,132,90,0.4)' }} />
          </div>

          <h1
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
              fontWeight: 400,
              color: '#EDE8E0',
              lineHeight: 1.25,
              letterSpacing: '-0.01em',
            }}
          >
            What do you need
            <br />
            <em>today?</em>
          </h1>
        </div>

        {/* Options */}
        <div className="flex flex-col gap-3 flex-1">
          {options.map((opt, i) => (
            <button
              key={opt.key}
              onClick={() => onSelect(opt.key)}
              onMouseEnter={() => setHoveredKey(opt.key)}
              onMouseLeave={() => setHoveredKey(null)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: opt.isEmergency ? '20px 24px' : '22px 24px',
                background: opt.isEmergency
                  ? hoveredKey === opt.key
                    ? 'rgba(160,50,40,0.18)'
                    : 'rgba(120,30,20,0.12)'
                  : hoveredKey === opt.key
                  ? 'rgba(200,132,90,0.1)'
                  : 'rgba(36,27,20,0.6)',
                border: opt.isEmergency
                  ? `1px solid ${hoveredKey === opt.key ? 'rgba(200,80,60,0.45)' : 'rgba(180,60,50,0.25)'}`
                  : `1px solid ${hoveredKey === opt.key ? 'rgba(200,132,90,0.38)' : 'rgba(200,132,90,0.14)'}`,
                borderRadius: '4px',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.22s ease',
                transform: hoveredKey === opt.key ? 'translateX(4px)' : 'translateX(0)',
                opacity: visible ? 1 : 0,
                transitionDelay: `${0.05 + i * 0.08}s`,
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: opt.isEmergency ? '1rem' : '1.125rem',
                    fontWeight: 500,
                    color: opt.isEmergency
                      ? hoveredKey === opt.key
                        ? 'rgba(230,120,100,0.95)'
                        : 'rgba(210,100,85,0.85)'
                      : '#EDE8E0',
                    letterSpacing: opt.isEmergency ? '0.06em' : '-0.005em',
                    textTransform: opt.isEmergency ? 'uppercase' : 'none',
                    marginBottom: opt.sub ? '2px' : 0,
                  }}
                >
                  {opt.label}
                </div>
                {opt.sub && (
                  <div
                    style={{
                      fontFamily: "'DM Sans', system-ui, sans-serif",
                      fontSize: '0.8125rem',
                      color: '#A89880',
                      fontWeight: 300,
                      fontStyle: 'italic',
                    }}
                  >
                    {opt.sub}
                  </div>
                )}
              </div>

              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                style={{
                  opacity: hoveredKey === opt.key ? 0.7 : 0.3,
                  transition: 'opacity 0.2s ease',
                  flexShrink: 0,
                  marginLeft: 12,
                }}
              >
                <path
                  d="M6 3l5 5-5 5"
                  stroke={opt.isEmergency ? '#D46050' : '#C8845A'}
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
            color: 'rgba(168,152,128,0.4)',
          }}
        >
          I made this because I love you.
        </p>
      </div>
    </div>
  );
}
