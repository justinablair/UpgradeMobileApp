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
  accessibilityLabel?: string;
  testID: string;
}

const PreferenceToggle: React.FC<PreferenceToggleProps> = ({
  label,
  value,
  description,
  onChange,
  accessibilityLabel,
  testID,
}) => {
  const {isDarkMode} = useUserContext();
  const textColour = isDarkMode ? Colours.white : Colours.black;

  const handleToggle = () => {
    console.log('Toggle pressed'); // Add a log to check if the toggle is pressed
    onChange();
  };

  console.log('Toggle value:', value); // Log the value to check the initial value

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
