import { Skeleton } from "@/components/ui/skeleton";

export default function ProductLoading() {
  return (
    <section className="bg-background w-full scroll-mt-[50px] py-10">
      <div className="container mx-auto grid grid-cols-1 gap-8 p-4 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <div className="space-y-3">
            <Skeleton className="bg-muted h-12 w-full rounded-full" />
            <Skeleton className="bg-muted h-12 w-72 rounded-full" />
          </div>

          <div className="space-y-3">
            <Skeleton className="bg-muted h-5 w-full rounded-full" />
            <Skeleton className="bg-muted h-5 w-full rounded-full" />
            <Skeleton className="bg-muted h-5 w-56 rounded-full" />
          </div>

          <div className="space-y-3">
            <div className="flex gap-3">
              <Skeleton className="bg-muted h-4 w-4 rounded-full" />
              <Skeleton className="bg-muted h-4 w-1/2 rounded-full" />
            </div>
            <div className="flex gap-3">
              <Skeleton className="bg-muted h-4 w-4 rounded-full" />
              <Skeleton className="bg-muted h-4 w-full rounded-full" />
            </div>
            <div className="flex gap-3">
              <Skeleton className="bg-muted h-4 w-4 rounded-full" />
              <Skeleton className="bg-muted h-4 w-1/3 rounded-full" />
            </div>
            <div className="flex gap-3">
              <Skeleton className="bg-muted h-4 w-4 rounded-full" />
              <Skeleton className="bg-muted h-4 w-1/2 rounded-full" />
            </div>
            <div className="flex gap-3">
              <Skeleton className="bg-muted h-4 w-4 rounded-full" />
              <Skeleton className="bg-muted h-4 w-full rounded-full" />
            </div>
            <div className="flex gap-3">
              <Skeleton className="bg-muted h-4 w-4 rounded-full" />
              <Skeleton className="bg-muted h-4 w-1/3 rounded-full" />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-9">
          <Skeleton className="bg-muted h-[400px] w-[400px] rounded-2xl" />
          <Skeleton className="bg-muted h-[115px] w-[192px] rounded-2xl" />
          <Skeleton className="bg-muted h-[57px] w-[260px] rounded-2xl" />
        </div>
      </div>

      <div className="mt-10 h-[400px] w-full">
        <Skeleton className="bg-muted h-full w-full" />
      </div>
    </section>
  );
}
