import type { Earthquake } from "@/types";

export async function getEQ(): Promise<Earthquake[]> {
  const data = await fetch(
    "https://earthquake.usgs.gov/fdsnws/event/1/query" +
      "?" +
      new URLSearchParams({
        format: "geojson",
        starttime: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
        minmagnitude: "3",
      })
  );

  const events = await data.json();

  return events.features.map(
    (feature: {
      properties: {
        time: string;
        place: string;
        mag: number | string;
      };
      geometry: { coordinates: string[] };
    }) => ({
      place: feature.properties.place,
      time: new Date(feature.properties.time).toISOString(),
      latitude: feature.geometry.coordinates[1],
      longitude: feature.geometry.coordinates[0],
      magnitude: feature.properties.mag,
    })
  );
}
