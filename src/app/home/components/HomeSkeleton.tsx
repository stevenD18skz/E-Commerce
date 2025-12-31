"use client";

export default function HomeSkeleton() {
    return (
        <div className="min-h-screen bg-neutral-50 animate-pulse">
            {/* Hero Section Skeleton */}
            <div className="relative h-[70vh] rounded-b-[2rem] overflow-hidden bg-neutral-200">
                <div className="absolute bottom-[10%] left-[5%] md:left-[8%] max-w-2xl w-full p-4">
                    <div className="h-12 sm:h-20 bg-neutral-300 rounded-lg w-3/4 mb-4"></div>
                    <div className="h-4 bg-neutral-300 rounded w-1/2 mb-8"></div>
                    <div className="h-12 w-40 bg-neutral-300 rounded-full"></div>
                </div>
            </div>

            {/* Main Content */}
            <main className="max-w-[140rem] mx-auto px-16 space-y-[var(--spacing-xxl)] py-[var(--spacing-xxl)]">

                {/* Categories Grid Skeleton */}
                <section>
                    <div className="flex flex-col md:flex-row justify-between items-end mb-[var(--spacing-xs)] gap-4">
                        <div className="space-y-2 w-full">
                            <div className="h-8 bg-neutral-200 rounded w-64 mb-2"></div>
                            <div className="h-6 bg-neutral-200 rounded w-96"></div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                        {[...Array(6)].map((_, i) => (
                            <div
                                key={i}
                                className="h-[440px] rounded-2xl bg-neutral-200 relative overflow-hidden"
                            >
                                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                    <div className="h-8 bg-neutral-300 rounded w-1/2 mb-3"></div>
                                    <div className="h-4 bg-neutral-300 rounded w-3/4"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Featured Offers Section Skeleton */}
                <section>
                    <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
                        <div className="space-y-2 w-full">
                            <div className="h-8 bg-neutral-200 rounded w-48 mb-2"></div>
                            <div className="h-6 bg-neutral-200 rounded w-80"></div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {[...Array(3)].map((_, i) => (
                            <div
                                key={i}
                                className="flex flex-col sm:flex-row bg-white rounded-2xl overflow-hidden border border-neutral-100 h-[200px]"
                            >
                                <div className="w-full sm:w-[200px] bg-neutral-200 shrink-0"></div>
                                <div className="p-6 flex flex-col justify-between flex-grow w-full">
                                    <div className="space-y-3">
                                        <div className="flex justify-between">
                                            <div className="h-6 bg-neutral-200 rounded w-32"></div>
                                            <div className="h-6 bg-neutral-200 rounded w-16"></div>
                                        </div>
                                        <div className="h-4 bg-neutral-200 rounded w-full"></div>
                                        <div className="h-4 bg-neutral-200 rounded w-2/3"></div>
                                    </div>
                                    <div className="h-8 bg-neutral-200 rounded-full w-24 mt-4"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Recommendations Section Skeleton */}
                <section>
                    <div className="space-y-2 w-full mb-8">
                        <div className="h-8 bg-neutral-200 rounded w-64 mb-2"></div>
                        <div className="h-6 bg-neutral-200 rounded w-96"></div>
                    </div>
                    <div className="flex gap-6 overflow-hidden">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="min-w-[280px] h-[350px] rounded-xl bg-neutral-200"></div>
                        ))}
                    </div>
                </section>

            </main>
        </div>
    );
}
