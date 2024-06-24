import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
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
    <View>
      <TextInput
        placeholder="Enter title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        placeholder="Enter body"
        value={body}
        onChangeText={setBody}
        multiline
      />
      <Button title="Create Post" onPress={handleCreatePost} />
    </View>
  );
};

export default CreatePostForm;
