// import React, { useEffect, useRef, useState } from 'react'
// import './SplashScreen.css'

// const SplashScreen = () => {
// 	// const [opacity, setOpacity] = useState(1);

// 	const fadeRef = useRef<HTMLDivElement>(null);

// 	useEffect(() => {
// 		const handleScroll = () => {
// 			const maxScroll = 800; // Adjust this value to control how quickly your div fades out
// 			const scrollY = window.scrollY;
// 			const newOpacity = Math.max(1 - scrollY / maxScroll, 0);

// 			if (fadeRef.current) {
// 			fadeRef.current.style.setProperty('--fade-opacity', newOpacity.toString());
// 			}
// 		}

// 		window.addEventListener('scroll', handleScroll);

// 		// Clean up on unmount
// 		return () => window.removeEventListener('scroll', handleScroll);
		
// 	}, [])

  
// 	return (
// 	<div ref={fadeRef} className='splashscreen-container'>
// 		Streamline
// 	</div>
//   )
// }

// export default SplashScreen

import React from 'react'
import './SplashScreen.css'

const SplashScreen = () => {
  return (
	<div className='splashscreen-container'>Streamline</div>
  )
}

export default SplashScreen