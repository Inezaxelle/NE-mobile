import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const OnboardingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title="Create Post"
          onPress={() => navigation.navigate('CreatePost')}
          color={styles.button.color}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="View All Posts"
          onPress={() => navigation.navigate('AllPosts')}
          color={styles.button.color}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Create Comment"
          onPress={() => navigation.navigate('CreateComment')}
          color={styles.button.color}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  button: {
    color: '#200020',
  },
  buttonContainer: {
    marginVertical: 10,
    width: '80%',
  },
});

export default OnboardingScreen;
