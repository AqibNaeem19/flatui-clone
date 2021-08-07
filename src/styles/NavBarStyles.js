import mediaQueries from './MediaQueries';

const styles = {
     NavBar: {
          display: "flex",
          alignItems: "center",
          flexDirection: "start",
     },
     Logo: {
          marginRight: "10px",
          paddingLeft: "20px",
          paddingRight: "10px",
          cursor: "pointer",
          fontSize: "0.9rem",
          backgroundColor: "#ced0d1",
          "& a": {
               textDecoration: "none",
               color: "black",
          },
          [mediaQueries.down('xs')]:{
               marginRight: "2px",
               paddingRight: "2px",
               paddingLeft: "2px",
               fontSize: "0.9rem",
          }
     },
     SliderContainer: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          // "& .slider-level": {
          //      marginLeft: "5px",
          //      fontSize: "1.2rem",
          //      fontWeight: "500",
          //      letterSpacing: "2px",
          // }
     },
     SliderLevel: {
          marginLeft: "5px",
          fontSize: "1.2rem",
          fontWeight: "500",
          letterSpacing: "2px",
     },
     Slider: {
          width: "350px",
          margin: "0px 20px",
          display: "inline-block",
          "& .rc-slider-rail": {
               geight: "3px",
          },
          "& .rc-slider-track": {
               backgroundColor: "grey",
               height: "3px",
          },
          "& .rc-slider-dot": {
               height: "7px",
               width: "7px",
               bottom: "-1px",
               border: "1px solid black",
          },
          "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:hover, .rc-slider-handle:focus": {
               backgroundColor: "white",
               border: "2px solid rgb(26, 26, 230)",
               outline: "none",
               boxshadow: "none",
          },
          [mediaQueries.down('md')]: {
               width: "300px"
          },
          [mediaQueries.down('sm')]: {
               width: "250px",
          },
          [mediaQueries.down('xs')]: {
               width: "150px",
          }
     },
     FormatSelector: {
          marginLeft: "auto",
          marginRight: "1rem",
     },
     NewPalette: {
          
          width: "90%",
          textAlign: "center",
          // marginLeft: "auto",
          // marginRight: "2rem",
          "& a": {
               textDecoration: "none",
               color: "black"
          }
     }
    
}

export default styles;