import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/Db/connection";
import { Winner } from "@/Db/schema";
connect();


export async function POST(request: NextRequest) {
  const data =await request.json();
  const name = data.PlayerName;
  const image = data.PlayerImage;
  const email = data.PlayerEmail;
  const moves = data.movesTaken;
  const gameMode = data.gameModeName;
  const timeTaken = data.timeTaken;
  await Winner.create({name:name, image:image, email:email, moves:moves, gameMode: gameMode, timeTaken: timeTaken});
  return NextResponse.json({"success":"true"}, {status: 200});
}