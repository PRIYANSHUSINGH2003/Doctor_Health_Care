import { NextResponse } from 'next/server';

const doctors = [
  {
    id: 1,
    name: "Aesthetic Heart Dermatology & Cardiology Clinic",
    specialization: "Dermatologist",
    specializations: ["Dermatologist", "Cardiologist"],
    experience: "11 - 13 years",
    location: "Jayanagar",
    address: "123 Main St, Jayanagar, Bangalore",
    clinicName: "Aesthetic Heart Clinic",
    fee: 800,
    rating: 97,
    patientStories: 159,
    gender: "Female",
    languages: ["English", "Kannada"],
    imageUrl: "/doctor1.png",
    availability: "",
    proposedTime: "10:30 AM, Today",
    profileUrl: "#",
    badges: ["No Booking Fee", "Featured"],
    isFeatured: true,
  },
  {
    id: 2,
    name: "Dr. Sheelavathi Natraj",
    specialization: "Dermatologist",
    specializations: ["Dermatologist"],
    experience: "21 years",
    location: "JP Nagar, Bangalore",
    address: "456 Elm St, JP Nagar, Bangalore",
    clinicName: "Skin & Hair Clinic",
    fee: 800,
    rating: 94,
    patientStories: 1506,
    gender: "Female",
    languages: ["English", "Hindi", "Kannada"],
    imageUrl: "/doctor2.jpg",
    availability: "Available Today",
    proposedTime: "11:00 AM, Today",
    profileUrl: "#",
    badges: ["Available Today"],
    isFeatured: false,
  },
  {
    id: 3,
    name: "Dr. Rajesh Kumar",
    specialization: "Cardiologist",
    specializations: ["Cardiologist"],
    experience: "15 years",
    location: "Indiranagar, Bangalore",
    address: "789 Oak St, Indiranagar, Bangalore",
    clinicName: "Heart Care Center",
    fee: 1200,
    rating: 92,
    patientStories: 800,
    gender: "Male",
    languages: ["English", "Telugu"],
    imageUrl: "/doctor3.jpg",
    availability: "Available Today",
    proposedTime: "2:00 PM, Today",
    profileUrl: "#",
    badges: ["Available Today", "No Booking Fee"],
    isFeatured: false,
  },
  {
    id: 4,
    name: "Dr. Priya Sharma",
    specialization: "Pediatrician",
    specializations: ["Pediatrician"],
    experience: "8 years",
    location: "Koramangala, Bangalore",
    address: "321 Pine St, Koramangala, Bangalore",
    clinicName: "Child Health Clinic",
    fee: 600,
    rating: 89,
    patientStories: 400,
    gender: "Female",
    languages: ["English", "Hindi"],
    imageUrl: "/doctor4.jpg",
    availability: "",
    proposedTime: "4:00 PM, Tomorrow",
    profileUrl: "#",
    badges: [],
    isFeatured: false,
  },
  {
    id: 5,
    name: "Dr. Alex Morgan",
    specialization: "Dermatologist",
    specializations: ["Dermatologist"],
    experience: "3 years",
    location: "Whitefield, Bangalore",
    address: "101 Lakeview St, Whitefield, Bangalore",
    clinicName: "Skin Wellness Center",
    fee: 500,
    rating: 85,
    patientStories: 120,
    gender: "Other",
    languages: ["English"],
    imageUrl: "/doctor5.jpg",
    availability: "Available Today",
    proposedTime: "9:00 AM, Today",
    profileUrl: "#",
    badges: ["Available Today"],
    isFeatured: false,
  },
  {
    id: 6,
    name: "Dr. Sunil Mehra",
    specialization: "Cardiologist",
    specializations: ["Cardiologist"],
    experience: "7 years",
    location: "HSR Layout, Bangalore",
    address: "202 Green Ave, HSR Layout, Bangalore",
    clinicName: "Heart & Health Clinic",
    fee: 1000,
    rating: 88,
    patientStories: 300,
    gender: "Male",
    languages: ["English", "Hindi"],
    imageUrl: "/doctor6.jpg",
    availability: "Available Today",
    proposedTime: "1:00 PM, Today",
    profileUrl: "#",
    badges: ["Available Today"],
    isFeatured: false,
  },
  {
    id: 7,
    name: "Dr. Priyanka Rao",
    specialization: "Pediatrician",
    specializations: ["Pediatrician"],
    experience: "5 years",
    location: "BTM Layout, Bangalore",
    address: "303 Blossom Rd, BTM Layout, Bangalore",
    clinicName: "Child First Clinic",
    fee: 700,
    rating: 91,
    patientStories: 210,
    gender: "Female",
    languages: ["English", "Kannada"],
    imageUrl: "/doctor7.jpg",
    availability: "",
    proposedTime: "5:00 PM, Tomorrow",
    profileUrl: "#",
    badges: ["No Booking Fee"],
    isFeatured: false,
  },
  {
    id: 8,
    name: "Dr. Rohan Singh",
    specialization: "Dermatologist",
    specializations: ["Dermatologist"],
    experience: "12 years",
    location: "Marathahalli, Bangalore",
    address: "404 Tech Park, Marathahalli, Bangalore",
    clinicName: "Glow Skin Clinic",
    fee: 900,
    rating: 95,
    patientStories: 980,
    gender: "Male",
    languages: ["English", "Hindi"],
    imageUrl: "/doctor8.jpg",
    availability: "Available Today",
    proposedTime: "3:00 PM, Today",
    profileUrl: "#",
    badges: ["Available Today", "No Booking Fee"],
    isFeatured: false,
  },
  {
    id: 9,
    name: "Dr. Sneha Kapoor",
    specialization: "Cardiologist",
    specializations: ["Cardiologist"],
    experience: "9 years",
    location: "MG Road, Bangalore",
    address: "505 Central Plaza, MG Road, Bangalore",
    clinicName: "Kapoor Heart Clinic",
    fee: 1100,
    rating: 87,
    patientStories: 450,
    gender: "Female",
    languages: ["English", "Hindi"],
    imageUrl: "/doctor9.jpg",
    availability: "",
    proposedTime: "6:00 PM, Tomorrow",
    profileUrl: "#",
    badges: [],
    isFeatured: false,
  },
  {
    id: 10,
    name: "Dr. Aman Verma",
    specialization: "Pediatrician",
    specializations: ["Pediatrician"],
    experience: "2 years",
    location: "Koramangala, Bangalore",
    address: "606 Kids Lane, Koramangala, Bangalore",
    clinicName: "Verma Kids Clinic",
    fee: 650,
    rating: 82,
    patientStories: 60,
    gender: "Male",
    languages: ["English", "Kannada"],
    imageUrl: "/doctor10.jpg",
    availability: "Available Today",
    proposedTime: "8:00 AM, Today",
    profileUrl: "#",
    badges: ["Available Today"],
    isFeatured: false,
  },
  // Extra doctors for filter coverage
  {
    id: 11,
    name: "Dr. Kavya Rao",
    specialization: "Dermatologist",
    specializations: ["Dermatologist"],
    experience: "4 years",
    location: "HSR Layout, Bangalore",
    address: "707 Lakeview, HSR Layout, Bangalore",
    clinicName: "HSR Skin Clinic",
    fee: 400,
    rating: 93,
    patientStories: 75,
    gender: "Female",
    languages: ["English", "Kannada"],
    imageUrl: "/doctor11.jpg",
    availability: "Available Today",
    proposedTime: "10:00 AM, Today",
    profileUrl: "#",
    badges: ["Available Today"],
    isFeatured: false,
  },
  {
    id: 12,
    name: "Dr. Mohit Sinha",
    specialization: "Cardiologist",
    specializations: ["Cardiologist"],
    experience: "8 years",
    location: "Indiranagar, Bangalore",
    address: "808 Heart Lane, Indiranagar, Bangalore",
    clinicName: "Indiranagar Heart Center",
    fee: 1500,
    rating: 88,
    patientStories: 320,
    gender: "Male",
    languages: ["English", "Hindi"],
    imageUrl: "/doctor12.jpg",
    availability: "",
    proposedTime: "12:00 PM, Tomorrow",
    profileUrl: "#",
    badges: [],
    isFeatured: false,
  },
  {
    id: 13,
    name: "Dr. Ritu Sharma",
    specialization: "Pediatrician",
    specializations: ["Pediatrician"],
    experience: "11 years",
    location: "Whitefield, Bangalore",
    address: "909 Blossom St, Whitefield, Bangalore",
    clinicName: "Whitefield Kids Care",
    fee: 700,
    rating: 90,
    patientStories: 210,
    gender: "Female",
    languages: ["English", "Hindi"],
    imageUrl: "/doctor13.jpg",
    availability: "Available Today",
    proposedTime: "11:00 AM, Today",
    profileUrl: "#",
    badges: ["Available Today"],
    isFeatured: false,
  },
  {
    id: 14,
    name: "Dr. Arjun Patel",
    specialization: "Dermatologist",
    specializations: ["Dermatologist"],
    experience: "6 years",
    location: "BTM Layout, Bangalore",
    address: "1010 Skin Ave, BTM Layout, Bangalore",
    clinicName: "BTM Skin Solutions",
    fee: 1200,
    rating: 85,
    patientStories: 180,
    gender: "Male",
    languages: ["English", "Hindi"],
    imageUrl: "/doctor14.jpg",
    availability: "",
    proposedTime: "2:00 PM, Tomorrow",
    profileUrl: "#",
    badges: [],
    isFeatured: false,
  },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get('search')?.toLowerCase() || '';
  const specialization = searchParams.get('specialization')?.toLowerCase() || '';
  const location = searchParams.get('location')?.toLowerCase() || '';
  const minFee = searchParams.get('minFee') ? parseInt(searchParams.get('minFee')!) : null;
  const maxFee = searchParams.get('maxFee') ? parseInt(searchParams.get('maxFee')!) : null;
  const gender = searchParams.get('gender')?.toLowerCase() || '';
  const experience = searchParams.get('experience') || '';
  const patientStories = searchParams.get('patientStories') || '';
  const sortBy = searchParams.get('sortBy') || '';

  let filtered = doctors;

  // Pagination params
  const page = parseInt(searchParams.get('page') || '1', 10);
  const limit = parseInt(searchParams.get('limit') || '10', 10);

  // General search (matches name, specialization, or location)
  if (search) {
    filtered = filtered.filter(doc =>
      doc.name.toLowerCase().includes(search) ||
      doc.specialization.toLowerCase().includes(search) ||
      doc.location.toLowerCase().includes(search)
    );
  }

  // Filter by specialization
  if (specialization) {
    filtered = filtered.filter(doc =>
      doc.specialization.toLowerCase().includes(specialization)
    );
  }

  // Filter by location
  if (location) {
    filtered = filtered.filter(doc =>
      doc.location.toLowerCase().includes(location)
    );
  }

  // Filter by gender
  if (gender) {
    filtered = filtered.filter(doc =>
      doc.gender && doc.gender.toLowerCase() === gender
    );
  }

  // Filter by experience (supports "0-5 years", "6-10 years", "10+ years")
  if (experience) {
    filtered = filtered.filter(doc => {
      const expStr = doc.experience || '';
      const match = expStr.match(/(\d+)(?:\s*-\s*(\d+))?/);
      let years = 0;
      if (match) {
        years = parseInt(match[2] || match[1]);
      }
      if (experience === '0-5 years') return years <= 5;
      if (experience === '6-10 years') return years >= 6 && years <= 10;
      if (experience === '10+ years') return years >= 10;
      return true;
    });
  }

  // Filter by patient stories ("Positive" = rating >= 90, "Negative" < 90, "All" = no filter)
  if (patientStories && patientStories !== 'All') {
    filtered = filtered.filter(doc =>
      patientStories === 'Positive' ? doc.rating >= 90 : doc.rating < 90
    );
  }

  // Filter by fee range
  if (minFee !== null) {
    filtered = filtered.filter(doc => doc.fee >= minFee);
  }
  if (maxFee !== null) {
    filtered = filtered.filter(doc => doc.fee <= maxFee);
  }

  // Sorting
  if (sortBy) {
    if (sortBy === 'Experience') {
      filtered = filtered.slice().sort((a, b) => {
        const getYears = (exp: string) => {
          const match = exp.match(/(\d+)(?:\s*-\s*(\d+))?/);
          return match ? parseInt(match[2] || match[1]) : 0;
        };
        return getYears(b.experience) - getYears(a.experience);
      });
    } else if (sortBy === 'Fees') {
      filtered = filtered.slice().sort((a, b) => a.fee - b.fee);
    } else if (sortBy === 'Patient Stories') {
      filtered = filtered.slice().sort((a, b) => b.patientStories - a.patientStories);
    } // Default is relevance (no sort or backend relevance sort)
  }

  // Pagination logic
  const total = filtered.length;
  const start = (page - 1) * limit;
  const end = start + limit;
  const paginated = filtered.slice(start, end);

  return NextResponse.json({
    data: paginated,
    total,
    page,
    limit
  });
}
