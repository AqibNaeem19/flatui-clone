import React, { PureComponent } from "react";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";
import seedColors from "./seedColors";
import { generatePalette } from "./ColorHelpers";
import { Route, Switch } from "react-router-dom";

class App extends PureComponent {
  constructor(props) {
    super(props);
    // checks for colors in localStorage,
    // if not then extract from seedColors
    const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
    this.state = { palettes: savedPalettes || seedColors };
    this.savePalette = this.savePalette.bind(this);
    this.findPalette = this.findPalette.bind(this);
    this.deletePalette = this.deletePalette.bind(this);
  }

  //Find Palette Id given from MiniPaletteList Component
  findPalette(id) {
    //return palette back to function
    return this.state.palettes.find(function (palette) {
      return palette.id === id; //return palette id
    });
  }

  //Function passed as prop to NewPaletteForm->PaletteFormNav->PaletteMetaForm
  savePalette(newPalette) {
    this.setState(
      {
        palettes: [...this.state.palettes, newPalette],
      },
      this.syncLocalStorage
    );
  }

  //Pass id from MiniPalette to PaletteList, then calls this function
  deletePalette(id) {
    if( ["material-ui-colors" , "flat-ui-colors-v1" , "flat-ui-colors-dutch" , "flat-ui-colors-american" , "flat-ui-colors-aussie" , "flat-ui-colors-british" ,"flat-ui-colors-spanish" , "flat-ui-colors-indian" , "flat-ui-colors-french" ].includes(id)){
      return 0;
    } else {
      this.setState(
        (st) => ({
          palettes: st.palettes.filter((palette) => palette.id !== id),
        }),
        this.syncLocalStorage
      );
    }
    
  }

  //Stores palettes in localStorage
  syncLocalStorage() {
    window.localStorage.setItem(
      "palettes",
      JSON.stringify(this.state.palettes)
    );
  }

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/palette/new"
          render={(routeProps) => (
            <NewPaletteForm
              savePalette={this.savePalette}
              palettes={this.state.palettes}
              {...routeProps}
            />
          )}
        />

        <Route
          exact
          path="/"
          render={(routeProps) => (
            <PaletteList
              palettes={this.state.palettes}
              deletePalette={this.deletePalette}
              {...routeProps}
            />
          )}
        />

        <Route
          exact
          path="/palette/:id"
          render={(routeProps) => (
            <Palette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />

        <Route
          exact
          path="/palette/:paletteId/:colorId"
          render={(routeProps) => (
            <SingleColorPalette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.paletteId)
              )}
              colorId={routeProps.match.params.colorId}
            />
          )}
        />

        {/* Default Route */}
        <Route
          render={(routeProps) => (
            <PaletteList
              palettes={this.state.palettes}
              deletePalette={this.deletePalette}
              {...routeProps}
            />
          )}
        />
      </Switch>
    );
  }
}

export default App;
