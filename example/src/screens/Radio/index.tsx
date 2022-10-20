import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { Color, Spacing, Radio } from 'senyum-uikit';

const RadioExample = () => {
  const [isChecked1, setIsChecked1] = useState<boolean>(false);
  const [isChecked2, setIsChecked2] = useState<boolean>(false);
  const [isChecked3, setIsChecked3] = useState<boolean>(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.wrapper}>
          <Radio
            status={isChecked1 ? 'checked' : 'unchecked'}
            onPress={() => setIsChecked1(!isChecked1)}
            label="Radio"
            style={styles.radioStyle}
          />
          <Radio
            status={isChecked2 ? 'checked' : 'unchecked'}
            onPress={() => setIsChecked2(!isChecked2)}
            label="Trailing radio"
            position="trailing"
            style={styles.radioStyle}
          />
          <Radio
            status={isChecked3 ? 'checked' : 'unchecked'}
            onPress={() => setIsChecked3(!isChecked3)}
            label="Custom radio"
            checkedBackgroundColor={Color.hightlight[2]}
            checkedBorderColor={Color.orange[5]}
            style={styles.radioStyle}
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
  radioStyle: {
    marginBottom: Spacing[12],
  },
});

export default RadioExample;
