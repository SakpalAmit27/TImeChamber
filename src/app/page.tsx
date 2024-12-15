import { MaxWidthWrapper } from "./components/max-width-wrapper";

export default function Home(){
  return(
    <section className="border-b border-red-700 relative py-24 sm:py-32 bg-brand-25">
      <MaxWidthWrapper>
        <div className="relative mx-auto text-center flex flex-col items-center gap-10">
          <h1>TimeChamber</h1>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}