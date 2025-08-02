# Doctor Finder - Next.js Fullstack Assignment

A responsive doctor search and listing platform built with Next.js (frontend & backend API). This project demonstrates a robust, filterable, and paginated doctor directory, closely matching the provided design screenshots.

---

## Features

- **Responsive UI**: Built with Tailwind CSS and Next.js App Router.
- **Comprehensive Filtering**: Search by location, doctor/specialty, gender, experience, patient stories, fees, availability, and clinic location.
- **Live Filtering**: All filters update results instantly, including the All Filters popover.
- **Pagination**: Doctor listing page supports pagination for large datasets.
- **Backend API**: All data and filters are served via a Next.js API route (Node.js).
- **No External Database**: All doctor data is in-memory for demo purposes.
- **Design Match**: UI closely matches the provided screenshots.

---

## Screenshots

### Home Page (Search & Featured Doctors)
![Home Page](../Screenshot%202025-07-30%20at%2002.54.27.png)

### Doctor Listing Page (with Filters)
![Doctor Listing](../Screenshot%202025-07-30%20at%2002.57.07.png)

---

## Getting Started

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd doctor-website
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
doctor-website/
├── app/
│   ├── api/doctors/route.ts         # Backend API for doctor data & filtering
│   ├── components/                  # All React components (HeroSection, HowItWorksSection, etc.)
│   ├── page.tsx                     # Home page (search & featured)
│   ├── doctors/page.tsx             # Doctor listing page
│   └── ...                          # Other Next.js app files
├── public/                          # Static assets (doctor images, etc.)
├── README.md
└── ...
```

---

## Backend API

- **Endpoint:** `/api/doctors`
- **Supports:** Filtering by all fields, sorting, and pagination.
- **Tech:** Node.js (Next.js API route)

---

## Frontend

- **Tech:** Next.js (App Router), React, Tailwind CSS
- **Live Filtering:** All filters update results instantly.
- **All Filters Popover:** Fees, Availability, and Clinic Location filters are grouped in a popover for a clean UI.

---

## Assignment Requirements Met

- Two responsive pages (home/search and doctor listing)
- Backend API with all required features
- UI closely matches the provided screenshots
- Robust, user-friendly search and filter logic
- No plagiarism, original code

---

## Author

- Assignment by Andaz (see assignment instructions above)
- Developed by Priyanshu Singh

---
