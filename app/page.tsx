import Terminal from "@/components/terminal";

export default function Home() {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/red.png')" }}
    >
      <Terminal />
    </div>
  );
}
