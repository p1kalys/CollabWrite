# 📝 CollabWrite – Real-Time Collaborative Document Editor

**CollabWrite** is a real-time collaborative document editor designed for seamless remote teamwork, pair programming, and shared meeting notes. Multiple users can edit the same document simultaneously using a shared link, with changes synced instantly across all sessions.

---

## 🚀 Live Demo

🎥 [Watch Demo](https://github.com/p1kalys/CollabWrite/assets/85685112/3b2c9546-beff-4645-9bf3-20f016ad7b17)

---

## 📌 Key Features

- 🧠 Real-time multi-user editing using **Socket.io**
- ✍️ Rich text editing with **Quill.js**
- 🔗 Shareable document links for live collaboration
- 📄 Auto-saving and persistent document state with **MongoDB**
- 🔒 Secure and scalable full-stack architecture

---

## 💡 Use Cases

- 📚 Pair programming and technical interviews  
- 📝 Shared meeting notes and brainstorming  
- 🧑‍💻 Real-time document collaboration for remote teams

---

## 🛠️ Tech Stack

**Frontend:**
- React.js  
- Quill.js  
- Tailwind CSS / Material UI

**Backend:**
- Node.js  
- Express.js  
- Socket.io  
- MongoDB

---

## 🏗️ Architecture

1. **Frontend** connects users to collaborative sessions and renders Quill editor.
2. **WebSocket (Socket.io)** enables real-time updates across clients.
3. **Backend** manages documents, socket connections, and MongoDB persistence.

---

## 📦 Setup Instructions

```bash
# Clone the repository
git clone https://github.com/p1kalys/CollabWrite.git

# Install backend dependencies
cd server
npm install

# Set up .env for server
# MONGO_URI=

# Start backend
npm run dev

# Open another terminal for frontend
cd ../client
npm install
npm start
