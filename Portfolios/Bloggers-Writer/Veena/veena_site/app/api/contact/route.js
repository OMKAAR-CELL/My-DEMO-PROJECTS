import { connectDB } from "@/lib/db";
import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});

const Message = mongoose.models.Message || mongoose.model("Message", MessageSchema);

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const savedMessage = await Message.create(body);
    return new Response(JSON.stringify(savedMessage), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Server error", { status: 500 });
  }
}
