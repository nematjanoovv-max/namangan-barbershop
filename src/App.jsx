import React, { useState } from 'react';

function App() {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedBarber, setSelectedBarber] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const services = [
    { id: 1, name: 'Klassik Soch Turmagi', price: '60,000 so\'m', time: '30 min' },
    { id: 2, name: 'Soqol olish va bezash', price: '40,000 so\'m', time: '20 min' },
    { id: 3, name: 'Ata-bola (Kombo)', price: '90,000 so\'m', time: '50 min' },
    { id: 4, name: 'Premium Full (Soch + Soqol)', price: '100,000 so\'m', time: '60 min' },
  ];

  const barbers = [
    { id: 1, name: 'Jamshid Master', exp: '5 yil tajriba', rating: '4.9' },
    { id: 2, name: 'Aziz Barber', exp: '3 yil tajriba', rating: '4.8' },
    { id: 3, name: 'Behzod Stylist', exp: '7 yil tajriba', rating: '5.0' },
  ];

  const timeSlots = ['10:00', '11:30', '13:00', '14:30', '16:00', '17:30', '19:00'];

  const handleBooking = (e) => {
    e.preventDefault();
    if (!selectedService || !selectedBarber || !selectedTime || !clientName || !clientPhone) {
      alert('Iltimos, barcha maydonlarni to\'ldiring!');
      return;
    }
    setBookingSuccess(true);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans pb-12">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800 py-6 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-amber-500 tracking-wider">
          NAMANGAN PREMIUM BARBERSHOP
        </h1>
        <p className="text-gray-400 mt-2 text-sm md:text-base">
          Sizning mukammal ko'rinishingiz bizning bosh vazifamiz
        </p>
      </header>

      <main className="max-w-3xl mx-auto px-4 mt-8">
        {bookingSuccess ? (
          <div className="bg-gray-900 border border-amber-500/50 rounded-2xl p-8 text-center shadow-2xl">
            <div className="text-amber-500 text-5xl mb-4">✓</div>
            <h2 className="text-2xl font-bold text-white mb-2">Tabriklaymiz, Navbatga yozildingiz!</h2>
            <p className="text-gray-300 mb-6">
              Hurmatli <span className="text-amber-400 font-semibold">{clientName}</span>, siz muvaffaqiyatli ro'yxatdan o'tdingiz. Tez orada siz bilan bog'lanamiz.
            </p>
            <button
              onClick={() => {
                setBookingSuccess(false);
                setSelectedService(null);
                setSelectedBarber(null);
                setSelectedTime(null);
                setClientName('');
                setClientPhone('');
              }}
              className="bg-amber-600 hover:bg-amber-500 text-white font-bold py-2.5 px-6 rounded-xl transition duration-300"
            >
              Yangi bron qilish
            </button>
          </div>
        ) : (
          <form onSubmit={handleBooking} className="space-y-8">
            {/* 1. Xizmatni tanlash */}
            <section className="bg-gray-900/80 border border-gray-800 rounded-2xl p-6 shadow-xl">
              <h2 className="text-xl font-bold text-amber-400 mb-4 flex items-center gap-2">
                <span className="bg-amber-500 text-gray-950 w-7 h-7 rounded-full flex items-center justify-center text-sm font-black">1</span>
                Xizmat turini tanlang
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((service) => (
                  <div
                    key={service.id}
                    onClick={() => setSelectedService(service)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 ${
                      selectedService?.id === service.id
                        ? 'border-amber-500 bg-amber-500/10 shadow-lg shadow-amber-500/10'
                        : 'border-gray-800 bg-gray-900 hover:border-gray-700'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-semibold text-white">{service.name}</h3>
                      <span className="text-amber-400 font-bold text-sm">{service.price}</span>
                    </div>
                    <p className="text-xs text-gray-400">Vaqti: {service.time}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 2. Sartaroshni tanlash */}
            <section className="bg-gray-900/80 border border-gray-800 rounded-2xl p-6 shadow-xl">
              <h2 className="text-xl font-bold text-amber-400 mb-4 flex items-center gap-2">
                <span className="bg-amber-500 text-gray-950 w-7 h-7 rounded-full flex items-center justify-center text-sm font-black">2</span>
                Mutaxassisni tanlang
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {barbers.map((barber) => (
                  <div
                    key={barber.id}
                    onClick={() => setSelectedBarber(barber)}
                    className={`p-4 rounded-xl border cursor-pointer text-center transition-all duration-300 ${
                      selectedBarber?.id === barber.id
                        ? 'border-amber-500 bg-amber-500/10 shadow-lg shadow-amber-500/10'
                        : 'border-gray-800 bg-gray-900 hover:border-gray-700'
                    }`}
                  >
                    <div className="w-14 h-14 bg-gray-800 rounded-full mx-auto mb-3 flex items-center text-amber-400 justify-center font-bold text-xl border border-gray-700">
                      {barber.name[0]}
                    </div>
                    <h3 className="font-semibold text-white text-sm">{barber.name}</h3>
                    <p className="text-xs text-gray-400 mt-1">{barber.exp}</p>
                    <span className="inline-block mt-2 text-xs bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full">
                      ★ {barber.rating}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. Vaqtni tanlash */}
            <section className="bg-gray-900/80 border border-gray-800 rounded-2xl p-6 shadow-xl">
              <h2 className="text-xl font-bold text-amber-400 mb-4 flex items-center gap-2">
                <span className="bg-amber-500 text-gray-950 w-7 h-7 rounded-full flex items-center justify-center text-sm font-black">3</span>
                Qulay vaqtni tanlang
              </h2>
              <div className="flex flex-wrap gap-3">
                {timeSlots.map((time) => (
                  <button
                    type="button"
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`py-2 px-4 rounded-xl border text-sm font-medium transition-all duration-300 ${
                      selectedTime === time
                        ? 'border-amber-500 bg-amber-500 text-gray-950 font-bold shadow-lg shadow-amber-500/20'
                        : 'border-gray-800 bg-gray-900 text-gray-300 hover:border-gray-700'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </section>

            {/* 4. Ma'lumotlarni kiritish va tasdiqlash */}
            <section className="bg-gray-900/80 border border-gray-800 rounded-2xl p-6 shadow-xl space-y-4">
              <h2 className="text-xl font-bold text-amber-400 mb-4 flex items-center gap-2">
                <span className="bg-amber-500 text-gray-950 w-7 h-7 rounded-full flex items-center justify-center text-sm font-black">4</span>
                Aloqa ma'lumotlari
              </h2>
              <div>
                Ismingiz:
                <input
                  type="text"
                  placeholder="Masalan: Anvar"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full mt-1 bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition duration-300"
                />
              </div>
              <div>
                Telefon raqamingiz:
                <input
                  type="tel"
                  placeholder="+998 90 123 45 67"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  className="w-full mt-1 bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition duration-300"
                />
              </div>
              <button
                type="submit"
                className="w-full mt-6 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-gray-950 font-black py-4 px-8 rounded-xl shadow-lg shadow-amber-600/30 transition duration-300 text-lg uppercase tracking-wider"
              >
                Navbatni Bron Qilish
              </button>
            </section>
          </form>
        )}
      </main>
    </div>
  );
}

export default App;
