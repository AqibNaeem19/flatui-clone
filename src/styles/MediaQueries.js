


export default {
     up(){

     },
     down(size){
          const sizes = {
               xs: "575.98px",
               sm: "767.98px",
               md: "991.98px",
               lg: "1198.98px"
          }
          return `@media screen and (max-width: ${sizes[size]})`;
     }
     
}