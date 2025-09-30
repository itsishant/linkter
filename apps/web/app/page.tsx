import { IHeader } from "./interface/upperHeader";
import data from "./data/homePage.json";

export default function Home() {
  const { headerLine, headerName }: IHeader = data.Header;

  return (
    <div className="bg-blue-600 flex justify-center min-h-screen">
      <span className="text-4xl">
        
      </span>
    </div>
  );
}
  