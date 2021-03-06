import {StyleSheet} from 'react-native';
import {UNIT, COLOR_PINK, COLOR_FONT_GRAY, COLOR_FONT} from '../../components/variables/variables';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  markdownScroll: {
    paddingTop: 0,
    padding: UNIT * 2
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    padding: UNIT * 2,
    alignItems: 'center'
  },
  buttonText: {
    color: COLOR_PINK
  },
  buttonTextDisabled: {
    color: COLOR_FONT_GRAY
  }
});


export const markdownStyles = {
  heading: {
    color: COLOR_FONT
  },
  paragraph: {
    color: COLOR_FONT
  }
};
