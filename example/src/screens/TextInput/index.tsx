import * as React from 'react';

import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { Color, Spacing, TextInput } from 'senyum-uikit';

export default function TextInputExample() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="always">
        <View style={styles.wrapper}>
          <TextInput label="Label" />
          <TextInput label="Label" status="success" />
          <TextInput label="Label" status="warning" />
          <TextInput label="Label" status="error" />
          <TextInput disabled label="Label" />
          <TextInput disabled value="Placeholder" />

          <TextInput label="Label" icon="Edit1" />
          <TextInput label="Label" icon="Edit1" status="success" />
          <TextInput label="Label" icon="Edit1" status="warning" />
          <TextInput label="Label" icon="Edit1" status="error" />
          <TextInput disabled label="Label" icon="Edit1" />
          <TextInput disabled value="Placeholder" icon="Edit1" />

          <TextInput label="Label" size="sm" />
          <TextInput label="Label" size="sm" status="success" />
          <TextInput label="Label" size="sm" status="warning" />
          <TextInput label="Label" size="sm" status="error" />
          <TextInput disabled label="Label" size="sm" />
          <TextInput disabled value="Placeholder" size="sm" />

          <TextInput label="Label" size="sm" icon="Edit1" />
          <TextInput label="Label" size="sm" status="success" icon="Edit1" />
          <TextInput label="Label" size="sm" status="warning" icon="Edit1" />
          <TextInput label="Label" size="sm" status="error" icon="Edit1" />
          <TextInput disabled label="Label" size="sm" icon="Edit1" />
          <TextInput disabled value="Placeholder" size="sm" icon="Edit1" />
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
