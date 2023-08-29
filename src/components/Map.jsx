import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  const [searchParam, setSearchParam] = useSearchParams();
  const navigate = useNavigate();
  const lat = searchParam.get("lat");
  const lng = searchParam.get("lng");

  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <h1>Map</h1>
      <p>
        Position {lat}, {lng}
      </p>
      <button
        onClick={() => {
          setSearchParam({ lat: 20, lng: 10 });
        }}
      >
        change param
      </button>
    </div>
  );
}

export default Map;
