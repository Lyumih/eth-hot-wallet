const gTag = `
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-6VZZYG1VFV"></script>
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-6VZZYG1VFV');
</script>
`

export const createGTag = () => {
  console.log("GTAG WORl")
  return ({__html: gTag})
    
}