import React from "react";
import LibraryHeader from "../../components/library_header/LibraryHeader";
import LibraryContent from "../../components/library_tabs/LibraryContent";
import Navbar from "../../components/navbar/Navbar";

function Library() {
  return (
    <div>
      <Navbar />
      <LibraryHeader />
      <LibraryContent />
    </div>
  );
}

export default Library;

// <LibraryContent />
