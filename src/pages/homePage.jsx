import Header from "../components/header";

import { Routes, Route } from "react-router-dom";
import Contact from "./home/contact";
import Home from "./home/home";
import Gallery from "./home/gallery";
import Items from "./home/items";
import NotFound from "./home/notFound";

export default function Homepage() {
  return (
    <>
      <Header/>
      <div className="w-full h-[calc(100vh-100px)]">

        <Routes path="/*">
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/items" element={<Items/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>

      </div>
    </>
  );
}
