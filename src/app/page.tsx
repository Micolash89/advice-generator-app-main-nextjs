import Footer from "@/components/Footer";
import Main from "@/components/Main";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div className="flex-1 flex items-center justify-center p-4">
          <Main />
        </div>

        <Footer />
      </div>
    </>
  );
}
