import dynamic from "next/dynamic";

const PDFViewer = dynamic(() => import("../components/pdf-viewer"), {
  ssr: false
});

const endlessTwist = () => {

  return (
    <>
      <PDFViewer slug={'endless-twist'}/>
    </>
  )
}

export default endlessTwist