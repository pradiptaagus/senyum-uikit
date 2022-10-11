import type { RootStackParamList, RootStackScreenProps } from 'example/src/App';
import React from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

type ItemProps = {
  title: string;
  onPress: () => void;
};

const data = ['Button', 'Input', 'Checkbox', 'Icon'];

const Item = ({ title, onPress }: ItemProps) => (
  <Pressable style={styles.item} onPress={onPress}>
    <Text style={styles.title}>{title}</Text>
  </Pressable>
);

const Separator = () => <View style={styles.separator}></View>;

const Home = () => {
  const navigation = useNavigation<RootStackScreenProps<'Home'>>();

  const renderItem = ({ item }: { item: string }) => (
    <Item
      onPress={() => navigation.navigate(item as keyof RootStackParamList)}
      title={item}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        ItemSeparatorComponent={Separator}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#161616',
  },
  separator: {
    borderColor: '#e3e3e3',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
});

export default Home;
