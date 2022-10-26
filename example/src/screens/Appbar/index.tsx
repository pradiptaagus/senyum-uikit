import type { AppbarScreenProps } from 'example/src/App';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Appbar, Color } from 'senyum-uikit';

const AppbarExample = (props: AppbarScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Appbar variant="primary">
        <Appbar.BackAction onPress={() => props.navigation.goBack()} />
        <Appbar.Content title="Title" />
        <Appbar.Action icon={'Setting'} />
      </Appbar>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.light[1],
    justifyContent: 'flex-start',
  },
});

export default AppbarExample;
