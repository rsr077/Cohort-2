import { NextRequest, NextResponse } from "next/server";
import { email } from "zod/v4";
 

export function GET(req: NextRequest) {

  return NextResponse.json({
   email: "rajeev43@gmail.com",
   name : "rajeev"
  })
  
}


export async function POST(req: NextRequest) {
   const body = await req.json();
   console.log(body)
   console.log(req.headers.get("authorization"));

   return NextResponse.json({
    message: "you are signed up"
   })
}