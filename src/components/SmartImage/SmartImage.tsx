import { useEffect, useState } from 'react'
import s from "./SmartImage.module.css"

const SmartImage = ({ src , alt}: { src: string; alt: string;}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    var downloadingImage = new Image();
    downloadingImage.src = src;
    downloadingImage.onload = function () {
      setIsLoaded(true);
    };
  },[src]);
  return isLoaded ? <img className={'aspect-video'} src={src} alt={alt} /> : <div className={s.bg}></div>
}

export default SmartImage