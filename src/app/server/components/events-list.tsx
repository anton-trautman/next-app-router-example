import { getEQ } from "@/lib/get-data";
import type { Earthquake } from "@/types";
import React from "react";

async function EventsList() {
  const earthquakes = await getEQ();

  return (
    <ul role="list" className="divide-y divide-gray-100 dark:divide-gray-500">
      {earthquakes.map((earthquake: Earthquake) => (
        <li
          key={earthquake.time + earthquake.place}
          className="flex justify-between gap-x-6 py-5"
        >
          <div className="flex min-w-0 gap-x-4">
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900 dark:text-zinc-300">
                {earthquake.place}
              </p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500 dark:text-gray-200">
                {earthquake.magnitude}
              </p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-900 dark:text-gray-500">
              {earthquake.latitude}
            </p>
            <p className="text-sm leading-6 text-gray-900  dark:text-gray-500">
              {earthquake.longitude}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default EventsList;
