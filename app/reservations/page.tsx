'use client';

import { useState } from 'react';
import { createReservation } from './ReservationAction'; 

const steps = ["Information", "Guests", "Date", "Time", "Confirm"];
const times = ["7:00 pm", "7:30 pm", "8:00 pm", "8:30 pm", "9:00 pm"];

export default function Reservation() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [guests, setGuests] = useState(1);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const isStepValid = () => {
    switch (step) {
      case 1: return name && email && tel;
      case 2: return guests > 0;
      case 3: return date;
      case 4: return time;
      default: return true;
    }
  };

  const nextStep = () => {
    if (!isStepValid()) {
      alert("Please fill in all required fields!");
      return;
    }
    setStep(step + 1);
  };

  const handleConfirm = async () => {
    try {
      // Call Server Action directly instead of fetch
      const res = await createReservation({ name, email, tel, guests, date, time });
      alert('Reservation Confirmed! ID: ' + res.id);

      // Reset form
      setStep(1);
      setName(''); setEmail(''); setTel(''); setGuests(1); setDate(''); setTime('');
    } catch (err) {
      console.error('Server Action Error:', err);
      alert('Error submitting reservation!');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-start bg-gray-50 p-4 sm:p-8">
      <div className="w-full max-w-xl bg-white shadow-2xl p-6 sm:p-10 rounded-3xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-gray-800">
          Book a Table
        </h2>

        {/* Step Indicator */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4 sm:gap-0">
          {steps.map((s, i) => (
            <div key={i} className="flex items-center flex-1">
              <div className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold transition-colors ${step > i ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"}`}>{i + 1}</div>
              <span className="ml-2 text-sm sm:text-base text-gray-700">{s}</span>
              {i < steps.length - 1 && <div className="flex-1 h-px bg-gray-300 mx-2"></div>}
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div className="flex flex-col gap-4">
          {step === 1 && (
            <>
              <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} className="border p-3 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none w-full" />
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border p-3 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none w-full" />
              <input type="tel" placeholder="Phone number" value={tel} onChange={(e) => setTel(e.target.value)} className="border p-3 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none w-full" />
            </>
          )}

          {step === 2 && (
            <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
              {[...Array(10)].map((_, i) => {
                const num = i + 1;
                return (
                  <button key={num} className={`w-12 h-12 rounded-full border text-lg font-medium ${guests === num ? "bg-blue-600 text-white shadow-lg scale-105" : "bg-gray-100 text-gray-800 hover:bg-blue-50"}`} onClick={() => setGuests(num)}>{num}</button>
                );
              })}
            </div>
          )}

          {step === 3 && (
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="border p-3 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none w-full" />
          )}

          {step === 4 && (
            <div className="flex gap-2 flex-wrap justify-center sm:justify-start">
              {times.map((t) => (
                <button key={t} className={`px-4 py-2 rounded-xl border ${time === t ? "bg-blue-600 text-white shadow-lg scale-105" : "bg-gray-100 text-gray-800 hover:bg-blue-50"}`} onClick={() => setTime(t)}>{t}</button>
              ))}
            </div>
          )}

          {step === 5 && (
            <div className="flex flex-col gap-2 text-gray-800">
              <h3 className="text-lg font-semibold text-center sm:text-left">Confirm your reservation:</h3>
              <p><strong>Name:</strong> {name}</p>
              <p><strong>Email:</strong> {email}</p>
              <p><strong>Phone:</strong> {tel}</p>
              <p><strong>Guests:</strong> {guests}</p>
              <p><strong>Date:</strong> {date}</p>
              <p><strong>Time:</strong> {time}</p>
              <button onClick={handleConfirm} className="mt-4 px-6 py-2 rounded-xl bg-green-600 text-white hover:bg-green-700 w-full sm:w-auto">
                Confirm Reservation
              </button>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between gap-4">
          {step > 1 && <button onClick={() => setStep(step - 1)} className="px-6 py-2 rounded-xl border hover:bg-gray-100 w-full sm:w-auto">Back</button>}
          {step < steps.length && <button onClick={nextStep} className="px-6 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 w-full sm:w-auto">Next</button>}
        </div>
      </div>
    </div>
  );
}
