/*
Filename: sophisticatedCode.js
Content: Advanced Chat Application

*/

// Define Class to represent a Chat User
class User {
  constructor(username) {
    this.username = username;
    this.messages = [];
  }

  sendMessage(message, recipient) {
    recipient.receiveMessage(message, this.username);
  }

  receiveMessage(message, sender) {
    this.messages.push({
      sender: sender,
      message: message,
      timestamp: new Date(),
    });
  }
}

// Define Class to represent a Chat Room
class ChatRoom {
  constructor() {
    this.users = [];
    this.messages = [];
  }

  addUser(user) {
    this.users.push(user);
  }

  removeUser(username) {
    this.users = this.users.filter((user) => user.username !== username);
  }

  broadcastMessage(message, sender) {
    this.users.forEach((user) => {
      if (user.username !== sender.username) {
        user.receiveMessage(message, sender.username);
      }
    });

    this.messages.push({
      sender: sender.username,
      message: message,
      timestamp: new Date(),
    });
  }
}

// Create Users
const user1 = new User("John");
const user2 = new User("Jane");
const user3 = new User("Mike");

// Create Chat Room
const chatRoom = new ChatRoom();

// Add Users to Chat Room
chatRoom.addUser(user1);
chatRoom.addUser(user2);
chatRoom.addUser(user3);

// Simulate Chat Room activity
user1.sendMessage("Hello everyone!", chatRoom);
user2.sendMessage("Hey John!", chatRoom);
user3.sendMessage("Hi all!", chatRoom);

console.log("Chatroom messages:", chatRoom.messages);
console.log("User 3 messages:", user3.messages);