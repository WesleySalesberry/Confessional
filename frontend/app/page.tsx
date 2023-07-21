import SearchContextProvider from "@/context/SearchContextProvider";
import { Landing } from "../component";

export default function Home() {
  return (
    <SearchContextProvider>
      <Landing />
    </SearchContextProvider>
  )
}