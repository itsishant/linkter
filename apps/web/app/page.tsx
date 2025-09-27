import styles from "./page.module.css";
import { IHeader } from "./interface/upperHeader";
import data from "./data/homePage.json";

export default function Home() {
  const { headerLine, headerName }: IHeader = data.Header;

  return (
    <div className="bg-yellow-500 flex justify-center min-h-screen">
      
    </div>
  );
}
