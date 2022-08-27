import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useRef } from "react";
import { IfcViewerAPI } from "web-ifc-viewer";

const IfcViewer = dynamic(() => import("../components/IfcViewer"), {
   ssr: false,
});

const Home: NextPage = () => {
   const viewerRef = useRef<IfcViewerAPI>(null);

   return (
      <div>
         <IfcViewer viewerRef={viewerRef} wasmPath="../../../" />
      </div>
   );
};

export default Home;
