# WorldWise

WorldWise is a travel journal app built with React and Vite. It allows you to track the cities you've visited, add notes, and visualize your adventures on an interactive map.

## Features

- User authentication (demo/fake)
- Add, view, and delete visited cities
- See your cities and countries on a map (powered by Leaflet)
- Add notes and visit dates for each city
- Responsive and modern UI

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/worldwise-v2.git
   cd worldwise-v2
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Copy the sample environment file and set the backend URL if needed:

   ```sh
   cp .env.sample .env.local
   # Edit .env.local and set VITE_BASE_URL (default: http://127.0.0.1:9000)
   ```

4. Start the mock backend server (for city data):

   ```sh
   npm run server
   ```

5. In a separate terminal, start the development server:

   ```sh
   npm run dev
   ```

6. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Scripts

- `npm run dev` — Start the Vite development server
- `npm run build` — Build the app for production
- `npm run preview` — Preview the production build
- `npm run lint` — Run ESLint
- `npm run server` — Start the mock backend (JSON Server)

## Project Structure

```
.
├── public/           # Static assets (images, icons)
├── data/             # Mock data (cities.json)
├── src/
│   ├── components/   # Reusable UI components
│   ├── contexts/     # React context providers
│   ├── hooks/        # Custom React hooks
│   ├── pages/        # Page components (routing targets)
│   ├── utils/        # Utility functions
│   ├── App.jsx       # Main app component
│   └── main.jsx      # Entry point
├── package.json
├── vite.config.js
└── README.md
```

## Demo Login

- **Email:** `jack@example.com`
- **Password:** `qwerty`

## License

This project is for educational purposes.

---

Built with [React](https://react.dev/), [Vite](https://vitejs.dev/), and [Leaflet](https://leafletjs.com/).
