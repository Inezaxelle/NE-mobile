import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreatePostForm from "./screens/CreatePostForm";
import AllPostsScreen from "./screens/AllPostsScreen";
import PostDetailScreen from "./screens/PostDetailsScreen";
import OnboardingScreen from "./screens/OnboardingScreen";
import CreateCommentScreen from "./screens/CreateCommentScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen
          name="Posts Creation app"
          // options={{ headerShown: false }}
          component={OnboardingScreen}
        />
        <Stack.Screen name="CreatePost" component={CreatePostForm} />
        <Stack.Screen name="AllPosts" component={AllPostsScreen} />
        <Stack.Screen name="PostDetail" component={PostDetailScreen} />
        <Stack.Screen name="CreateComment" component={CreateCommentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
