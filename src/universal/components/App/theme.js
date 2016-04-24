import {
  deepOrange500,
  deepOrange700,
  lightBlack,
  deepPurple200,
  deepPurple500,
  grey100,
  grey500,
  darkBlack,
  white,
  grey300,
  cyan500
} from 'material-ui/lib/styles/colors';

import ColorManipulator from 'material-ui/lib/utils/color-manipulator';
import Spacing from 'material-ui/lib/styles/spacing';
import zIndex from 'material-ui/lib/styles/zIndex';

export default {
  spacing: Spacing,
  zIndex: zIndex,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: deepOrange500,
    primary2Color: deepOrange700,
    primary3Color: lightBlack,
    accent1Color: deepPurple200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: ColorManipulator.fade(darkBlack, 0.3),
    pickerHeaderColor: cyan500,
  }
};
