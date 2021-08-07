import mediaQueries from './MediaQueries';

let styles ={
     Palette: {
          height: "100vh",
          overflowX: "hidden",
          display: "flex",
          flexDirection: "column",
     },
     paletteColors: {
          height: "90%",
     },
     goBack: {
          width: "20%",
          height: "50%",
          display: "inline-block",
          margin: "0 auto",
          position: "relative",
          marginBottom: "-4px",
          opacity: "1",
          backgroundColor: "black",
          "& button": {
               color: "snow",
               outline: "none",
               border: "none",
               textAlign: "center",
               width: "70px",
               height: "30px",
               display: "inline-block",
               backgroundColor: "rgba(255, 255, 255, 0.3)",
               fontSize: "1rem",
               textTransform: "uppercase",
               position: "absolute",
               top: "50%",
               left: "50%",
               marginLeft: "-35px",
               marginTop: "-15px",
               cursor: "pointer" ,
               opacity: 1,
          },
          [mediaQueries.down('lg')]: {
               width: "25%",
               height: "34%",
          },
          [mediaQueries.down('md')]: {
               width: "50%",
               height: "20%",
          },
          [mediaQueries.down('xs')]: {
               width: "100%",
               height: "15%",
          }
     }
     
}

export default styles;