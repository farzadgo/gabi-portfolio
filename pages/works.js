import dynamic from "next/dynamic";
import { useRouter } from 'next/router';

const PDFViewer = dynamic(() => import("../components/pdf-viewer"), {
  ssr: false
});

const works = () => {

  const router = useRouter();

  const closeButStyle = {
    position: 'absolute',
    right: 'calc(var(--btn-padding) + 10px)',
    top: 'var(--btn-padding)',
    fontSize: 'var(--h3-size)',
    backgroundColor: '#ffffff80',
    padding: '0 0.5rem',
    border: '1px dotted black',
    zIndex: '6',
  }

  const handleClick = (e) => {
    e.preventDefault();
    router.push('/');
  }

  return (
    <>
      <button onClick={handleClick} style={closeButStyle}> ✕ </button>
      <PDFViewer slug={'portfolio_valdespino_online_2024-10'}/>
    </>
  )
}

export default works