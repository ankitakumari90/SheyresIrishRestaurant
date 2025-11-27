'use client';

import { createReservation } from './ReservationAction'; 
import { useState } from 'react';

export default function ReservationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [guests, setGuests] = useState(1);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await createReservation({ name, email, tel, guests, date, time });
      alert('Reservation saved: ' + res.id);
    } catch (err) {
      alert('Error saving reservation');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input value={tel} onChange={(e) => setTel(e.target.value)} placeholder="Phone" />
      <input type="number" value={guests} onChange={(e) => setGuests(Number(e.target.value))} />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
      <button type="submit">Reserve</button>
    </form>
  );
}
