import { useFetchAndCacheVideos } from "../../entities/video/hooks";
import videoUrls from "../../shared/data/videos";
import ErrorComponent from "../../shared/ui/error";
import Spinner from "../../shared/ui/spinner";
import styles from "./styles.module.scss";
import { Button } from "antd";

function Home() {
  const { loading, error, fetchAndCacheVideos } =
    useFetchAndCacheVideos(videoUrls);

  const handleStartButton = () => {
    fetchAndCacheVideos();
  };

  return (
    <div className={styles["start-container"]}>
      {loading ? (
        <Spinner />
      ) : error ? (
        <ErrorComponent error={error} />
      ) : (
        <Button
          className={styles["start-button"]}
          type="primary"
          onClick={handleStartButton}
        >
          Start
        </Button>
      )}
    </div>
  );
}

export default Home;
