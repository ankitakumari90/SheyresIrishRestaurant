'use server';

import {prisma} from '@/lib/prisma';

export async function createReservation(data: {
  name: string;
  email: string;
  tel: string;
  guests: number;
  date: string;
  time: string;
}) {
  return await prisma.reservation.create({
    data: {
      ...data,
      date: new Date(data.date),
    },
  });
}
