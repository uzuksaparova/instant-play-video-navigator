import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { getVideo } from "../../shared/utils/indexedDb";
import { useParams } from "react-router-dom";

type TProps = {
  setError: (error: null | string) => void;
};

const VideoPlayer = ({ setError }: TProps) => {
  const { videoId } = useParams<{ videoId: string }>();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const loadVideo = async () => {
      setIsReady(false);
      setVideoSrc(null);
      try {
        const video = await getVideo(videoId!);
        if (video) {
          const videoUrl = URL.createObjectURL(video);
          setVideoSrc(videoUrl);
        } else {
          setError("Video not found in cache");
        }
      } catch (err: any) {
        setError(`Failed to load video: ${err.message}`);
      }
    };

    loadVideo();
  }, [videoId, setError]);

  const handleCanPlay = () => {
    setIsReady(true);
  };

  if (!videoSrc) {
    return <div style={{ height: "80vh" }}></div>;
  }

  return (
    <video
      ref={videoRef}
      src={videoSrc}
      controls
      autoPlay
      autoFocus
      muted
      loop
      onCanPlay={handleCanPlay}
      className={`${styles["video-player"]} ${
        isReady ? styles["fadeIn"] : styles["fadeOut"]
      }`}
    />
  );
};

export default VideoPlayer;
