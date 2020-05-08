import React from "react";
import { FlatList, Text } from "react-native";

const MessageList = ({ data }) => (
  <FlatList
    data={data}
    keyExtractor={(item) => item}
    renderItem={({ item }) => <Text>{item}</Text>}
  />
);

export default MessageList;
