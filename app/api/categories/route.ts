import prisma from "@/lib/prismaDB";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const categories = await prisma.categoty.findMany();

    return new NextResponse(JSON.stringify(categories), { status: 200 });
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }),
      { status: 500 }
    );
  }
};
