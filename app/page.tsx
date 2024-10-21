import Image from "next/image";
import Pokedex from "@/components/pokedex";

export default function Home() {
  return (
   <main className="min-h-screen bg-gradient-to-b from-[#ec4127] from-30% lg:from-20% to-[#fcfcfc]">
    <Pokedex/>
   </main>
  );
}
