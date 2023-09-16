import { NextResponse } from "next/server";
import { connect } from "@/Db/connection";
import { Winner } from "@/Db/schema";
import NextCors from 'nextjs-cors';
import { NextApiRequest, NextApiResponse} from "next";
connect();
export async function GET(req: NextApiRequest, res: NextApiResponse) {
  await NextCors(req, res ,{
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
 });
    const winners = await Winner.find();
    return NextResponse.json(winners, {status: 200});
  }