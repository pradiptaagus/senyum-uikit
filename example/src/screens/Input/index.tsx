import * as React from 'react';

import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { Color, Spacing, TextInput } from 'senyum-uikit';

export default function InputExample() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.wrapper}>
          <TextInput
            label='Label'
          />
          <TextInput
            label='Label'
            borderType='success'
          />
          <TextInput
            label='Label'
            borderType='warning'
          />
          <TextInput
            label='Label'
            borderType='error'
          />
          <TextInput
            disabled
            label='Label'
          />
          <TextInput
            disabled
            value='Placeholder'
          />

          <TextInput
            label='Label'
            icon='Edit1'
          />
          <TextInput
            label='Label'
            icon='Edit1'
            borderType='success'
          />
          <TextInput
            label='Label'
            icon='Edit1'
            borderType='warning'
          />
          <TextInput
            label='Label'
            icon='Edit1'
            borderType='error'
          />
          <TextInput
            disabled
            label='Label'
            icon='Edit1'
          />
          <TextInput
            disabled
            value='Placeholder'
            icon='Edit1'
          />

          <TextInput
            label='Label'
            type='small'
          />
          <TextInput
            label='Label'
            type='small'
            borderType='success'
          />
          <TextInput
            label='Label'
            type='small'
            borderType='warning'
          />
          <TextInput
            label='Label'
            type='small'
            borderType='error'
          />
          <TextInput
            disabled
            label='Label'
            type='small'
          />
          <TextInput
            disabled
            value='Placeholder'
            type='small'
          />
          
          <TextInput
            label='Label'
            type='small'
            icon='Edit1'
          />
          <TextInput
            label='Label'
            type='small'
            borderType='success'
            icon='Edit1'
          />
          <TextInput
            label='Label'
            type='small'
            borderType='warning'
            icon='Edit1'
          />
          <TextInput
            label='Label'
            type='small'
            borderType='error'
            icon='Edit1'
          />
          <TextInput
            disabled
            label='Label'
            type='small'
            icon='Edit1'
          />
          <TextInput
            disabled
            value='Placeholder'
            type='small'
            icon='Edit1'
          />
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
