import EventsList from "@/app/server/components/events-list";

export default function ServerPage() {
  return (
    <div className="h-screen w-screen">
      <section className="flex flex-col gap-5 items-center">
        <EventsList />
      </section>
    </div>
  );
}
