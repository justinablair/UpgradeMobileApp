// DotsComponent.tsx
import React from 'react';
import {View, StyleSheet} from 'react-native';

interface DotsComponentProps {
  selectedCount: number;
  totalCount: number;
  color: string;
}

const DotsComponent: React.FC<DotsComponentProps> = ({
  selectedCount,
  totalCount,
  color,
}) => {
  return (
    <View style={styles.dotsContainer}>
      {Array.from({length: totalCount}).map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            selectedCount > index && styles.selectedDot,
            {backgroundColor: color},
          ]}
          testID={`dot-${index}`}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  dotsContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    height: 15,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  selectedDot: {
    width: 13,
    height: 13,
    borderRadius: 13,
  },
});

export default DotsComponent;
