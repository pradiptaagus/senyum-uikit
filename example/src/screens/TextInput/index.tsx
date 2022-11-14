import * as React from 'react';

import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { Color, Spacing, TextInput } from 'senyum-uikit';

export default function TextInputExample() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="always">
        <View style={styles.wrapper}>
          <TextInput label="Label" />
          <TextInput label="Label" borderType="success" />
          <TextInput label="Label" borderType="warning" />
          <TextInput label="Label" borderType="error" />
          <TextInput disabled label="Label" />
          <TextInput disabled value="Placeholder" />

          <TextInput label="Label" icon="Edit1" />
          <TextInput label="Label" icon="Edit1" borderType="success" />
          <TextInput label="Label" icon="Edit1" borderType="warning" />
          <TextInput label="Label" icon="Edit1" borderType="error" />
          <TextInput disabled label="Label" icon="Edit1" />
          <TextInput disabled value="Placeholder" icon="Edit1" />

          <TextInput label="Label" size="small" />
          <TextInput label="Label" size="small" borderType="success" />
          <TextInput label="Label" size="small" borderType="warning" />
          <TextInput label="Label" size="small" borderType="error" />
          <TextInput disabled label="Label" size="small" />
          <TextInput disabled value="Placeholder" size="small" />

          <TextInput label="Label" size="small" icon="Edit1" />
          <TextInput
            label="Label"
            size="small"
            borderType="success"
            icon="Edit1"
          />
          <TextInput
            label="Label"
            size="small"
            borderType="warning"
            icon="Edit1"
          />
          <TextInput
            label="Label"
            size="small"
            borderType="error"
            icon="Edit1"
          />
          <TextInput disabled label="Label" size="small" icon="Edit1" />
          <TextInput disabled value="Placeholder" size="small" icon="Edit1" />
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
