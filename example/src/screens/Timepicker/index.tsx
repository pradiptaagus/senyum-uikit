import * as React from 'react';

import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { Color, Spacing, Timepicker, Button } from 'senyum-uikit';
import type { TimepickerRef, Hour, Minute } from 'senyum-uikit';

export default function TimepickerExample() {
  const timePickerDefaultRef = React.useRef<TimepickerRef>(null);
  const timePickerRedRef = React.useRef<TimepickerRef>(null);
  const timePickerBlackRef = React.useRef<TimepickerRef>(null);
  const [hour, setHour] = React.useState<keyof typeof Hour>(12);
  const [minute, setMinute] = React.useState<keyof typeof Minute>(0);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="always">
        <View style={styles.wrapper}>
          <Button
            children={`Pick Time (Default) ${hour}:${minute}`}
            onPress={() => timePickerDefaultRef.current?.show({ hour, minute })}
          />
          <Button
            children={`Pick Time (Red) ${hour}:${minute}`}
            onPress={() => timePickerRedRef.current?.show({ hour, minute })}
          />
          <Button
            children={`Pick Time (Black) ${hour}:${minute}`}
            onPress={() => timePickerBlackRef.current?.show({ hour, minute })}
          />
        </View>
      </ScrollView>
      <Timepicker
        ref={timePickerDefaultRef}
        onTimeSet={(result) => {
          setHour(result.hour);
          setMinute(result.minute);
        }}
      />
      <Timepicker
        color="red"
        ref={timePickerRedRef}
        onTimeSet={(result) => {
          setHour(result.hour);
          setMinute(result.minute);
        }}
      />
      <Timepicker
        color="black"
        ref={timePickerBlackRef}
        onTimeSet={(result) => {
          setHour(result.hour);
          setMinute(result.minute);
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.light[1],
  },
  wrapper: {
    padding: Spacing[16],
  },
  buttonStyle: {
    marginBottom: Spacing[12],
  },
});
