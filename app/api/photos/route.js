import { getAllPhotos } from "@/lib/image-data";
import { NextResponse } from "next/server";

export async function GET(response) {
    const data = await getAllPhotos(); 
    return NextResponse.json(data);
}