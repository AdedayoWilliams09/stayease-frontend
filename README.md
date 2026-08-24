
# StayEase Frontend - Foundation Set up

 Hotel Booking Platform - Frontend Foundation


## What This Is

This is the **frontend foundation** for the StayEase hotel booking platform. It provides:

-  React 19 with Vite for fast development
-  Tailwind CSS 4.2.1 for styling
-  Redux Toolkit for state management
-  Axios for API communication
-  Test button to verify backend connection



##  Quick Start

### 1. Clone the repository

git clone https://github.com/AdedayoWilliams09/stayease-frontend.git


- cd frontend

### 2. Install dependencies
npm install

### 3. Set up environment variables

cp .env.example .env
# Edit .env with your backend URL

### 4. Start the development server

npm run dev

### 5. Test the backend connection

1. Open http://localhost:5173

2. Click the "🔗 Test Backend Connection" button

3. Open the browser console (F12)

4. Look for the response logs

### Folder Structure

frontend/
├── src/
│   ├── store/
│   │   ├── store.js          # Redux store configuration
│   │   └── apiSlice.js       # API test slice with thunk
│   ├── utils/
│   │   └── axiosConfig.js    # Axios instance configuration
│   ├── App.jsx               # Main App component
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles with Tailwind
├── .env                      # Environment variables (not committed)
├── .env.example              # Environment variables template
├── .gitignore                # Git ignore file
├── index.html                # HTML template
├── vite.config.js            # Vite configuration
├── package.json              # Dependencies and scripts
└── README.md                # This file

### Environment Variables

Variable	        Example	                 Purpose
VITE_API_URL	http://localhost:5000	Backend API base URL

### Testing

__Test Backend Connection__

1. Open your browser and go to http://localhost:5173

2. Press F12 to open DevTools

3. Click the "🔗 Test Backend Connection" button

4. In the console, you should see:

 [App] Testing backend connection...
 [App] Backend connection successful!
 [App] Response data: { success: true, ... }

__Failed Connection (Backend Off)__

1. Stop the backend server

2. Click the test button

3. Console should show:

 [App] Backend connection failed: Network Error

 __Tailwind CSS Verification__

 1. Open http://localhost:5173

2. The heading " StayEase" should be:

- Large (text-4xl)

- Bold (font-bold)

- Blue (text-blue-600)

## Troubleshooting

__Backend Connection Failed__

 [Axios] Network Error: No response received

 __Solution:__

 1. Verify backend is running: cd ../backend && npm run dev

2. Check VITE_API_URL in .env matches backend URL

3. Check CORS configuration in backend

### Tailwind CSS Not Working

[plugin:vite:css] @import 'tailwindcss' not found

__Solution:__

1. Verify Tailwind is installed: npm list tailwindcss

2. Check vite.config.js has tailwindcss() plugin

3. Check index.css starts with @import 'tailwindcss';

### Redux DevTools Not Showing

__Solution:__

1. Install Redux DevTools extension

2. Ensure devTools: import.meta.env.DEV is in store configuration

3. Open DevTools → Redux tab

### Tech Stack

- React: 19.3.0+

- Vite: 7.3.1+

- Tailwind CSS: 4.2.1+

- Redux Toolkit: 2.5.0+

- Axios: 1.8.0+

##  Links

- Backend Repository: [View Backend Code](https://github.com/AdedayoWilliams09/stayease-backend.git)

- Live Frontend (Vercel)

- Live API (Render)

### License

Proprietary - All rights reserved

