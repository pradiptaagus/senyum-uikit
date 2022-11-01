import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Button, Color, Datepicker, Spacing } from 'senyum-uikit';

const DatepickerExample = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleDatepickerVisibility = () => setIsOpen(!isOpen);

  return (
    <SafeAreaView style={styles.container}>
      <Button variant="primary" onPress={handleDatepickerVisibility}>
        Open datepicker
      </Button>

      <Datepicker
        visible={isOpen}
        onDismiss={handleDatepickerVisibility}
        handleConfirm={(val) => {
          setIsOpen(false);
          console.log('val', val);
        }}
        handleCancel={handleDatepickerVisibility}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.light[1],
    padding: Spacing[16],
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DatepickerExample;
