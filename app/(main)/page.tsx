import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Header from "./_components/header";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <Navbar />
      <main className="flex flex-1 justify-center items-center">
        <Header />
      </main>
      <Footer />
    </div>
  );
}
