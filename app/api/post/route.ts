import prisma from "@/utils/prismaDB";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const { title, description } = body;
    console.log(body);

    const post = await prisma.post.create({
      data: {
        title,
        description,
      },
    });

    return new NextResponse(JSON.stringify(post), {
      status: 200,
    });
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }),
      { status: 500 }
    );
  }
};

export const GET = async () => {
  try {
    const post = await prisma.post.findMany();

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }),
      { status: 500 }
    );
  }
};
