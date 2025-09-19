import { Skeleton } from "@/components/ui/skeleton";

export default function PortfolioLoading() {
  return (
    <section className="bg-background w-full scroll-mt-[50px] py-10">
      <div className="container mx-auto grid grid-cols-1 gap-8 p-4 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <div className="space-y-3">
            <Skeleton className="bg-muted h-4 w-32 rounded-full" />
            <Skeleton className="bg-muted h-12 w-72 rounded-full" />
          </div>

          <div className="space-y-3">
            <Skeleton className="bg-muted h-4 w-32 rounded-full" />
            <Skeleton className="bg-muted h-6 w-60 rounded-full" />
          </div>

          <div className="space-y-3">
            <Skeleton className="bg-muted h-4 w-32 rounded-full" />
            <Skeleton className="bg-muted h-5 w-full rounded-full" />
            <Skeleton className="bg-muted h-5 w-1/2 rounded-full" />
          </div>
        </div>

        <div>
          <Skeleton className="bg-muted h-[400px] w-full rounded-2xl" />
        </div>
      </div>

      <section className="bg-background w-full scroll-mt-[50px] py-10">
        <div className="container mx-auto space-y-3 p-4">
          <Skeleton className="bg-muted h-4 w-32 rounded-full" />
          <div className="flex basis-2 flex-col gap-3 md:basis-4 md:flex-row">
            <Skeleton className="bg-muted h-[200px] w-full rounded-2xl md:h-[300px] md:w-1/3" />
            <Skeleton className="bg-muted h-[200px] w-full rounded-2xl md:h-[300px] md:w-1/3" />
            <Skeleton className="bg-muted h-[200px] w-full rounded-2xl md:h-[300px] md:w-1/3" />
            <Skeleton className="bg-muted h-[200px] w-full rounded-2xl md:h-[300px] md:w-1/3" />
          </div>
          <div className="flex basis-2 flex-col gap-3 md:basis-4 md:flex-row">
            <Skeleton className="bg-muted h-[200px] w-full rounded-2xl md:h-[300px] md:w-1/3" />
            <Skeleton className="bg-muted h-[200px] w-full rounded-2xl md:h-[300px] md:w-1/3" />
            <Skeleton className="bg-muted h-[200px] w-full rounded-2xl md:h-[300px] md:w-1/3" />
            <Skeleton className="bg-muted h-[200px] w-full rounded-2xl md:h-[300px] md:w-1/3" />
          </div>
        </div>
      </section>
    </section>
  );
}
