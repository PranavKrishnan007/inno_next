
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f97316',
        'hover-primary': '#fb923c',
        secondary: '#3b82f6',
        'secondary-contrast': '#172554',
        background: '#1B3381',
        'field-background': '#9ca3af33'
      }
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ]
}
