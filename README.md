This is the clone of the flatui-colors which is used to design your own favourite color tempelates with varing intensites to copy color codes into any of your personal project.This project is the part of The Modern React Bootcamp by Colt Steele on Udemy. 
## The specifications of this clone is :
* To display the list of color palletes made by individuals.
* Each palette shows the preview in palette list page.
* Slider to increase or decrease the intensity of colors.
* color codes format dropdown to choose from (HEX, RGB and RGBA only).
* Editor to design your own Palette.
* Uses React Color package for displaying Chrome Color Picker.
* Drag and Drop feature to arrange pallette colors.
* Form Validation for Palette name and coloors name.
* Emoji Picker 
* Switches text color [ white to black and vice versa ] in the color box to differentiate text color from box color.
* Deleting functionality of the palettes

## MoreOver, The modifications integrated by Aqib is as follow's:
* Added Author name in the palette.
* Added Responsive footer in the Project.
* Editor shows text whenever your editor got out of colors.
* Implemented my own function of coping the color code instead of using copy-to-clipboard npm dependency.
* Form Validator for Author name.
* Integrate my own slider for changing intensity with the help rc-slider npm package.
* Restrict user from deleting all the Palettes due to which PaletteList becomes empty.
  * First hides the delete button inorder to save the primary palettes from deleting. But this is not the secure feature. As it could be enabled using the chrome dev tools.
  * Secondly restrict deleting function from performing the filter operation on the primary palettes.
* Solved a bug belonging to showing different color shades then what user clicks for. It happens for only single color box. which were right in the center of the screen.

