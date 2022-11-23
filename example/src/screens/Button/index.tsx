import * as React from 'react';

import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { Button, Color, Spacing } from 'senyum-uikit';

export default function ButtonExample() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.wrapper}>
          <Button size="sm" style={styles.buttonStyle}>
            Small button
          </Button>
          <Button style={styles.buttonStyle}>Normal button (medium)</Button>
          <Button size="lg" style={styles.buttonStyle}>
            Large button
          </Button>

          <Button size="sm" disabled style={styles.buttonStyle}>
            Disabled small button
          </Button>
          <Button disabled style={styles.buttonStyle}>
            Disabled normal button (medium)
          </Button>
          <Button size="lg" disabled style={styles.buttonStyle}>
            Disabled large button
          </Button>

          <Button size="sm" bordered style={styles.buttonStyle}>
            Bordered small button
          </Button>
          <Button bordered style={styles.buttonStyle}>
            Bordered normal button (medium)
          </Button>
          <Button size="lg" bordered style={styles.buttonStyle}>
            Bordered large button
          </Button>

          <Button size="sm" bordered disabled style={styles.buttonStyle}>
            Disabled bordered small button
          </Button>
          <Button bordered disabled style={styles.buttonStyle}>
            Disabled bordered normal button (medium)
          </Button>
          <Button size="lg" bordered disabled style={styles.buttonStyle}>
            Disabled bordered large button
          </Button>

          <Button size="sm" variant="primary" style={styles.buttonStyle}>
            Primary button
          </Button>
          <Button variant="primary" style={styles.buttonStyle}>
            Normal primary button (medium)
          </Button>
          <Button size="lg" variant="primary" style={styles.buttonStyle}>
            Large primary button
          </Button>

          <Button
            size="sm"
            variant="primary"
            disabled
            style={styles.buttonStyle}
          >
            Disabled primary button
          </Button>
          <Button variant="primary" disabled style={styles.buttonStyle}>
            Disabled normal primary button (medium)
          </Button>
          <Button
            size="lg"
            variant="primary"
            disabled
            style={styles.buttonStyle}
          >
            Disabled large primary button
          </Button>

          <Button
            size="sm"
            variant="primary"
            bordered
            style={styles.buttonStyle}
          >
            Bordered small button
          </Button>
          <Button variant="primary" bordered style={styles.buttonStyle}>
            Bordered normal button (medium)
          </Button>
          <Button
            variant="primary"
            size="lg"
            bordered
            style={styles.buttonStyle}
          >
            Bordered large button
          </Button>

          <Button
            buttonColor={Color.blue[2]}
            activeButtonColor={Color.blue[1]}
            textColor={Color.light[1]}
            activeTextColor={Color.light[1]}
            style={styles.buttonStyle}
          >
            Custom normal button (medium)
          </Button>

          <Button
            variant="primary"
            iconPosition="left"
            icon="Account"
            size="sm"
            style={styles.buttonStyle}
          >
            Small button with icon
          </Button>
          <Button
            variant="primary"
            iconPosition="left"
            icon="Account"
            style={styles.buttonStyle}
          >
            Normal button with icon
          </Button>
          <Button
            variant="primary"
            iconPosition="left"
            icon="Account"
            size="lg"
            style={styles.buttonStyle}
          >
            Large button with icon
          </Button>

          <Button
            variant="primary"
            iconPosition="right"
            icon="Account"
            size="sm"
            style={styles.buttonStyle}
          >
            Small button with right icon
          </Button>
          <Button
            variant="primary"
            iconPosition="right"
            icon="Account"
            style={styles.buttonStyle}
          >
            Normal button with right icon
          </Button>
          <Button
            variant="primary"
            iconPosition="right"
            icon="Account"
            size="lg"
            style={styles.buttonStyle}
          >
            Large button with right icon
          </Button>

          <Button size="sm" disabled style={styles.buttonStyle} icon="Account">
            Disabled small button
          </Button>
          <Button disabled style={styles.buttonStyle} icon="Account">
            Disabled normal button (medium)
          </Button>
          <Button size="lg" disabled style={styles.buttonStyle} icon="Account">
            Disabled large button
          </Button>

          <Button size="sm" bordered style={styles.buttonStyle} icon="Account">
            Bordered small button
          </Button>
          <Button bordered style={styles.buttonStyle} icon="Account">
            Bordered normal button (medium)
          </Button>
          <Button size="lg" bordered style={styles.buttonStyle} icon="Account">
            Bordered large button
          </Button>

          <Button
            size="sm"
            bordered
            disabled
            style={styles.buttonStyle}
            icon="Account"
          >
            Disabled bordered small button
          </Button>
          <Button bordered disabled style={styles.buttonStyle} icon="Account">
            Disabled bordered normal button (medium)
          </Button>
          <Button
            size="lg"
            bordered
            disabled
            style={styles.buttonStyle}
            icon="Account"
            variant="primary"
          >
            Disabled bordered large button
          </Button>

          <Button
            size="sm"
            variant="primary"
            disabled
            style={styles.buttonStyle}
            icon="Account"
          >
            Disabled primary button
          </Button>
          <Button
            variant="primary"
            disabled
            style={styles.buttonStyle}
            icon="Account"
          >
            Disabled normal primary button (medium)
          </Button>
          <Button
            size="lg"
            disabled
            icon="Account"
            variant="primary"
            style={styles.buttonStyle}
          >
            Disabled large primary button
          </Button>

          <Button size="sm" style={styles.buttonStyle} icon="Account">
            Small button
          </Button>
          <Button style={styles.buttonStyle} icon="Account">
            Normal button (medium)
          </Button>
          <Button size="lg" style={styles.buttonStyle} icon="Account">
            Large button
          </Button>
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
