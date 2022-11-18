import { StyleSheet } from 'react-native';
import { Color } from '../../base/Color';
import { Spacing } from '../../base/Spacing';
import { FontSize } from '../../base/Font';

const styles = StyleSheet.create({
  modal: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2E3031bb',
    flex: 1,
  },
  container: {
    backgroundColor: Color.light[1],
    elevation: 10,
  },
  header: {
    paddingVertical: Spacing[16],
    alignItems: 'center',
    backgroundColor: Color.blue[1],
  },
  headerTextContainer: {
    flexDirection: 'row',
  },
  headerText: {
    fontSize: Spacing[56],
    color: Color.light[7],
    marginHorizontal: Spacing[4],
  },
  headerTextActive: {
    color: Color.light[1],
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacing[38],
  },
  clock: {
    width: 240,
    height: 240,
    borderRadius: 120,
    backgroundColor: Color.light[3],
  },
  outerHoursContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerHoursContainer: {
    position: 'absolute',
    top: 28,
    right: 28,
    bottom: 28,
    left: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hour: {
    position: 'absolute',
    top: 5,
    bottom: 21,
  },
  hourTextContainer: {
    height: 26,
    width: 26,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedHourTextContainer: {
    backgroundColor: Color.blue[1],
  },
  clockWise: {
    position: 'absolute',
    top: 5,
    bottom: 5,
    justifyContent: 'flex-start',
  },
  clockWiseInner: {
    height: '50%',
  },
  clockWiseRule: {
    flex: 1,
    width: 1,
    backgroundColor: Color.blue[1],
    alignSelf: 'center',
  },
  clockWiseDot: {
    backgroundColor: Color.blue[1],
    width: 2,
    height: 2,
    borderRadius: 1,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
  },
  clockWiseHeadDot: {
    backgroundColor: Color.blue[1],
    width: 26,
    height: 26,
    borderRadius: 13,
    alignSelf: 'center',
    position: 'absolute',
    top: 0,
  },
  hourText: {
    color: 'black',
    fontSize: FontSize[16],
  },
  selectedHourText: {
    color: Color.light[1],
  },
  pmHourText: {
    color: Color.grey[6],
    fontSize: FontSize[12],
  },
});

export default styles;
