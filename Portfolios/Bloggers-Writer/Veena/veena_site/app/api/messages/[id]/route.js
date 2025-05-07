import { NextResponse } from "next/server";
import {connectDB} from "@/lib/db";
import Message from "@/models/Message";

export async function DELETE(request, { params }) {
  try {
    await connectDB();
    const { id } = params;

    await Message.findByIdAndDelete(id);

    return NextResponse.json({ message: "Deleted successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete message" }, { status: 500 });
  }
}
