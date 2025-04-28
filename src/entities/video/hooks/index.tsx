import { useState } from "react";
import { storeVideo } from "../../../shared/utils/indexedDb";
import { useNavigate } from "react-router-dom";

interface UseFetchAndCacheVideosResult {
  loading: boolean;
  error: string | null;
  fetchAndCacheVideos: () => void;
}

export const useFetchAndCacheVideos = (
  videoUrls: string[]
): UseFetchAndCacheVideosResult => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const fetchVideo = async (url: string): Promise<Blob> => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch video from ${url}`);
    }
    return response.blob();
  };

  const fetchAndCacheVideos = async () => {
    try {
      setLoading(true);
      setError(null);

      await Promise.all(
        videoUrls.map(async (url, index) => {
          const videoId = `video-${index + 1}`;
          const videoBlob = await fetchVideo(url);
          await storeVideo(videoId, videoBlob);
        })
      );

      navigate(`/videos/video-1`);
    } catch (err: any) {
      setError(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, fetchAndCacheVideos };
};
