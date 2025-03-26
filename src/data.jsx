import {
  airbnb,
  airpeace,
  bolt,
  booking,
  glovo,
  hostelworld,
  makemytrip,
  trip,
  uber,
  wakanow
} from './assets/partners'

import {
  australia,
  dubai,
  france,
  indonesia,
  italy,
  japan,
  southafrica,
  usa
} from './assets/destinations'

import {
  client1,
  client2,
  client3,
  client4,
  client5,
  client6
} from './assets/clients'

import { BsAirplaneEngines, BsHeadset } from 'react-icons/bs'
import { MdOutlineKingBed, MdOutlineAlternateEmail } from 'react-icons/md'
import { CiMap } from 'react-icons/ci'
import { LuShieldPlus, LuDraftingCompass } from 'react-icons/lu'
import {
  IoPricetagsOutline,
  IoLaptopOutline,
  IoCallOutline,
  IoLocationOutline
} from 'react-icons/io5'
import { FiChevronsRight } from 'react-icons/fi'

export const partners = [
  { image: airbnb, name: 'Airbnb' },
  { image: airpeace, name: 'Airpeace' },
  { image: bolt, name: 'Bolt' },
  { image: booking, name: 'Booking' },
  { image: glovo, name: 'Glovo' },
  { image: hostelworld, name: 'Hostelworld' },
  { image: makemytrip, name: 'MakeMytrip' },
  { image: trip, name: 'Trip' },
  { image: uber, name: 'uber' },
  { image: wakanow, name: 'Wakanow' }
]
export const services = [
  {
    title: 'Flight Booking',
    icon: BsAirplaneEngines,
    description: 'Find the best deals on domestic and international flights.'
  },
  {
    title: 'Hotel Reservations',
    icon: MdOutlineKingBed,
    description: "Book top-rated hotels and cozy stays at prices you'll love."
  },
  {
    title: 'Customized Tours',
    icon: CiMap,
    description:
      'Tailor-made itineraries designed just for you, so every trip feels special.'
  },
  {
    title: 'Travel Insurance',
    icon: LuShieldPlus,
    description:
      'Stay worry-free with comprehensive travel protection for every journey.'
  }
]

export const popularDestinations = [
  {
    title: 'Paris, City of Love',
    rating: 4.8,
    description:
      'Explore the iconic Eiffel Tower, charming streets, and world-class art museums like the Louvre.',
    price: 1200,
    country: 'France',
    flights_number: 350,
    hotels_number: 220,
    image: france
  },
  {
    title: 'Tokyo, Fusion of Tradition and Modernity',
    rating: 4.9,
    description:
      'A vibrant mix of ancient temples, neon-lit skyscrapers, and rich culinary delights.',
    price: 1500,
    country: 'Japan',
    flights_number: 400,
    hotels_number: 300,
    image: japan
  },
  {
    title: 'Rome, Eternal City',
    rating: 4.7,
    description:
      "Experience ancient ruins like the Colosseum and the Vatican City's treasures.",
    price: 1100,
    country: 'Italy',
    flights_number: 280,
    hotels_number: 180,
    image: italy
  },
  {
    title: 'New York City, The City That Never Sleeps',
    rating: 4.9,
    description:
      'Enjoy Times Square, Central Park, the Statue of Liberty, and the bustling city vibe.',
    price: 1400,
    country: 'USA',
    flights_number: 450,
    hotels_number: 320,
    image: usa
  },
  {
    title: 'Dubai, Luxury and Adventure',
    rating: 4.8,
    description:
      'Marvel at Burj Khalifa, enjoy desert safaris, and shop at massive malls.',
    price: 1300,
    country: 'UAE',
    flights_number: 330,
    hotels_number: 250,
    image: dubai
  },
  {
    title: 'Bali, Tropical Paradise',
    rating: 4.9,
    description:
      'Relax on stunning beaches, explore rice terraces, and immerse yourself in Balinese culture.',
    price: 1000,
    country: 'Indonesia',
    flights_number: 210,
    hotels_number: 150,
    image: indonesia
  },
  {
    title: 'Cape Town, Scenic Beauty',
    rating: 4.7,
    description:
      'Enjoy Table Mountain views, visit vineyards, and experience South African culture.',
    price: 900,
    country: 'South Africa',
    flights_number: 180,
    hotels_number: 140,
    image: southafrica
  },
  {
    title: 'Sydney, Iconic Landmarks',
    rating: 4.8,
    description:
      'Visit the Sydney Opera House, Bondi Beach, and vibrant harborside attractions.',
    price: 1250,
    country: 'Australia',
    flights_number: 300,
    hotels_number: 210,
    image: australia
  }
]

