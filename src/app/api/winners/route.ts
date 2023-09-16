import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/Db/connection";
import { Winner } from "@/Db/schema";
export const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};


export async function OPTIONS(req: NextRequest) {
  return NextResponse.json({}, { headers: corsHeaders });
}


connect();
export async function POST(request: NextRequest) {
    const winners = await Winner.find();
    return NextResponse.json(winners, {status: 200});
  }