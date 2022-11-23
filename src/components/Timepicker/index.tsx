import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  Modal,
  View,
  Text,
  Pressable,
  Animated,
  ViewStyle,
  StyleProp,
} from 'react-native';
import styles from './style';
import { Hour, Minute, TimepickerRef } from './type';
import type {
  HourClockWiseProps,
  MinuteClockWiseProps,
  HourOptionProps,
  TimepickerProps,
  HourSelectionProps,
  MinuteOptionProps,
  MinuteSelectionProps,
} from './type';

const Timepicker = forwardRef<TimepickerRef, TimepickerProps>((props, ref) => {
  const { color, animationType = 'fade', onTimeSet } = props;

  const [selectedHour, setSelectedHour] = useState<keyof typeof Hour>(12);
  const [selectedMinute, setSelectedMinute] = useState<keyof typeof Minute>(0);
  const [selectionMode, setSelectionMode] = useState<'hour' | 'minute'>('hour');
  const [showHourSelection, setShowHourSelection] = useState<boolean>(true);
  const [visible, setVisible] = useState<boolean>(false);

  const selectionModeAnimationValue = useRef(new Animated.Value(0)).current;

  const additionalBackgroundStyle = useMemo(():
    | StyleProp<ViewStyle>
    | undefined => {
    if (color) {
      return { backgroundColor: color };
    }
    return undefined;
  }, [color]);

  const turnToHourSelectionMode = useCallback(() => {
    setSelectionMode('hour');
    setShowHourSelection(true);
    Animated.timing(selectionModeAnimationValue, {
      toValue: 0,
      useNativeDriver: true,
      duration: 200,
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const turnToMinuteSelectionMode = useCallback(() => {
    setSelectionMode('minute');
    Animated.timing(selectionModeAnimationValue, {
      toValue: 1,
      useNativeDriver: true,
      duration: 200,
    }).start(() => setShowHourSelection(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const closeModal = useCallback(() => {
    setVisible(false);
    reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setTimeAndCloseModal = useCallback(() => {
    onTimeSet({ hour: selectedHour, minute: selectedMinute });
    closeModal();
  }, [closeModal, onTimeSet, selectedHour, selectedMinute]);

  const reset = useCallback(() => {
    setSelectedHour(12);
    setSelectedMinute(0);
  }, []);

  useImperativeHandle(ref, () => ({
    show: (active) => {
      setVisible(true);
      if (active) {
        setSelectedHour(active.hour);
        setSelectedMinute(active.minute);
      }
    },
  }));

  return (
    <Modal
      visible={visible}
      transparent
      onRequestClose={closeModal}
      animationType={animationType}
    >
      <View style={styles.modal}>
        <View style={styles.container}>
          <View style={[styles.header, additionalBackgroundStyle]}>
            <View style={styles.headerTextContainer}>
              <Text
                style={[
                  styles.headerText,
                  selectionMode === 'hour' ? styles.headerTextActive : {},
                ]}
                onPress={turnToHourSelectionMode}
              >
                {Hour[selectedHour]}
              </Text>
              <Text style={[styles.headerText, styles.headerTextActive]}>
                :
              </Text>
              <Text
                style={[
                  styles.headerText,
                  selectionMode === 'minute' ? styles.headerTextActive : {},
                ]}
                onPress={turnToMinuteSelectionMode}
              >
                {Minute[selectedMinute]}
              </Text>
            </View>
          </View>
          <View style={styles.body}>
            <Animated.View
              style={{
                transform: [
                  {
                    scale: selectionModeAnimationValue.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0.8, 1],
                    }),
                  },
                ],
              }}
            >
              <MinuteSelection
                color={color}
                selectedMinute={selectedMinute}
                setSelectedMinute={setSelectedMinute}
              />
            </Animated.View>
            {showHourSelection && (
              <Animated.View
                style={[
                  styles.hourSelection,
                  {
                    transform: [
                      {
                        scale: selectionModeAnimationValue.interpolate({
                          inputRange: [0, 1],
                          outputRange: [1, 1.3],
                        }),
                      },
                    ],
                    opacity: selectionModeAnimationValue.interpolate({
                      inputRange: [0, 1],
                      outputRange: [1, 0],
                    }),
                  },
                ]}
              >
                <HourSelection
                  color={color}
                  selectedHour={selectedHour}
                  setSelectedHour={setSelectedHour}
                />
              </Animated.View>
            )}
          </View>
          <View style={styles.buttonsContainer}>
            <Pressable style={styles.button} onPress={closeModal}>
              <Text style={styles.buttonText}>Batal</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={setTimeAndCloseModal}>
              <Text style={styles.buttonText}>Set</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
});

const HourSelection = (props: HourSelectionProps) => {
  const { color, selectedHour, setSelectedHour } = props;
  return (
    <View style={styles.clock}>
      <View style={styles.outerHoursContainer}>
        <HourClockWise color={color} selectedHour={selectedHour} />
        <HourOption
          hour={1}
          selectedHour={selectedHour}
          onPress={setSelectedHour}
        />
        <HourOption
          hour={2}
          selectedHour={selectedHour}
          onPress={setSelectedHour}
        />
        <HourOption
          hour={3}
          selectedHour={selectedHour}
          onPress={setSelectedHour}
        />
        <HourOption
          hour={4}
          selectedHour={selectedHour}
          onPress={setSelectedHour}
        />
        <HourOption
          hour={5}
          selectedHour={selectedHour}
          onPress={setSelectedHour}
        />
        <HourOption
          hour={6}
          selectedHour={selectedHour}
          onPress={setSelectedHour}
        />
        <HourOption
          hour={7}
          selectedHour={selectedHour}
          onPress={setSelectedHour}
        />
        <HourOption
          hour={8}
          selectedHour={selectedHour}
          onPress={setSelectedHour}
        />
        <HourOption
          hour={9}
          selectedHour={selectedHour}
          onPress={setSelectedHour}
        />
        <HourOption
          hour={10}
          selectedHour={selectedHour}
          onPress={setSelectedHour}
        />
        <HourOption
          hour={11}
          selectedHour={selectedHour}
          onPress={setSelectedHour}
        />
        <HourOption
          hour={12}
          selectedHour={selectedHour}
          onPress={setSelectedHour}
        />
      </View>
      <View style={styles.innerHoursContainer}>
        <HourOption
          hour={13}
          selectedHour={selectedHour}
          size="pm"
          onPress={setSelectedHour}
        />
        <HourOption
          hour={14}
          selectedHour={selectedHour}
          size="pm"
          onPress={setSelectedHour}
        />
        <HourOption
          hour={15}
          selectedHour={selectedHour}
          size="pm"
          onPress={setSelectedHour}
        />
        <HourOption
          hour={16}
          selectedHour={selectedHour}
          size="pm"
          onPress={setSelectedHour}
        />
        <HourOption
          hour={17}
          selectedHour={selectedHour}
          size="pm"
          onPress={setSelectedHour}
        />
        <HourOption
          hour={18}
          selectedHour={selectedHour}
          size="pm"
          onPress={setSelectedHour}
        />
        <HourOption
          hour={19}
          selectedHour={selectedHour}
          size="pm"
          onPress={setSelectedHour}
        />
        <HourOption
          hour={20}
          selectedHour={selectedHour}
          size="pm"
          onPress={setSelectedHour}
        />
        <HourOption
          hour={21}
          selectedHour={selectedHour}
          size="pm"
          onPress={setSelectedHour}
        />
        <HourOption
          hour={22}
          selectedHour={selectedHour}
          size="pm"
          onPress={setSelectedHour}
        />
        <HourOption
          hour={23}
          selectedHour={selectedHour}
          size="pm"
          onPress={setSelectedHour}
        />
        <HourOption
          hour={24}
          selectedHour={selectedHour}
          size="pm"
          onPress={setSelectedHour}
        />
      </View>
    </View>
  );
};

const HourOption = (props: HourOptionProps) => {
  const { hour, selectedHour, size, onPress } = props;

  const containerRotation = useMemo(() => {
    const degree = (hour % 12) * 30;
    return {
      transform: [
        { translateY: 8 },
        { rotate: `${degree}deg` },
        { translateY: -8 },
      ],
    };
  }, [hour]);

  const textRotation = useMemo(() => {
    const degree = (hour % 12) * 30;
    return { transform: [{ rotate: `-${degree}deg` }] };
  }, [hour]);

  const textSelectionStyle = useMemo(() => {
    if (hour === selectedHour) {
      return styles.selectedHourText;
    }
    return undefined;
  }, [hour, selectedHour]);

  const additionalHourTextStyle = useMemo(() => {
    if (size === 'pm') {
      return styles.pmHourText;
    }
    return undefined;
  }, [size]);

  return (
    <View style={[styles.hour, containerRotation]}>
      <Pressable
        style={[styles.hourTextContainer, textRotation]}
        onPress={() => {
          onPress && onPress(hour);
        }}
      >
        <Text
          style={[styles.hourText, additionalHourTextStyle, textSelectionStyle]}
        >
          {Hour[hour]}
        </Text>
      </Pressable>
    </View>
  );
};

const MinuteSelection = (props: MinuteSelectionProps) => {
  const { color, selectedMinute, setSelectedMinute } = props;
  return (
    <View style={styles.clock}>
      <View style={styles.outerHoursContainer}>
        <MinuteClockWise selectedMinute={selectedMinute} color={color} />
        <MinuteOption
          minute={0}
          selectedMinute={selectedMinute}
          onPress={setSelectedMinute}
        />
        <MinuteOption
          minute={5}
          selectedMinute={selectedMinute}
          onPress={setSelectedMinute}
        />
        <MinuteOption
          minute={10}
          selectedMinute={selectedMinute}
          onPress={setSelectedMinute}
        />
        <MinuteOption
          minute={15}
          selectedMinute={selectedMinute}
          onPress={setSelectedMinute}
        />
        <MinuteOption
          minute={20}
          selectedMinute={selectedMinute}
          onPress={setSelectedMinute}
        />
        <MinuteOption
          minute={25}
          selectedMinute={selectedMinute}
          onPress={setSelectedMinute}
        />
        <MinuteOption
          minute={30}
          selectedMinute={selectedMinute}
          onPress={setSelectedMinute}
        />
        <MinuteOption
          minute={35}
          selectedMinute={selectedMinute}
          onPress={setSelectedMinute}
        />
        <MinuteOption
          minute={45}
          selectedMinute={selectedMinute}
          onPress={setSelectedMinute}
        />
        <MinuteOption
          minute={40}
          selectedMinute={selectedMinute}
          onPress={setSelectedMinute}
        />
        <MinuteOption
          minute={45}
          selectedMinute={selectedMinute}
          onPress={setSelectedMinute}
        />
        <MinuteOption
          minute={50}
          selectedMinute={selectedMinute}
          onPress={setSelectedMinute}
        />
        <MinuteOption
          minute={55}
          selectedMinute={selectedMinute}
          onPress={setSelectedMinute}
        />
      </View>
    </View>
  );
};

const MinuteOption = (props: MinuteOptionProps) => {
  const { minute, selectedMinute, onPress } = props;

  const containerRotation = useMemo(() => {
    const degree = (minute / 5) * 30;
    return {
      transform: [
        { translateY: 8 },
        { rotate: `${degree}deg` },
        { translateY: -8 },
      ],
    };
  }, [minute]);

  const textRotation = useMemo(() => {
    const degree = (minute / 5) * 30;
    return { transform: [{ rotate: `-${degree}deg` }] };
  }, [minute]);

  const textSelectionStyle = useMemo(() => {
    if (minute === selectedMinute) {
      return styles.selectedHourText;
    }
    return undefined;
  }, [minute, selectedMinute]);

  return (
    <View style={[styles.hour, containerRotation]}>
      <Pressable
        style={[styles.hourTextContainer, textRotation]}
        onPress={() => {
          onPress && onPress(minute);
        }}
      >
        <Text style={[styles.hourText, textSelectionStyle]}>
          {Minute[minute]}
        </Text>
      </Pressable>
    </View>
  );
};

const HourClockWise = (props: HourClockWiseProps) => {
  const { color, selectedHour } = props;

  const degreeAnimationValue = useRef(new Animated.Value(0)).current;
  const topMarginAnimationValue = useRef(new Animated.Value(0)).current;

  const additionalBackgroundStyle = useMemo(():
    | StyleProp<ViewStyle>
    | undefined => {
    if (color) {
      return { backgroundColor: color };
    }
    return undefined;
  }, [color]);

  useEffect(() => {
    const degree = (selectedHour % 12) * 30;
    Animated.timing(degreeAnimationValue, {
      toValue: degree,
      duration: 300,
      useNativeDriver: true,
    }).start();
    if (selectedHour > 12) {
      Animated.timing(topMarginAnimationValue, {
        toValue: 28,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(topMarginAnimationValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedHour]);

  return (
    <Animated.View
      style={[
        styles.clockWise,
        {
          transform: [
            {
              rotate: degreeAnimationValue.interpolate({
                inputRange: [0, 360],
                outputRange: ['0deg', '360deg'],
              }),
            },
          ],
        },
      ]}
    >
      <View style={styles.clockWiseInner}>
        <Animated.View
          style={[
            styles.clockWiseHeadDot,
            additionalBackgroundStyle,
            { transform: [{ translateY: topMarginAnimationValue }] },
          ]}
        />
        <Animated.View
          style={[
            styles.clockWiseRule,
            additionalBackgroundStyle,
            { marginTop: topMarginAnimationValue },
          ]}
        />
        <View style={[styles.clockWiseDot, additionalBackgroundStyle]} />
      </View>
    </Animated.View>
  );
};

const MinuteClockWise = (props: MinuteClockWiseProps) => {
  const { color, selectedMinute } = props;

  const degreeAnimationValue = useRef(new Animated.Value(0)).current;
  const topMarginAnimationValue = useRef(new Animated.Value(0)).current;

  const additionalBackgroundStyle = useMemo(():
    | StyleProp<ViewStyle>
    | undefined => {
    if (color) {
      return { backgroundColor: color };
    }
    return undefined;
  }, [color]);

  useEffect(() => {
    const degree = (selectedMinute / 5) * 30;
    Animated.timing(degreeAnimationValue, {
      toValue: degree,
      duration: 300,
      useNativeDriver: true,
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedMinute]);

  return (
    <Animated.View
      style={[
        styles.clockWise,
        {
          transform: [
            {
              rotate: degreeAnimationValue.interpolate({
                inputRange: [0, 360],
                outputRange: ['0deg', '360deg'],
              }),
            },
          ],
        },
      ]}
    >
      <View style={styles.clockWiseInner}>
        <Animated.View
          style={[
            styles.clockWiseHeadDot,
            additionalBackgroundStyle,
            { transform: [{ translateY: topMarginAnimationValue }] },
          ]}
        />
        <Animated.View
          style={[
            styles.clockWiseRule,
            additionalBackgroundStyle,
            { marginTop: topMarginAnimationValue },
          ]}
        />
        <View style={styles.clockWiseDot} />
      </View>
    </Animated.View>
  );
};

export default Timepicker;
