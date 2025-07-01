import React, { useState } from 'react';
import { Calendar, MapPin, Users, Clock, Star, Search, Filter, Plus, Settings, BarChart3, User, LogOut, Bell, Heart, Share2, Ticket, CreditCard, Menu, X } from 'lucide-react';



interface EventType {
  id: number;
  image: string;
  title: string;
  description: string;
  category: string;
  rating: number;
  date: string;
  time: string;
  location: string;
  attendees: number;
  price: number;

  organizer: string;
}



interface EventCardProps {
  event: EventType;
  setSelectedEvent: (event: EventType) => void;
}

type EventModalProps = {
  event: EventType;
  onClose: () => void;
};

const FaajiExpressUI = () => {
  const [currentRole, setCurrentRole] = useState('user'); // 'user', 'organizer', 'admin'
  const [currentView, setCurrentView] = useState('events'); // 'events', 'dashboard', 'profile'
 // const [selectedEvent, setSelectedEvent] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);
  // Sample data
  const events = [
    {
      id: 1,
      title: "Lagos Tech Conference 2025",
      date: "2025-07-15",
      time: "09:00 AM",
      location: "Victoria Island, Lagos",
      organizer: "TechHub Nigeria",
      price: 15000,
      category: "Technology",
      attendees: 250,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
      description: "Join Nigeria's premier tech conference featuring industry leaders and innovative startups."
    },
    {
      id: 2,
      title: "Afrobeats Night Live",
      date: "2025-07-20",
      time: "08:00 PM",
      location: "Tafawa Balewa Square, Lagos",
      organizer: "Lagos Entertainment",
      price: 8000,
      category: "Music",
      attendees: 500,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      description: "Experience the best of Afrobeats with top Nigerian artists in an unforgettable night."
    },
    {
      id: 3,
      title: "Nigerian Food Festival",
      date: "2025-07-25",
      time: "12:00 PM",
      location: "National Theatre, Lagos",
      organizer: "Culinary Arts Nigeria",
      price: 5000,
      category: "Food & Drink",
      attendees: 300,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop",
      description: "Celebrate Nigerian cuisine with cooking demos, tastings, and cultural performances."
    }
  ];

  
    const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const Header = () => (
    <header className="bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold">🎉 Faaji Express</div>
            <nav className="hidden md:flex space-x-6">
              <button 
                onClick={() => setCurrentView('events')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentView === 'events' ? 'bg-white/20' : 'hover:bg-white/10'
                }`}
              >
                Events
              </button>
              <button 
                onClick={() => setCurrentView('dashboard')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentView === 'dashboard' ? 'bg-white/20' : 'hover:bg-white/10'
                }`}
              >
                Dashboard
              </button>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <select 
                value={currentRole} 
                onChange={(e) => setCurrentRole(e.target.value)}
                className="bg-white/20 border border-white/30 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                <option value="user">👤 User</option>
                <option value="organizer">🏢 Organizer</option>
                <option value="admin">⚙️ Admin</option>
              </select>
            </div>
            <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
              <Bell size={20} />
            </button>
            <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
              <User size={20} />
            </button>
            <button 
              className="md:hidden p-2 rounded-full hover:bg-white/10 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-white/20 pt-4 pb-4">
            <nav className="flex flex-col space-y-2">
              <button 
                onClick={() => {setCurrentView('events'); setIsMobileMenuOpen(false);}}
                className="text-left px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10"
              >
                Events
              </button>
              <button 
                onClick={() => {setCurrentView('dashboard'); setIsMobileMenuOpen(false);}}
                className="text-left px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10"
              >
                Dashboard
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );

    const EventCard: React.FC<EventCardProps> = ({ event, setSelectedEvent }) => (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4">
          <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
            <Heart size={16} className="text-red-500" />
          </button>
        </div>
        <div className="absolute bottom-4 left-4">
          <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {event.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900 line-clamp-1">{event.title}</h3>
          <div className="flex items-center space-x-1">
            <Star className="text-yellow-400 fill-current" size={16} />
            <span className="text-sm text-gray-600">{event.rating}</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{event.description}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600 text-sm">
            <Calendar size={16} className="mr-2" />
            {new Date(event.date).toLocaleDateString('en-GB', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <Clock size={16} className="mr-2" />
            {event.time}
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <MapPin size={16} className="mr-2" />
            {event.location}
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <Users size={16} className="mr-2" />
            {event.attendees} attendees
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-purple-600">
            {formatPrice(event.price)}
          </div>
          <div className="flex space-x-2">
            <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors">
              <Share2 size={16} />
            </button>
            <button 
              onClick={() => setSelectedEvent(event)}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full font-medium hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const EventsView = () => (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-8 md:p-12">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Discover Amazing Events
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            From tech conferences to music festivals, find your next unforgettable experience
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search events, locations, or categories..."
                className="w-full pl-10 pr-4 py-3 rounded-full text-gray-900 border-0 focus:outline-none focus:ring-4 focus:ring-white/30"
              />
            </div>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Search Events
            </button>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center space-x-2">
            <Filter size={20} className="text-gray-600" />
            <span className="font-medium text-gray-900">Filters:</span>
          </div>
          <select className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500">
            <option>All Categories</option>
            <option>Technology</option>
            <option>Music</option>
            <option>Food & Drink</option>
            <option>Business</option>
          </select>
          <select className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500">
            <option>All Dates</option>
            <option>This Week</option>
            <option>This Month</option>
            <option>Next Month</option>
          </select>
          <select className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500">
            <option>All Locations</option>
            <option>Lagos</option>
            <option>Abuja</option>
            <option>Port Harcourt</option>
          </select>
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map(event => (
          

          <EventCard
      key={event.id}
      event={event}
      setSelectedEvent={setSelectedEvent} // ✅ Fixes the error
    />
        ))}
      </div>
    </div>
  );

  const DashboardView = () => {
    const getDashboardContent = () => {
      switch(currentRole) {
        case 'organizer':
          return (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">Organizer Dashboard</h2>
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-medium hover:from-purple-700 hover:to-pink-700 transition-all flex items-center space-x-2">
                  <Plus size={20} />
                  <span>Create Event</span>
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Events</p>
                      <p className="text-3xl font-bold text-gray-900">12</p>
                    </div>
                    <div className="bg-purple-100 p-3 rounded-full">
                      <Calendar className="text-purple-600" size={24} />
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Attendees</p>
                      <p className="text-3xl font-bold text-gray-900">2,450</p>
                    </div>
                    <div className="bg-green-100 p-3 rounded-full">
                      <Users className="text-green-600" size={24} />
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Revenue</p>
                      <p className="text-3xl font-bold text-gray-900">₦1.2M</p>
                    </div>
                    <div className="bg-yellow-100 p-3 rounded-full">
                      <CreditCard className="text-yellow-600" size={24} />
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Avg Rating</p>
                      <p className="text-3xl font-bold text-gray-900">4.8</p>
                    </div>
                    <div className="bg-pink-100 p-3 rounded-full">
                      <Star className="text-pink-600" size={24} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Your Events</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Event Name</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Date</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Attendees</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Revenue</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {events.slice(0, 3).map(event => (
                        <tr key={event.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium text-gray-900">{event.title}</td>
                          <td className="py-3 px-4 text-gray-600">{new Date(event.date).toLocaleDateString()}</td>
                          <td className="py-3 px-4 text-gray-600">{event.attendees}</td>
                          <td className="py-3 px-4 text-gray-600">{formatPrice(event.price * event.attendees * 0.8)}</td>
                          <td className="py-3 px-4">
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">Active</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          );
        
        case 'admin':
          return (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Admin Dashboard</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Users</p>
                      <p className="text-3xl font-bold text-gray-900">25,430</p>
                    </div>
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Users className="text-blue-600" size={24} />
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Events</p>
                      <p className="text-3xl font-bold text-gray-900">1,240</p>
                    </div>
                    <div className="bg-purple-100 p-3 rounded-full">
                      <Calendar className="text-purple-600" size={24} />
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                      <p className="text-3xl font-bold text-gray-900">₦45.2M</p>
                    </div>
                    <div className="bg-green-100 p-3 rounded-full">
                      <CreditCard className="text-green-600" size={24} />
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Active Organizers</p>
                      <p className="text-3xl font-bold text-gray-900">342</p>
                    </div>
                    <div className="bg-orange-100 p-3 rounded-full">
                      <BarChart3 className="text-orange-600" size={24} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Events</h3>
                  <div className="space-y-3">
                    {events.map(event => (
                      <div key={event.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">{event.title}</p>
                          <p className="text-sm text-gray-600">{event.organizer}</p>
                        </div>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">Approved</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Platform Analytics</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Monthly Growth</span>
                      <span className="text-green-600 font-semibold">+15.2%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Event Success Rate</span>
                      <span className="text-green-600 font-semibold">94.5%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">User Satisfaction</span>
                      <span className="text-green-600 font-semibold">4.7/5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        
        default: // user
          return (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">My Dashboard</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Events Attended</p>
                      <p className="text-3xl font-bold text-gray-900">8</p>
                    </div>
                    <div className="bg-purple-100 p-3 rounded-full">
                      <Ticket className="text-purple-600" size={24} />
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Upcoming Events</p>
                      <p className="text-3xl font-bold text-gray-900">3</p>
                    </div>
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Calendar className="text-blue-600" size={24} />
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Saved Events</p>
                      <p className="text-3xl font-bold text-gray-900">12</p>
                    </div>
                    <div className="bg-pink-100 p-3 rounded-full">
                      <Heart className="text-pink-600" size={24} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">My Upcoming Events</h3>
                <div className="space-y-4">
                  {events.slice(0, 2).map(event => (
                    <div key={event.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <img src={event.image} alt={event.title} className="w-16 h-16 rounded-lg object-cover" />
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{event.title}</h4>
                        <p className="text-sm text-gray-600">{new Date(event.date).toLocaleDateString()} • {event.location}</p>
                      </div>
                      <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                        View Ticket
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
      }
    };

    return getDashboardContent();
  };


    const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => {

    return( <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="relative">
                    <img src={event.image} alt={event.title} className="w-full h-64 object-cover rounded-t-2xl" />
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-3xl font-bold text-gray-900">{event.title}</h2>
                        <div className="flex items-center space-x-1">
                            <Star className="text-yellow-400 fill-current" size={20} />
                            <span className="text-lg font-medium">{event.rating}</span>
                        </div>
                    </div>

                    <p className="text-gray-600 mb-6">{event.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center text-gray-700">
                            <Calendar size={20} className="mr-3 text-purple-600" />
                            <div>
                                <p className="font-medium">Date & Time</p>
                                <p className="text-sm">{new Date(event.date).toLocaleDateString('en-GB', {
                                    weekday: 'long',
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })} at {event.time}</p>
                            </div>
                        </div>
                        <div className="flex items-center text-gray-700">
                            <MapPin size={20} className="mr-3 text-purple-600" />
                            <div>
                                <p className="font-medium">Location</p>
                                <p className="text-sm">{event.location}</p>
                            </div>
                        </div>
                        <div className="flex items-center text-gray-700">
                            <Users size={20} className="mr-3 text-purple-600" />
                            <div>
                                <p className="font-medium">Attendees</p>
                                <p className="text-sm">{event.attendees} people attending</p>
                            </div>
                        </div>
                        <div className="flex items-center text-gray-700">
                            <User size={20} className="mr-3 text-purple-600" />
                            <div>
                                <p className="font-medium">Organizer</p>
                                <p className="text-sm">{event.organizer}</p>
                            </div>
                        </div>
                    </div>

                    <div className="border-t pt-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600">Ticket Price</p>
                                <p className="text-3xl font-bold text-purple-600">{formatPrice(event.price)}</p>
                            </div>
                            <div className="flex space-x-3">
                                <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors">
                                    Save Event
                                </button>
                                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-medium hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 flex items-center space-x-2">
                                    <Ticket size={20} />
                                    <span>Buy Ticket</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)};

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentView === 'events' ? <EventsView /> : <DashboardView />}
      </main>
      
      {selectedEvent && (
        <EventModal 
          event={selectedEvent} 
          onClose={() => setSelectedEvent(null)} 
        />
      )}
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="text-2xl font-bold mb-4">🎉 Faaji Express</div>
              <p className="text-gray-300 mb-4">
                Nigeria's premier event discovery platform. Find, book, and attend amazing events across the country.
              </p>
              <div className="flex space-x-4">
                <button className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors">
                  📘
                </button>
                <button className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors">
                  🐦
                </button>
                <button className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors">
                  📸
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Browse Events</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Create Event</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Categories</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Technology</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Music & Entertainment</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Food & Drink</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Business & Networking</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Faaji Express. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FaajiExpressUI;