// GridComponent.tsx

import React from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import Text from './Text';
import {PinBackIcon} from '../components/theme/icons/PinbackIcon';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

interface GridComponentProps {
  handleDigitPress: (digit: number) => void;
  handleBackspace: () => void;
  textColour: string;
}

const GridComponent: React.FC<GridComponentProps> = ({
  handleDigitPress,
  handleBackspace,
  textColour,
}) => {
  return (
    <View style={styles.gridContainer}>
      {/* Display numbers 1-9 and 0 in a grid */}
      <View style={styles.row}>
        {/* Row 1 */}
        <TouchableOpacity
          style={styles.gridItem}
          onPress={() => handleDigitPress(1)}>
          <Text
            style={[styles.gridText, {color: textColour}]}
            accessibilityLabel="digit-1">
            1
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.gridItem}
          onPress={() => handleDigitPress(2)}>
          <Text
            style={[styles.gridText, {color: textColour}]}
            accessibilityLabel="digit-2">
            2
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.gridItem}
          onPress={() => handleDigitPress(3)}>
          <Text
            style={[styles.gridText, {color: textColour}]}
            accessibilityLabel="digit-3">
            3
          </Text>
        </TouchableOpacity>
      </View>
      {/* Row 2 */}
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.gridItem}
          onPress={() => handleDigitPress(4)}>
          <Text
            style={[styles.gridText, {color: textColour}]}
            accessibilityLabel="digit-4">
            4
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.gridItem}
          onPress={() => handleDigitPress(5)}>
          <Text
            style={[styles.gridText, {color: textColour}]}
            accessibilityLabel="digit-5">
            5
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.gridItem}
          onPress={() => handleDigitPress(6)}>
          <Text
            style={[styles.gridText, {color: textColour}]}
            accessibilityLabel="digit-6">
            6
          </Text>
        </TouchableOpacity>
      </View>
      {/* Row 3 */}
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.gridItem}
          onPress={() => handleDigitPress(7)}>
          <Text
            style={[styles.gridText, {color: textColour}]}
            accessibilityLabel="digit-7">
            7
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.gridItem}
          onPress={() => handleDigitPress(8)}>
          <Text
            style={[styles.gridText, {color: textColour}]}
            accessibilityLabel="digit-8">
            8
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.gridItem}
          onPress={() => handleDigitPress(9)}>
          <Text
            style={[styles.gridText, {color: textColour}]}
            accessibilityLabel="digit-9">
            9
          </Text>
        </TouchableOpacity>
      </View>
      {/* Row 4 */}
      <View style={styles.row}>
        <View style={styles.gridItem} />
        <TouchableOpacity
          style={styles.gridItem}
          onPress={() => handleDigitPress(0)}>
          <Text
            style={[styles.gridText, {color: textColour}]}
            accessibilityLabel="digit-0">
            0
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.gridItem}
          onPress={handleBackspace}
          testID="backspaceButton">
          <PinBackIcon fill={textColour} accessibilityLabel="backspaceButton" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    marginBottom: hp('1.3%'),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 0,
  },
  gridItem: {
    width: wp('30%'),
    aspectRatio: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  gridText: {
    fontWeight: '600',
    fontSize: wp('5%'),
    textAlign: 'center',
  },
});

export default GridComponent;
