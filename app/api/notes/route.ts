import { prisma } from "@/globals/db";
import { NextResponse } from "next/server";

// https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic
// 'force-dynamic': Force dynamic rendering and uncached data fetching of a layout or page by disabling all caching of fetch requests and always revalidating. This option is equivalent to:
export const dynamic = 'force-dynamic';

export async function GET() {
  const notes = await prisma.note.findMany();
  return NextResponse.json(notes);
}
