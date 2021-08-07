import { DRAWER_WIDTH } from '../Constants';
import mediaQueries from './MediaQueries';
const drawerWidth = DRAWER_WIDTH;

const styles = theme => ({
     root: {
          display: "flex",
     },
     hide: {
          display: "none"
        },
     appBar: {
          transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
          }),
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
        },
        appBarShift: {
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: drawerWidth,
          transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
          })
        },
        menuButton: {
          marginLeft: "12",
          marginRight: "20"
        },
        NavBtns: {
               marginRight: "1rem",
               [mediaQueries.down('xs')]: {
                 margin: "0",
               }
        },
        button: {
          margin: "0 1rem",
          "&a": {
               textDecoration: "none"
          },
          [mediaQueries.down('xs')]: {
            margin: "1px",
            fontSize: ".6rem",
            padding: "2px 2px",
          }
          
        },
        link:{

          textDecoration: "none"
        }
});

export default styles;