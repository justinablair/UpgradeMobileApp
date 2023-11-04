//CustomHeader.tsx

import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {CloseIcon} from './theme/icons/CloseIcon';
import Colours from './theme/Colour';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

interface CustomHeaderProps {
  isDarkMode: boolean;
  toggleExitModal: () => void;
}
const CustomHeader: React.FC<CustomHeaderProps> = ({
  isDarkMode,
  toggleExitModal,
}) => {
  // Styling for the header based on the isDarkMode prop
  const headerStyle = {
    backgroundColor: isDarkMode ? Colours.black : Colours.white,
    borderBottomWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
  };

  return (
    <View
      style={[styles.headerContainer, headerStyle]}
      testID="navigationHeader"
      accessible={true}
      accessibilityRole="header">
      {/* Exit modal appears on press of close component */}
      <TouchableOpacity
        onPress={toggleExitModal}
        testID="CloseButton"
        accessible={true}
        accessibilityRole="button"
        accessibilityLabel="Close">
        {/* Close icon component */}
        <CloseIcon accessibilityLabel="Close Icon" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: hp('6.6%'),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp('2.7%'),
  },
  headerText: {
    fontSize: wp('5.3%'),
    fontWeight: 'bold',
  },
});

export default CustomHeader;
