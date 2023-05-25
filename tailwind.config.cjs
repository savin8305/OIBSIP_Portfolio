module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
        designColor: "#ff014f",
        designColor1:"#a3e635",
        cardColor: "rgba(255, 255, 255, 0.13)",
        textColor1: "rgba(255, 255, 255, 0.4)",
        textColor2: "rgba(255, 255, 255, 0.8)",
        mysecondcolor:"#1f1f1f",
      },
      backgroundImage: {
      
        
        backimg: "url('./assets/backimage.png')",
        site1: "url('./assets/site6.png')",
        services: "url('./assets/services.png')",
      },
    },
  },
  plugins: [],
};
