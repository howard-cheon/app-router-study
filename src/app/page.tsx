import ErrorButton from "@/app/_components/ErrorButton";
import ServerActionComponent from "./_components/AsyncComponent";

export default function Home() {
  return (
    <div>
      <ErrorButton />
      <ServerActionComponent />
    </div>
  );
}
