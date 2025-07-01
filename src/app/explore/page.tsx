import EventCard from '@/components/EventCard'
import { events } from '@/data/events'
import React from 'react'

export default function explore() {
  return (
    <div className=' mt-0 md:mt-10 px-10 py-16'>
     
     
     <section  >
        <div className="p-6 bg-white min-h-screen max-w-[90%] mx-auto">
    <h2 className="text-2xl font-bold mb-6">Top trending in Lagos</h2>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {events.map((event, index) => (
        <EventCard key={index} {...event} />
      ))}
    </div>
  </div>
     </section>
     
     
    </div>
  )
}
