import { Header } from "@/app/common/components/Header";
import { Scanner } from "@/app/scan/components/Scanner";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
      <Header />
      <Suspense>
        <Scanner />
      </Suspense>
    </main>
  );
}
