import React from "react";
import { Map, GeoJson } from "pigeon-maps";
import type { Earthquake } from "@/types";
import { getColorForMagnitude } from "@/lib/get-color";

function mapTiler(
  theme: string,
  x: number,
  y: number,
  z: number,
  dpr?: number
) {
  return `https://a.basemaps.cartocdn.com/${theme}_all/${z}/${x}/${y}${dpr}.png`;
}

function PigeonMap({
  earthquakes,
  theme,
}: {
  earthquakes: Earthquake[] | null;
  theme: string;
}) {
  if (!earthquakes?.length) {
    return <div>loading...</div>;
  }

  const data = {
    type: "FeatureCollection",
    features: earthquakes?.map((eq) => ({
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [eq.longitude, eq.latitude],
      },
      properties: {
        ...eq,
      },
    })),
  };

  return (
    <Map
      animate
      limitBounds="edge"
      height={700}
      provider={(...args) => mapTiler(theme, ...args)}
      defaultCenter={[0, 0]}
      defaultZoom={2}
      metaWheelZoom={true}
      boxClassname="bg-background"
    >
      <GeoJson
        data={data}
        styleCallback={(feature: { properties: Earthquake }) => {
          return {
            fill: getColorForMagnitude(feature?.properties?.magnitude),
            strokeWidth: "1",
            stroke: "white",
            r: Math.max(feature?.properties?.magnitude * 2, 5),
          };
        }}
      >
        11
      </GeoJson>
    </Map>
  );
}

export default PigeonMap;
