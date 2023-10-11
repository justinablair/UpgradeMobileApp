import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Toggle} from './Toggle';
import Text from '../Text';
import Colours from '../theme/Colour';
import {useUserContext} from '../UserContext';

interface PreferenceToggleProps {
  label: string;
  value: boolean;
  description?: string;
  onChange: () => void;
}

const PreferenceToggle: React.FC<PreferenceToggleProps> = ({
  label,
  value,
  description,
  onChange,
}) => {
  const {isDarkMode} = useUserContext();
  const textColour = isDarkMode ? Colours.white : Colours.black;

  return (
    <View style={styles.preferenceContainer}>
      <View style={styles.textContainer}>
        <Text variant="bodyText" style={{color: textColour}}>
          {label}
        </Text>
        {description && (
          <Text
            variant="bodyText bodyTextDescription"
            style={{color: textColour}}>
            {description}
          </Text>
        )}
      </View>
      <Toggle value={value} onValueChange={onChange} />
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
