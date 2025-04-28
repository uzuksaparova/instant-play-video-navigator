# Instant-Play Video Navigator

This is a simple React web application that allows users to watch cached videos with smooth transitions and a user-friendly loading experience. The app fetches videos in the background, stores them in IndexedDB for offline use, and allows users to navigate through them without buffering.

## Key Features:

- **Landing Page**: A button that initiates the video-fetching process.

- **Video Player Page**: Plays videos from the cache with smooth transition effects and no buffering.

- **Efficient Caching**: Videos are fetched and stored in IndexedDB to reduce load times and allow offline access.

- **Auto-Play and Seamless Navigation**: Videos autoplay and seamlessly transition to the next video.

- **Loading Component**: A user-friendly loading animation with alternating, non-intrusive messages.

## Tech Stack:

- **React** (with TypeScript)

- **CSS Modules / SCSS** for styling

- **IndexedDB** for caching video data

## Installation

To get started, clone the repository and follow the instructions below.

1. **Clone the Repository**

git clone https://github.com/uzuksaparova/instant-play-video-navigator.git

2. **Install Dependencies Navigate to the project folder and install the required dependencies.**

cd instant-play-video-navigator

npm install

3. **Start the Development Server**

npm start

This will start the React development server on http://localhost:3000. Open this URL in your browser to see the app in action.

## Folder Structure

The project is organized as follows:

instant-play-video-navigator/
├── src/
│ ├── entities/ # Main entities like video
│ │ ├── video/ # Contains hooks and services for video-related functionality
│ ├── shared/ # Utility functions (IndexedDB-related functions)
│ │ ├── data/ # Contains video data (URLs)
│ │ ├── ui/ # Contains UI components like Error and Spinner
│ │ └── utils/ # Utility functions like IndexedDB.ts
│ ├── feature/ # Contains features like video playback
│ │ └── video/ # Video Player component, styles and related logic
│ ├── pages/ # Pages of the app
│ │ ├── home/ # Landing page
│ │ │ └── index.tsx # Home page component
│ │ └── video/ # Video Player page
│ │ └── index.tsx # Video Player page component
│ ├── public/ # Public assets
│ ├── App.tsx # Main app entry point
│ └── main.tsx # Main entry point for rendering
├── package.json # Project dependencies and scripts
└── README.md # Project documentation

Main Components:

VideoPlayer: This component displays the video player and handles video navigation and playback.

IndexedDB Utilities: Utility functions to handle fetching and caching videos in IndexedDB.

Features in Detail

1. Video Fetching and Caching

When the user clicks the "Start" button, the application starts fetching video data.

Videos are fetched one by one and stored in IndexedDB (this allows the app to work offline and speeds up subsequent video loads).

The videos are stored as blobs to optimize their size and access speed.

2. Seamless Video Playback

The VideoPlayer component manages video playback. It uses the video ID from the URL (e.g., /videos/:videoId) to load and play the correct video.

Videos are loaded from IndexedDB and played without buffering. After a video ends, the next video is loaded automatically.

3. Loading Spinner

While videos are being fetched, a loading Spinner is displayed

Once all videos are fetched, the app transitions to the video player page and starts playing the first video.

4. Smooth Transitions

When switching between videos, smooth fade transitions are applied to enhance the user experience.

The opacity of the video element fades from 0 to 1 during the transition to the next video.

## Usage

Starting the App:

When the app loads, users will see a "Start" button on the landing page.

Once clicked, the app starts fetching videos in the background and storing them in IndexedDB.

## Watching Videos:

After videos are loaded, users are automatically navigated to the player page, where the first video starts playing.

After a video ends, the next one starts playing automatically with smooth transitions.

Navigating Between Videos:

Videos are navigated in a sequential order. The video will continue playing until the last one is reached.

Offline Support:

Once videos are cached in IndexedDB, they can be played even if the user is offline.

## Customization

You can modify various parts of the app to suit your needs:

Video List: Customize the video data to include the videos you want to display and cache.

Styles: Modify the styles.module.scss to change the appearance of the loading screen, video player, and transitions.

Loading Messages: Update the loadingMessages array in the Loading.tsx component to add or modify the loading messages. ```
