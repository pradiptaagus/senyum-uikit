import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { Checkbox, Color, Spacing } from 'senyum-uikit';

const CheckboxExample = () => {
  const [isChecked1, setIsChecked1] = useState<boolean>(false);
  const [isChecked2, setIsChecked2] = useState<boolean>(false);
  const [isChecked3, setIsChecked3] = useState<boolean>(true);
  const [isChecked4, setIsChecked4] = useState<boolean>(false);
  const [isChecked5, setIsChecked5] = useState<boolean>(true);
  const [isChecked6, setIsChecked6] = useState<boolean>(false);
  const [isChecked7, setIsChecked7] = useState<boolean>(true);
  const [isChecked8, setIsChecked8] = useState<boolean>(true);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.wrapper}>
          <Checkbox
            status={isChecked1 ? 'checked' : 'unchecked'}
            label="Leading checkbox"
            style={styles.checkboxStyle}
            onPress={() => setIsChecked1(!isChecked1)}
          />
          <Checkbox
            status={isChecked2 ? 'checked' : 'unchecked'}
            label="Trailing checkbox"
            position="trailing"
            style={styles.checkboxStyle}
            onPress={() => setIsChecked2(!isChecked2)}
          />
          <Checkbox
            status={isChecked3 ? 'checked' : 'unchecked'}
            label="Checked checkbox"
            style={styles.checkboxStyle}
            onPress={() => setIsChecked3(!isChecked3)}
          />
          <Checkbox
            status={isChecked4 ? 'checked' : 'unchecked'}
            label="Solid checkbox"
            style={styles.checkboxStyle}
            bordered={false}
            onPress={() => setIsChecked4(!isChecked4)}
          />
          <Checkbox
            status={isChecked5 ? 'checked' : 'unchecked'}
            label="Checked solid checkbox"
            style={styles.checkboxStyle}
            bordered={false}
            onPress={() => setIsChecked5(!isChecked5)}
          />
          <Checkbox
            status={isChecked6 ? 'checked' : 'unchecked'}
            label="Custom checkbox"
            style={styles.checkboxStyle}
            color={Color.hightlight[2]}
            backgroundColor={Color.orange[7]}
            onPress={() => setIsChecked6(!isChecked6)}
          />
          <Checkbox
            status={isChecked7 ? 'checked' : 'unchecked'}
            label="Disabled checkbox"
            style={styles.checkboxStyle}
            disabled
            onPress={() => setIsChecked7(isChecked7)}
          />
          <Checkbox
            status={isChecked8 ? 'checked' : 'unchecked'}
            label="Disabled solid checkbox"
            style={styles.checkboxStyle}
            bordered={false}
            disabled
            onPress={() => setIsChecked8(isChecked8)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.light[1],
  },
  wrapper: {
    padding: Spacing[16],
  },
  checkboxStyle: {
    marginBottom: Spacing[12],
  },
});

export default CheckboxExample;
