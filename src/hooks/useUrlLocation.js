import { useSearchParams } from "react-router-dom";

export function useUrlLocation() {
  const [searchParam] = useSearchParams();

  const lng = searchParam.get("lat");
  const lat = searchParam.get("lng");
  return [lat, lng];
}
