import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full w-full bg-[url('/HomeBG.png')] bg-center bg-cover bg-no-repeat rounded-2xl overflow-hidden">
      <div className='h-full w-full bg-black/30 p-8'></div>
    </div>
  );
}
