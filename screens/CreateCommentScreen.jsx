import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

const CreateCommentScreen = ({ navigation }) => {
  const [postId, setPostId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');

  const handleCreateComment = async () => {
    try {
      const response = await axios.post('http://10.5.222.96:5000/api/comments', {
        postId: parseInt(postId), // Ensure postId is sent as an integer
        name,
        email,
        body
      });
      Alert.alert('Success', 'Comment created successfully!');
      setName('');
      setEmail('');
      setBody('');
    } catch (error) {
      Alert.alert('Error', 'Failed to create comment. Please try again.');
      console.error(error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Enter Post ID"
        value={postId}
        onChangeText={setPostId}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Enter name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Enter email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Enter body"
        value={body}
        onChangeText={setBody}
        multiline
      />
      <Button title="Create Comment" onPress={handleCreateComment} />
    </View>
  );
};

export default CreateCommentScreen;
