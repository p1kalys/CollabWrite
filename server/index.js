const mongoose = require("mongoose")
const Document = require("./db/db")
require('dotenv').config();
const http = require("http");
const server = http.createServer();

mongoose.connect(process.env.MONGO_URI);


const io = require("socket.io")(server, {
  cors: {
    origin: "https://collab-write-lac.vercel.app/",
    methods: ["GET", "POST"],
  },
})

const defaultValue = ""

io.on("connection", socket => {
  socket.on("get-document", async documentId => {
    const document = await findOrCreateDocument(documentId)
    socket.join(documentId)
    socket.emit("load-document", document.data)

    socket.on("send-changes", delta => {
      socket.broadcast.to(documentId).emit("receive-changes", delta)
    })

    socket.on("save-document", async data => {
      await Document.findByIdAndUpdate(documentId, { data })
    })
  })
})

async function findOrCreateDocument(id) {
  if (id == null) return

  const document = await Document.findById(id)
  if (document) return document
  return await Document.create({ _id: id, data: defaultValue })
}

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});