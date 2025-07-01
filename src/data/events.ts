export type Event = {
  category: any;
    id:number
  date: string;
  month: string;
  title: string;
  image: string;
  venue: string;
  time: string;
  price: string;
};

export const events: Event[] = [
  {
    id: 1,
    date: "04",
    month: "JUL",
    title: "All White Dinner & Awards Night",
    image: "/image/event.avif",
    venue: "Undisclosed",
    time: "6:00pm",
    price: "8000",
     category: "Food & Drink"
  },
  {
    id: 2,
    date: "16",
    month: "AUG",
    title: "Otaku Rave 2.0",
    image: "/image/confrerece.jpg",
    venue: "GT EVENT CENTER",
    time: "12:00pm",
    price: "3500",
    category: undefined
  },
  {
    id: 3,
    date: "29",
    month: "JUN",
    title: "Forexpo - Biggest Forex Exposition",
    image: "/image/event.avif",
    venue: "Undisclosed",
    time: "2:00pm",
    price: "0",
     category: "Music",
  },{
    id: 4,
    date: "16",
    month: "AUG",
    title: "Otaku Rave 2.0",
    image: "/image/confrerece.jpg",
    venue: "GT EVENT CENTER",
    time: "12:00pm",
    price: "3500",
    category: undefined
  },
  {
    id: 5,
    date: "29",
    month: "JUN",
    title: "Forexpo - Biggest Forex Exposition",
    image: "/image/event.avif",
    venue: "Undisclosed",
    time: "2:00pm",
    price: "0",
    category: undefined
  },{
    id: 6,
    date: "16",
    month: "AUG",
    title: "Otaku Rave 2.0",
    image: "/image/confrerece.jpg",
    venue: "GT EVENT CENTER",
    time: "12:00pm",
    price: "3500",
    category: undefined
  },
  {
    id: 7,
    date: "29",
    month: "JUN",
    title: "Forexpo - Biggest Forex Exposition",
    image: "/image/confrerece.jpg",
    venue: "Undisclosed",
    time: "2:00pm",
    price: "0",
    category: undefined
  },
];