export const whyChooseUs = [
  {
    title: 'Affordable Prices',
    icon: IoPricetagsOutline,
    description:
      'Travel more for less with unbeatable deals on flights, hotels, and packages.'
  },
  {
    title: 'Easy Booking Process',
    icon: IoLaptopOutline,
    description:
      'Plan and book your entire trip in just a few clicks on our user-friendly platform.'
  },
  {
    title: '24/7 Customer Support',
    icon: BsHeadset,
    description:
      'Our team is available around the clock to help you with any travel needs or concerns.'
  },
  {
    title: 'Personalized Itineraries',
    icon: LuDraftingCompass,
    description:
      'Every traveler is unique, so we craft experiences tailored to your interests and preferences.'
  }
]

export const testimonials = [
  {
    name: 'Sarah Johnson',
    position: 'Travel Blogger',
    company: 'WanderVibes',
    profile: client1,
    content:
      "Travins made my dream honeymoon come true! From flight bookings to hotel arrangements, everything was seamless. Their customer service was always a call away. I'll recommend them to anyone looking for a stress-free travel experience."
  },
  {
    name: 'Michael Brown',
    position: 'CEO',
    company: 'Adventure Seekers Ltd.',
    profile: client2,
    content:
      'As someone who frequently travels for business, Travins has been a game-changer. Their easy-to-use platform and personalized itineraries have saved me so much time. They truly understand the needs of travelers.'
  },
  {
    name: 'Aisha Ibrahim',
    position: 'Content Creator',
    company: 'Global Explorer Media',
    profile: client3,
    content:
      'Booking with Travins was the best decision I made for my family vacation. Everything was perfectly planned, and we even got exclusive discounts on some of the best hotels. I can’t wait to plan my next trip with them!'
  },
  {
    name: 'David Kim',
    position: 'Operations Manager',
    company: 'JetSet Tours',
    profile: client4,
    content:
      'I’ve used many travel platforms before, but none compare to Travins. Their attention to detail, affordable prices, and excellent support make them stand out. I highly recommend them to anyone planning their next adventure.'
  },
  {
    name: 'Emily Rodriguez',
    position: 'Freelance Photographer',
    company: 'Nomadic Lens Co.',
    profile: client5,
    content:
      'Travins not only helped me discover hidden gems during my solo trip to Bali but also ensured that every step of my journey was hassle-free. Their customized tour packages are truly worth it!'
  },
  {
    name: 'James Anderson',
    position: 'Digital Nomad',
    company: 'Remote Globe Solutions',
    profile: client6,
    content:
      "Travins made exploring Paris a breeze! The entire process, from flights to hotel bookings, was incredibly smooth. Their team even provided me with local tips to enhance my trip. I can't wait to book with them again."
  }
]

export const faq = [
  {
    title: 'How can I book a trip with Travins?',
    description: `Booking with Travins is simple! Just choose your destination, select your preferred dates, and follow the easy steps on our platform.`
  },
  {
    title: 'What payment methods do you accept?',
    description: `We accept major credit cards, debit cards, and online payment systems like PayPal for your convenience.`
  },
  {
    title: 'Can I modify or cancel my booking?',
    description: `Yes, you can. Please review our cancellation and modification policies or contact our 24/7 customer support for assistance.`
  },
  {
    title: 'Do you offer group travel packages?',
    description: `Absolutely! We offer customizable group travel packages for families, friends, and corporate teams.`
  },
  {
    title: 'Is travel insurance included in my booking?',
    description: `Travel insurance is not automatically included but can be added as an optional service during your booking process.`
  },
  {
    title: 'How do I contact customer support?',
    description: `You can reach our customer support team via phone, email, or live chat. We’re available 24/7 to assist you.`
  }
]

export const contactInfo = [
  {
    name: 'Email',
    icon: <MdOutlineAlternateEmail />,
    value: 'mradinuba@gmail.com'
  },
  {
    name: 'Phone',
    icon: <IoCallOutline />,
    value: '+2347039681695'
  },
  {
    name: 'Address',
    icon: <IoLocationOutline />,
    value: 'Gwarinpa, Abuja, Nigeria'
  }
]

export const footer = [
  {
    title: 'Navigation',
    links: [
      { icon: FiChevronsRight, label: 'Home', href: '#' },
      { icon: FiChevronsRight, label: 'About', href: '#' },
      { icon: FiChevronsRight, label: 'Services', href: '#' },
      { icon: FiChevronsRight, label: 'Destinations', href: '#' },
      { icon: FiChevronsRight, label: 'Testimonials', href: '#' },
      { icon: FiChevronsRight, label: 'Contact Us', href: '#' }
    ]
  },
  {
    title: 'Our Services',
    links: [
      { icon: FiChevronsRight, label: 'Flight Booking', href: '#' },
      { icon: FiChevronsRight, label: 'Hotel Reservations', href: '#' },
      { icon: FiChevronsRight, label: 'Customized Tours', href: '#' },
      { icon: FiChevronsRight, label: 'Travel Insurance', href: '#' }
    ]
  },
  {
    title: 'Copyright & Policies',
    links: [
      { icon: FiChevronsRight, label: 'Privacy Policy', href: '#' },
      { icon: FiChevronsRight, label: 'Terms & Conditions', href: '#' },
      { icon: FiChevronsRight, label: 'Cookie Policy', href: '#' }
    ]
  }
]
