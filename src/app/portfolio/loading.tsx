import { Skeleton } from "@/components/ui/skeleton";

export default function MainPortfolioLoading() {
  return (
    <section className="bg-background w-full scroll-mt-[50px] py-10">
      <div className="container mx-auto p-4">
        <div className="flex w-full flex-col items-center justify-center gap-4">
          <Skeleton className="bg-muted h-12 w-72 rounded-full" />
          <Skeleton className="bg-muted h-5 w-3/5 rounded-full" />
          <Skeleton className="bg-muted h-5 w-1/2 rounded-full" />
        </div>
      </div>

      <section className="bg-background w-full scroll-mt-[50px] py-10">
        <div className="container mx-auto space-y-3 p-4">
          <div className="flex basis-2 flex-col gap-3 md:basis-3 md:flex-row">
            <Skeleton className="bg-muted h-[200px] w-full rounded-2xl md:h-[400px] md:w-1/3" />
            <Skeleton className="bg-muted h-[200px] w-full rounded-2xl md:h-[400px] md:w-1/3" />
            <Skeleton className="bg-muted h-[200px] w-full rounded-2xl md:h-[400px] md:w-1/3" />
          </div>
          <div className="flex basis-2 flex-col gap-3 md:basis-3 md:flex-row">
            <Skeleton className="bg-muted h-[200px] w-full rounded-2xl md:h-[400px] md:w-1/3" />
            <Skeleton className="bg-muted h-[200px] w-full rounded-2xl md:h-[400px] md:w-1/3" />
            <Skeleton className="bg-muted h-[200px] w-full rounded-2xl md:h-[400px] md:w-1/3" />
          </div>
        </div>
      </section>
    </section>
  );
}
