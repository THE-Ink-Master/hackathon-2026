import { NextResponse } from "next/server";
import { join } from "node:path";
import { readFile } from "node:fs/promises";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const quizNum = searchParams.get("quizId");

    const file = join(process.cwd(), "quiz", `${quizNum}.yaml`);
    const fileData = await readFile(file, "utf-8");
    // console.log(fileData);
    return NextResponse.json({ fileData }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
