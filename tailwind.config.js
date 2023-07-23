const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'yellow': '#F7D22D' ,
        'black': '#0E0C0D' ,
        'c-title': '#797979' ,
        'c-desc': '#686466' ,
        'white': '#FFFFFF' ,
        'gray': '#F3F3F7' ,
        'btn-gray-text': '#696F7A' ,
        'blue': '#E3ECF5'
      }
    },
  },
  plugins: [],
});