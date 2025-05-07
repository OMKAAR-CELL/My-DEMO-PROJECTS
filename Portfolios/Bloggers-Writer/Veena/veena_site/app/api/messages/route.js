import { connectDB } from "@/lib/db";
import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});

const Message = mongoose.models.Message || mongoose.model("Message", MessageSchema);

export async function GET() {
  try {
    await connectDB();
    const messages = await Message.find().sort({ createdAt: -1 });
    return new Response(JSON.stringify(messages), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response("Error fetching messages", { status: 500 });
  }
}
