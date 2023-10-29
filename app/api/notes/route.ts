import { prisma } from "@/globals/db";
import { NextResponse, NextRequest } from "next/server";
import { zUpsertNote } from "@/app/notes/type";

// https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic
// 'force-dynamic': Force dynamic rendering and uncached data fetching of a layout or page by disabling all caching of fetch requests and always revalidating. This option is equivalent to:
export const dynamic = 'force-dynamic';

export async function GET() {
  const notes = await prisma.note.findMany();

  return NextResponse.json(notes);
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const parcedData = zUpsertNote.parse(data);
  const note = await prisma.note.create({
    data: { title: parcedData.title, body: parcedData.body },
  });

  return new NextResponse(`${note.id}`, { status: 201 })
}
