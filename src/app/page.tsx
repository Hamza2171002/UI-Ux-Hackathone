import Image from "next/image";
import HomeCarRent from "./components/HomeCarRent";
import CategoryCarRent from "./components/CategoryCarRent";
import DetailCarRent from "./components/DetailCarRent";
import PaymentCarRent from "./components/PymentCarRent";
import AdminCarRent from "./components/AdminCarRent";
import Dashboard from "./components/Dashbord";

export default function Home() {
  return (
    <>
    <HomeCarRent />
    <CategoryCarRent />
    <DetailCarRent />
    <PaymentCarRent />
    {/* <AdminCarRent /> */}
    <Dashboard />
    </>
  );
}
