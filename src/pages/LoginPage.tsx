import { useState, useRef, useEffect } from 'react';

interface Props {
  onSuccess: () => void;
}

export default function LoginPage({ onSuccess }: Props) {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);
  const [visible, setVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value === 'ritaiscute') {
      setError(false);
      onSuccess();
    } else {
      setError(true);
      setShake(true);
      setValue('');
      setTimeout(() => setShake(false), 600);
      inputRef.current?.focus();
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6"
      style={{ background: 'linear-gradient(160deg, #1E140D 0%, #18120E 50%, #12100E 100%)' }}
    >
      {/* Subtle texture overlay */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 30% 20%, rgba(200,132,90,0.06) 0%, transparent 60%), radial-gradient(circle at 70% 80%, rgba(200,132,90,0.04) 0%, transparent 50%)',
        }}
      />

      <div
        className="relative w-full max-w-sm text-center"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(16px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}
      >
        {/* Ornament */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <div style={{ width: 32, height: 1, background: 'rgba(200,132,90,0.4)' }} />
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="2.5" fill="#C8845A" opacity="0.7" />
            <circle cx="8" cy="8" r="5.5" stroke="#C8845A" strokeWidth="0.75" opacity="0.3" />
          </svg>
          <div style={{ width: 32, height: 1, background: 'rgba(200,132,90,0.4)' }} />
        </div>

        <h1
          className="font-display mb-3"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(2rem, 6vw, 2.75rem)',
            fontWeight: 500,
            color: '#EDE8E0',
            letterSpacing: '-0.01em',
            lineHeight: 1.2,
          }}
        >
          This one's for you Kiwi.
        </h1>

        <p
          className="mb-12"
          style={{
            fontFamily: "'DM Sans', system-ui, sans-serif",
            fontSize: '0.9375rem',
            color: '#A89880',
            fontWeight: 300,
            letterSpacing: '0.01em',
          }}
        >
          Enter your password to continue
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div
            style={{
              animation: shake ? 'shake 0.5s cubic-bezier(.36,.07,.19,.97)' : 'none',
            }}
          >
            <style>{`
              @keyframes shake {
                10%, 90% { transform: translateX(-2px); }
                20%, 80% { transform: translateX(3px); }
                30%, 50%, 70% { transform: translateX(-4px); }
                40%, 60% { transform: translateX(4px); }
              }
            `}</style>
            <input
              ref={inputRef}
              type="password"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                if (error) setError(false);
              }}
              placeholder="password"
              autoFocus
              style={{
                width: '100%',
                padding: '14px 20px',
                background: 'rgba(36, 27, 20, 0.9)',
                border: `1px solid ${error ? 'rgba(200,80,60,0.5)' : 'rgba(200,132,90,0.22)'}`,
                borderRadius: '4px',
                color: '#EDE8E0',
                fontFamily: "'DM Sans', system-ui, sans-serif",
                fontSize: '1rem',
                letterSpacing: '0.15em',
                outline: 'none',
                transition: 'border-color 0.2s ease',
                textAlign: 'center',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = error
                  ? 'rgba(200,80,60,0.7)'
                  : 'rgba(200,132,90,0.55)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = error
                  ? 'rgba(200,80,60,0.5)'
                  : 'rgba(200,132,90,0.22)';
              }}
            />
          </div>

          {error && (
            <p
              style={{
                fontFamily: "'DM Sans', system-ui, sans-serif",
                fontSize: '0.8125rem',
                color: 'rgba(220,100,80,0.9)',
                marginTop: '-4px',
              }}
            >
              That's not quite right. Try again.
            </p>
          )}

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '14px 20px',
              background: 'linear-gradient(135deg, #C8845A 0%, #B87040 100%)',
              border: 'none',
              borderRadius: '4px',
              color: '#18120E',
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontSize: '0.875rem',
              fontWeight: 500,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'opacity 0.2s ease, transform 0.15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.88';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Enter
          </button>
        </form>

        <p
          className="mt-16"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontStyle: 'italic',
            fontSize: '0.8125rem',
            color: 'rgba(168,152,128,0.5)',
            letterSpacing: '0.02em',
          }}
        >
          Made with love &mdash; just for you.
        </p>
      </div>
    </div>
  );
}
