import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  const apps = await prisma.application.findMany({
    include: { company: true },
    orderBy: { createdAt: 'desc' }
  });
  return NextResponse.json(apps);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    if (!body.role || !body.companyName) {
      return NextResponse.json({ error: 'role and companyName are required' }, { status: 400 });
    }

    // create app and create company if missing (connectOrCreate)
    const app = await prisma.application.create({
      data: {
        role: body.role,
        appliedAt: body.appliedAt ? new Date(body.appliedAt) : new Date(),
        company: {
          connectOrCreate: {
            where: { name: body.companyName },
            create: { name: body.companyName }
          }
        }
      },
      include: { company: true }
    });

    return NextResponse.json(app, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}