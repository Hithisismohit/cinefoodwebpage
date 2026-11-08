export default {
  content: ['./index.html','./src/**/*.{js,jsx}'],
  theme: { extend: { colors: { cinema: { dark:'#0B0C10',card:'#14161F',surface:'#1E202B',border:'#2A2D3D',red:'#E50914','red-hover':'#F40612',gold:'#FFB703','gold-light':'#FDCA40',amber:'#FB8500' } }, fontFamily:{sans:['Inter','system-ui','sans-serif']}, boxShadow:{'glow-red':'0 0 25px rgba(229,9,20,.45)','glow-gold':'0 0 25px rgba(255,183,3,.45)','cinema-card':'0 10px 30px -10px rgba(0,0,0,.7)'} } }, plugins:[]
};
