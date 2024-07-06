import { Inter } from "next/font/google";
import Link from "next/link";
import Navbar from "../components/navbar";
import ConnectWithMeFooter from "@/components/footer";
import Info from "@/components/infobox";
function Home() {
  return (
    <>
      <div className="h-screen w-screen bg-gradient-to-r from-slate-900 to-slate-700    ">
        <Navbar />
        <img src="src/images/signature(1).png" className=" h-8" />
        <Info className=" align-middle" />
      </div>
    </>
  );
}

export default Home;
