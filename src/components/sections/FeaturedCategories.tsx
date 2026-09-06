import Link from "next/link";
import Image from "next/image";

export default function FeaturedCategories() {
  return (
    <section className="py-20 lg:py-28 bg-white border-t border-neutral-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Categories Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* LEFT TALL CARD (Chairs) - Spans 5 columns */}
          <Link
            href="/shop?category=chairs"
            className="group relative lg:col-span-5 bg-[#F8F9FB] rounded-[32px] p-8 sm:p-10 overflow-hidden flex flex-col hover:shadow-lg transition-all duration-300"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 bg-white rounded-full px-4 py-2 w-fit mb-6 shadow-sm border border-neutral-100">
              <span className="text-[#F5A623] font-bold text-sm">1500+</span>
              <span className="text-neutral-600 text-sm font-medium">Items</span>
            </div>

            {/* Content */}
            <div className="relative z-10 w-full sm:w-[60%] flex flex-col h-full">
              <h3 className="text-4xl sm:text-5xl font-bold text-neutral-900 tracking-tight mb-4 group-hover:text-[#163A2B] transition-colors">
                Chairs
              </h3>
              
              <p className="text-neutral-500 text-sm leading-relaxed mb-6 max-w-[200px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>

              <ul className="space-y-3 mt-auto">
                {["Gaming Chair", "Lounge Chair", "Folding Chair", "Dining Chair", "Office Chair", "Armchair", "Bar Stool", "Club Chair"].map((item) => (
                  <li key={item} className="text-neutral-500 font-medium text-[15px] hover:text-neutral-900 transition-colors">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Image (Positioned Absolute) */}
            <div className="absolute -right-16 sm:-right-8 top-32 sm:top-24 bottom-0 w-[80%] sm:w-[70%] z-0 pointer-events-none">
              <div className="relative w-full h-[120%]">
                {/* 
                  Using mix-blend-multiply so white backgrounds of images blend into the #F8F9FB card background 
                  This creates the illusion of a transparent PNG cutout!
                */}
                <Image
                  src="https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=800&auto=format&fit=crop"
                  alt="Bar Stool"
                  fill
                  className="object-contain object-bottom mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </Link>


          {/* RIGHT COLUMN STACK - Spans 7 columns */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* TOP RIGHT CARD (Sofa) */}
            <Link
              href="/shop?category=sofa"
              className="group relative flex-1 bg-[#F8F9FB] rounded-[32px] p-8 sm:p-10 overflow-hidden flex flex-col sm:flex-row hover:shadow-lg transition-all duration-300 min-h-[340px]"
            >
              {/* Content */}
              <div className="relative z-10 w-full sm:w-1/2 flex flex-col h-full">
                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 bg-white rounded-full px-4 py-2 w-fit mb-5 shadow-sm border border-neutral-100">
                  <span className="text-[#F5A623] font-bold text-sm">750+</span>
                  <span className="text-neutral-600 text-sm font-medium">Items</span>
                </div>

                <h3 className="text-4xl sm:text-5xl font-bold text-neutral-900 tracking-tight mb-6 group-hover:text-[#163A2B] transition-colors">
                  Sofa
                </h3>

                <ul className="space-y-3 mt-auto">
                  {["Reception Sofa", "Sectional Sofa", "Armless Sofa", "Curved Sofa"].map((item) => (
                    <li key={item} className="text-neutral-500 font-medium text-[15px] hover:text-neutral-900 transition-colors">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image (Positioned Absolute) */}
              <div className="absolute -right-12 sm:right-0 top-1/2 -translate-y-1/2 w-[60%] sm:w-[55%] h-[90%] z-0 pointer-events-none">
                <div className="relative w-full h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop"
                    alt="Sofa"
                    fill
                    className="object-contain object-right mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </Link>

            {/* BOTTOM RIGHT CARD (Lighting) */}
            <Link
              href="/shop?category=lighting"
              className="group relative flex-1 bg-[#F8F9FB] rounded-[32px] p-8 sm:p-10 overflow-hidden flex flex-col sm:flex-row hover:shadow-lg transition-all duration-300 min-h-[340px]"
            >
              {/* Content */}
              <div className="relative z-10 w-full sm:w-1/2 flex flex-col h-full">
                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 bg-white rounded-full px-4 py-2 w-fit mb-5 shadow-sm border border-neutral-100">
                  <span className="text-[#F5A623] font-bold text-sm">450+</span>
                  <span className="text-neutral-600 text-sm font-medium">Items</span>
                </div>

                <h3 className="text-4xl sm:text-5xl font-bold text-neutral-900 tracking-tight mb-6 group-hover:text-[#163A2B] transition-colors">
                  Lighting
                </h3>

                <ul className="space-y-3 mt-auto">
                  {["Table Lights", "Floor Lights", "Ceiling Lights", "Wall Lights"].map((item) => (
                    <li key={item} className="text-neutral-500 font-medium text-[15px] hover:text-neutral-900 transition-colors">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image (Positioned Absolute) */}
              <div className="absolute -right-8 sm:right-4 top-1/2 -translate-y-1/2 w-[55%] h-[110%] z-0 pointer-events-none">
                <div className="relative w-full h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=800&auto=format&fit=crop"
                    alt="Lighting"
                    fill
                    className="object-contain object-center mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
}
