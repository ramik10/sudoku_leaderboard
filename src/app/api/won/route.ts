import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/Db/connection";
import { Winner } from "@/Db/schema";
connect();


export async function POST(request: NextRequest) {
  const data =await request.json();
  const name = data.PlayerName;
  const image = data.PlayerImage;
  const email = data.PlayerEmail;
  await Winner.create({name:name, image:image, email:email});
  return NextResponse.json({"success":"true"}, {status: 200});
}