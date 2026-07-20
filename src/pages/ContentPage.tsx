import { useState, useEffect, useRef } from 'react';
import type { CategoryKey } from '../data/content';
import { CONTENT } from '../data/content';
import { getNextEntry } from '../utils/rotation';

const CATEGORY_LABELS: Record<CategoryKey, { title: string; subtitle: string }> = {
  memories: { title: 'A Memory', subtitle: 'Hold onto this one.' },
  encouragement: { title: 'For You', subtitle: 'From me to you.' },
  jokes: { title: 'A Joke', subtitle: "You're welcome." },
  'emergency-quitting': { title: "Don't You Dare Quit", subtitle: 'Read this carefully.' },
  'emergency-rolled': { title: 'You Got This', subtitle: 'Every tap is tuition.' },
  'emergency-dropped': { title: "I've Got You", subtitle: "You don't have to be okay right now." },
};

interface Props {
  category: CategoryKey;
  onBack: () => void;
  onHome: () => void;
}

export default function ContentPage({ category, onBack, onHome }: Props) {
  const [entryIndex, setEntryIndex] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      const idx = getNextEntry(category);
      setEntryIndex(idx);
      setTimeout(() => setVisible(true), 80);
    }
  }, [category]);

  const handleAnother = () => {
    setRefreshing(true);
    setVisible(false);
    setImageLoaded(false);
    setTimeout(() => {
      const idx = getNextEntry(category);
      setEntryIndex(idx);
      setRefreshing(false);
      setTimeout(() => setVisible(true), 60);
    }, 350);
  };

  const isEmergency = category.startsWith('emergency-');
  const label = CATEGORY_LABELS[category];
  const entry = entryIndex !== null ? CONTENT[category][entryIndex] : null;
  const total = CONTENT[category].length;

  return (
    <div
      className="min-h-screen flex flex-col px-6 py-16"
      style={{
        background: isEmergency
          ? 'linear-gradient(160deg, #1A0E0C 0%, #18120E 60%, #12100E 100%)'
          : 'linear-gradient(160deg, #1E140D 0%, #18120E 50%, #12100E 100%)',
      }}
    >
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: isEmergency
            ? 'radial-gradient(circle at 50% 20%, rgba(180,60,50,0.07) 0%, transparent 60%)'
            : 'radial-gradient(circle at 25% 20%, rgba(200,132,90,0.06) 0%, transparent 55%)',
        }}
      />

      <div className="relative w-full max-w-md mx-auto flex flex-col flex-1">
        {/* Nav */}
        <div className="flex items-center justify-between mb-12">
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

          <button
            onClick={onHome}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#A89880',
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontSize: '0.8125rem',
              padding: 0,
              opacity: 0.5,
              transition: 'opacity 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.5')}
          >
            Home
          </button>
        </div>

        {/* Label */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.5s ease, transform 0.5s ease',
          }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div
              style={{
                width: 20,
                height: 1,
                background: isEmergency ? 'rgba(180,60,50,0.5)' : 'rgba(200,132,90,0.4)',
              }}
            />
            <span
              style={{
                fontFamily: "'DM Sans', system-ui, sans-serif",
                fontSize: '0.75rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: isEmergency ? 'rgba(210,100,85,0.7)' : 'rgba(200,132,90,0.6)',
                fontWeight: 500,
              }}
            >
              {label.title}
            </span>
          </div>
        </div>

        {/* Content card */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            opacity: visible && !refreshing ? 1 : 0,
            transform: visible && !refreshing ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 0.45s ease 0.08s, transform 0.45s ease 0.08s',
          }}
        >
          {entry?.type === 'image' ? (
            <div className="flex flex-col gap-5">
              <div
                style={{
                  borderRadius: '4px',
                  overflow: 'hidden',
                  background: '#241B14',
                  border: '1px solid rgba(200,132,90,0.14)',
                  position: 'relative',
                }}
              >
                <img
                  src={entry.content}
                  alt={entry.caption || 'A memory'}
                  onLoad={() => setImageLoaded(true)}
                  style={{
                    width: '100%',
                    height: '280px',
                    objectFit: 'cover',
                    display: 'block',
                    opacity: imageLoaded ? 1 : 0,
                    transition: 'opacity 0.4s ease',
                  }}
                />
                {!imageLoaded && (
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: '#241B14',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <div
                      style={{
                        width: 20,
                        height: 20,
                        border: '2px solid rgba(200,132,90,0.3)',
                        borderTopColor: '#C8845A',
                        borderRadius: '50%',
                        animation: 'spin 0.8s linear infinite',
                      }}
                    />
                    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
                  </div>
                )}
              </div>

              {entry.caption && (
                <p
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontStyle: 'italic',
                    fontSize: '1.0625rem',
                    color: '#EDE8E0',
                    lineHeight: 1.65,
                    letterSpacing: '0.005em',
                  }}
                >
                  {entry.caption}
                </p>
              )}
            </div>
          ) : (
            <div
              style={{
                padding: '28px 28px',
                background: 'rgba(36,27,20,0.55)',
                border: `1px solid ${isEmergency ? 'rgba(180,60,50,0.2)' : 'rgba(200,132,90,0.14)'}`,
                borderRadius: '4px',
                flex: 1,
              }}
            >
              {entry?.content.split('\n\n').map((para, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily:
                      isEmergency || category === 'encouragement'
                        ? "'DM Sans', system-ui, sans-serif"
                        : "'Playfair Display', Georgia, serif",
                    fontStyle:
                      !isEmergency && category !== 'encouragement' && category !== 'jokes'
                        ? 'italic'
                        : 'normal',
                    fontSize:
                      isEmergency
                        ? '1rem'
                        : category === 'encouragement'
                        ? '1.0625rem'
                        : '1.125rem',
                    color: '#EDE8E0',
                    lineHeight: isEmergency ? 1.8 : 1.75,
                    letterSpacing: '0.008em',
                    marginBottom: i < entry.content.split('\n\n').length - 1 ? '1.2em' : 0,
                    fontWeight: category === 'encouragement' ? 300 : 400,
                  }}
                >
                  {para}
                </p>
              ))}
            </div>
          )}
        </div>

        {/* Bottom actions */}
        <div
          style={{
            marginTop: 32,
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.5s ease 0.3s',
          }}
        >
          {total > 1 && (
            <button
              onClick={handleAnother}
              style={{
                width: '100%',
                padding: '13px 20px',
                background: 'transparent',
                border: `1px solid ${isEmergency ? 'rgba(180,60,50,0.3)' : 'rgba(200,132,90,0.25)'}`,
                borderRadius: '4px',
                color: isEmergency ? 'rgba(200,100,85,0.8)' : '#C8845A',
                fontFamily: "'DM Sans', system-ui, sans-serif",
                fontSize: '0.875rem',
                fontWeight: 400,
                letterSpacing: '0.04em',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                marginBottom: 12,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = isEmergency
                  ? 'rgba(180,60,50,0.1)'
                  : 'rgba(200,132,90,0.08)';
                e.currentTarget.style.borderColor = isEmergency
                  ? 'rgba(180,60,50,0.5)'
                  : 'rgba(200,132,90,0.42)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = isEmergency
                  ? 'rgba(180,60,50,0.3)'
                  : 'rgba(200,132,90,0.25)';
              }}
            >
              Show me another
            </button>
          )}

          <p
            className="text-center"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontStyle: 'italic',
              fontSize: '0.75rem',
              color: 'rgba(168,152,128,0.35)',
              marginTop: 6,
            }}
          >
            {label.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
