import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");

  if (secret !== process.env.REVALIDATION_SECRET_TOKEN) {
    return NextResponse.json(
      { message: "Invalid revalidation secret!" },
      { status: 401 },
    );
  }

  const tag = request.nextUrl.searchParams.get("tag");

  if (!tag) {
    return NextResponse.json(
      { message: "Missing tag param to revalidation!" },
      { status: 400 },
    );
  }

  revalidateTag(tag);

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
