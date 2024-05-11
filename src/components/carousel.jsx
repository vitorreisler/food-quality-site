import { Carousel, Typography } from "@material-tailwind/react";

export function CarouselWithContent() {
  return (
    <Carousel autoplay loop className="">
      <div className="relative h-full w-full">
        <div className="h-full w-full object-cover img-carousel1" />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Quality Foods
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Assegurando o melhor dos alimentos para você
            </Typography>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <div className="h-full w-full object-cover img-carousel2" />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Quality Foods
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Assegurando o melhor dos alimentos para você
            </Typography>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <div className="h-full w-full object-cover img-carousel3" />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Quality Foods
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Assegurando o melhor dos alimentos para você
            </Typography>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
