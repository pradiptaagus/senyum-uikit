import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  Animated,
  FlatList,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { FontSize } from '../../base/Font';
import { Color } from '../../base/Color';
import { Spacing } from '../../base/Spacing';
import { Icon } from '../../base/Icon';

export type MonthLabel = {
  full: string;
  abbr: string;
};

type DatepickerProps = {
  visible?: boolean;
  dismissable?: boolean;
  testID?: string;
  onDismiss?: () => void;
  weekLabels?: string[];
  monthLabels?: MonthLabel[];
  value?: Date;
  handleConfirm: (val?: Date) => void;
  handleCancel: () => void;
  cancelButtonText?: string;
  confirmButtonText?: string;
  headerStyle?: StyleProp<ViewStyle>;
  headerYearStyle?: StyleProp<TextStyle>;
  headerDateStyle?: StyleProp<TextStyle>;
  labelStyle?: StyleProp<TextStyle>;
  weekLabelStyle?: StyleProp<TextStyle>;
  dateStyle?: StyleProp<TextStyle>;
  activeStyle?: StyleProp<ViewStyle>;
  activeTextStyle?: StyleProp<TextStyle>;
  confirmTextStyle?: StyleProp<TextStyle>;
  prevIcon?: React.ReactNode;
  nextIcon?: React.ReactNode;
};

const _weekLabels = ['M', 'S', 'S', 'R', 'K', 'J', 'S'];

const _monthLabels: MonthLabel[] = [
  { full: 'Januari', abbr: 'Jan' },
  { full: 'Februari', abbr: 'Feb' },
  { full: 'Maret', abbr: 'Mar' },
  { full: 'April', abbr: 'Apr' },
  { full: 'Mei', abbr: 'Mei' },
  { full: 'Juni', abbr: 'Jun' },
  { full: 'Juli', abbr: 'Jul' },
  { full: 'Agustus', abbr: 'Agu' },
  { full: 'September', abbr: 'Sep' },
  { full: 'Oktober', abbr: 'Okt' },
  { full: 'November', abbr: 'Nov' },
  { full: 'Desember', abbr: 'Des' },
];

/**
 * Datepicker component
 * @param {DatepickerProps} props
 * @returns JSX.Element
 */
