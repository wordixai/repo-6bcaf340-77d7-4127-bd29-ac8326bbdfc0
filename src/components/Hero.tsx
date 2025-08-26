import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 hero-gradient min-h-1/3">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold mb-6">
            <span className="gradient-text">AI Interaction Tracking</span>
          </h1>
          <p className="text-md md:text-md text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            Monitor, analyze, and optimize AI interactions across all your clients. <br />
            No code changes required.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          <Button className="primary-button">
            Try for free
          </Button>
        </div>
      </div>
      
      <img
        alt="AI Interaction Tracking"
        width={1000}
        height={1000}
        className="mx-auto border rounded-xl mb-[-100px]"
        src="https://www.usetokyo.com/_next/image?url=%2Fhero.png&w=2048&q=75"
      />
    </section>
  );
}