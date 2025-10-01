import { getAllTestimonials } from "@/lib/data";
import { TestimonialCarousel } from "../TestimonialCarousel";

export async function TestimoniosSection() {
  const testimonials = await getAllTestimonials();

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section
      id="testimonios"
      className="bg-foreground w-full scroll-mt-[50px] p-4 py-10"
    >
      <div className="container mx-auto">
        <h2 className="text-primary mb-8 text-center text-2xl font-bold md:text-4xl">
          Lo que dicen nuestros clientes
        </h2>

        <TestimonialCarousel testimonios={testimonials} />
      </div>
    </section>
  );
}
