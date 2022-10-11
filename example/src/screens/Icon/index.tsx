import * as React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Color, Icon, FontSize } from 'senyum-uikit';

const IconExample = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.wrapper}>
          <View style={styles.item}>
            <Icon.Account size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Account</Text>
          </View>
          <View style={styles.item}>
            <Icon.AccountBox size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>AccountBox</Text>
          </View>
          <View style={styles.item}>
            <Icon.AccountCircle size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>AccountCircle</Text>
          </View>
          <View style={styles.item}>
            <Icon.AddPerson1 size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>AddPerson1</Text>
          </View>
          <View style={styles.item}>
            <Icon.AddPerson2 size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>AddPerson2</Text>
          </View>
          <View style={styles.item}>
            <Icon.ArrowBackward size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ArrowBackward</Text>
          </View>
          <View style={styles.item}>
            <Icon.ArrowDown size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ArrowDown</Text>
          </View>
          <View style={styles.item}>
            <Icon.ArrowDownLeft size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ArrowDownLeft</Text>
          </View>
          <View style={styles.item}>
            <Icon.ArrowDownRight size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ArrowDownRight</Text>
          </View>
          <View style={styles.item}>
            <Icon.ArrowDownUp size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ArrowDownUp</Text>
          </View>
          <View style={styles.item}>
            <Icon.ArrowDownward size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ArrowDownward</Text>
          </View>
          <View style={styles.item}>
            <Icon.ArrowExchange1 size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ArrowExchange1</Text>
          </View>
          <View style={styles.item}>
            <Icon.ArrowExchange2 size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ArrowExchange2</Text>
          </View>
          <View style={styles.item}>
            <Icon.ArrowForward size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ArrowForward</Text>
          </View>
          <View style={styles.item}>
            <Icon.ArrowLeft size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ArrowLeft</Text>
          </View>
          <View style={styles.item}>
            <Icon.ArrowDownRight size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ArrowDownRight</Text>
          </View>
          <View style={styles.item}>
            <Icon.ArrowUp size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ArrowUp</Text>
          </View>
          <View style={styles.item}>
            <Icon.ArrowUpLeft size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ArrowUpLeft</Text>
          </View>
          <View style={styles.item}>
            <Icon.ArrowUpward size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ArrowUpward</Text>
          </View>
          <View style={styles.item}>
            <Icon.Check size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Check</Text>
          </View>
          <View style={styles.item}>
            <Icon.ChevronDown size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ChevronDown</Text>
          </View>
          <View style={styles.item}>
            <Icon.ChevronLeft size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ChevronLeft</Text>
          </View>
          <View style={styles.item}>
            <Icon.ChevronRight size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ChevronRight</Text>
          </View>
          <View style={styles.item}>
            <Icon.ChevronUp size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ChevronUp</Text>
          </View>
          <View style={styles.item}>
            <Icon.Close size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Close</Text>
          </View>
          <View style={styles.item}>
            <Icon.Download size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Download</Text>
          </View>
          <View style={styles.item}>
            <Icon.Edit1 size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Edit1</Text>
          </View>
          <View style={styles.item}>
            <Icon.Edit2 size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Edit2</Text>
          </View>
          <View style={styles.item}>
            <Icon.Filter size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Filter</Text>
          </View>
          <View style={styles.item}>
            <Icon.Fullscreen size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Fullscreen</Text>
          </View>
          <View style={styles.item}>
            <Icon.Maximize size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Maximize</Text>
          </View>
          <View style={styles.item}>
            <Icon.Move size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Move</Text>
          </View>
          <View style={styles.item}>
            <Icon.NotificationActive size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>NotificationActive</Text>
          </View>
          <View style={styles.item}>
            <Icon.NotificationBell size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>NotificationBell</Text>
          </View>
          <View style={styles.item}>
            <Icon.NotificationCancel size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>NotificationCancel</Text>
          </View>
          <View style={styles.item}>
            <Icon.NotificationCheck size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>NotificationCheck</Text>
          </View>
          <View style={styles.item}>
            <Icon.NotificationDisabled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>NotificationDisabled</Text>
          </View>
          <View style={styles.item}>
            <Icon.NotificationMinus size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>NotificationMinus</Text>
          </View>
          <View style={styles.item}>
            <Icon.NotificationNew size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>NotificationNew</Text>
          </View>
          <View style={styles.item}>
            <Icon.NotificationPlus size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>NotificationPlus</Text>
          </View>
          <View style={styles.item}>
            <Icon.Plus size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Plus</Text>
          </View>
          <View style={styles.item}>
            <Icon.RemovePerson size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>RemovePerson</Text>
          </View>
          <View style={styles.item}>
            <Icon.Search size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Search</Text>
          </View>
          <View style={styles.item}>
            <Icon.SearchOff size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>SearchOff</Text>
          </View>
          <View style={styles.item}>
            <Icon.Setting size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Setting</Text>
          </View>
          <View style={styles.item}>
            <Icon.TrashBin size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>TrashBin</Text>
          </View>
          <View style={styles.item}>
            <Icon.UnfoldMore size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>UnfoldMore</Text>
          </View>
          <View style={styles.item}>
            <Icon.Upload size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Upload</Text>
          </View>
          <View style={styles.item}>
            <Icon.ZoomIn size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ZoomIn</Text>
          </View>
          <View style={styles.item}>
            <Icon.ZoomOut size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ZoomOut</Text>
          </View>
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
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 8,
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '33.33%',
    padding: 8,
  },
  label: {
    fontSize: FontSize[10],
    fontWeight: '500',
    color: Color.grey[1],
  },
});

export default IconExample;
