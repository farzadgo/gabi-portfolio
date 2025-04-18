import dynamic from "next/dynamic";

const PDFViewer = dynamic(() => import("../components/pdf-viewer"), {
  ssr: false
});

const murmuration = () => {

  return (
    <>
      <PDFViewer slug={'murmuration'}/>
    </>
  )
}

export default murmuration