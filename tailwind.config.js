module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,html}', // Include other file extensions if necessary
    './public/**/*.html',              // Adjust paths to include all necessary files
  ],
  theme: {
    extend: {
      
    },
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1780px',
      '4xl': '2160px', // only need to control product grid mode in ultra 4k device
    },
  },
  plugins: [],
};
