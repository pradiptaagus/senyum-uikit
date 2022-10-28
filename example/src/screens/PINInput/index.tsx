import * as React from 'react';

import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { PinInput, Color, Spacing } from 'senyum-uikit';

export default function ButtonExample() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="always">
        <View style={styles.wrapper}>
          <PinInput />
          <PinInput initialValue="123456" />
          <PinInput initialValue="123456" securedTextEntry />
          <PinInput errorMessage="Error message" />
          <PinInput disabled />
          <PinInput securedTextEntry disabled initialValue="123456" />
          <PinInput disabled initialValue="123456" />

          <PinInput type="underlined" />
          <PinInput initialValue="123456" type="underlined" />
          <PinInput initialValue="123456" type="underlined" securedTextEntry />
          <PinInput type="underlined" errorMessage="Error message" />
          <PinInput type="underlined" disabled />
          <PinInput
            type="underlined"
            securedTextEntry
            disabled
            initialValue="123456"
          />
          <PinInput type="underlined" disabled initialValue="123456" />
        </View>
      </ScrollView>
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
