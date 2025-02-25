import dynamic from "next/dynamic";

const PDFViewer = dynamic(() => import("../components/pdf-viewer"), {
  ssr: false
});

const weSensed = () => {

  return (
    <>
      <PDFViewer slug={'we-sensed'}/>
    </>
  )
}

export default weSensed