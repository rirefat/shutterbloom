import {  getPhotoById } from "@/lib/image-data";
import { NextResponse } from "next/server";

export async function GET(request, {params}) {
    const photoID = params?.id;
    const data =await getPhotoById(photoID);

    return NextResponse.json(data);
}