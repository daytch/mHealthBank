import {Platform, StyleSheet} from 'react-native';
import {
  FONTS,
  COLORS,
  SIZES,
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from './../../constants';

const HomeStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  TextUserProfile: {
    fontSize: 20,
    backgroundColor: COLORS.primary,
    color: '#fff',
    width: '100%',
    padding: 5,
    textAlign: 'center',
  },
  Image: {
    height: Platform.OS === 'ios' ? hp('29%') : hp('33%'),
    width: Platform.OS === 'ios' ? wp('63%') : wp('55%'),
    borderRadius: Platform.OS === 'ios' ? 150 : 120,
    borderWidth: 1,
    borderColor: COLORS.primary,
    marginTop: 50,
  },
  Label: {
    ...FONTS.body4,
  },
  TextName: {
    ...FONTS.bodyMontserrat,
    marginTop: 20,
  },
  LogoutButton: {
    padding: SIZES.padding,
    width: wp('50%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    backgroundColor: COLORS.primary,
    marginTop: (SIZES.height * 4) / 100,
  },
});

export default HomeStyle;
