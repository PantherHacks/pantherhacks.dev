import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Header from "./_components/header";

export default function Home() {
  return (
    <div className="w-full h-full min-h-screen flex flex-col items-center justify-center">
      <Navbar />
      <Header />
      <Footer />
    </div>
  );
}
