import {View, StyleSheet, Alert} from 'react-native';
import React, {useState} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Colors, FontFamily, FontSize} from '@config';
import DropDownPicker from 'react-native-dropdown-picker';
import DatePicker from 'react-native-date-picker';
import {AppTextInput, AppButton} from '@common';
import {addExpenses} from '../feature/Expenses';
import {useAppDispatch} from '@store';

const AddExpensesCard = () => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState<number>(0);
  const [description, setDescription] = useState<string>('');
  const [value, setValue] = useState<string>('');
  const [items, setItems] = useState<{label: string; value: string}[]>([
    {label: 'Food Expenses', value: 'food'},
    {label: 'Shopping Expenses', value: 'shopping'},
    {label: 'Home Expenses', value: 'home'},
  ]);
  const [date, setDate] = useState(new Date());
  const [openDate, setOpenDate] = useState(false);

  const handleSubmit = async () => {
    const ID = () => {
      return Math.random().toString(36).slice(2);
    };
    const data = {
      id: ID(),
      type: value,
      amount: amount,
      description: description,
      createAt: date,
    };
    await dispatch(addExpenses(data));
    Alert.alert('Success', 'Successfully added to the list', [
      {
        text: 'OK',
        onPress: () => {
          setAmount(0);
          setDate(new Date());
          setDescription('');
          setValue('');
        },
      },
    ]);
    console.log('Pressed ', data);
  };
  return (
    <View style={styles.container}>
      <DropDownPicker
        open={open}
        placeholder={'Expenses type'}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholderStyle={{color: Colors.darkGray}}
        textStyle={styles.dropDownTextStyle}
        style={styles.dropDownArea}
        containerStyle={styles.dropDownSubcontainerStyle}
        dropDownContainerStyle={styles.dropDowncontainerStyle}
      />
      <AppTextInput
        icon="ios-wallet-outline"
        value={amount}
        onChangeText={(val: number) => setAmount(val)}
        keyboardType={'numeric'}
        placeholder={'Enter amount'}
      />
      <AppTextInput
        style={styles.descriptionBox}
        styletext={styles.inputArea}
        multiline={true}
        placeholder={'Description'}
        value={description}
        onChangeText={(val: string) => setDescription(val)}
      />
      <DatePicker
        modal
        open={openDate}
        date={date}
        mode={'date'}
        onConfirm={date => {
          setOpenDate(false);
          setDate(date);
          console.log(date);
        }}
        onCancel={() => {
          setOpenDate(false);
        }}
      />

      <AppTextInput
        value={date.toDateString()}
        styleOuterArea={{marginTop: hp(1)}}
        onPressRightIcon={() => setOpenDate(true)}
        icon={'ios-calendar'}
      />
      <AppButton
        title="Submit"
        onPress={handleSubmit}
        textStyle={{color: Colors.white}}
        style={styles.submitButton}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    minHeight: hp(40),
    width: wp(90),
    backgroundColor: Colors.white,
    alignSelf: 'center',
    alignItems: 'center',
    paddingVertical: hp(2.3),
    borderRadius: hp(2),
    marginVertical: hp(2.3),
  },
  dropDownArea: {
    width: wp(80),
    borderColor: Colors.lightGray1,
    marginBottom: hp(1),
  },
  dropDownTextStyle: {
    color: Colors.darkGray,
    fontFamily: FontFamily.SourceSansL,
    fontSize: FontSize.M,
  },
  dropDowncontainerStyle: {
    borderColor: Colors.lightGray1,
  },
  dropDownSubcontainerStyle: {
    width: wp(80),
    zIndex: 9999,
  },
  inputArea: {
    width: wp(78),
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
  amountArea: {},
  descriptionBox: {
    alignSelf: 'center',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: hp(1),
    height: hp(15),
  },
  submitButton: {
    borderColor: Colors.lightGray1,
    borderWidth: 1,
    width: wp(80),
    backgroundColor: Colors.primary,
    marginTop: hp(3),
  },
});

export default AddExpensesCard;
