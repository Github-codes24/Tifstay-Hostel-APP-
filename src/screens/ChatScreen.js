// ChatScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";

const ChatScreen = ({ navigation }) => {
  const [messages, setMessages] = useState([
    { id: "1", text: "consequat nunc vitae tincidunt risus quam lectus.", time: "06:33 AM", type: "sent" },
    { id: "2", text: "Lorem ipsum dolor sit amet consectetur. Turpis vivamus pretium ac diam vitae cursus. Dictumst id consequat nunc vitae tincidunt risus quam lectus.", time: "06:34 AM", type: "received" },
    { id: "3", text: "Lorem ipsum dolor sit amet consectetur. Turpis vivamus pretium ac diam vitae cursus. Dictumst id consequat nunc vitae tincidunt risus quam lectus.", time: "06:35 AM", type: "sent" },
    { id: "4", text: "Lorem ipsum dolor sit amet consectetur. Turpis vivamus pretium ac diam vitae cursus. Dictumst id consequat nunc vitae tincidunt risus quam lectus.", time: "06:36 AM", type: "received" },
    { id: "5", text: "Lorem ipsum dolor sit amet consectetur. Turpis vivamus pretium ac diam vitae cursus. Dictumst id consequat nunc vitae tincidunt risus quam lectus.", time: "06:37 AM", type: "sent" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim().length > 0) {
      const newMsg = {
        id: Date.now().toString(),
        text: input,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        type: "sent",
      };
      setMessages([...messages, newMsg]);
      setInput("");
    }
  };

  const renderMessage = ({ item }) => (
    <View
      style={[
        styles.messageContainer,
        item.type === "sent" ? styles.sentMessage : styles.receivedMessage,
      ]}
    >
      <Text
        style={[
          styles.messageText,
          item.type === "sent" ? styles.sentText : styles.receivedText,
        ]}
      >
        {item.text}
      </Text>
      <Text style={styles.timeText}>{item.time}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../screens/Assets/Images/Backarrow.png")}
            style={styles.backArrow}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Chat</Text>
      </View>

      {/* Chat List */}
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.chatList}
      />

      {/* Input Box */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type Message..."
          placeholderTextColor="#999"
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Image
            source={require("../screens/Assets/Images/SendArrow.png")} // orange send arrow
            style={styles.sendIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  backArrow: { width: 25, height: 25, resizeMode: "contain" },
  headerTitle: { fontSize: 20, fontWeight: "bold", marginLeft: 10 },

  chatList: { padding: 15 },

  messageContainer: {
    maxWidth: "75%",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  sentMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#3A8DFF",
  },
  receivedMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#F0F0F0",
  },
  messageText: { fontSize: 14, lineHeight: 20 },
  sentText: { color: "#fff" },
  receivedText: { color: "#000" },
  timeText: {
    fontSize: 11,
    color: "#666",
    marginTop: 4,
    textAlign: "right",
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    padding: 10,
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    backgroundColor: "#f9f6ff",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    fontSize: 14,
    color: "#000",
  },
  sendButton: { marginLeft: 8 },
  sendIcon: { width: 28, height: 28, resizeMode: "contain" },
});

export default ChatScreen;
