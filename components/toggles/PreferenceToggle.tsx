//PreferencesToggle.tsx

import React from 'react';
import {StyleSheet, View} from 'react-native';
import Text from '../Text';
import Colours from '../theme/Colour';
import {useUserContext} from '../UserContext';
import Toggle from './Toggle';

interface PreferenceToggleProps {
  label: string;
  value: boolean;
  description?: string;
  onChange: () => void;
  testID: any; // Ensure that the testID is being passed down to the Toggle component
}

const PreferenceToggle: React.FC<PreferenceToggleProps> = ({
  label,
  value,
  description,
  onChange,
  testID,
}) => {
  // Accessing isDarkMode from the user context
  const {isDarkMode} = useUserContext();

  // Determining text color based on the dark mode
  const textColour = isDarkMode ? Colours.white : Colours.black;

  const handleToggle = () => {
    onChange(); // Make sure the onChange function is called when the toggle is pressed
  };
  return (
    <View
      style={styles.preferenceContainer}
      accessible
      accessibilityLabel={`${label} Preference Toggle`}
      testID={`${testID}Container`} // Adjust the testID to ensure uniqueness
    >
      <View style={styles.textContainer}>
        {/* Label text */}
        <Text variant="bodyText" style={{color: textColour}}>
          {label}
        </Text>
        {/* Description text (if available) */}
        {description && (
          <Text
            variant="bodyText bodyTextDescription"
            style={{color: textColour}}>
            {description}
          </Text>
        )}
      </View>
      {/* Toggle component */}
      <Toggle
        value={value}
        onValueChange={handleToggle} // Call the handleToggle function here
        accessibilityLabel={`${label} Toggle`}
        testID={`${testID}Toggle`} // Adjust the testID to ensure uniqueness
        accessibilityRole="switch"
        accessibilityState={{checked: value}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  preferenceContainer: {
    flexDirection: 'row', // Aligning the elements in a row
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  textContainer: {
    flex: 1,
    maxWidth: '80%',
  },
  descriptionText: {
    marginTop: 8,
  },
});

export default PreferenceToggle;
