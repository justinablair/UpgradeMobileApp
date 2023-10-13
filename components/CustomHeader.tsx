import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {CloseIcon} from './theme/CloseIcon';
import Colours from './theme/Colour';

interface CustomHeaderProps {
  isDarkMode: boolean;
  toggleExitModal: () => void;
}
const CustomHeader: React.FC<CustomHeaderProps> = ({
  isDarkMode,
  toggleExitModal,
}) => {
  const headerStyle = {
    backgroundColor: isDarkMode ? Colours.black : Colours.white,
    borderBottomWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
  };

  const headerTextStyles = {
    color: isDarkMode ? Colours.white : Colours.black,
  };

  return (
    <View style={[styles.headerContainer, headerStyle]}>
      <TouchableOpacity onPress={() => toggleExitModal()}>
        <CloseIcon />
      </TouchableOpacity>
      <Text style={[styles.headerText, headerTextStyles]}>
        Your Header Content
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 50, // adjust the height according to your needs
    // justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CustomHeader;
