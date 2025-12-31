import { notFound } from "next/navigation";

import { getCategoriesByRoom, getDesignsByRoom, getTipsByRoom, getRoomById } from "@/ports/rooms";

import CategoryList from "./components/CategoryList";
import DesignShowcase from "./components/DesignShowcase";
import TipsSection from "./components/TipsSection";
import Hero from "@/components/ui/Hero";

interface PageProps {
  params: Promise<{ room: string }>;
}

export default async function Page({ params }: PageProps) {
  // Wait for params to resolve
  const resolvedParams = await params;
  const roomName = decodeURIComponent(resolvedParams.room);

  const room = await getRoomById(roomName);


  if (!room) {
    notFound();
  }

    // Use helper functions to get related data (Simulated Joins/Foreign Keys)
  const roomCategories = await getCategoriesByRoom(room?.id);
  const roomDesigns = await getDesignsByRoom(room?.id);
  const roomTips = await getTipsByRoom(room?.id);


  return (
    <div className="min-h-screen bg-white pb-20">
      <Hero slide={
        {
          id: 1,
          title: room.title,
          description: room.description,
          image: room.heroImage,
          cta: "Shop Now",
          link: `/rooms/${room.id}`,
        }
      } />

      <main className="max-w-[120rem] mx-auto px-4 sm:px-8 lg:px-16 mt-[var(--spacing-xl)] space-y-[var(--spacing-xxl)]">

        <CategoryList categories={roomCategories} />

        <DesignShowcase designs={roomDesigns} />

        <TipsSection tips={roomTips} />

      </main>
    </div>
  );
}
