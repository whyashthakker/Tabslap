import Image from "next/image";

export const Heroes = () => {
  const images = ["/1.png", "/2.png", "/3.png", "/4.png", "/5.png", "/6.png"];

  return (
    <div className="flex flex-col items-center justify-center max-w-7xl mx-auto">
      <div className="flex flex-wrap justify-center items-center">
        {images.map((src, index) => (
          <div key={index} className="p-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/2">
            <div className="flex justify-center items-center h-64 sm:h-72 md:h-96 lg:h-96">
              <Image src={src} height={600} width={600} alt={`Image ${index + 1}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
