import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, Color, Dialog, FontSize, Spacing } from 'senyum-uikit';

const DialogExample = () => {
  const [isShowDialog, setIsShowDialog] = useState<boolean>(false);

  const [isShowBottomDialog, setIsShowBottomDialog] = useState<boolean>(false);

  const [isShowScrollableDialog, setIsShowScrollableDialog] =
    useState<boolean>(false);

  const [isShowScrollableBottomDialog, setIsShowScrollabledBottomDialog] =
    useState<boolean>(false);

  const handleDialogVisibility = () => setIsShowDialog(!isShowDialog);

  const handleBottomDialogVisibility = () =>
    setIsShowBottomDialog(!isShowBottomDialog);

  const handleScrollableDialogVisibility = () =>
    setIsShowScrollableDialog(!isShowScrollableDialog);

  const handleScrollableBottomDialogVisibility = () =>
    setIsShowScrollabledBottomDialog(!isShowScrollableBottomDialog);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Button
          variant="primary"
          onPress={handleDialogVisibility}
          style={styles.buttonStyle}
        >
          Open center dialog
        </Button>
        <Button
          variant="primary"
          onPress={handleBottomDialogVisibility}
          style={styles.buttonStyle}
        >
          Open bottom dialog
        </Button>
        <Button
          variant="primary"
          onPress={handleScrollableDialogVisibility}
          style={styles.buttonStyle}
        >
          Open scrollable dialog
        </Button>
        <Button
          variant="primary"
          onPress={handleScrollableBottomDialogVisibility}
        >
          Open scrollable bottom dialog
        </Button>

        {/* Center dialog */}
        <Dialog visible={isShowDialog} onDismis={handleDialogVisibility}>
          <Dialog.Header>
            <Dialog.Title>Example Dialog</Dialog.Title>
            <Dialog.Close onPress={handleDialogVisibility} />
          </Dialog.Header>
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

        {/* Bottom dialog */}
        <Dialog
          visible={isShowBottomDialog}
          onDismis={handleBottomDialogVisibility}
          position="bottom"
        >
          <Dialog.Header>
            <Dialog.Title>Example Dialog</Dialog.Title>
            <Dialog.Close onPress={handleBottomDialogVisibility} />
          </Dialog.Header>
          <Dialog.Icon icon="AccountCircle" color={Color.green[2]} />
          <Dialog.Content>
            <Text style={{ color: Color.grey[1], fontSize: FontSize[14] }}>
              This is a simple dialog
            </Text>
          </Dialog.Content>
          <Dialog.Action>
            <Button variant="primary" onPress={handleBottomDialogVisibility}>
              Done
            </Button>
          </Dialog.Action>
        </Dialog>

        {/* Scrollable dialog */}
        <Dialog
          visible={isShowScrollableDialog}
          onDismis={handleScrollableDialogVisibility}
        >
          <Dialog.Header>
            <Dialog.Title>Example Scrollable Dialog</Dialog.Title>
            <Dialog.Close onPress={handleScrollableDialogVisibility} />
          </Dialog.Header>
          <Dialog.ScrollArea>
            <ScrollView>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Phasellus egestas tellus rutrum tellus pellentesque eu
                tincidunt. Id nibh tortor id aliquet. Tellus mauris a diam
                maecenas sed enim ut sem. Sem integer vitae justo eget magna
                fermentum iaculis eu. Fermentum odio eu feugiat pretium nibh.
                Amet porttitor eget dolor morbi. Placerat vestibulum lectus
                mauris ultrices eros in cursus turpis. Neque vitae tempus quam
                pellentesque. In metus vulputate eu scelerisque felis. Quisque
                id diam vel quam. Pulvinar pellentesque habitant morbi tristique
                senectus. Purus faucibus ornare suspendisse sed. Amet massa
                vitae tortor condimentum lacinia quis vel. Tincidunt lobortis
                feugiat vivamus at augue eget. Interdum velit euismod in
                pellentesque massa placerat duis ultricies lacus. Risus nullam
                eget felis eget nunc. Pellentesque sit amet porttitor eget dolor
                morbi. Aliquam ut porttitor leo a diam sollicitudin tempor id
                eu. Lacus vestibulum sed arcu non odio euismod.
              </Text>
              <Text>
                Viverra vitae congue eu consequat ac felis. Fringilla est
                ullamcorper eget nulla facilisi etiam dignissim diam quis. Non
                nisi est sit amet. Mi in nulla posuere sollicitudin aliquam. Sem
                fringilla ut morbi tincidunt. Vulputate sapien nec sagittis
                aliquam. Blandit volutpat maecenas volutpat blandit aliquam
                etiam. Eget magna fermentum iaculis eu. Blandit cursus risus at
                ultrices mi tempus imperdiet nulla. Volutpat sed cras ornare
                arcu dui vivamus. Enim praesent elementum facilisis leo vel
                fringilla est ullamcorper eget. Feugiat vivamus at augue eget
                arcu dictum varius. Justo nec ultrices dui sapien eget mi proin
                sed.
              </Text>
            </ScrollView>
          </Dialog.ScrollArea>
          <Dialog.Action>
            <Button
              variant="primary"
              onPress={handleScrollableDialogVisibility}
            >
              Done
            </Button>
          </Dialog.Action>
        </Dialog>

        {/* Scrollable bottom dialog */}
        <Dialog
          visible={isShowScrollableBottomDialog}
          onDismis={handleScrollableBottomDialogVisibility}
          position="bottom"
        >
          <Dialog.Header>
            <Dialog.Title>Example Scrollable Dialog</Dialog.Title>
            <Dialog.Close onPress={handleScrollableBottomDialogVisibility} />
          </Dialog.Header>
          <Dialog.ScrollArea>
            <ScrollView>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Phasellus egestas tellus rutrum tellus pellentesque eu
                tincidunt. Id nibh tortor id aliquet. Tellus mauris a diam
                maecenas sed enim ut sem. Sem integer vitae justo eget magna
                fermentum iaculis eu. Fermentum odio eu feugiat pretium nibh.
                Amet porttitor eget dolor morbi. Placerat vestibulum lectus
                mauris ultrices eros in cursus turpis. Neque vitae tempus quam
                pellentesque. In metus vulputate eu scelerisque felis. Quisque
                id diam vel quam. Pulvinar pellentesque habitant morbi tristique
                senectus. Purus faucibus ornare suspendisse sed. Amet massa
                vitae tortor condimentum lacinia quis vel. Tincidunt lobortis
                feugiat vivamus at augue eget. Interdum velit euismod in
                pellentesque massa placerat duis ultricies lacus. Risus nullam
                eget felis eget nunc. Pellentesque sit amet porttitor eget dolor
                morbi. Aliquam ut porttitor leo a diam sollicitudin tempor id
                eu. Lacus vestibulum sed arcu non odio euismod.
              </Text>
              <Text>
                Viverra vitae congue eu consequat ac felis. Fringilla est
                ullamcorper eget nulla facilisi etiam dignissim diam quis. Non
                nisi est sit amet. Mi in nulla posuere sollicitudin aliquam. Sem
                fringilla ut morbi tincidunt. Vulputate sapien nec sagittis
                aliquam. Blandit volutpat maecenas volutpat blandit aliquam
                etiam. Eget magna fermentum iaculis eu. Blandit cursus risus at
                ultrices mi tempus imperdiet nulla. Volutpat sed cras ornare
                arcu dui vivamus. Enim praesent elementum facilisis leo vel
                fringilla est ullamcorper eget. Feugiat vivamus at augue eget
                arcu dictum varius. Justo nec ultrices dui sapien eget mi proin
                sed.
              </Text>
            </ScrollView>
          </Dialog.ScrollArea>
          <Dialog.Action>
            <Button
              variant="primary"
              onPress={handleScrollableBottomDialogVisibility}
            >
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
  buttonStyle: {
    marginBottom: 16,
  },
});

export default DialogExample;
