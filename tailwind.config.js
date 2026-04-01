/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}", // Add this if you aren't using a s
  ],
  theme: {
    extend: {
      colors: {
        silver: {
          50: '#F8F9FB',
          100: '#F0F2F6',
          200: '#E1E5ED',
          300: '#C0C8D8',
          400: '#9BA5B8',
          500: '#7A8598',
          600: '#5E6778',
          700: '#464D5C',
          800: '#2F3440',
          900: '#1A1D24',
          950: '#0F1117',
        },
        royal: {
          50: '#F0F5FA',
          100: '#D9E8F3',
          200: '#B3D1E8',
          300: '#8DBAD8',
          400: '#6AA5C9',
          500: '#4A90C4',
          600: '#3A78A8',
          700: '#2D6189',
          800: '#214A6A',
          900: '#16334B',
        },
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        accent: ['var(--font-cinzel)', 'Georgia', 'serif'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(74, 144, 196, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(74, 144, 196, 0.6)' },
        },
      },
      backgroundImage: {
        'gradient-premium': 'linear-gradient(135deg, #0F1117 0%, #1A1D24 40%, #0F1117 100%)',
        'shimmer-gradient': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)',
      },
    },
  },
  plugins: [],
};