import PrimaryButton from "@/src/components/utils/PrimaryButton";

export default function Home() {
  return (
    <div className="grid place-items-center w-full h-screen bg-gradient-radial to-slate-200 from-white">
      <div className="max-w-3xl flex flex-col items-center justify-center text-center gap-y-10">
        <h1 className="header">
          Discover your{" "}
          <span className="text-clip gradient-text-1">inner elements</span> and
          find out who are your best friends.
        </h1>
        <PrimaryButton className="text-2xl">Begin</PrimaryButton>
      </div>
    </div>
  );
}
