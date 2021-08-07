import mediaQueries from './MediaQueries';
import chroma from 'chroma-js';
const styles ={
     root: {
          width: "20%",
          height: "25%",
          display: "inline-block",
          margin: "0 auto",
          position: "relative",
          marginBottom: "-6px",
          "&:hover svg": {
               transform: "scale(1.2)",
               color: "red",
          },
          [mediaQueries.down('lg')]: {
               width: "25%",
               height: "30%",
          },
          [mediaQueries.down('md')]: {
               width: "50%",
               height: "20%",
          },
          [mediaQueries.down('sm')]: {
               width: "50%",
               height: "30%",
          },
          [mediaQueries.down('xs')]: {
               width: "100%",
               height: "10%",
          }
     },
     boxContent: {
          position: "absolute",
          boxSizing: "border-box",
          width: "100%",
          left: "0px",
          bottom: "0px",
          padding: "5px",
          color: props => 
              chroma(props.color).luminance() >= 0.25 ? "black" : "white",
          letterSpacing: "1px",
          textTransform: "uppercase",
          fontSize: ".8rem",
          display: "flex",
          justifyContent: "space-between"
     },
     colorName: {
          paddingTop: "10px"
     },
     deleteIcon: {
          color: "white",
          transition: "all 0.3s ease-in-out",
     }
}

export default styles;