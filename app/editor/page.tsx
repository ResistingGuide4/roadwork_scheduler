import { MapProvider } from "@/providers/map-provider";
import { MapComponent } from "@/components/map";

export default function Editor() {

  return (
    <MapProvider>
      <MapComponent />
    </MapProvider>
  );
}