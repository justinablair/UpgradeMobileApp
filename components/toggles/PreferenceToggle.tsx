//PreferenceToggle.tsx

import React from 'react';
import {
  AccessibilityInfo,
  AccessibilityRole,
  AccessibilityState,
  StyleSheet,
  View,
} from 'react-native';
import Text from '../Text';
import Colours from '../theme/Colour';
import {useUserContext} from '../UserContext';
import Toggle from './Toggle';

interface PreferenceToggleProps {
  label: string;
  value: boolean;
  description?: string;
  onChange: () => void;
  testID: string;
  accessible?: boolean;
  accessibilityLabel?: string;
  accessibilityRole?: AccessibilityRole;
  accessibilityState?: AccessibilityState;
}

const PreferenceToggle: React.FC<PreferenceToggleProps> = ({
  label,
  value,
  description,
  onChange,
  testID,
  accessible = false, // Default to false if not provided
  accessibilityLabel,
  accessibilityRole,
}) => {
  const {isDarkMode} = useUserContext(); // Access isDarkMode from context
  const textColour = isDarkMode ? Colours.white : Colours.black;

  const handleToggle = () => {
    onChange();

    const announcement = value
      ? `${label} preference enabled`
      : `${label} preference disabled`;
    AccessibilityInfo.announceForAccessibility(announcement);
  };
  // Rendering the toggle component
  return (
    <View
      style={styles.preferenceContainer}
      accessible={true}
      accessibilityLabel={accessibilityLabel}
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
