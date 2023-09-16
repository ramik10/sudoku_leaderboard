import { NextResponse } from "next/server";
import { connect } from "@/Db/connection";
import { Winner } from "@/Db/schema";
connect();
export async function GET(request: Request) {
    const winners = await Winner.find();
    return NextResponse.json(winners, {status: 200});
  }