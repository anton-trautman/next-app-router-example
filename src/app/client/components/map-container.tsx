"use client";
// import EarthquakeMap from "@/app/client/components/leafleet";
import { getEQ } from "@/lib/get-data";
import type { Earthquake } from "@/types";
import dynamic from "next/dynamic";
import { useCallback, useEffect, useMemo, useState } from "react";

const PigeonMap = dynamic(() => import("./pigeon-map"), {
  ssr: false,
});

function EarthquakeMapContainer() {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState<null | Earthquake[]>(null);

  const fetchData = useCallback(async () => {
    if (isLoading) {
      return;
    }

    try {
      setLoading(true);

      const earthquakes = await getEQ();
      setData(earthquakes);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, [isLoading]);

  useEffect(() => {
    if (!data?.length && !isLoading) {
      fetchData();
    }
  }, [data?.length, fetchData, isLoading]);

  const theme = useMemo(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    return window?.matchMedia("(prefers-color-scheme: dark)")?.matches
      ? "dark"
      : "light";
  }, []);

  return (
    <div className="flex w-full ">
      <PigeonMap earthquakes={data} theme={theme} />
    </div>
  );
}

export default EarthquakeMapContainer;
