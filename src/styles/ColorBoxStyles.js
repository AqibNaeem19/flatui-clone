import chroma from 'chroma-js';
import mediaQueries from './MediaQueries';

let styles = {
     colorBox: {
          width: "20%",
          height: props =>
              (props.showLink ? "25%" : "50%"),
          display: "inline-block",
          margin: "0 auto",
          position: "relative",
          marginBottom: "-4px",
          "&:hover button": {
              opacity: 1,
              transition: "all 0.6s",
          },
          [mediaQueries.down('lg')]: {
            width: "25%",
            height: props => (props.showLink ? "20%" : "34%"),
          },
          [mediaQueries.down('md')]: {
            width: "50%",
            height: props => (props.showLink ? "10%" : "20%"),
          },
          [mediaQueries.down('xs')]: {
            width: "100%",
            height: props => (props.showLink ? "7%" : "15%"),
          }
      },
      copyText: {
          color: props => 
              chroma(props.background).luminance() >= 0.25 ? "black" : "white",
      },
      colorName: {
          color: props =>
              chroma(props.background).luminance() <= 0.25 ? "white" : "black",     
      },
      moreShades: {
          color: props => 
              chroma(props.background).luminance() >= 0.25 ? "black" : "white",
          width: "50px",
          height: "19px",
          textAlign: "center",
          position: "absolute",
          bottom: "0",
          right: "0",
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          padding: "5px",
          fontSize: "1rem",
      },
      copyButton: {
          color: props =>
              chroma(props.background).luminance() >= 0.25 ? "black" : "white",
          outline: "none",
          border: "none",
          textAlign: "center",
          width: "70px",
          height: "25px",
          display: "inline-block",
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          fontSize: ".8rem",
          textTransform: "uppercase",
          position: "absolute",
          top: "50%",
          left: "50%",
          marginLeft: "-35px",
          marginTop: "-11px",
          cursor: "pointer" ,
          opacity: 0,
      },
      copyHeading: {
          color: props =>
              chroma(props.background).luminance() >= 0.25 ? "black" : "white",
          width: "100%",
          fontWeight: "400",
          background: "rgba(255, 255, 255, 0.2)",
          textAlign: "center",
          fontSize: "3rem",
          padding: "20px",
          textShadow: "1px 2px black",
          textTransform: "uppercase"
      },
      boxContent: {
          position: "absolute",
          boxSizing: "border-box",
          width: "100%",
          left: "0px",
          bottom: "0px",
          padding: "5px",
          color: "black",
          letterSpacing: "1px",
          textTransform: "uppercase",
          fontSize: ".8rem"
        },
        copyOverlay: {
          opacity: "0",
          zIndex: "0",
          width: "100%",
          height: "100%",
          transition: "transform 0.6s ease-in-out",
          transform: "scale(0.1)"
        },
        showOverlay: {
          opacity: "1",
          transform: "scale(50)",
          zIndex: "5",
          position: "absolute",
        },
        copyMessage: {
          position: "fixed",
          left: "0",
          right: "0",
          top: "0",
          bottom: "0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          fontSize: "4rem",
          transform: "scale(0)",
          opacity: "0",
          color: "white",
          "& h1": {
            fontWeight: "400",
            textShadow: "1px 2px black",
            background: "rgba(255, 255, 255, 0.2)",
            width: "100%",
            textAlign: "center",
            marginBottom: "0",
            padding: "1rem",
            textTransform: "uppercase"
          },
          "& p": {
            fontSize: "2rem",
            fontWeight: "100"
          }
        },
        showMessage: {
          opacity: "1",
          transform: "scale(1)",
          zIndex: "25",
          transition: "all 0.3s ease-in-out",
          transitionDelay: "0.1s"
        }
}

export default styles;