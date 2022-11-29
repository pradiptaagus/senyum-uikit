import { StyleSheet } from 'react-native';
import { Spacing } from '../../base/Spacing';
import { Color } from '../../base/Color';
import { FontSize } from '../../base/Font';

export const defaultLargeStyles = StyleSheet.create({
  containerStyle: {
    marginBottom: Spacing[24],
  },
  messageStyle: {
    marginTop: Spacing[12],
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainerStyle: {
    height: Spacing[64],
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Color.grey[6],
    paddingHorizontal: Spacing[16],
    paddingVertical: Spacing[8],
    flexDirection: 'row',
  },
  disabledInputContainerStyle: {
    backgroundColor: Color.light[7],
  },
  focusedInputContainerStyle: {
    borderColor: Color.primary[3],
    paddingVertical: Spacing[8],
  },
  filledInputContainerStyle: {
    paddingVertical: Spacing[8],
  },
  successInputContainerStyle: {
    borderColor: Color.green[1],
  },
  innerContainerStyle: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  innerContainerStyleWithoutLabel: {
    justifyContent: 'center',
  },
  warningInputContainerStyle: {
    borderColor: Color.yellow[1],
  },
  errorInputContainerStyle: {
    borderColor: Color.red[1],
  },
  inputStyle: {
    fontSize: FontSize[16],
    color: Color.grey[1],
    padding: 0,
  },
  disabledInputStyle: {
    color: Color.grey[4],
  },
  labelStyle: {
    fontSize: FontSize[12],
    color: Color.grey[5],
    marginBottom: Spacing[6],
    alignSelf: 'flex-start',
  },
  zoomedLabelStyle: {
    fontSize: FontSize[16],
    color: Color.grey[5],
    alignSelf: 'flex-start',
  },
  animatingLabelContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'center',
  },
  placeholderStyle: {
    fontSize: FontSize[16],
    color: Color.grey[6],
  },
});

export const defaultSmallStyles = StyleSheet.create({
  containerStyle: {
    marginBottom: Spacing[24],
  },
  messageStyle: {
    marginTop: Spacing[12],
    flexDirection: 'row',
    alignItems: 'center',
  },
  messageTextStyle: {
    fontSize: FontSize[12],
    marginLeft: Spacing[10],
  },
  successMessageTextStyle: {
    color: Color.green[1],
  },
  warningMessageTextStyle: {
    color: Color.yellow[1],
  },
  errorMessageTextStyle: {
    color: Color.red[1],
  },
  inputContainerStyle: {
    height: Spacing[38],
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Color.grey[6],
    paddingHorizontal: Spacing[16],
    paddingVertical: Spacing[8],
    flexDirection: 'row',
  },
  disabledInputContainerStyle: {
    backgroundColor: Color.light[7],
  },
  focusedInputContainerStyle: {
    borderColor: Color.primary[3],
  },
  successInputContainerStyle: {
    borderColor: Color.green[1],
  },
  innerContainerStyle: {
    flex: 1,
    justifyContent: 'center',
  },
  warningInputContainerStyle: {
    borderColor: Color.yellow[1],
  },
  errorInputContainerStyle: {
    borderColor: Color.red[1],
  },
  inputStyle: {
    fontSize: FontSize[14],
    color: Color.grey[1],
    padding: 0,
  },
  disabledInputStyle: {
    color: Color.grey[4],
  },
  placeholderStyle: {
    fontSize: FontSize[16],
    color: Color.grey[6],
  },
});

export const textInputIconStyles = StyleSheet.create({
  icon: { alignSelf: 'center' },
});
