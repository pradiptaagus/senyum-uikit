import React, { useCallback, useMemo, useRef, useState } from 'react';
import { Modal, View, Text, Pressable, Animated } from 'react-native';
import styles from './style';
import { Hour, Minute } from './type';
import type {
  HourClockWiseProps,
  MinuteClockWiseProps,
  HourOptionProps,
  // TimepickerProps,
  HourSelectionProps,
  MinuteOptionProps,
  MinuteSelectionProps,
} from './type';

const Timepicker = () => {
  const [selectedHour, setSelectedHour] = useState<keyof typeof Hour>(13);
  const [selectedMinute, setSelectedMinute] = useState<keyof typeof Minute>(5);
  const [selectionMode, setSelectionMode] = useState<'hour' | 'minute'>('hour');
  const [showHourSelection, setShowHourSelection] = useState<boolean>(true);

  const selectionModeAnimationValue = useRef(new Animated.Value(0)).current;

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

  return (
    <Modal visible={true} transparent>
      <View style={styles.modal}>
        <View style={styles.container}>
          <View style={styles.header}>
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
                selectedMinute={selectedMinute}
                setSelectedMinute={setSelectedMinute}
              />
            </Animated.View>
            {showHourSelection && (
              <Animated.View
                style={{
                  position: 'absolute',
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
                }}
              >
                <HourSelection
                  selectedHour={selectedHour}
                  setSelectedHour={setSelectedHour}
                />
              </Animated.View>
            )}
          </View>
          <View></View>
        </View>
      </View>
    </Modal>
  );
};

const HourSelection = (props: HourSelectionProps) => {
  const { selectedHour, setSelectedHour } = props;
  return (
    <View style={styles.clock}>
      <View style={styles.outerHoursContainer}>
        {selectedHour <= 12 && <HourClockWise selectedHour={selectedHour} />}
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
        {selectedHour > 12 && <HourClockWise selectedHour={selectedHour} />}
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

  const selectionStyle = useMemo(() => {
    if (hour === selectedHour) {
      return styles.selectedHourTextContainer;
    }
    return undefined;
  }, [hour, selectedHour]);

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
        style={[styles.hourTextContainer, selectionStyle, textRotation]}
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
  const { selectedMinute, setSelectedMinute } = props;
  return (
    <View style={styles.clock}>
      <View style={styles.outerHoursContainer}>
        <MinuteClockWise selectedMinute={selectedMinute} />
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

  const selectionStyle = useMemo(() => {
    if (minute === selectedMinute) {
      return styles.selectedHourTextContainer;
    }
    return undefined;
  }, [minute, selectedMinute]);

  const textSelectionStyle = useMemo(() => {
    if (minute === selectedMinute) {
      return styles.selectedHourText;
    }
    return undefined;
  }, [minute, selectedMinute]);

  return (
    <View style={[styles.hour, containerRotation]}>
      <Pressable
        style={[styles.hourTextContainer, selectionStyle, textRotation]}
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
  const { selectedHour } = props;

  const containerRotation = useMemo(() => {
    const degree = (selectedHour % 12) * 30;
    return { transform: [{ rotate: `${degree}deg` }] };
  }, [selectedHour]);

  return (
    <View style={[styles.clockWise, containerRotation]}>
      <View style={styles.clockWiseRule} />
    </View>
  );
};

const MinuteClockWise = (props: MinuteClockWiseProps) => {
  const { selectedMinute } = props;

  const containerRotation = useMemo(() => {
    const degree = (selectedMinute / 5) * 30;
    return { transform: [{ rotate: `${degree}deg` }] };
  }, [selectedMinute]);

  return (
    <View style={[styles.clockWise, containerRotation]}>
      <View style={styles.clockWiseRule} />
    </View>
  );
};

export default Timepicker;
