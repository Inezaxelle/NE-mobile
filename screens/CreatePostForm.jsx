import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import axios from 'axios';

const CreatePostForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleCreatePost = async () => {
    try {
      const response = await axios.post('http://10.5.222.96:5000/api/posts', {
        title,
        body,
        userId: 1 // Assuming a static user ID for now
      });
      Alert.alert('Success', 'Post created successfully!');
      setTitle('');
      setBody('');
    } catch (error) {
      Alert.alert('Error', 'Failed to create post. Please try again.');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <TextInput
        placeholder="Enter body"
        value={body}
        onChangeText={setBody}
        multiline
        style={styles.input}
      />
      <View style={styles.buttonContainer}>
        <Button title="Create Post" onPress={handleCreatePost} color={styles.button.color} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  input: {
    height: 40,
    borderColor: '#200020',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  button: {
    color: '#200020',
  },
  buttonContainer: {
    marginTop: 12,
  },
});

export default CreatePostForm;
