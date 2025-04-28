import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Spinner from "./shared/ui/spinner";
const Home = lazy(() => import("./pages/home"));
const VideoPage = lazy(() => import("./pages/video"));

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Spinner />}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="/videos/:videoId"
        element={
          <Suspense fallback={<Spinner />}>
            <VideoPage />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
