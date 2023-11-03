import Link from "next/link";
import React, {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  HTMLAttributes,
  ImgHTMLAttributes,
  LiHTMLAttributes,
} from "react";
import Image from "next/image";

export function CustomH1({ children }: { children?: React.ReactNode }) {
  return <h1 className=" font-semibold text-2xl my-5">{children}</h1>;
}

export function CustomH2({ children }: { children?: React.ReactNode }) {
  return <h2 className=" font-semibold text-2xl my-5">{children}</h2>;
}

export function CustomH3({ children }: { children?: React.ReactNode }) {
  return <h3 className=" font-semibold text-2xl my-5">{children}</h3>;
}

export function CustomH4({ children }: { children?: React.ReactNode }) {
  return <h4 className=" font-semibold text-2xl my-5">{children}</h4>;
}

export function CustomH5({ children }: { children?: React.ReactNode }) {
  return <h5 className=" font-semibold text-2xl my-5">{children}</h5>;
}

export function CustomH6({ children }: { children?: React.ReactNode }) {
  return <h6 className=" font-semibold text-2xl my-5">{children}</h6>;
}

export function CustomA(
  props: DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
) {
  return (
    <Link
      href={props.href || ""}
      className=" text-pink-500 hover:cursor-pointer hover:font-semibold"
    >
      {" "}
      {props.children}{" "}
    </Link>
  );
}

export function CustomImg(
  props: DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
) {
  return (
    <span className="w-full h-full my-5 inline-block ">
      <Image
        className="rounded-lg mx-auto"
        width={650}
        height={650}
        src={props.src || ""}
        alt={props.alt || ""}
      />
    </span>
  );
}

export function CustomLi(
  props: DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>
) {
  return (
    <li className="rounded-lg mx-auto flex flex-row justify-start gap-5">
      • {props.children}
    </li>
  );
}

export function CustomUl(
  props: DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>
) {
  return <ul className="ml-5 my-5">{props.children}</ul>;
}

type CustomImageProps = {
  src: string;
  alt: string;
  priority?: string;
};

export function CustomImage({ src, alt, priority }: CustomImageProps) {
  const prty = priority ? true : false;

  return (
    <div className="w-full h-full">
      <Image
        className="rounded-lg mx-auto"
        src={src}
        alt={alt}
        width={650}
        height={650}
        priority={prty}
      />
    </div>
  );
}

type VideoProps = {
  id: string;
};

export function Video({ id }: VideoProps) {
  return (
    <div className="aspect-w-16 aspect-h-9">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />
    </div>
  );
}
