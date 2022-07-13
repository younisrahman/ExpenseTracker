import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  Text,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Colors} from '@config';

const image = require('../../assets/images/icon.png');

const DrawerConfig = ({props}) => {
  const navigation = useNavigation();

  return (
    <View>
      <StatusBar barStyle="dark-content" />

      {/* Header And User Container */}
      <ImageBackground source={image} style={styles.CoverImage} />

      {/* NAvigaton items */}
      <View style={styles.body}>
        <TouchableOpacity
          style={styles.navigationStyle}
          onPress={() => navigation.navigate(props.state.routeNames[0])}>
          <Entypo name="home" size={wp(8)} color={Colors.primary} />
          <Text style={styles.titleTxt}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navigationStyle}
          onPress={() => navigation.navigate(props.state.routeNames[1])}>
          <Ionicons name="fast-food" size={wp(8)} color={Colors.primary} />

          <Text style={styles.titleTxt}>Food Expenses</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navigationStyle}
          onPress={() => navigation.navigate(props.state.routeNames[2])}>
          <FontAwesome5 name="warehouse" size={wp(8)} color={Colors.primary} />

          <Text style={styles.titleTxt}>Home Expenses</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navigationStyle}
          onPress={() => navigation.navigate(props.state.routeNames[3])}>
          <Entypo name="shopping-bag" size={wp(8)} color={Colors.primary} />
          <Text style={styles.titleTxt}>Shopping Expenses</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  CoverImage: {
    height: hp(30),
    width: '100%',
  },
  body: {
    paddingHorizontal: wp(5),
  },
  navigationStyle: {
    flexDirection: 'row',
    height: hp(7),
    marginVertical: hp(1),
    alignItems: 'center',
  },
  titleTxt: {
    marginLeft: wp(5),
    marginTop: hp(1),
    fontWeight: 'bold',
  },
});
export default DrawerConfig;
