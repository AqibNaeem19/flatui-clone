import mediaQueries from './MediaQueries';
import bg1 from './bg1.svg';

const styles = {
     "@global": {
          ".fade-exit": {
               opacity: "1",
          },
          ".fade-exit-active": {
               opacity: "0",
               transition: "all .5s ease-in-out",
          },
     },
     root: {
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage:   `url(${bg1})`,
          /* background by SVGBackgrounds.com */
          overflow: "scroll",
          backgroundSize: "100% auto",
     },
     container: {
          width: "60%",
          display: "flex",
          flexDirection: "column",
          flexwrap: "wrap",
          padding: "3rem",
          [mediaQueries.down('sm')]: {
               width: "50%",
          }
     },
     nav:{
          backgroundcolor: "black",
          
     },
     palettes: {
          boxSizing: "border-box",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(3, 30%)",
          gridGap: "1.5rem",
         
          [mediaQueries.down('md')]: {
               gridTemplateColumns: "repeat(2, 50%)",
          },
          [mediaQueries.down("xs")]: {
               gridTemplateColumns: "repeat(1, 100%)"
          },
     },
}

export default styles;