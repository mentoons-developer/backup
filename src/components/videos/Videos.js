import React from "react";
import LibraryHeader from "../library_header/LibraryHeader";
import Navbar from "../navbar/Navbar";
import ComicsHeader from "../products_header/ProductsHeader";
import VideosList from "./VideosList.js/VideosList";

function Videos() {
  return (
    <div>
      <Navbar />
      <ComicsHeader />
      <LibraryHeader />
      <VideosList />
    </div>
  );
}

export default Videos;
