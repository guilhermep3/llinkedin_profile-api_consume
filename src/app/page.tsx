import { redirect } from "next/navigation";

export default function Home() {
  redirect('/in/username');
  
  return (
    <div>
      clone linkedin
    </div>
  );
}
