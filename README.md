# Baat-Chit
Baat-Chit is a Realtime Chatting Application. It is a web-based platform that allows users to engage in live conversations with each other.

It utilizes Node.js as the server-side framework and Socket.io as the real-time communication library. 

The app enables users to join chat room by entering the name on prompt dialog box, receive notifications when new users join or leave, and displays the total number of users and their names in the chat room.

The UI of the web app is user friendly and simple yet attractive.It is user-friendly for connecting people and facilitating meaningful conversations.

The app encourages real-time communication and promotes a sense of community by displaying the number and names of users present in each chat room.

# Key features

• Dialog box for entering name of the user.

• Real time communication using Socket.io : Whenever a user sends a message or performs any action, the server broadcasts it to all other users in the same chat room.

• User Join/Leave Notifications: When a new user join/leave a chat room, a notification is displayed to all existing users so other users can acknowledge the arrival/departure.

• User Count Display: The chat app shows the total number of users currently present in the chat room. This count updates dynamically as users join or leave.

• User Name Display: The app displays the names of all users in the chat room. Names list updates dynamically as users join or leave.


Server Setup:
The backend server is built using Node.js, which provides a robust and efficient environment for handling concurrent connections.
Socket.io, a library for real-time communication, is integrated with the server to enable real-time chat functionality.


Client-Side Interface:
The frontend of the chat app is developed using HTML, CSS, and JavaScript.


Socket.io Integration:
When a user accesses the app, the client establishes a WebSocket connection with the server using Socket.io.
This connection allows the server to push updates and messages to all connected clients instantly.
