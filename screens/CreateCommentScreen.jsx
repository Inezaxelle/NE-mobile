import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
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
    <View style={styles.container}>
      <TextInput
        placeholder="Enter Post ID"
        value={postId}
        onChangeText={setPostId}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        placeholder="Enter name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Enter email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
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
        <Button title="Create Comment" onPress={handleCreateComment} color={styles.button.color} />
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

export default CreateCommentScreen;
