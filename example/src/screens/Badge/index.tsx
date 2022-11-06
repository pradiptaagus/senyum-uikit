import * as React from 'react';

import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { Badge, Color, Spacing } from 'senyum-uikit';

export default function BadgeExample() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.wrapper}>
          <Badge
            type="success"
            text="Status"
            style={[styles.badge, styles.smallBadge]}
          />
          <Badge
            type="warning"
            text="Status"
            style={[styles.badge, styles.smallBadge]}
          />
          <Badge
            type="error"
            text="Status"
            style={[styles.badge, styles.smallBadge]}
          />
          <Badge type="success" text="Status" style={[styles.badge]} />
          <Badge type="warning" text="Status" style={[styles.badge]} />
          <Badge type="error" text="Status" style={[styles.badge]} />
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
  badge: {
    marginBottom: Spacing[10],
  },
  smallBadge: {
    alignSelf: 'flex-start',
  },
});
