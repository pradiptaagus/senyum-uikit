import * as React from 'react';

import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { PinInput, Color, Spacing } from 'senyum-uikit';

export default function ButtonExample() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="always">
        <PinInput style={styles['mb-16']} />
        <PinInput initialValue="123456" style={styles['mb-16']} />
        <PinInput
          initialValue="123456"
          securedTextEntry
          style={styles['mb-16']}
        />
        <PinInput error style={styles['mb-16']} />
        <PinInput disabled style={styles['mb-16']} />
        <PinInput
          securedTextEntry
          disabled
          initialValue="123456"
          style={styles['mb-16']}
        />
        <PinInput disabled initialValue="123456" style={styles['mb-16']} />

        <PinInput type="underlined" style={styles['mb-16']} />
        <PinInput
          initialValue="123456"
          type="underlined"
          style={styles['mb-16']}
        />
        <PinInput
          initialValue="123456"
          type="underlined"
          securedTextEntry
          style={styles['mb-16']}
        />
        <PinInput type="underlined" error style={styles['mb-16']} />
        <PinInput type="underlined" disabled style={styles['mb-16']} />
        <PinInput
          type="underlined"
          securedTextEntry
          disabled
          initialValue="123456"
          style={styles['mb-16']}
        />
        <PinInput
          type="underlined"
          disabled
          initialValue="123456"
          style={styles['mb-16']}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  'container': {
    flex: 1,
    backgroundColor: Color.light[1],
  },
  'mb-16': {
    marginBottom: 16,
  },
  'buttonStyle': {
    marginBottom: Spacing[12],
  },
});
