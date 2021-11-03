import { Fragment } from "react";
import Image from "next/image";

export default function Home() {
  const images = [
    {
      url: "/assets/images/001.jpg",
      title: "one",
    },
    {
      url: "/assets/images/001.jpg",
      title: "two",
    },
    {
      url: "/assets/images/001.jpg",
      title: "three",
    },
    {
      url: "/assets/images/001.jpg",
      title: "four",
    },
    {
      url: "/assets/images/001.jpg",
      title: "five",
    },
  ];

  return (
    <Fragment>
      <div className="mt-20">
        <p className="text-center font-pop">
        Architecture is one of the most important arts, as it is an approach towards <br /> the
        experience that we perceive through
        the creation of spaces.
        </p>
      </div>
      <div className="slider">
        <figure>
          {images.map((el, i) => (
            <Image
              key={i}
              src={el.url}
              alt={el.title}
              width="2048"
              height="600"
            />
          ))}
        </figure>
      </div>
    </Fragment>
  );
}
