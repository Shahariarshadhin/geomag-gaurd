import Link from "next/link";

const LandingNavbar = () => {
  return (
    <div className="container mx-auto py-4">
      <div className="flex justify-around text-white">
        <Link href="/" className="font-bold text-xl px-8 py-3 bg-[#b3214d] rounded-full">Home</Link>
        <Link href="/predict" className="font-bold text-xl px-8 py-3 bg-[#d90b6e] rounded-full">Predict</Link>
        <Link href="/real-time-data" className="font-bold text-xl px-8 py-3 bg-[#361333] rounded-full">Real Time Data</Link>
        <Link href="/community" className="font-bold text-xl px-8 py-3 bg-[#792d4d] rounded-full">Community</Link>
      </div>
    </div>
  );
};

export default LandingNavbar;