const Datepicker = (props: DatepickerProps) => {
  const {
    visible,
    dismissable = true,
    testID,
    onDismiss,
    weekLabels = _weekLabels,
    monthLabels = _monthLabels,
    value,
    handleConfirm,
    handleCancel,
    cancelButtonText = 'Batal',
    confirmButtonText = 'OK',
    headerStyle,
    headerYearStyle,
    headerDateStyle,
    labelStyle,
    weekLabelStyle,
    dateStyle,
    activeStyle,
    activeTextStyle,
    confirmTextStyle,
    prevIcon,
    nextIcon,
  } = props;

  const [currentYear, setCurrentYear] = useState<number | undefined>(
    new Date().getFullYear()
  );

  const [currentMonth, setCurrentMonth] = useState<number | undefined>(
    new Date().getMonth()
  );

  const [currentDate, setCurrentDate] = useState<number | undefined>(
    new Date().getDate()
  );

  const [intention, setIntention] = useState<'date' | 'month' | 'year'>('date');

  const flatlistRef = useRef<FlatList>(null);

  const yearAnim = useRef(new Animated.Value(0)).current;

  const monthAnim = useRef(new Animated.Value(0)).current;

  const dateAnim = useRef(new Animated.Value(0)).current;

  const overlayAnim = useRef(new Animated.Value(0)).current;

  const firstDay = useMemo(() => {
    if (currentYear && currentMonth) {
      return new Date(currentYear, currentMonth).getDay();
    }
    return undefined;
  }, [currentMonth, currentYear]);

  const daysInMonth = useMemo(() => {
    if (currentYear && currentMonth) {
      return 32 - new Date(currentYear, currentMonth, 32).getDate();
    }
    return undefined;
  }, [currentMonth, currentYear]);

  const label = useCallback(
    (full: boolean = false) => {
      let res: string = '';
      if (currentYear !== undefined) {
        res = res + currentYear;
      }
      if (currentMonth !== undefined) {
        const month = monthLabels.find((_, i) => i === currentMonth);
        res = res + ' ' + (full ? month?.full : month?.abbr);
      }
      if (currentDate !== undefined) {
        res = res + ' ' + currentDate;
      }
      return res;
    },
    [currentDate, currentMonth, currentYear, monthLabels]
  );

  const dateList = useMemo(() => {
    const arr: number[][] & string[][] = [];
    let date = 1;
    for (let i = 0; i < 6; i++) {
      const row: number[] & string[] = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && firstDay && j < firstDay) {
          row.push('');
        } else if (daysInMonth && date > daysInMonth) {
          row.push('');
        } else {
          row.push(date);
          date++;
        }
      }
      arr.push(row);
    }
    console.log(arr);
    return arr;
  }, [daysInMonth, firstDay]);

  const isToday = useCallback((year: number, month: number, date: number) => {
    const _date = new Date();
    if (
      year === _date.getFullYear() &&
      month === _date.getMonth() &&
      date === _date.getDate()
    ) {
      return true;
    }
    return false;
  }, []);

  const isCurrentMonth = useCallback((month: number) => {
    const _date = new Date();
    return _date.getMonth() === month;
  }, []);

  const date = useMemo(() => {
    if (currentYear && currentMonth && currentDate) {
      return new Date(currentYear, currentMonth, currentDate);
    }
    return undefined;
  }, [currentDate, currentMonth, currentYear]);

  const handleNext = useCallback(() => {
    if (currentYear && currentMonth) {
      setCurrentYear(currentMonth === 11 ? currentYear + 1 : currentYear);
      setCurrentMonth((currentMonth + 1) % 12);
      setCurrentDate(undefined);
    }
  }, [currentMonth, currentYear]);

  const handlePrev = useCallback(() => {
    if (currentYear && currentMonth) {
      setCurrentYear(currentMonth === 0 ? currentYear - 1 : currentYear);
      setCurrentMonth(currentMonth === 0 ? 11 : currentMonth - 1);
      setCurrentDate(undefined);
    }
  }, [currentMonth, currentYear]);

  const years = useMemo(() => {
    const list: number[] = [];
    const _date = new Date();
    for (let i = 1950; i <= _date.getFullYear(); i++) {
      list.push(i);
    }
    return list;
  }, []);

  useEffect(() => {
    if (!visible) {
      if (!value) {
        const _date = new Date();
        setCurrentDate(_date.getDate());
        setCurrentMonth(_date.getMonth());
        setCurrentYear(_date.getFullYear());
      } else {
        setCurrentDate(value.getDate());
        setCurrentMonth(value.getMonth());
        setCurrentYear(value.getFullYear());
      }
      setIntention('date');
    }
  }, [value, visible]);

  const flatlistItem = ({ item }: { item: number }) => (
    <View style={styles.yearItem}>
      <Pressable
        style={[styles.yearWrapper, activeStyle]}
        onPress={() => {
          setCurrentYear(item);
          setIntention('month');
        }}
      >
        <Text
          style={[
            styles.year,
            item === currentYear && styles.activeYear,
            activeTextStyle,
          ]}
        >
          {item}
        </Text>
      </Pressable>
    </View>
  );

  const containerStyle = useMemo((): ViewStyle => {
    return { display: visible ? 'flex' : 'none' };
  }, [visible]);

  useEffect(() => {
    if (intention === 'year') {
      let index = 0;
      for (let i = 0; i < years.length; i++) {
        if (currentYear === years[i]) {
          index = i;
          break;
        }
      }
      flatlistRef.current?.scrollToIndex({ index });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [intention, years]);

  useEffect(() => {
    if (intention === 'year') {
      Animated.spring(yearAnim, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.spring(yearAnim, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
    }
  }, [intention, yearAnim]);

  useEffect(() => {
    if (intention === 'month') {
      Animated.spring(monthAnim, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.spring(monthAnim, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
    }
  }, [intention, monthAnim]);

  useEffect(() => {
    if (intention === 'date') {
      Animated.spring(dateAnim, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.spring(dateAnim, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
    }
  }, [dateAnim, intention]);

  useEffect(() => {
    if (visible) {
      Animated.spring(overlayAnim, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    }
  }, [overlayAnim, visible]);

  if (!visible) {
    return null;
  }

  if (onDismiss && !dismissable) {
    console.error('Require onDismiss to accept onDismiss method.');
    return null;
  }

  return (
    <View style={[styles.container, containerStyle]} testID={testID}>
      <Pressable
        onPress={() => {
          Animated.spring(overlayAnim, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
          setTimeout(() => {
            dismissable && onDismiss ? onDismiss() : undefined;
          }, 200);
        }}
        style={styles.pressabledOverlay}
      >
        <Animated.View
          style={[styles.modalOverlay, { opacity: overlayAnim }]}
        />
      </Pressable>
      <View style={styles.wrapper}>
        <Animated.View style={[styles.content, { opacity: overlayAnim }]}>
          <View style={[styles.header, headerStyle]}>
            <Pressable
              onPress={() => {
                setIntention('year');
                setCurrentMonth(undefined);
                setCurrentDate(undefined);
              }}
            >
              <Text style={[styles.headerYearText, headerYearStyle]}>
                {currentYear}
              </Text>
            </Pressable>
            <Pressable
              onPress={() => {
                setIntention('month');
                setCurrentDate(undefined);
              }}
            >
              <Text style={[styles.headerDateText, headerDateStyle]}>
                {label(false)}
              </Text>
            </Pressable>
          </View>
          {intention === 'year' && (
            <Animated.View
              style={[
                styles.calendarWrapper,
                styles.yearContainer,
                { opacity: yearAnim },
              ]}
            >
              <FlatList
                data={years}
                renderItem={flatlistItem}
                ref={flatlistRef}
                onScrollToIndexFailed={(info) => {
                  const offset = info.averageItemLength * info.index;
                  flatlistRef.current?.scrollToOffset({ offset });
                  setTimeout(() => {
                    flatlistRef.current?.scrollToIndex({ index: info.index });
                  }, 100);
                }}
              />
            </Animated.View>
          )}
          {intention === 'month' && (
            <Animated.View
              style={[styles.calendarWrapper, { opacity: monthAnim }]}
            >
              <View style={styles.monthContainer}>
                {monthLabels.map((month, index) => (
                  <Pressable
                    key={index}
                    style={[styles.monthItem]}
                    onPress={() => {
                      setCurrentMonth(index);
                      setCurrentDate(undefined);
                      setIntention('date');
                    }}
                  >
                    <View
                      style={[
                        styles.monthWrapper,
                        isCurrentMonth(index) && styles.currentMonthWrapper,
                        currentMonth === index && styles.activeMonthWrapper,
                        activeStyle,
                      ]}
                    >
                      <Text
                        style={[
                          styles.month,
                          (isCurrentMonth(index) || currentMonth === index) &&
                            styles.currentMonth,
                          activeTextStyle,
                        ]}
                      >
                        {month.abbr}
                      </Text>
                    </View>
                  </Pressable>
                ))}
              </View>
            </Animated.View>
          )}
          {intention === 'date' && (
            <Animated.View
              style={[styles.calendarWrapper, { opacity: dateAnim }]}
            >
              <View style={styles.nav}>
                <Pressable style={styles.chevronContainer} onPress={handlePrev}>
                  {prevIcon ? (
                    prevIcon
                  ) : (
                    <Icon.ChevronLeft size="16" color={Color.grey[1]} />
                  )}
                </Pressable>
                <Text style={[styles.label, labelStyle]}>{label(true)}</Text>
                <Pressable style={styles.chevronContainer} onPress={handleNext}>
                  {nextIcon ? (
                    nextIcon
                  ) : (
                    <Icon.ChevronRight
                      size="16"
                      color={Color.grey[1]}
                      style={styles.chevronContainer}
                    />
                  )}
                </Pressable>
              </View>
              <View style={styles.dateContainer}>
                {weekLabels.map((item, i) => (
                  <View key={i} style={styles.dateItem}>
                    <Text style={[styles.weekLabel, weekLabelStyle]}>
                      {item}
                    </Text>
                  </View>
                ))}
              </View>
              {dateList.map((row, rowIndex) => (
                <View key={rowIndex} style={[styles.dateContainer]}>
                  {row.map((col, colIndex) => (
                    <Pressable
                      key={colIndex}
                      style={[styles.dateItem]}
                      onPress={() => {
                        if (col && colIndex > 0 && colIndex < 6) {
                          setCurrentDate(col);
                        }
                      }}
                    >
                      <View
                        style={[
                          styles.dateWrapper,
                          !!currentYear &&
                            !!currentMonth &&
                            isToday(currentYear, currentMonth, col) &&
                            styles.todayDateWrapper,
                          col === currentDate && styles.activeDateWrapper,
                          activeStyle,
                        ]}
                      >
                        <Text
                          style={[
                            styles.date,
                            (colIndex === 0 || colIndex === 6) &&
                              styles.forbiddenDate,
                            !!currentYear &&
                              !!currentMonth &&
                              isToday(currentYear, currentMonth, col) &&
                              styles.today,
                            col === currentDate && styles.activeDate,
                            dateStyle,
                            activeTextStyle,
                          ]}
                        >
                          {col}
                        </Text>
                      </View>
                    </Pressable>
                  ))}
                </View>
              ))}
            </Animated.View>
          )}
          <View style={styles.footerWrapper}>
            <Pressable
              style={styles.actionBtn}
              onPress={() => {
                Animated.spring(overlayAnim, {
                  toValue: 0,
                  useNativeDriver: true,
                }).start();

                setTimeout(() => {
                  handleCancel && handleCancel();
                }, 200);
              }}
              hitSlop={8}
            >
              <Text
                style={[styles.actionBtnText, styles.secondaryActionBtnText]}
              >
                {cancelButtonText}
              </Text>
            </Pressable>
            <Pressable
              style={styles.actionBtn}
              onPress={() => {
                Animated.spring(overlayAnim, {
                  toValue: 0,
                  useNativeDriver: true,
                }).start();
                setTimeout(() => {
                  if (currentYear && currentMonth && currentDate) {
                    handleConfirm && handleConfirm(date);
                  }
                }, 200);
              }}
              hitSlop={8}
            >
              <Text
                style={[
                  styles.actionBtnText,
                  (!currentYear || !currentMonth || !currentDate) &&
                    styles.disabledActionBtnText,
                  confirmTextStyle,
                ]}
              >
                {confirmButtonText}
              </Text>
            </Pressable>
          </View>
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  pressabledOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(46, 48, 49, 0.7)',
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  content: {
    backgroundColor: Color.light[1],
    width: '100%',
  },
  header: {
    padding: Spacing[16],
    backgroundColor: Color.primary[2],
  },
  headerYearText: {
    color: Color.light[1],
    fontSize: FontSize[12],
    fontWeight: '600',
  },
  headerDateText: {
    color: Color.light[1],
    fontSize: FontSize[20],
    fontWeight: '600',
  },
  calendarWrapper: {
    paddingVertical: Spacing[24],
  },
  nav: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: Spacing[16],
  },
  label: {
    fontSize: FontSize[14],
    fontWeight: '600',
    textAlign: 'center',
    flex: 1,
    color: Color.grey[1],
  },
  dateContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: Spacing[8],
    marginHorizontal: Spacing[8],
  },
  dateItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: Spacing[32],
  },
  weekLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: Color.grey[5],
  },
  date: {
    color: Color.grey[1],
    fontSize: FontSize[16],
    fontWeight: '500',
    paddingHorizontal: Spacing[6],
    paddingVertical: Spacing[2],
  },
  activeDate: {
    color: Color.light[1],
  },
  dateWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: Spacing[32],
    height: Spacing[32],
  },
  todayDateWrapper: {
    backgroundColor: Color.grey[6],
  },
  activeDateWrapper: {
    backgroundColor: Color.primary[2],
  },
  today: {
    color: Color.light[1],
  },
  forbiddenDate: {
    color: Color.grey[7],
  },
  chevronContainer: {
    width: 32,
    display: 'flex',
    alignItems: 'center',
  },
  footerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingBottom: Spacing[24],
    paddingHorizontal: Spacing[16],
  },
  actionBtn: {
    marginLeft: Spacing[32],
  },
  actionBtnText: {
    fontSize: FontSize[14],
    fontWeight: '700',
    color: Color.hightlight[2],
  },
  secondaryActionBtnText: {
    color: Color.grey[3],
  },
  disabledActionBtnText: {
    color: Color.grey[7],
  },
  monthContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  monthItem: {
    width: '25%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: Spacing[56],
  },
  monthWrapper: {
    width: Spacing[56],
    height: Spacing[32],
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  currentMonthWrapper: {
    backgroundColor: Color.grey[6],
  },
  activeMonthWrapper: {
    backgroundColor: Color.primary[2],
  },
  month: {
    color: Color.grey[1],
    fontSize: FontSize[16],
    fontWeight: '500',
    paddingHorizontal: Spacing[6],
    paddingVertical: Spacing[2],
  },
  currentMonth: {
    color: Color.light[1],
  },
  yearContainer: {
    height: 200,
  },
  yearItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  yearWrapper: {
    width: 100,
  },
  year: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    paddingVertical: Spacing[4],
  },
  activeYear: {
    backgroundColor: Color.primary[2],
    color: Color.light[1],
  },
});

export default Datepicker;
