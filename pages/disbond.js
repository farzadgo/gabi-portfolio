import dynamic from "next/dynamic";

const PDFViewer = dynamic(() => import("../components/pdf-viewer"), {
  ssr: false
});

const disbond = () => {

  return (
    <>
      <PDFViewer slug={'disbond'}/>
    </>
  )
}

export default disbond