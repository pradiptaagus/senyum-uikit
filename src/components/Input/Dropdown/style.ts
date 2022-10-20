import { StyleSheet } from 'react-native';
import { Spacing } from '../../../base/Spacing';
import { Color } from '../../../base/Color';
import { FontSize } from '../../../base/Font';

export const defaultStyles = StyleSheet.create({
  containerStyle: {
    marginBottom: Spacing[24],
    overflow: 'hidden',
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
    paddingVertical: Spacing[20],
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
    fontSize: FontSize[16],
    color: Color.grey[5],
    position: 'absolute',
    zIndex: -1,
  },
  focusedLabelStyle: {
    top: 0,
    fontSize: FontSize[12],
  },
  placeholderStyle: {
    fontSize: FontSize[16],
    color: Color.grey[6],
  },
});

export const dropdownIconStyles = StyleSheet.create({
  icon: { alignSelf: 'center' },
});
