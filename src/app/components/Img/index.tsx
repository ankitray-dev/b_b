import Image, { ImageProps } from "next/image";
import React from "react";

type ImgProps = Omit<ImageProps, "src" | "alt"> & {
  className?: string;
  src?: string;
  alt?: string;
};

const Img: React.FC<ImgProps> = ({
  className,
  src = "defaultNoData.png",
  alt = "testImg",
  ...restProps
}) => {
  return <Image className={className} src={src as string} alt={alt} {...restProps} loading="lazy" />;
};

export { Img };
