import dynamic from "next/dynamic";

const PDFViewer = dynamic(() => import("../components/pdf-viewer"), {
  ssr: false
});

const videoPhotoPortfolio = () => {

  return (
    <>
      <PDFViewer slug={'portfolio_photo_video_2025'}/>
    </>
  )
}

export default videoPhotoPortfolio