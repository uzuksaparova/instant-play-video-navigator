# 🎬 Instant-Play Video Navigator

A seamless React application for watching cached videos with smooth transitions and offline playback capability.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![CSS Modules](https://img.shields.io/badge/CSS_Modules-000000?style=for-the-badge&logo=css3&logoColor=white)
![IndexedDB](https://img.shields.io/badge/IndexedDB-4EA94B?style=for-the-badge&logo=indexeddb&logoColor=white)

## ✨ Features

- **Instant Playback**: Enjoy videos without buffering or loading delays
- **Offline Access**: Watch previously loaded videos even without an internet connection
- **Smooth Transitions**: Experience seamless fades between videos
- **Background Caching**: Videos are fetched and stored while you browse
- **Responsive Design**: Optimized for both desktop and mobile viewing

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/uzuksaparova/instant-play-video-navigator.git
   cd instant-play-video-navigator
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn
   ```

3. **Start the development server**

   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   The application will be available at [http://localhost:3000](http://localhost:3000)

## 🖥️ Usage

1. **Landing Page**: Click the "Start" button to initiate video fetching and caching
2. **Loading Process**: A friendly loading animation will display while videos are being prepared
3. **Video Playback**: Once ready, videos will begin playing automatically
4. **Navigation**: Videos transition automatically when finished playing

## 📁 Project Structure

```
instant-play-video-navigator/
├── src/
│   ├── entities/        # Core domain entities
│   │   └── video/       # Video-related hooks and services
│   ├── shared/          # Shared utilities and components
│   │   ├── data/        # Video data and constants
│   │   ├── ui/          # Reusable UI components
│   │   └── utils/       # Helper functions and IndexedDB utilities
│   ├── feature/         # Feature-specific components
│   │   └── video/       # Video playback functionality
│   ├── pages/           # Application pages
│   │   ├── home/        # Landing page
│   │   └── video/       # Video player page
│   ├── App.tsx          # Main application component
│   └── main.tsx         # Application entry point
├── public/              # Static assets
└── package.json         # Dependencies and scripts
```

## 🔧 Core Components

### VideoPlayer

The central component that manages video playback, transitions, and navigation between videos.

### IndexedDB Utilities

Handles fetching, storing, and retrieving video data from the browser's IndexedDB storage.

### Loading Component

Provides a user-friendly loading experience with alternating messages during video fetching.

## 🎨 Customization

### Adding New Videos

Edit the video data array in `src/shared/data/videos.ts` to include your own video sources.

### Styling

Modify the CSS/SCSS modules in each component's directory to customize the appearance.

## 📱 Responsive Design

The application is fully responsive and works well on:

- Desktop browsers
- Tablets
- Mobile devices

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
