import {StyleSheet} from 'react-native';
import {
  COLORS,
  SIZES,
  FONTS,
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from './../../constants';

const LoginStyle = StyleSheet.create({
  SafeArea: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  ContainerHeader: {
    marginTop: hp('4%'), //SIZES.height / 12
  },
  Logo: {
    marginTop: -20,
    maxWidth: 280,
    maxHeight: 100,
    resizeMode: 'contain',
    alignItems: 'center',
  },
  ContainerBody: {
    flexDirection: 'column',
    marginTop: hp('9%'), //(SIZES.height * 5) / 100
    marginLeft: wp('1%'),
  },
  UserIcon: {
    width: 50,
    height: '90%',
    resizeMode: 'contain',
  },
  Input: {
    borderWidth: 1, // size/width of the border
    alignItems: 'center',
    width: wp('80%'), //SIZES.width - (SIZES.width * 0.3),
    padding: 8,
    backgroundColor: 'white',
    borderColor: COLORS.primary,
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    // marginBottom: utils.dimensions.defaultPadding,
  },
  ContainerFooter: {
    flexDirection: 'column',
    marginTop: hp('4%'), //(SIZES.height * 3) / 100
  },
  KeyholeIcon: {
    width: 50,
    height: '60%',
    resizeMode: 'contain',
  },
  LabelForgot: {
    ...SIZES.h4,
    textDecorationLine: 'underline',
    marginTop: 2,
    color: COLORS.primary,
    alignSelf: 'flex-end',
  },
  LoginButton: {
    padding: SIZES.padding,
    width: wp('50%'), //SIZES.width - (SIZES.width * 0.5),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    backgroundColor: COLORS.primary,
    marginTop: (SIZES.height * 4) / 100,
  },
  LabelLogin: {...FONTS.h4, color: COLORS.white},
  LabelNotMember: {
    ...FONTS.body5,
    marginTop: hp('4%'), // (SIZES.height * 4) / 100
  },
  LabelContinue: {
    ...FONTS.body5,
    marginTop: hp('3%'), // (SIZES.height * 3) / 100
  },
  LabelNew: {...FONTS.h4, color: COLORS.white},
  ContainerSosmed: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('2%'), // (SIZES.height * 2) / 100
  },
  ImageFb: {marginRight: 30, height: 50, width: 50},
  ImageGoogle: {height: 50, width: 50},
  ErrorMessageContainer: {
    marginBottom: 8,
    backgroundColor: '#fee8e6',
    padding: 8,
    borderRadius: 4,
  },
  ErrorMessageText: {
    color: '#db2828',
    textAlign: 'center',
    fontSize: 12,
  },
  RegisButton: {
    padding: SIZES.padding,
    width: wp('50%'), //SIZES.width - (SIZES.width * 0.5),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    backgroundColor: COLORS.primary,
    marginTop: hp('2%'), //(SIZES.height * 2) / 100
  },
  LogoType: {
    maxWidth: 280,
    marginTop: (SIZES.height * 0.01) / 100,
    marginLeft: (SIZES.width * 5) / 100,
    maxHeight: 100,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginStyle;
