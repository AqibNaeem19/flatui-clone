

let styles =  {
     root: {
          backgroundColor: "snow",
          borderRadius: "5px",
          border: "2px solid black",
          position: "relative",
          overflow: "hidden",
          cursor: "pointer",
          "&:hover svg": {
               opacity: "1",
          }

     },
     creater: {
          color: "black",
          margin: "0",
          padding: "3px 0 3px 3px",
     },
     colors:{
          backgroundColor: "grey",
          height: "100px",
          width: "90%",
          margin: "0 auto",
          borderRadius: "5px",
          overflow: "hidden",
     },
     title: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "black",
          paddingTop: "0.5rem",
          fontSize:"0.7rem",
          position: "relative",
          margin: "0 0 0 3px",
     },
     emoji: {
          fontSize: "1.5rem",
     },
     miniColorBox: {
          height: "25%",
          width: "20%",
          display: "inline-block",
          margin: "0 auto",
          position: "relative",
          marginBottom: "-4px",
          "&:hover": {
               filter: "contrast(150%) brightness(120%)",
              
          }
     },
     deleteIcon: {
          color: "white",
          backgroundColor: "red",
          width: "25px",
          height: "25px",
          position: "absolute",
          top: "0",
          right: "0",
          zIndex: "10",
          opacity: "0",
          borderRadius: "0 0 0 5px"
     }
}
 export default styles;