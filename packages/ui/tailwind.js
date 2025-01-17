const defaultTheme = require('tailwindcss/defaultTheme')

// @ts-check
/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio'), require('@tailwindcss/typography')],
  theme: {
    screens: {
      ...defaultTheme.screens,
    },
    extend: {
      backgroundImage: () => ({
        'gradient-radial': 'radial-gradient(#13213E, #111829)',
        'shimmer-gradient':
          'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.03) 30%, rgba(255, 255, 255, 0.06) 50%, rgba(255, 255, 255, 0.03) 70%, rgba(255, 255, 255, 0) 100%)',
        'shimmer-gradient-dark':
          'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.03) 30%, rgba(0, 0, 0, 0.06) 50%, rgba(0, 0, 0, 0.03) 70%, rgba(0, 0, 0, 0) 100%)',
      }),
      boxShadow: {
        md: 'rgba(0, 0, 0, 0.09) 0px 3px 12px',
        lg: 'rgba(0, 0, 0, 0.16) 2px 6px 24px',
        xl: 'rgba(0, 0, 0, 0.24) 2px 6px 24px',
        'depth-1': '0px 3px 6px rgba(15, 15, 15, 0.5)',
        'hover-card': 'rgb(101 119 134 / 20%) 0px 0px 15px, rgb(101 119 134 / 15%) 0px 0px 3px 1px',
      },
      colors: {
        blue: {
          DEFAULT: '#3b82f6',
        },
        pink: {
          DEFAULT: '#ec4899',
        },
        green: {
          DEFAULT: '#22c55e',
        },
        red: {
          DEFAULT: '#ef4444',
        },
        yellow: {
          DEFAULT: '#eab308',
        },
      },
      animation: {
        ellipsis: 'ellipsis 1.25s infinite',
        'spin-slow': 'spin 2s linear infinite',
        heartbeat: 'heartbeat 1s ease 0.2s infinite normal forwards',
        rotate: 'rotate360 1s cubic-bezier(0.83, 0, 0.17, 1) infinite',
        dash: 'dash 1.5s 2s ease-out infinite',
        'dash-check': 'dash-check 1.5s 2s ease-out infinite',
      },
      keyframes: {
        ellipsis: {
          '0%': { content: '"."' },
          '33%': { content: '".."' },
          '66%': { content: '"..."' },
        },
        heartbeat: {
          '0%': {
            transform: 'scale(1)',
            transformOrigin: 'center center',
            animationTimingFunction: 'ease-out',
          },
          '10%': {
            animationTimingFunction: 'ease-out',
            transform: 'scale(0.91)',
          },
          '17%': {
            animationTimingFunction: 'ease-out',
            transform: 'scale(0.98)',
          },
          '33%': {
            animationTimingFunction: 'ease-out',
            transform: 'scale(0.87)',
          },
          '45%': { animationTimingFunction: 'ease-out', transform: 'scale(1)' },
        },
        rotate360: {
          from: {
            transform: 'rotate(0deg)',
          },
          to: {
            transform: 'rotate(360deg)',
          },
        },
        dash: {
          '0%': {
            strokeDashoffset: 1000,
          },
          '100%': {
            strokeDashoffset: 0,
          },
        },
        'dash-check': {
          '0%': {
            strokeDashoffset: -100,
          },
          '100%': {
            strokeDashoffset: 900,
          },
        },
      },
    },
    fontFamily: {
      sans: ['Inter Variable', ...defaultTheme.fontFamily.sans],
    },
  },
}
