import { StyleSheet } from 'react-native';
import { Color } from '../../base/Color';
import { Spacing } from '../../base/Spacing';

const styles = StyleSheet.create({
  containerStyle: {
    marginBottom: Spacing[28],
  },
  innerContainerStyle: {
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  hiddenStyle: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: -1,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: Spacing[24],
    lineHeight: Spacing[40],
    color: Color.blue[1],
  },
  errorTextStyle: {
    color: Color.red[1],
  },
  disabledTextStyle: {
    color: Color.grey[5],
  },
  dotStyle: {
    backgroundColor: Color.blue[1],
    width: Spacing[12],
    height: Spacing[12],
    borderRadius: Spacing[6],
  },
  disabledDotStyle: {
    backgroundColor: Color.grey[5],
  },
  mediumInputContainerStyle: {
    width: Spacing[60],
    height: Spacing[56],
  },
  largeInputContainerStyle: {
    width: Spacing[76],
    height: Spacing[72],
  },
  focusedInputContainerStyle: {
    borderColor: Color.blue[1],
  },
  disabledFilledInputContainerStyle: {
    borderColor: Color.grey[5],
  },
  errorInputContainerStyle: {
    borderColor: Color.red[1],
  },
  errorMessageTextStyle: {
    marginTop: Spacing[8],
    fontSize: Spacing[14],
    lineHeight: Spacing[20],
    textAlign: 'center',
    color: Color.red[1],
  },
});

export default styles;

export const outlinedStyles = StyleSheet.create({
  inputContainerStyle: {
    width: Spacing[48],
    height: Spacing[56],
    borderWidth: 1,
    borderRadius: Spacing[10],
    borderColor: Color.grey[6],
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing[8],
    marginTop: Spacing[8],
  },
  disabledInputContainerStyle: {
    backgroundColor: Color.light[5],
  },
});

export const underlinedStyles = StyleSheet.create({
  inputContainerStyle: {
    width: Spacing[48],
    height: Spacing[56],
    borderBottomWidth: 1,
    borderColor: Color.grey[6],
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing[8],
    marginTop: Spacing[8],
  },
  disabledInputContainerStyle: {},
});
