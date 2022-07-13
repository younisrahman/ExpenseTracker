import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';

export const Colors = {
  primary: '#0D2440',
  primary2: '#1BBC9B',
  primaryText: '#45AE9F',
  golden: 'rgba(255, 184, 34, 0.8)',
  secondary: '', //#ADADAD //#8E8E8E // #ADADAD // #ADADAD // #E6E9EE
  lightGray: '#ADADAD', //#3E3E3E
  lightGray1: '#CBD1D8', //#3E3E3E
  lightGray2: '#E6E9EE', //#3E3E3E
  darkGray: '#8E8E8E',
  AllOrders: '#E8526F', //#FD443C //#F7826D //#2E2E2E
  red: '#FD443C', //#FD443C
  gmail: '#EA4335', //#FD443C
  greenButtonBack: '#4CDA64',
  greenLightSeaButtonBack: '#45AE9F',
  redButtonBack: '#FF3B32',
  Pending: '#52E8D2',
  Completed: '#4A4DA0',
  Open: '#F7826D',
  OnHold: '#F7D26D',
  PostClosing: '#5FACEF', //#45AE9F //45AE9F
  Closed: '#ACDD69',
  background: '#EDEDED',
  white: '#ffffff',
  cardBackProfile: '#FCFAFE', //#F9F9F9 // #FCFAFE
  ratingCardBack: '#F5F8FF',
  rating: '#FFB822',
  black: '#000000',
  textBlack: '#2E2E2Eaa',
  lightBlack: '#3E3E3E',
  date: '#7C7DCE', //#DEDFFF
  document: '#DEDFFF', //#DEDFFF //#F5F8FF
  cardBack: '#ADADBF',
  border: '#CCCCCC', //#F2F3F5 //#BBBBBB
  blockBack: '#F2F3F5',
  active: '#34BFA3',
  buttonBack: '#1376F6',
  btnBackOrange: '#F7826D',
  inputback: '#F9F9F9',
};

export const Spacing = {
  s: hp(2),
  m: wp(5),
  l: hp(5),
  xl: hp(7),
  xxl: hp(30),
};

export const FontSize = {
  ES: RFValue(12),
  S: RFValue(14),
  M: RFValue(16),
  L: RFValue(18),
  XL: RFValue(20),
  XXL: RFValue(30),
};

export const WIDTH = wp(92);
export const Redious = hp(2.7);

export const FontFamily = {
  SourceSansB: 'SourceSansPro-Bold',
  SourceSansR: 'SourceSansPro-Light',
  SourceSansL: 'SourceSansPro-Regular',
  SourceSansEL: 'SourceSansPro-ExtraLight',
};
