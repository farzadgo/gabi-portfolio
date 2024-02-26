import dynamic from "next/dynamic";

const PDFViewer = dynamic(() => import("../components/pdf-viewer"), {
  ssr: false
});

const videoPhotoPortfolio = () => {

  return (
    <>
      <PDFViewer slug={'portfolio_valdespino_2024_Video-Foto'}/>
    </>
  )
}

export default videoPhotoPortfolio