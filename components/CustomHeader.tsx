import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {CloseIcon} from './theme/CloseIcon';
import Colours from './theme/Colour';

interface CustomHeaderProps {
  isDarkMode: boolean; // Boolean indicating whether the dark mode is enabled
  toggleExitModal: () => void; // Function to handle the exit modal toggle
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
    <View style={[styles.headerContainer, headerStyle]}>
      {/* Exit modal appears on press of close component */}
      <TouchableOpacity onPress={() => toggleExitModal()}>
        {/* Close icon component */}
        <CloseIcon />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 50,
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
