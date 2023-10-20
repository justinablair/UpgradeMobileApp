import React from 'react';
import {StyleSheet, View} from 'react-native';
import Text from '../Text';
import Colours from '../theme/Colour';
import {useUserContext} from '../UserContext';
import Toggle from './Toggle';

interface PreferenceToggleProps {
  label: string; // Label for the toggle
  value: boolean; // Current value of the toggle
  description?: string; // Optional description for the toggle
  onChange: () => void; // Function to handle toggle change
  testID: string; // Test ID for the toggle
  accessibilityLabel?: string;
}

const PreferenceToggle: React.FC<PreferenceToggleProps> = ({
  label,
  value,
  description,
  onChange,
  testID,
  accessibilityLabel,
}) => {
  const {isDarkMode} = useUserContext(); // Access isDarkMode from context
  const textColour = isDarkMode ? Colours.white : Colours.black;

  // Function to handle the toggle change
  const handleToggle = () => {
    onChange();
  };

  // Rendering the toggle component
  return (
    <View
      style={styles.preferenceContainer}
      accessible
      accessibilityLabel={`${label} Preference Toggle`}
      testID={`${testID}Container`}>
      <View style={styles.textContainer}>
        <Text variant="bodyText" style={{color: textColour}}>
          {label}
        </Text>
        {description && (
          <Text
            variant="bodyText"
            style={[styles.descriptionText, {color: textColour}]}>
            {description}
          </Text>
        )}
      </View>
      <Toggle
        value={value}
        onValueChange={handleToggle}
        accessibilityLabel={`${label} Toggle`}
        testID={`${testID}Toggle`}
        accessibilityRole="switch"
        accessibilityState={{checked: value}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  preferenceContainer: {
    flexDirection: 'row',
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
