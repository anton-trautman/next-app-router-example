import Link from "next/link";

export default async function Area({ params }: { params: { area: string } }) {
  // const data = await fetch(
  //   "https://earthquake.usgs.gov/fdsnws/event/1/query" +
  //     "?" +
  //     new URLSearchParams({
  //       format: "geojson",
  //       starttime: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
  //       minmagnitude: "3",
  //     })
  // );

  const { area } = await params;

  return (
    <div className="container mx-auto my-10">
      <Link
        href={"/"}
        className="underline hover:opacity-50 transition-opacity"
      >
        go back
      </Link>
      <h1 className="text-3xl mt-10">{decodeURI(area)}</h1>
    </div>
  );
}
