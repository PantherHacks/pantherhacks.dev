import MainContent from "@/app/(main)/_components/main-content";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <Navbar />
      <main className="flex flex-1 justify-center items-center">
        <MainContent />
      </main>
      <Footer />
    </div>
  );
}
