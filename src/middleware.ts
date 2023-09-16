import { NextRequest, NextResponse } from 'next/server'


export const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}

export function middleware(request: NextRequest) {
  if (request.method === 'OPTIONS') {
    return NextResponse.rewrite(request.url, { headers: corsHeaders })
  }
}

export const config = {
  matcher: '/api/:path*',
}