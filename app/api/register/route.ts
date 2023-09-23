// import prisma from "@/lib/prismaDB";
// import { NextResponse } from "next/server";
// import bcrypt from "bcrypt";
// import { DataProps } from "@/types/type";

// export async function POST(req: Request) {
//   const body = await req.json();
//   const { name, email, password }: any = body.user;

//   console.log(body.user);

//   if (!name || !email || !password) {
//     return new NextResponse("Something went wrong  for exist user", {
//       status: 400,
//     });
//   }

//   const existUser = await prisma.user.findUnique({
//     where: {
//       email: email,
//     },
//   });

//   if (existUser) {
//     return new NextResponse("User already exist ", {
//       status: 400,
//     });
//   }

//   // hash password
//   const hashPassword = await bcrypt.hash(password, 10);

//   //Create User

//   const user = await prisma.user.create({
//     data: {
//       name: name,
//       email: email,
//       hashPassword,
//     },
//   });

//   return (
//     NextResponse.json(user),
//     {
//       status: 200,
//     }
//   );
// }
