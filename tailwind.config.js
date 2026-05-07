/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.25rem',
          lg: '2rem',
        },
      },
      colors: {
        background: 'hsl(var(--bg))',
        foreground: 'hsl(var(--fg))',
        card: 'hsl(var(--card))',
        border: 'hsl(var(--border))',
        muted: 'hsl(var(--muted))',
        primary: 'hsl(var(--primary))',
        gold: 'hsl(var(--gold))',
        cyan: 'hsl(var(--cyan))',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.08), 0 20px 80px -40px rgba(0,0,0,0.85)',
        cyan: '0 18px 44px -16px rgba(56,189,248,0.75)',
        gold: '0 18px 44px -16px rgba(245,158,11,0.75)',
      },
      backgroundImage: {
        'hero-radial':
          'radial-gradient(900px circle at 20% 10%, rgba(56,189,248,0.22), transparent 55%), radial-gradient(800px circle at 80% 20%, rgba(99,102,241,0.20), transparent 60%), radial-gradient(700px circle at 60% 85%, rgba(245,158,11,0.12), transparent 55%)',
        'grid-fade':
          'linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to left, rgba(255,255,255,0.06) 1px, transparent 1px)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'Segoe UI', 'Tahoma', 'Arial'],
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        shimmer: 'shimmer 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

