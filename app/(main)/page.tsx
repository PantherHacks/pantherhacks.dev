import MainContent from "@/app/(main)/_components/main-content";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Navbar />
      <main className="flex w-[100vw] flex-1">
        <MainContent />
      </main>
      <Footer />
    </div>
  );
}
