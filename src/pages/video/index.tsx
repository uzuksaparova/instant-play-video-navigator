import { useNavigate, useParams } from "react-router-dom";
import VideoPlayer from "../../features/video/VideoPlayer";
import styles from "../../features/video/styles.module.scss";
import { Button } from "antd";
import { useState } from "react";
import ErrorComponent from "../../shared/ui/error";

const VideoPage = () => {
  const { videoId } = useParams<{ videoId: string }>();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const handleNext = () => {
    const nextVideoId =
      videoId === "video-100"
        ? "video-1"
        : `video-${parseInt(videoId!.split("-")[1], 10) + 1}`;
    navigate(`/videos/${nextVideoId}`);
  };

  const handlePrevious = () => {
    const prevVideoId = `video-${parseInt(videoId!.split("-")[1], 10) - 1}`;
    navigate(`/videos/${prevVideoId}`);
  };

  return (
    <div className={styles["video-container"]}>
      {error ? (
        <ErrorComponent error={error} />
      ) : (
        <div className={styles["video-actions"]}>
          <VideoPlayer setError={setError} />
          <div className={styles["actions"]}>
            <Button
              onClick={handlePrevious}
              disabled={videoId === "video-1"}
              type="primary"
            >
              Previous
            </Button>
            <Button onClick={handleNext} type="primary">
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPage;
