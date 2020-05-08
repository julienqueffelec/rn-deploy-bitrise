import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import MessageList from "./MessageList";
import NewMessageForm from "./NewMessageForm";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 50,
    justifyContent: "center",
  },
});

export default function App() {
  [messages, setMessages] = useState([]);

  function handleSend(newMessage) {
    setMessages([...messages, newMessage]);
  }

  return (
    <View style={styles.container}>
      <NewMessageForm onSend={handleSend} />
      <MessageList data={messages} />
    </View>
  );
}
