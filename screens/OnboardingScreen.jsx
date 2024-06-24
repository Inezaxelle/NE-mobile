import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const OnboardingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Create Post"
        onPress={() => navigation.navigate('CreatePost')}
        style={styles.button}
      />
      <Button
        title="View All Posts"
        onPress={() => navigation.navigate('AllPosts')}
        style={styles.button}
      />
      <Button
        title="Create Comment"
        onPress={() => navigation.navigate('CreateComment')}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginVertical: 10,
    width: 200,
  },
});

export default OnboardingScreen;
