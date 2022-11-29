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
            <Icon.PhoneFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>PhoneFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.Account size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Account</Text>
          </View>
          <View style={styles.item}>
            <Icon.AccountBox size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>AccountBox</Text>
          </View>
          <View style={styles.item}>
            <Icon.AccountBoxFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>AccountBoxFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.AccountCircle size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>AccountCircle</Text>
          </View>
          <View style={styles.item}>
            <Icon.AccountCircleFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>AccountCircleFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.AccountFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>AccountFilled</Text>
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
            <Icon.AddTime size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>AddTime</Text>
          </View>
          <View style={styles.item}>
            <Icon.AddTimeFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>AddTimeFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.Apps size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Apps</Text>
          </View>
          <View style={styles.item}>
            <Icon.AppsFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>AppsFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.ArrowBackward size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ArrowBackward</Text>
          </View>
          <View style={styles.item}>
            <Icon.ArrowDiagonalDownLeftCircle
              size="24"
              color={Color.yellow[1]}
            />
            <Text style={styles.label}>ArrowDiagonalDownLeftCircle</Text>
          </View>
          <View style={styles.item}>
            <Icon.ArrowDiagonalDownLeftCircleFilled
              size="24"
              color={Color.yellow[1]}
            />
            <Text style={styles.label}>ArrowDiagonalDownLeftCircleFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.ArrowDiagonalUpLeftCircle size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ArrowDiagonalUpLeftCircle</Text>
          </View>
          <View style={styles.item}>
            <Icon.ArrowDiagonalUpLeftCircleFilled
              size="24"
              color={Color.yellow[1]}
            />
            <Text style={styles.label}>ArrowDiagonalUpLeftCircleFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.ArrowDiagonalUpRightCircle
              size="24"
              color={Color.yellow[1]}
            />
            <Text style={styles.label}>ArrowDiagonalUpRightCircle</Text>
          </View>
          <View style={styles.item}>
            <Icon.ArrowDiagonalUpRightCircleFilled
              size="24"
              color={Color.yellow[1]}
            />
            <Text style={styles.label}>ArrowDiagonalUpRightCircleFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.ArrowDown size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ArrowDown</Text>
          </View>
          <View style={styles.item}>
            <Icon.ArrowDownCircle size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ArrowDownCircle</Text>
          </View>
          <View style={styles.item}>
            <Icon.ArrowDownCircleFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ArrowDownCircleFilled</Text>
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
            <Icon.ArrowExchange3 size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ArrowExchange3</Text>
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
            <Icon.ArrowLeftCircle size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ArrowLeftCircle</Text>
          </View>
          <View style={styles.item}>
            <Icon.ArrowLeftCircleFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ArrowLeftCircleFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.ArrowRight size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ArrowRight</Text>
          </View>
          <View style={styles.item}>
            <Icon.ArrowRightCircle size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ArrowRightCircle</Text>
          </View>
          <View style={styles.item}>
            <Icon.ArrowRightCircleFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ArrowRightCircleFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.ArrowUp size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ArrowUp</Text>
          </View>
          <View style={styles.item}>
            <Icon.ArrowUpCircle size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ArrowUpCircle</Text>
          </View>
          <View style={styles.item}>
            <Icon.ArrowUpCircleFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ArrowUpCircleFilled</Text>
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
            <Icon.Bank size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Bank</Text>
          </View>
          <View style={styles.item}>
            <Icon.BankFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>BankFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.BestSeller1 size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>BestSeller1</Text>
          </View>
          <View style={styles.item}>
            <Icon.BestSeller1Filled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>BestSeller1Filled</Text>
          </View>
          <View style={styles.item}>
            <Icon.BestSeller2 size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>BestSeller2</Text>
          </View>
          <View style={styles.item}>
            <Icon.BestSeller2Filled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>BestSeller2Filled</Text>
          </View>
          <View style={styles.item}>
            <Icon.Block size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Block</Text>
          </View>
          <View style={styles.item}>
            <Icon.Book1 size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Book1</Text>
          </View>
          <View style={styles.item}>
            <Icon.Book1Filled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Book1Filled</Text>
          </View>
          <View style={styles.item}>
            <Icon.Book2 size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Book2</Text>
          </View>
          <View style={styles.item}>
            <Icon.Book2Filled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Book2Filled</Text>
          </View>
          <View style={styles.item}>
            <Icon.Bookmark size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Bookmark</Text>
          </View>
          <View style={styles.item}>
            <Icon.BookmarkFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>BookmarkFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.BurgerMenu1 size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>BurgerMenu1</Text>
          </View>
          <View style={styles.item}>
            <Icon.BurgerMenu2 size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>BurgerMenu2</Text>
          </View>
          <View style={styles.item}>
            <Icon.BurgerMenu3 size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>BurgerMenu3</Text>
          </View>
          <View style={styles.item}>
            <Icon.Calculator1 size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Calculator1</Text>
          </View>
          <View style={styles.item}>
            <Icon.Calculator1Filled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Calculator1Filled</Text>
          </View>
          <View style={styles.item}>
            <Icon.Calculator2 size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Calculator2</Text>
          </View>
          <View style={styles.item}>
            <Icon.Calendar1 size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Calendar1</Text>
          </View>
          <View style={styles.item}>
            <Icon.Calendar1Filled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Calendar1Filled</Text>
          </View>
          <View style={styles.item}>
            <Icon.Calendar2 size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Calendar2</Text>
          </View>
          <View style={styles.item}>
            <Icon.Calendar2Filled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Calendar2Filled</Text>
          </View>
          <View style={styles.item}>
            <Icon.CalendarCancel size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>CalendarCancel</Text>
          </View>
          <View style={styles.item}>
            <Icon.CalendarCancelFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>CalendarCancelFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.CalendarCheck size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>CalendarCheck</Text>
          </View>
          <View style={styles.item}>
            <Icon.CalendarCheckFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>CalendarCheckFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.CalendarMinus size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>CalendarMinus</Text>
          </View>
          <View style={styles.item}>
            <Icon.CalendarMinusFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>CalendarMinusFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.CalendarNumber1 size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>CalendarNumber1</Text>
          </View>
          <View style={styles.item}>
            <Icon.CalendarNumber1Filled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>CalendarNumber1Filled</Text>
          </View>
          <View style={styles.item}>
            <Icon.CalendarNumber2 size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>CalendarNumber2</Text>
          </View>
          <View style={styles.item}>
            <Icon.CalendarNumber2Filled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>CalendarNumber2Filled</Text>
          </View>
          <View style={styles.item}>
            <Icon.CalendarPlus size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>CalendarPlus</Text>
          </View>
          <View style={styles.item}>
            <Icon.CalendarPlusFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>CalendarPlusFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.Camera1 size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Camera1</Text>
          </View>
          <View style={styles.item}>
            <Icon.Camera1Filled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Camera1Filled</Text>
          </View>
          <View style={styles.item}>
            <Icon.Camera2 size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Camera2</Text>
          </View>
          <View style={styles.item}>
            <Icon.Camera2Filled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Camera2Filled</Text>
          </View>
          <View style={styles.item}>
            <Icon.Camera3 size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Camera3</Text>
          </View>
          <View style={styles.item}>
            <Icon.Camera3Filled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Camera3Filled</Text>
          </View>
          <View style={styles.item}>
            <Icon.ChatBubble size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ChatBubble</Text>
          </View>
          <View style={styles.item}>
            <Icon.ChatBubbleFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ChatBubbleFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.ChatMessage size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ChatMessage</Text>
          </View>
          <View style={styles.item}>
            <Icon.ChatMessageFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ChatMessageFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.ChatMessageForward size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ChatMessageForward</Text>
          </View>
          <View style={styles.item}>
            <Icon.ChatMessageForwardFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ChatMessageForwardFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.ChatMessageNotification size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ChatMessageNotification</Text>
          </View>
          <View style={styles.item}>
            <Icon.ChatMessageNotificationFilled
              size="24"
              color={Color.yellow[1]}
            />
            <Text style={styles.label}>ChatMessageNotificationFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.ChatMessageRead size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ChatMessageRead</Text>
          </View>
          <View style={styles.item}>
            <Icon.ChatMessageReadFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ChatMessageReadFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.Check size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Check</Text>
          </View>
          <View style={styles.item}>
            <Icon.CheckBox size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>CheckBox</Text>
          </View>
          <View style={styles.item}>
            <Icon.CheckBoxBlank size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>CheckBoxBlank</Text>
          </View>
          <View style={styles.item}>
            <Icon.CheckBoxBlankFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>CheckBoxBlankFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.CheckBoxFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>CheckBoxFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.CheckCircle size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>CheckCircle</Text>
          </View>
          <View style={styles.item}>
            <Icon.CheckCircleFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>CheckCircleFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.ChevronArrowBackwardCircle
              size="24"
              color={Color.yellow[1]}
            />
            <Text style={styles.label}>ChevronArrowBackwardCircle</Text>
          </View>
          <View style={styles.item}>
            <Icon.ChevronArrowBackwardCircleFilled
              size="24"
              color={Color.yellow[1]}
            />
            <Text style={styles.label}>ChevronArrowBackwardCircleFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.ChevronArrowDownCircle size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ChevronArrowDownCircle</Text>
          </View>
          <View style={styles.item}>
            <Icon.ChevronArrowDownCircleFilled
              size="24"
              color={Color.yellow[1]}
            />
            <Text style={styles.label}>ChevronArrowDownCircleFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.ChevronArrowDownwardCircle
              size="24"
              color={Color.yellow[1]}
            />
            <Text style={styles.label}>ChevronArrowDownwardCircle</Text>
          </View>
          <View style={styles.item}>
            <Icon.ChevronArrowDownwardCircleFilled
              size="24"
              color={Color.yellow[1]}
            />
            <Text style={styles.label}>ChevronArrowDownwardCircleFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.ChevronArrowForwardCircle size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ChevronArrowForwardCircle</Text>
          </View>
          <View style={styles.item}>
            <Icon.ChevronArrowForwardCircleFilled
              size="24"
              color={Color.yellow[1]}
            />
            <Text style={styles.label}>ChevronArrowForwardCircleFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.ChevronArrowUpCircle size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ChevronArrowUpCircle</Text>
          </View>
          <View style={styles.item}>
            <Icon.ChevronArrowUpCircleFilled
              size="24"
              color={Color.yellow[1]}
            />
            <Text style={styles.label}>ChevronArrowUpCircleFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.ChevronArrowUpwardCircle size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ChevronArrowUpwardCircle</Text>
          </View>
          <View style={styles.item}>
            <Icon.ChevronArrowUpwardCircleFilled
              size="24"
              color={Color.yellow[1]}
            />
            <Text style={styles.label}>ChevronArrowUpwardCircleFilled</Text>
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
            <Icon.ChevronLeftCircle size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ChevronLeftCircle</Text>
          </View>
          <View style={styles.item}>
            <Icon.ChevronLeftCircleFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ChevronLeftCircleFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.ChevronRight size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ChevronRight</Text>
          </View>
          <View style={styles.item}>
            <Icon.ChevronRightCircle size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ChevronRightCircle</Text>
          </View>
          <View style={styles.item}>
            <Icon.ChevronRightCircleFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ChevronRightCircleFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.ChevronUp size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ChevronUp</Text>
          </View>
          <View style={styles.item}>
            <Icon.CircleClose size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>CircleClose</Text>
          </View>
          <View style={styles.item}>
            <Icon.CircleCloseFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>CircleCloseFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.Close size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Close</Text>
          </View>
          <View style={styles.item}>
            <Icon.CloseBox size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>CloseBox</Text>
          </View>
          <View style={styles.item}>
            <Icon.CloseBoxFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>CloseBoxFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.Coupon1 size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Coupon1</Text>
          </View>
          <View style={styles.item}>
            <Icon.Coupon1Filled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Coupon1Filled</Text>
          </View>
          <View style={styles.item}>
            <Icon.Coupon2 size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Coupon2</Text>
          </View>
          <View style={styles.item}>
            <Icon.Coupon2Filled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Coupon2Filled</Text>
          </View>
          <View style={styles.item}>
            <Icon.Coupon3 size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Coupon3</Text>
          </View>
          <View style={styles.item}>
            <Icon.Coupon3Filled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Coupon3Filled</Text>
          </View>
          <View style={styles.item}>
            <Icon.Coupon4 size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Coupon4</Text>
          </View>
          <View style={styles.item}>
            <Icon.Coupon4Filled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Coupon4Filled</Text>
          </View>
          <View style={styles.item}>
            <Icon.CreditCard1 size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>CreditCard1</Text>
          </View>
          <View style={styles.item}>
            <Icon.CreditCard1Filled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>CreditCard1Filled</Text>
          </View>
          <View style={styles.item}>
            <Icon.CreditCard2 size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>CreditCard2</Text>
          </View>
          <View style={styles.item}>
            <Icon.CreditCard2Filled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>CreditCard2Filled</Text>
          </View>
          <View style={styles.item}>
            <Icon.DesktopMonitor size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>DesktopMonitor</Text>
          </View>
          <View style={styles.item}>
            <Icon.DesktopMonitorFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>DesktopMonitorFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.Document size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Document</Text>
          </View>
          <View style={styles.item}>
            <Icon.DocumentFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>DocumentFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.Dollar size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Dollar</Text>
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
            <Icon.Edit1Filled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Edit1Filled</Text>
          </View>
          <View style={styles.item}>
            <Icon.Edit2 size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Edit2</Text>
          </View>
          <View style={styles.item}>
            <Icon.Edit2Filled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Edit2Filled</Text>
          </View>
          <View style={styles.item}>
            <Icon.Email size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Email</Text>
          </View>
          <View style={styles.item}>
            <Icon.EmailAlternate size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>EmailAlternate</Text>
          </View>
          <View style={styles.item}>
            <Icon.EmailAttach size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>EmailAttach</Text>
          </View>
          <View style={styles.item}>
            <Icon.EmailAttachFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>EmailAttachFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.EmailCheck size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>EmailCheck</Text>
          </View>
          <View style={styles.item}>
            <Icon.EmailCheckFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>EmailCheckFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.EmailFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>EmailFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.EmailForward size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>EmailForward</Text>
          </View>
          <View style={styles.item}>
            <Icon.EmailForwardFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>EmailForwardFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.EmailNotification size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>EmailNotification</Text>
          </View>
          <View style={styles.item}>
            <Icon.EmailNotificationFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>EmailNotificationFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.Euro size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Euro</Text>
          </View>
          <View style={styles.item}>
            <Icon.ExitFullScreen size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ExitFullScreen</Text>
          </View>
          <View style={styles.item}>
            <Icon.Eye size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Eye</Text>
          </View>
          <View style={styles.item}>
            <Icon.EyeDisabled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>EyeDisabled</Text>
          </View>
          <View style={styles.item}>
            <Icon.EyeDisabledFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>EyeDisabledFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.EyeFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>EyeFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.FaceScan size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>FaceScan</Text>
          </View>
          <View style={styles.item}>
            <Icon.Favorite size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Favorite</Text>
          </View>
          <View style={styles.item}>
            <Icon.FavoriteFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>FavoriteFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.FilmReel size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>FilmReel</Text>
          </View>
          <View style={styles.item}>
            <Icon.FilmReelFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>FilmReelFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.Filter size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Filter</Text>
          </View>
          <View style={styles.item}>
            <Icon.FilterFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>FilterFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.FlashOff size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>FlashOff</Text>
          </View>
          <View style={styles.item}>
            <Icon.FlashOffFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>FlashOffFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.FlashOn size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>FlashOn</Text>
          </View>
          <View style={styles.item}>
            <Icon.FlashOnFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>FlashOnFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.FullScreen size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>FullScreen</Text>
          </View>
          <View style={styles.item}>
            <Icon.Fullscreen size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Fullscreen</Text>
          </View>
          <View style={styles.item}>
            <Icon.Glasses1 size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Glasses1</Text>
          </View>
          <View style={styles.item}>
            <Icon.Glasses1Filled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Glasses1Filled</Text>
          </View>
          <View style={styles.item}>
            <Icon.Glasses2 size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Glasses2</Text>
          </View>
          <View style={styles.item}>
            <Icon.Glasses2Filled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Glasses2Filled</Text>
          </View>
          <View style={styles.item}>
            <Icon.Group size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Group</Text>
          </View>
          <View style={styles.item}>
            <Icon.GroupFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>GroupFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.Headphone1 size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Headphone1</Text>
          </View>
          <View style={styles.item}>
            <Icon.Headphone1Filled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Headphone1Filled</Text>
          </View>
          <View style={styles.item}>
            <Icon.Headphone2 size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Headphone2</Text>
          </View>
          <View style={styles.item}>
            <Icon.Headphone2Filled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Headphone2Filled</Text>
          </View>
          <View style={styles.item}>
            <Icon.History size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>History</Text>
          </View>
          <View style={styles.item}>
            <Icon.History2 size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>History2</Text>
          </View>
          <View style={styles.item}>
            <Icon.History5Filled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>History5Filled</Text>
          </View>
          <View style={styles.item}>
            <Icon.HistoryFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>HistoryFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.Home1 size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Home1</Text>
          </View>
          <View style={styles.item}>
            <Icon.Home1Filled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Home1Filled</Text>
          </View>
          <View style={styles.item}>
            <Icon.Hourglass size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Hourglass</Text>
          </View>
          <View style={styles.item}>
            <Icon.HourglassFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>HourglassFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.IdCard size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>IdCard</Text>
          </View>
          <View style={styles.item}>
            <Icon.IdCardFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>IdCardFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.Information size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Information</Text>
          </View>
          <View style={styles.item}>
            <Icon.InformationFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>InformationFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.KeyDisabled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>KeyDisabled</Text>
          </View>
          <View style={styles.item}>
            <Icon.KeyDisabledFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>KeyDisabledFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.Launch size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Launch</Text>
          </View>
          <View style={styles.item}>
            <Icon.LaunchFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>LaunchFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.Like size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Like</Text>
          </View>
          <View style={styles.item}>
            <Icon.LikeFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>LikeFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.Loan size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Loan</Text>
          </View>
          <View style={styles.item}>
            <Icon.LoanFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>LoanFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.Location1 size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Location1</Text>
          </View>
          <View style={styles.item}>
            <Icon.Location1Filled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Location1Filled</Text>
          </View>
          <View style={styles.item}>
            <Icon.Location2 size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Location2</Text>
          </View>
          <View style={styles.item}>
            <Icon.Location2Filled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Location2Filled</Text>
          </View>
          <View style={styles.item}>
            <Icon.Lock size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Lock</Text>
          </View>
          <View style={styles.item}>
            <Icon.LockDisabled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>LockDisabled</Text>
          </View>
          <View style={styles.item}>
            <Icon.LockDisabledFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>LockDisabledFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.LockFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>LockFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.LockOpen size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>LockOpen</Text>
          </View>
          <View style={styles.item}>
            <Icon.LockOpenFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>LockOpenFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.Maximize size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Maximize</Text>
          </View>
          <View style={styles.item}>
            <Icon.MegaphoneSpeaker size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>MegaphoneSpeaker</Text>
          </View>
          <View style={styles.item}>
            <Icon.MegaphoneSpeakerFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>MegaphoneSpeakerFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.Microphone1 size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Microphone1</Text>
          </View>
          <View style={styles.item}>
            <Icon.Microphone1Filled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Microphone1Filled</Text>
          </View>
          <View style={styles.item}>
            <Icon.Microphone2 size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Microphone2</Text>
          </View>
          <View style={styles.item}>
            <Icon.Microphone2Filled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Microphone2Filled</Text>
          </View>
          <View style={styles.item}>
            <Icon.Minus size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Minus</Text>
          </View>
          <View style={styles.item}>
            <Icon.MinusBox size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>MinusBox</Text>
          </View>
          <View style={styles.item}>
            <Icon.MinusBoxFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>MinusBoxFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.MinusCircle size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>MinusCircle</Text>
          </View>
          <View style={styles.item}>
            <Icon.MinusCircleFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>MinusCircleFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.MinusTime size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>MinusTime</Text>
          </View>
          <View style={styles.item}>
            <Icon.MinusTimeFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>MinusTimeFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.MobilePhone size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>MobilePhone</Text>
          </View>
          <View style={styles.item}>
            <Icon.MobilePhoneFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>MobilePhoneFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.MoneyBag size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>MoneyBag</Text>
          </View>
          <View style={styles.item}>
            <Icon.MoneyBag2 size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>MoneyBag2</Text>
          </View>
          <View style={styles.item}>
            <Icon.MoneyBag2Filled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>MoneyBag2Filled</Text>
          </View>
          <View style={styles.item}>
            <Icon.MoneyBagFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>MoneyBagFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.MoneyCoinDollar size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>MoneyCoinDollar</Text>
          </View>
          <View style={styles.item}>
            <Icon.MoneyCoinDollarFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>MoneyCoinDollarFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.MoneyPaper size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>MoneyPaper</Text>
          </View>
          <View style={styles.item}>
            <Icon.MoneyPaperFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>MoneyPaperFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.MoreHorizontal size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>MoreHorizontal</Text>
          </View>
          <View style={styles.item}>
            <Icon.MoreVertical size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>MoreVertical</Text>
          </View>
          <View style={styles.item}>
            <Icon.Mortage size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Mortage</Text>
          </View>
          <View style={styles.item}>
            <Icon.MortageFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>MortageFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.Move size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Move</Text>
          </View>
          <View style={styles.item}>
            <Icon.Music1 size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Music1</Text>
          </View>
          <View style={styles.item}>
            <Icon.Music1Filled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Music1Filled</Text>
          </View>
          <View style={styles.item}>
            <Icon.Music2 size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Music2</Text>
          </View>
          <View style={styles.item}>
            <Icon.Music2Filled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Music2Filled</Text>
          </View>
          <View style={styles.item}>
            <Icon.NotificationActive size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>NotificationActive</Text>
          </View>
          <View style={styles.item}>
            <Icon.NotificationActiveFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>NotificationActiveFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.NotificationBell size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>NotificationBell</Text>
          </View>
          <View style={styles.item}>
            <Icon.NotificationBellCancelFilled
              size="24"
              color={Color.yellow[1]}
            />
            <Text style={styles.label}>NotificationBellCancelFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.NotificationBellCheckFilled
              size="24"
              color={Color.yellow[1]}
            />
            <Text style={styles.label}>NotificationBellCheckFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.NotificationBellDisabledFilled
              size="24"
              color={Color.yellow[1]}
            />
            <Text style={styles.label}>NotificationBellDisabledFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.NotificationBellFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>NotificationBellFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.NotificationBellMinusFilled
              size="24"
              color={Color.yellow[1]}
            />
            <Text style={styles.label}>NotificationBellMinusFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.NotificationBellNewFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>NotificationBellNewFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.NotificationBellPlusFilled
              size="24"
              color={Color.yellow[1]}
            />
            <Text style={styles.label}>NotificationBellPlusFilled</Text>
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
            <Icon.Package size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Package</Text>
          </View>
          <View style={styles.item}>
            <Icon.PackageFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>PackageFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.PersonAdd1Filled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>PersonAdd1Filled</Text>
          </View>
          <View style={styles.item}>
            <Icon.PersonAdd2Filled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>PersonAdd2Filled</Text>
          </View>
          <View style={styles.item}>
            <Icon.PersonRemove1Filled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>PersonRemove1Filled</Text>
          </View>
          <View style={styles.item}>
            <Icon.Phone size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Phone</Text>
          </View>
          <View style={styles.item}>
            <Icon.PhoneCall size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>PhoneCall</Text>
          </View>
          <View style={styles.item}>
            <Icon.PhoneCallFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>PhoneCallFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.PhoneCallForward size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>PhoneCallForward</Text>
          </View>
          <View style={styles.item}>
            <Icon.PhoneCallForwardFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>PhoneCallForwardFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.PhoneCallback size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>PhoneCallback</Text>
          </View>
          <View style={styles.item}>
            <Icon.PhoneCallbackFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>PhoneCallbackFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.PhoneDisabled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>PhoneDisabled</Text>
          </View>
          <View style={styles.item}>
            <Icon.PhoneDisabledFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>PhoneDisabledFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.PhoneInTalk size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>PhoneInTalk</Text>
          </View>
          <View style={styles.item}>
            <Icon.PhoneInTalkFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>PhoneInTalkFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.PhonePause size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>PhonePause</Text>
          </View>
          <View style={styles.item}>
            <Icon.PhonePauseFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>PhonePauseFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.PhoneSettings size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>PhoneSettings</Text>
          </View>
          <View style={styles.item}>
            <Icon.PhoneSettingsFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>PhoneSettingsFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.PictureImage1 size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>PictureImage1</Text>
          </View>
          <View style={styles.item}>
            <Icon.PictureImage1Filled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>PictureImage1Filled</Text>
          </View>
          <View style={styles.item}>
            <Icon.PictureImage2 size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>PictureImage2</Text>
          </View>
          <View style={styles.item}>
            <Icon.PictureImage2Filled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>PictureImage2Filled</Text>
          </View>
          <View style={styles.item}>
            <Icon.Play size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Play</Text>
          </View>
          <View style={styles.item}>
            <Icon.PlayFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>PlayFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.Plus size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Plus</Text>
          </View>
          <View style={styles.item}>
            <Icon.PlusBox size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>PlusBox</Text>
          </View>
          <View style={styles.item}>
            <Icon.PlusBoxFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>PlusBoxFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.PlusCircle size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>PlusCircle</Text>
          </View>
          <View style={styles.item}>
            <Icon.PlusCircleFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>PlusCircleFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.Present size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Present</Text>
          </View>
          <View style={styles.item}>
            <Icon.PresentFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>PresentFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.PriceTag size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>PriceTag</Text>
          </View>
          <View style={styles.item}>
            <Icon.PriceTagFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>PriceTagFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.ProcessFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ProcessFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.QrCodeScan size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>QrCodeScan</Text>
          </View>
          <View style={styles.item}>
            <Icon.Question size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Question</Text>
          </View>
          <View style={styles.item}>
            <Icon.QuestionFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>QuestionFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.Receipt1 size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Receipt1</Text>
          </View>
          <View style={styles.item}>
            <Icon.Receipt1Filled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Receipt1Filled</Text>
          </View>
          <View style={styles.item}>
            <Icon.Receipt2 size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Receipt2</Text>
          </View>
          <View style={styles.item}>
            <Icon.Receipt2Filled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Receipt2Filled</Text>
          </View>
          <View style={styles.item}>
            <Icon.ReceiptPaperBill size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ReceiptPaperBill</Text>
          </View>
          <View style={styles.item}>
            <Icon.ReceiptPaperBillFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ReceiptPaperBillFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.RefreshLeftUndo size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>RefreshLeftUndo</Text>
          </View>
          <View style={styles.item}>
            <Icon.RefreshRightRedo size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>RefreshRightRedo</Text>
          </View>
          <View style={styles.item}>
            <Icon.RemovePerson size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>RemovePerson</Text>
          </View>
          <View style={styles.item}>
            <Icon.SafeDeposit size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>SafeDeposit</Text>
          </View>
          <View style={styles.item}>
            <Icon.SafeDepositFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>SafeDepositFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.Scan size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Scan</Text>
          </View>
          <View style={styles.item}>
            <Icon.Screen size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Screen</Text>
          </View>
          <View style={styles.item}>
            <Icon.ScreenFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ScreenFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.Search size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Search</Text>
          </View>
          <View style={styles.item}>
            <Icon.SearchChekcmark size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>SearchChekcmark</Text>
          </View>
          <View style={styles.item}>
            <Icon.SearchChekcmarkFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>SearchChekcmarkFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.SearchFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>SearchFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.SearchOff size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>SearchOff</Text>
          </View>
          <View style={styles.item}>
            <Icon.SearchOffFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>SearchOffFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.Security size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Security</Text>
          </View>
          <View style={styles.item}>
            <Icon.SecurityFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>SecurityFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.Setting size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Setting</Text>
          </View>
          <View style={styles.item}>
            <Icon.SettingFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>SettingFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.Shield1 size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Shield1</Text>
          </View>
          <View style={styles.item}>
            <Icon.Shield1Filled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Shield1Filled</Text>
          </View>
          <View style={styles.item}>
            <Icon.Shield2 size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Shield2</Text>
          </View>
          <View style={styles.item}>
            <Icon.Shield2Filled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Shield2Filled</Text>
          </View>
          <View style={styles.item}>
            <Icon.ShieldCheckmark size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ShieldCheckmark</Text>
          </View>
          <View style={styles.item}>
            <Icon.ShieldCheckmarkFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ShieldCheckmarkFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.ShieldDisabled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ShieldDisabled</Text>
          </View>
          <View style={styles.item}>
            <Icon.ShieldDisabledFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ShieldDisabledFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.ShoppingBag size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ShoppingBag</Text>
          </View>
          <View style={styles.item}>
            <Icon.ShoppingBagFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ShoppingBagFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.ShoppingBasket size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ShoppingBasket</Text>
          </View>
          <View style={styles.item}>
            <Icon.ShoppingBasketFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ShoppingBasketFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.ShoppingCart size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ShoppingCart</Text>
          </View>
          <View style={styles.item}>
            <Icon.ShoppingCartAdd size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ShoppingCartAdd</Text>
          </View>
          <View style={styles.item}>
            <Icon.ShoppingCartAddFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ShoppingCartAddFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.ShoppingCartFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ShoppingCartFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.ShoppingCartMinus size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ShoppingCartMinus</Text>
          </View>
          <View style={styles.item}>
            <Icon.Star size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Star</Text>
          </View>
          <View style={styles.item}>
            <Icon.StarFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>StarFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.SyncReloadLeft size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>SyncReloadLeft</Text>
          </View>
          <View style={styles.item}>
            <Icon.TableClock size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>TableClock</Text>
          </View>
          <View style={styles.item}>
            <Icon.TableClockDisabled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>TableClockDisabled</Text>
          </View>
          <View style={styles.item}>
            <Icon.TableClockDisabledFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>TableClockDisabledFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.TableClockFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>TableClockFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.TabletMobile size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>TabletMobile</Text>
          </View>
          <View style={styles.item}>
            <Icon.TabletMobileFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>TabletMobileFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.Target1 size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Target1</Text>
          </View>
          <View style={styles.item}>
            <Icon.Target1Filled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Target1Filled</Text>
          </View>
          <View style={styles.item}>
            <Icon.Target2 size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Target2</Text>
          </View>
          <View style={styles.item}>
            <Icon.Tax1 size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Tax1</Text>
          </View>
          <View style={styles.item}>
            <Icon.Tax1Filled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Tax1Filled</Text>
          </View>
          <View style={styles.item}>
            <Icon.Tax2 size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Tax2</Text>
          </View>
          <View style={styles.item}>
            <Icon.Tax2Filled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Tax2Filled</Text>
          </View>
          <View style={styles.item}>
            <Icon.Time2 size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Time2</Text>
          </View>
          <View style={styles.item}>
            <Icon.Time2Filled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Time2Filled</Text>
          </View>
          <View style={styles.item}>
            <Icon.TrashBin size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>TrashBin</Text>
          </View>
          <View style={styles.item}>
            <Icon.TrashBinFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>TrashBinFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.TrendDown1 size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>TrendDown1</Text>
          </View>
          <View style={styles.item}>
            <Icon.TrendDown1Filled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>TrendDown1Filled</Text>
          </View>
          <View style={styles.item}>
            <Icon.TrendDown2 size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>TrendDown2</Text>
          </View>
          <View style={styles.item}>
            <Icon.TrendUp1 size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>TrendUp1</Text>
          </View>
          <View style={styles.item}>
            <Icon.TrendUp1Filled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>TrendUp1Filled</Text>
          </View>
          <View style={styles.item}>
            <Icon.TrendUp2 size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>TrendUp2</Text>
          </View>
          <View style={styles.item}>
            <Icon.Umbrella size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Umbrella</Text>
          </View>
          <View style={styles.item}>
            <Icon.UmbrellaFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>UmbrellaFilled</Text>
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
            <Icon.Video size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Video</Text>
          </View>
          <View style={styles.item}>
            <Icon.VideoFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>VideoFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.VideoPlayer size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>VideoPlayer</Text>
          </View>
          <View style={styles.item}>
            <Icon.VideoPlayerFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>VideoPlayerFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.Wall size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Wall</Text>
          </View>
          <View style={styles.item}>
            <Icon.WallClock1 size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>WallClock1</Text>
          </View>
          <View style={styles.item}>
            <Icon.WallClock1Filled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>WallClock1Filled</Text>
          </View>
          <View style={styles.item}>
            <Icon.WallClock2 size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>WallClock2</Text>
          </View>
          <View style={styles.item}>
            <Icon.WallClock2Filled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>WallClock2Filled</Text>
          </View>
          <View style={styles.item}>
            <Icon.WallFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>WallFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.Wallet size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Wallet</Text>
          </View>
          <View style={styles.item}>
            <Icon.WalletFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>WalletFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.WarningCircle size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>WarningCircle</Text>
          </View>
          <View style={styles.item}>
            <Icon.WarningFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>WarningFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.WarningTriangle size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>WarningTriangle</Text>
          </View>
          <View style={styles.item}>
            <Icon.WarningTriangleFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>WarningTriangleFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.Yen size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>Yen</Text>
          </View>
          <View style={styles.item}>
            <Icon.ZoomIn size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ZoomIn</Text>
          </View>
          <View style={styles.item}>
            <Icon.ZoomInFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ZoomInFilled</Text>
          </View>
          <View style={styles.item}>
            <Icon.ZoomOut size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ZoomOut</Text>
          </View>
          <View style={styles.item}>
            <Icon.ZoomOutFilled size="24" color={Color.yellow[1]} />
            <Text style={styles.label}>ZoomOutFilled</Text>
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
