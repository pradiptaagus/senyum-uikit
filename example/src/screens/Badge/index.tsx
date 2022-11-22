import * as React from 'react';

import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { Badge, Color, Spacing } from 'senyum-uikit';

export default function BadgeExample() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.wrapper}>
          <Badge variant="success" style={[styles.badge, styles.smallBadge]}>
            Status
          </Badge>
          <Badge variant="warning" style={[styles.badge, styles.smallBadge]}>
            Status
          </Badge>
          <Badge variant="error" style={[styles.badge, styles.smallBadge]}>
            Status
          </Badge>
          <Badge variant="success" style={[styles.badge]}>
            Status
          </Badge>
          <Badge variant="warning" style={[styles.badge]}>
            Status
          </Badge>
          <Badge variant="error" style={[styles.badge]}>
            Status
          </Badge>
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
