

import chroma from 'chroma-js';
const levels = [
     0,
     1,
     2,
     3,
     4,
     5,
     6,
     7,
     8,
     9
];

function generatePalette(starterPalette){
     let newPalette = {
          paletteName: starterPalette.paletteName,
          id: starterPalette.id,
          creater: starterPalette.creater,
          emoji: starterPalette.emoji,
          colors: {

          }
     }
     for(let level of levels){ //creates 10 empty arrays in colors object of newPalette
          newPalette.colors[level] = [];
     }

     for(let color of starterPalette.colors){
          //scale in getRange is from dark to light,which is called in 
          // getScale, so we are reversing it to get scale from light to dark colors.
          let scale = getScale(color.color, 10).reverse();
          for(let i in scale){
               newPalette.colors[levels[i]].push({
                    name: `${color.name} ${i}`,
                    id: color.name.toLowerCase().replace(/ /g, "-"),
                    hex: scale[i], //gives hex value
                    rgb: chroma(scale[i]).css(), //gives rgb value.
                    rgba: chroma(scale[i]) // gives rgba value.
                    .css()
                    .replace("rgb", "rgba")
                    .replace(")", ", 1.0)"),
                    hsl: chroma(scale[i]).css('hsl')
               })
          }
     }
     return newPalette;
}

function getRange(hexColor){
     //default chroma color scale goes like [ white-color-black ].
     // i am generating color scale as [ darkColor-color-white ].
     const endColor = "#ffffff";
     return [
          chroma(hexColor).darken(1.3).hex(),
          hexColor,
          endColor
     ]
}

function getScale(hexColor, noOfColors){
     
     return chroma.scale(getRange(hexColor)).mode("lab").colors(noOfColors)
}

export { generatePalette };