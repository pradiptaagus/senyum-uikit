import * as React from 'react';

import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { Color, Spacing, Dropdown } from 'senyum-uikit';

export default function DropdownExample() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="always">
        <View style={styles.wrapper}>
          <Dropdown label="Label" />
          <Dropdown label="Label" value="Placeholder" />
          <Dropdown label="Label" value="Placeholder" borderType="error" />
          <Dropdown label="Label" value="Placeholder" borderType="success" />
          <Dropdown label="Label" value="Placeholder" borderType="warning" />
          <Dropdown disabled label="Label" />
          <Dropdown disabled label="Label" value="Placeholder" />
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
