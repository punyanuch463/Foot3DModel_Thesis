
import React, { useEffect, useState } from "react";
import styles from './verphoto.module.css'
import Link from "next/link"

export default function About() {
  const [capturedImage, setCapturedImage] = useState(null);
  const [frameImage, setFrameImage] = useState(null);

  useEffect(() => {
    // Retrieve image data and frame data from local storage
    const image = localStorage.getItem('capturedImage');
    const frame = localStorage.getItem('frameImage');
    setCapturedImage(image);
    setFrameImage(frame);
  }, []);

  return (
    
    <main className={styles.main}>

        <Link href="/HomePage" >
      <button
      className={styles.backButton}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        </button>
      </Link>
      <p className={styles.title}>ฝ่าเท้าข้างซ้าย</p>
      {capturedImage && frameImage && (
        <div className={styles.imageContainer}>
          <div className={styles.frameContainer}>
            <img src={frameImage} alt="Frame" className={styles.frameImage} />
            <img src={capturedImage} alt="Captured" className={styles.capturedImage} />
          </div>
        </div>
      )}
        <p className={styles.verityfoot}>รูปภาพของคุณสามารถใช้งานได้</p>

<footer className={styles.footer}>
          <Link href="/takePhotoFoot/takePhotoFootLeft1" >
     
          <button className={styles.retake} >ถ่ายใหม่อีกครั้ง

          </button>
          </Link>
          
          <Link href="/takePhotoFoot/takePhotoFootLeft2" >
          <button className={styles.confirm} >ยืนยัน

          </button>
          </Link>
      </footer>
    </main>
  )
}

// import React, { useEffect, useState } from "react";
// import styles from './verphoto.module.css';
// import Link from "next/link";

// export default function About() {
//   const [capturedImage, setCapturedImage] = useState(null);
//   const [frameImage, setFrameImage] = useState(null);
//   const [isLoading, setIsLoading] = useState(false); // Loading state
//   const [message, setMessage] = useState(null); // Feedback message

//   useEffect(() => {
//     // Retrieve image data and frame data from local storage
//     const image = localStorage.getItem('capturedImage');
//     const frame = localStorage.getItem('frameImage');
//     setCapturedImage(image);
//     setFrameImage(frame);
//   }, []);

//   const handleConfirm = async () => {
//     if (!capturedImage) {
//       setMessage("No image to upload.");
//       return;
//     }

//     setIsLoading(true);
//     setMessage(null);

//     try {
//       // Convert data URL to Blob
//       const response = await fetch(capturedImage);
//       const blob = await response.blob();

//       // Create a File from the Blob
//       const file = new File([blob], 'captured_image.png', { type: blob.type });

//       // Prepare form data
//       const formData = new FormData();
//       formData.append('file', file);
//       formData.append('folderId', process.env.NEXT_PUBLIC_SHARED_DRIVE_ID_FootImage); // Or specify the folder ID

//       // Send POST request to the API route
//       const uploadResponse = await fetch('/api/uploadToDrive', { // Ensure the API route path is correct
//         method: 'POST',
//         body: formData,
//       });

//       const result = await uploadResponse.json();

//       if (uploadResponse.ok) {
//         setMessage(`Upload successful! View it here: ${result.imageUrl}`);
//         // Optionally, navigate to another page
//       } else {
//         setMessage(`Upload failed: ${result.message}`);
//       }
//     } catch (error) {
//       console.error('Error uploading the image:', error);
//       setMessage("An error occurred during upload.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <main className={styles.main}>

//       <Link href="/HomePage">
//         <button className={styles.backButton}>
//           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
//                viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" 
//                strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-left">
//             <line x1="19" y1="12" x2="5" y2="12"></line>
//             <polyline points="12 19 5 12 12 5"></polyline>
//           </svg>
//         </button>
//       </Link>

//       <p className={styles.title}>ฝ่าเท้าข้างซ้าย</p>

//       {capturedImage && frameImage && (
//         <div className={styles.imageContainer}>
//           <div className={styles.frameContainer}>
//             <img src={frameImage} alt="Frame" className={styles.frameImage} />
//             <img src={capturedImage} alt="Captured" className={styles.capturedImage} />
//           </div>
//         </div>
//       )}

//       <p className={styles.verityfoot}>รูปภาพของคุณสามารถใช้งานได้</p>

//       {message && <p className={styles.message}>{message}</p>}
//       {isLoading && <p className={styles.loading}>Uploading...</p>}

//       <footer className={styles.footer}>
//         <Link href="/takePhotoFoot/takePhotoFootLeft1">
//           <button className={styles.retake}>ถ่ายใหม่อีกครั้ง</button>
//         </Link>
        
//         <button 
//           className={styles.confirm} 
//           onClick={handleConfirm} 
//           disabled={isLoading}
//         >
//           {isLoading ? "Uploading..." : "ยืนยัน"}
//         </button>
//       </footer>
//     </main>
//   );
// }
