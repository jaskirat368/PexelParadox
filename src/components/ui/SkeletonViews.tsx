import { motion } from 'motion/react';

// Reusable Pulse Bar
function SkeletonBar({ className = "h-4 bg-gray-200 rounded" }: { className?: string }) {
  return (
    <div className={`animate-pulse ${className}`} />
  );
}

// Reusable Pulsing Circle
function SkeletonCircle({ className = "w-12 h-12 bg-gray-200 rounded-full" }: { className?: string }) {
  return (
    <div className={`animate-pulse ${className}`} />
  );
}

// 1. Home Page Skeleton Screen (Matches Hero, ProblemSolution, Services preview, etc.)
export function HomeSkeleton() {
  return (
    <div className="w-full bg-brand-gray min-h-screen">
      {/* Curved Hero area (White Rounded Block) */}
      <div className="pt-40 pb-20 md:pt-48 md:pb-32 px-6 bg-white text-black rounded-b-[3rem] md:rounded-b-[5rem] relative z-20 shadow-[0_20px_40px_rgba(0,0,0,0.01)]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-end justify-between gap-12">
          <div className="max-w-3xl w-full">
            {/* Tagline Badge */}
            <SkeletonBar className="w-40 h-5 bg-brand-red/10 rounded-full mb-8" />
            
            {/* Massive Heading Skeletons */}
            <SkeletonBar className="w-3/4 h-16 md:h-24 bg-gray-200 mb-4" />
            <SkeletonBar className="w-1/2 h-16 md:h-24 bg-gray-200 mb-10" />
            
            {/* Subtitle Skeletons */}
            <SkeletonBar className="w-full h-6 bg-gray-100 mb-3" />
            <SkeletonBar className="w-5/6 h-6 bg-gray-100 mb-12" />
            
            {/* Dual Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <SkeletonBar className="w-full sm:w-48 h-16 bg-gray-200 rounded-full" />
              <SkeletonBar className="w-full sm:w-48 h-16 bg-gray-100 rounded-full" />
            </div>
          </div>
          
          {/* Big Circular Action Tracker on desktop */}
          <div className="hidden lg:flex flex-col items-center gap-4 shrink-0">
            <SkeletonCircle className="w-20 h-20 bg-brand-red/10" />
            <SkeletonBar className="w-20 h-4 bg-gray-200" />
          </div>
        </div>
      </div>

      {/* Stats Bento/Grid area */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-white border border-brand-border p-8 rounded-[2rem] flex flex-col justify-between h-52">
            <SkeletonCircle className="w-12 h-12 bg-gray-100" />
            <div>
              <SkeletonBar className="w-16 h-8 bg-gray-200 mb-2" />
              <SkeletonBar className="w-24 h-4 bg-gray-100" />
            </div>
          </div>
        ))}
      </div>

      {/* Dynamic Content Grid Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 mt-24 pb-24">
        <SkeletonBar className="w-48 h-6 bg-gray-300 mb-4" />
        <SkeletonBar className="w-80 h-10 bg-gray-200 mb-12" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white border border-brand-border p-8 rounded-[2.5rem] h-80 flex flex-col justify-between">
              <div>
                <SkeletonCircle className="w-12 h-12 bg-gray-100 mb-6" />
                <SkeletonBar className="w-40 h-6 bg-gray-200 mb-4" />
                <SkeletonBar className="w-full h-4 bg-gray-100 mb-2" />
                <SkeletonBar className="w-5/6 h-4 bg-gray-100" />
              </div>
              <SkeletonBar className="w-28 h-5 bg-gray-200 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// 2. Services Page Skeleton (Matches Bento Grid Layout)
export function ServicesSkeleton() {
  return (
    <div className="w-full bg-brand-gray min-h-screen pb-20">
      {/* Services Hero Header */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-32 px-6 bg-white text-black rounded-b-[3rem] md:rounded-b-[5rem] relative z-20 shadow-[0_20px_40px_rgba(0,0,0,0.01)]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-end justify-between gap-12">
          <div className="max-w-3xl w-full">
            <SkeletonBar className="w-32 h-5 bg-brand-red/10 rounded-full mb-4" />
            <SkeletonBar className="w-2/3 h-16 md:h-24 bg-gray-200 mb-4" />
            <SkeletonBar className="w-1/2 h-16 md:h-24 bg-gray-200 mb-8" />
            <SkeletonBar className="w-full h-6 bg-gray-100 mb-2" />
            <SkeletonBar className="w-5/6 h-6 bg-gray-100" />
          </div>
          <div className="hidden lg:flex flex-col items-center gap-4 shrink-0">
            <SkeletonCircle className="w-20 h-20 bg-brand-red/10 animate-pulse" />
            <SkeletonBar className="w-24 h-4 bg-gray-200" />
          </div>
        </div>
      </section>

      {/* Services Bento Grid Skeletons */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Bento Row 1, Col 1-2: Giant dark card */}
          <div className="col-span-1 md:col-span-2 bg-neutral-950 border border-neutral-900 p-8 md:p-12 rounded-[2.5rem] min-h-[380px] flex flex-col justify-between">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <SkeletonCircle className="w-16 h-16 bg-neutral-900 border border-neutral-800" />
                    <SkeletonBar className="w-28 h-6 bg-brand-red/20 rounded-full" />
                  </div>
                  <SkeletonBar className="w-1/2 h-8 bg-neutral-800 mb-4" />
                  <SkeletonBar className="w-full h-4 bg-neutral-800 mb-2" />
                  <SkeletonBar className="w-4/5 h-4 bg-neutral-800 mb-8" />
                </div>
              </div>
              <div className="lg:col-span-5 w-full h-48 lg:h-64 bg-neutral-900 border border-neutral-800 rounded-[1.5rem]" />
            </div>
            <div className="flex justify-between items-center pt-6 border-t border-neutral-900">
              <SkeletonBar className="w-48 h-4 bg-neutral-900" />
              <SkeletonBar className="w-28 h-4 bg-neutral-800" />
            </div>
          </div>

          {/* Card 2: Light card */}
          <div className="bg-white border border-brand-border p-8 rounded-[2.5rem] flex flex-col justify-between min-h-[380px]">
            <div>
              <SkeletonCircle className="w-14 h-14 bg-gray-100 mb-6" />
              <SkeletonBar className="w-1/2 h-7 bg-gray-200 mb-4" />
              <SkeletonBar className="w-full h-4 bg-gray-100 mb-2" />
              <SkeletonBar className="w-5/6 h-4 bg-gray-100 mb-6" />
            </div>
            <div>
              <div className="w-full h-40 bg-gray-100 rounded-2xl mb-6" />
              <SkeletonBar className="w-32 h-4 bg-gray-200" />
            </div>
          </div>

          {/* Card 3: Light card */}
          <div className="bg-white border border-brand-border p-8 rounded-[2.5rem] flex flex-col justify-between min-h-[380px]">
            <div>
              <SkeletonCircle className="w-14 h-14 bg-gray-100 mb-6" />
              <SkeletonBar className="w-1/2 h-7 bg-gray-200 mb-4" />
              <SkeletonBar className="w-full h-4 bg-gray-100 mb-2" />
              <SkeletonBar className="w-5/6 h-4 bg-gray-100 mb-6" />
            </div>
            <div>
              <div className="w-full h-40 bg-gray-100 rounded-2xl mb-6" />
              <SkeletonBar className="w-32 h-4 bg-gray-200" />
            </div>
          </div>

          {/* Card 4: Horizontal Wide light card (Col-span 2) */}
          <div className="col-span-1 lg:col-span-2 bg-white border border-brand-border p-8 rounded-[2.5rem] flex flex-col justify-between min-h-[320px]">
            <div className="flex justify-between items-start mb-4">
              <SkeletonCircle className="w-14 h-14 bg-gray-100" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-7">
                <SkeletonBar className="w-1/2 h-7 bg-gray-200 mb-3" />
                <SkeletonBar className="w-full h-4 bg-gray-100 mb-2" />
                <SkeletonBar className="w-5/6 h-4 bg-gray-100" />
              </div>
              <div className="lg:col-span-5 w-full h-48 bg-gray-100 rounded-[1.5rem]" />
            </div>
            <div className="mt-4 pt-4 border-t border-brand-gray flex justify-between">
              <SkeletonBar className="w-32 h-4 bg-gray-100" />
              <SkeletonBar className="w-24 h-4 bg-gray-200" />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

// 3. About Page Skeleton (Matches clean header and corporate panels)
export function AboutSkeleton() {
  return (
    <div className="w-full bg-brand-gray min-h-screen">
      <section className="pt-40 pb-20 md:pt-48 md:pb-32 px-6 bg-white text-black rounded-b-[3rem] md:rounded-b-[5rem] relative z-20 shadow-[0_20px_40px_rgba(0,0,0,0.01)]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-end justify-between gap-12">
          <div className="max-w-3xl w-full">
            <SkeletonBar className="w-32 h-5 bg-brand-red/10 rounded-full mb-4" />
            <SkeletonBar className="w-2/3 h-16 md:h-24 bg-gray-200 mb-4" />
            <SkeletonBar className="w-1/2 h-16 md:h-24 bg-gray-200 mb-8" />
            <SkeletonBar className="w-full h-6 bg-gray-100 mb-2" />
            <SkeletonBar className="w-4/5 h-6 bg-gray-100" />
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="w-full h-[500px] bg-white border border-brand-border rounded-[2.5rem] p-8 flex flex-col justify-end relative overflow-hidden">
            <div className="w-full h-full bg-gray-100 absolute inset-0 animate-pulse" />
            <div className="relative z-10 w-2/3">
              <SkeletonBar className="w-1/2 h-6 bg-gray-300 mb-2" />
              <SkeletonBar className="w-full h-4 bg-gray-200" />
            </div>
          </div>

          <div className="flex flex-col gap-6 w-full">
            <SkeletonBar className="w-32 h-6 bg-gray-300 mb-4" />
            <SkeletonBar className="w-full h-[1.5rem] bg-gray-200 mb-2" />
            <SkeletonBar className="w-full h-[1.5rem] bg-gray-200 mb-2" />
            <SkeletonBar className="w-5/6 h-[1.5rem] bg-gray-200 mb-6" />
            
            <div className="border-t border-brand-border pt-8 mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[1, 2].map((i) => (
                <div key={i} className="flex flex-col gap-2">
                  <SkeletonBar className="w-12 h-10 bg-gray-300" />
                  <SkeletonBar className="w-24 h-4 bg-gray-200" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// 4. Contact Page Skeleton (Split contact info cards and heavy form)
export function ContactSkeleton() {
  return (
    <section className="pt-44 pb-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
      {/* Massive Header */}
      <div className="flex flex-col items-center text-center mb-16 md:mb-24">
        <SkeletonBar className="w-64 h-8 bg-brand-red/10 rounded-full mb-6" />
        <SkeletonBar className="w-3/4 h-16 md:h-24 bg-gray-200 mb-4" />
        <SkeletonBar className="w-1/2 h-16 md:h-24 bg-gray-200" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        {/* Left Column: Direct info grids */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="bg-black border border-neutral-900 p-8 md:p-12 h-64 rounded-[2rem] flex flex-col justify-between">
            <SkeletonCircle className="w-14 h-14 bg-neutral-900" />
            <div>
              <SkeletonBar className="w-1/2 h-8 bg-neutral-800 mb-2" />
              <SkeletonBar className="w-1/3 h-5 bg-neutral-800" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white border border-brand-border p-8 rounded-[2rem] min-h-[220px] flex flex-col justify-between">
                <SkeletonCircle className="w-12 h-12 bg-gray-100" />
                <div>
                  <SkeletonBar className="w-1/2 h-6 bg-gray-200 mb-2" />
                  <SkeletonBar className="w-3/4 h-4 bg-gray-100" />
                </div>
                <SkeletonBar className="w-28 h-4 bg-gray-200 mt-4" />
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Contact Request Form */}
        <div className="lg:col-span-5 w-full">
          <div className="bg-white border-2 border-brand-border p-8 md:p-12 rounded-[2.5rem] flex flex-col justify-between h-full">
            <div>
              <SkeletonCircle className="w-16 h-16 bg-gray-100 mb-8" />
              <SkeletonBar className="w-1/2 h-8 bg-gray-200 mb-8" />
              
              {/* Form Input Skeletons */}
              <div className="flex flex-col gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <SkeletonBar className="w-24 h-4 bg-gray-100" />
                    <SkeletonBar className="w-full h-14 bg-gray-150 rounded-xl" />
                  </div>
                ))}
              </div>

              <SkeletonBar className="w-full h-16 bg-brand-red/20 rounded-xl mt-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 5. Results/Process Page Skeleton (Tracks chart feeds and timelines)
export function ResultsSkeleton() {
  return (
    <div className="w-full bg-brand-gray min-h-screen pb-20">
      <section className="pt-40 pb-20 md:pt-48 md:pb-32 px-6 bg-white text-black rounded-b-[3rem] md:rounded-b-[5rem] relative z-20 shadow-[0_20px_40px_rgba(0,0,0,0.01)]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-end justify-between gap-12">
          <div className="max-w-3xl w-full">
            <SkeletonBar className="w-32 h-5 bg-brand-red/10 rounded-full mb-4" />
            <SkeletonBar className="w-2/3 h-16 md:h-24 bg-gray-200 mb-4" />
            <SkeletonBar className="w-1/2 h-16 md:h-24 bg-gray-200" />
          </div>
        </div>
      </section>

      {/* Grid of Charts and Results */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white border border-brand-border p-8 md:p-12 rounded-[2.5rem] flex flex-col justify-between min-h-[480px]">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <SkeletonBar className="w-1/3 h-6 bg-gray-200" />
                  <SkeletonBar className="w-20 h-5 bg-brand-red/10 rounded-full" />
                </div>
                <SkeletonBar className="w-2/3 h-10 bg-gray-300 mb-8" />
                
                {/* Fake pulsing bar chart */}
                <div className="w-full h-52 bg-gray-50 border border-brand-border rounded-xl flex items-end gap-3 p-4 justify-around mb-6">
                  {[40, 60, 30, 80, 50, 95, 70].map((h, idx) => (
                    <div 
                      key={idx} 
                      style={{ height: `${h}%` }} 
                      className="w-8 bg-gray-200 rounded-t animate-pulse" 
                    />
                  ))}
                </div>
              </div>
              <SkeletonBar className="w-full h-12 bg-gray-100 rounded-xl" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// 6. Generic Default Skeleton Screen for static details and unknown pages
export function DefaultSkeleton() {
  return (
    <div className="w-full bg-brand-gray min-h-screen">
      <section className="pt-40 pb-20 md:pt-48 md:pb-32 px-6 bg-white text-black rounded-b-[3rem] md:rounded-b-[5rem] relative z-20 shadow-[0_20px_40px_rgba(0,0,0,0.01)]">
        <div className="max-w-7xl mx-auto">
          <SkeletonBar className="w-32 h-5 bg-brand-red/10 rounded-full mb-4" />
          <SkeletonBar className="w-3/4 h-16 bg-gray-200 mb-6" />
          <SkeletonBar className="w-1/2 h-6 bg-gray-100" />
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 max-w-3xl mx-auto flex flex-col gap-6">
        <SkeletonBar className="w-full h-5 bg-gray-200" />
        <SkeletonBar className="w-5/6 h-5 bg-gray-200" />
        <SkeletonBar className="w-full h-5 bg-gray-200" />
        <SkeletonBar className="w-3/4 h-5 bg-gray-200 mb-10" />
        
        <div className="w-full h-[400px] bg-white border border-brand-border rounded-[2rem] p-4 flex items-center justify-center">
          <SkeletonCircle className="w-24 h-24 bg-gray-100" />
        </div>
      </section>
    </div>
  );
}

// Master Router-Aware Skeleton Provider
interface PageSkeletonProps {
  path: string;
}

export function PageSkeleton({ path }: PageSkeletonProps) {
  // Map routes to their highly-cohesive skeletons
  if (path === '/') return <HomeSkeleton />;
  if (path.startsWith('/services') && path !== '/services') return <DefaultSkeleton />; // sub-detail page
  if (path === '/services') return <ServicesSkeleton />;
  if (path === '/about') return <AboutSkeleton />;
  if (path === '/contact') return <ContactSkeleton />;
  if (path === '/results') return <ResultsSkeleton />;
  if (path === '/process') return <ResultsSkeleton />; // Matches results-style panel lists
  if (path.startsWith('/process/')) return <DefaultSkeleton />;
  
  return <DefaultSkeleton />;
}
