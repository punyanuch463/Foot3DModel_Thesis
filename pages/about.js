// import React, { useEffect, useState } from "react";
// import styles from '../styles/About.module.css'

// export default function About() {
//   const [capturedImage, setCapturedImage] = useState(null);

//   useEffect(() => {
//     // Retrieve image data from local storage
//     const image = localStorage.getItem('capturedImage');
//     setCapturedImage(image);
//   }, []);

//   return (
//     <div className={styles.container}>
//       <h2 className={styles.title}>About Page</h2>
//       <p className={styles.description}>
//         Lorem Ipsum is simply dummy text of the printing and typesetting industry...
//       </p>
//       {capturedImage && (
//         <div className={styles.imageContainer}>
//           <img src={capturedImage} alt="Captured" className={styles.capturedImage} />
//         </div>
//       )}
//     </div>
//   )
// }
import React, { useEffect, useState } from "react";
import styles from '../styles/About.module.css'

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
    <div className={styles.container}>
      <h2 className={styles.title}>About Page</h2>
      <p className={styles.description}>
      Hellol world 
      </p>
      {capturedImage && frameImage && (
        <div className={styles.imageContainer}>
          <div className={styles.frameContainer}>
            <img src={frameImage} alt="Frame" className={styles.frameImage} />
            <img src={capturedImage} alt="Captured" className={styles.capturedImage} />
          </div>
        </div>
      )}
    </div>
  )
}

