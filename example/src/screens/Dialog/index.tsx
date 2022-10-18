import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Button, Color, Dialog, FontSize, Spacing } from 'senyum-uikit';

const DialogExample = () => {
  const [isShowDialog, setIsShowDialog] = useState<boolean>(false);

  const handleDialogVisibility = () => setIsShowDialog(!isShowDialog);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Button variant="primary" onPress={handleDialogVisibility}>
          Open Dialog
        </Button>
        <Dialog visible={isShowDialog} onDismis={handleDialogVisibility}>
          <Dialog.Title>Example Dialog</Dialog.Title>
          <Dialog.Icon icon="AccountCircle" color={Color.green[2]} />
          <Dialog.Content>
            <Text style={{ color: Color.grey[1], fontSize: FontSize[14] }}>
              This is a simple dialog
            </Text>
          </Dialog.Content>
          <Dialog.Action>
            <Button variant="primary" onPress={handleDialogVisibility}>
              Done
            </Button>
          </Dialog.Action>
        </Dialog>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.light[1],
  },
  wrapper: {
    flex: 1,
    padding: Spacing[16],
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DialogExample;
