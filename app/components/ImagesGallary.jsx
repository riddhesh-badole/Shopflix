"use client";
import Image from "next/image";
import { urlFor } from "../lib/sanity";
import { useState } from "react";

export default function ImageGallary({ image }) {
  const [bigImage, setBigImage] = useState(image[0]);

  const handleSmallImageClick = (image) => {
    setBigImage(image);
  };
  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="order-last flex gap-4  justify-around lg:order-none lg:flex-col">
        {image.map((image, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg bg-gary-100">
            <Image
              src={urlFor(image).url()}
              width={200}
              height={200}
              alt="product photo"
              className="h-full w-full object-cover object-center cursor-pointer"
              onClick={() => handleSmallImageClick(image)}
            />
          </div>
        ))}
      </div>
      <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
        <Image
          src={urlFor(bigImage).url()}
          alt="product big photo"
          width={400}
          height={400}
          className="h-full w-full object-cover object-center"
        />
      </div>
    </div>
  );
}
