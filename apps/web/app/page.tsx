import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { IHeader } from "./interface/upperHeader";
import data from "./data/homePage.json";

export default function Home() {
  const { headerLine, headerName }: IHeader = data.Header;

  return (
    <div className="">
      <span className=""></span>
    </div>
  );
}
