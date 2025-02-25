import dynamic from "next/dynamic";

const PDFViewer = dynamic(() => import("../components/pdf-viewer"), {
  ssr: false
});

const murmurationWip = () => {

  return (
    <>
      <PDFViewer slug={'there_is_always-short-docu_essay'}/>
    </>
  )
}

export default murmurationWip