import MainContent from "@/app/(main)/_components/main-content";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <main className="flex flex-1 w-[100vw]">
        <MainContent />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
