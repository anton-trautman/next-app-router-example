import EarthquakeMapContainer from "@/app/client/components/map-container";

export default function ClientPage() {
  return (
    <div className="h-screen w-screen">
      <section className="flex flex-col gap-5 items-center">
        <h2 className="text-2xl pt-10">Client side</h2>
        <EarthquakeMapContainer />
      </section>
    </div>
  );
}
