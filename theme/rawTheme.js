const Colors = require('material-ui/lib/styles/colors');
const ColorManipulator = require('material-ui/lib/utils/color-manipulator');
const Spacing = require('material-ui/lib/styles/spacing');

module.exports = {
  spacing: Spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: '#ff9900',
    primary2Color: Colors.cyan700,
    primary3Color: Colors.lightBlack,
    accent1Color: '#9098d3',
    accent2Color: Colors.grey100,
    accent3Color: Colors.grey500,
    textColor: Colors.darkBlack,
    alternateTextColor: Colors.white,
    canvasColor: Colors.white,
    borderColor: Colors.grey300,
    disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.3),
  },
};