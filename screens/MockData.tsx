//MockData.tsx
import React, {useState} from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Text from '../components/Text';
import {NavigationProps} from '../navigationTypes';

// ...imports and types

const UserSelectionScreen: React.FC<UserSelectionScreenProps> = ({
  navigation,
}) => {
  const [userType, setUserType] = useState<UserType | null>(null);
  const [pin, setPin] = useState('');

  const handleNextPress = () => {
    if (userType && pin.length === 4) {
      navigation.navigate('NextScreen');
    }
  };

  return (
    <View style={styles.container}>
      <Text variant="headerMedium">Select User Type</Text>
      <TouchableOpacity
        style={[
          styles.userTypeButton,
          userType === 'soleTrader' && styles.selectedUserTypeButton,
        ]}
        onPress={() => setUserType('soleTrader')}
        accessibilityLabel="Select Sole Trader">
        <Text style={styles.userTypeButtonText}>Sole Trader</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.userTypeButton,
          userType === 'limitedCompany' && styles.selectedUserTypeButton,
        ]}
        onPress={() => setUserType('limitedCompany')}
        accessibilityLabel="Select Limited Company">
        <Text style={styles.userTypeButtonText}>Limited Company</Text>
      </TouchableOpacity>
      {userType && <View>{/* ... other code */}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  // ... other styles

  userTypeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#2e3232',
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedUserTypeButton: {
    borderColor: '#f45f78', // Add border color for selected option
  },
  userTypeButtonText: {
    color: 'white',
  },
});

export default UserSelectionScreen;
