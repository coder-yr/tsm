# VendorTrust - Street Food Supply Chain Platform

A comprehensive B2B platform designed specifically for Indian street food vendors to connect with trusted, verified suppliers for raw materials.

## Problem Statement
Street food vendors in India face significant challenges in sourcing quality raw materials from reliable suppliers at competitive prices. Issues include:
- Lack of trust in supplier quality
- Difficulty finding local suppliers
- No quality verification systems
- Inconsistent pricing and availability
- Limited access to bulk purchasing benefits

## Solution
VendorTrust provides:
- **Verified Supplier Network**: Quality-checked suppliers with ratings and reviews
- **Location-Based Matching**: Connect vendors with nearby suppliers
- **Quality Assurance**: Product quality verification and certification
- **Bulk Purchasing**: Group buying for better prices
- **Real-time Tracking**: Order and delivery tracking
- **Trust System**: Vendor and supplier verification with ratings

## Features
- **For Street Food Vendors**:
  - Browse verified suppliers by location
  - Compare prices and quality ratings
  - Place bulk orders with group discounts
  - Track deliveries in real-time
  - Rate and review suppliers

- **For Suppliers**:
  - List products with quality certifications
  - Manage inventory and pricing
  - Receive bulk orders from multiple vendors
  - Build reputation through ratings
  - Access to verified vendor network

## Tech Stack
- **Frontend**: Next.js 15, React 18, TypeScript
- **UI**: Tailwind CSS, Radix UI Components
- **Backend**: Firebase (Auth, Firestore, Storage)
- **AI**: Genkit for intelligent matching
- **Deployment**: Vercel

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:9002` to see the application.

## Key Pages
- `/` - Landing page with value proposition
- `/login` - User authentication
- `/signup` - User registration (vendor/supplier)
- `/dashboard` - Role-based dashboard
- `/dashboard/marketplace` - Product marketplace
- `/dashboard/suppliers` - Supplier discovery
- `/dashboard/orders` - Order management
- `/dashboard/chat` - Real-time communication
