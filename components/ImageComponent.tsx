'use client';

import {
  DetailedHTMLProps,
  ImgHTMLAttributes,
  useEffect,
  useState,
} from 'react';
import { Blurhash } from 'react-blurhash';

interface IImageComponentProps
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  src: string;
  alt: string;
  blurhash: string;
}

const ImageComponent = ({
  src,
  alt,
  blurhash,
  className,
  ...remainingProps
}: IImageComponentProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsImageLoaded(true);
    };
  }, [src]);

  return (
    <>
      <div className={`${className} ${isImageLoaded ? '!hidden' : 'block'}`}>
        <Blurhash
          hash={blurhash}
          punch={1}
          resolutionX={32}
          resolutionY={32}
          height='100%'
          width='100%'
          style={{ display: isImageLoaded ? 'none' : 'block' }}
        />
      </div>

      <img
        {...remainingProps}
        src={src}
        alt={alt}
        className={`${
          isImageLoaded ? 'block' : 'hidden'
        } ${className} object-center object-cover`}
      />
    </>
  );
};

export default ImageComponent;
