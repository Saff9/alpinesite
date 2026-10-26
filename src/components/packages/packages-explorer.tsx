"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { packagesData } from "@/data/packages";

type FilterTab = "all" | "ski-packages" | "summer-packages" | "trekking";

const tabs: { id: FilterTab; label: string }[] = [
  { id: "all", label: "All Packages" },
  { id: "ski-packages", label: "Ski Packages" },
  { id: "summer-packages", label: "Summer Packages" },
  { id: "trekking", label: "Trekking" },
];

export function PackagesExplorer() {
  const [activeTab, setActiveTab] = useState<FilterTab>("all");

  const filteredPackages =
    activeTab === "all"
      ? packagesData
      : packagesData.filter((item) => item.category === activeTab);

  return (
    <div className="space-y-10">
      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 border-b border-neutral-200 pb-5">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const count =
            tab.id === "all"
              ? packagesData.length
              : packagesData.filter((p) => p.category === tab.id).length;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`font-heading text-xs uppercase tracking-wider font-bold px-4 py-2.5 rounded-full transition-all duration-200 flex items-center gap-2 ${
                isActive
                  ? "bg-brand text-white shadow-md shadow-brand/20"
                  : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 hover:text-neutral-900"
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  isActive ? "bg-white/20 text-white" : "bg-neutral-200 text-neutral-700"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Clean Package Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredPackages.map((pkg) => (
          <Link
            key={pkg.slug}
            href={`/packages/${pkg.slug}`}
            className="group flex flex-col rounded-2xl border border-neutral-200 bg-white p-4 sm:p-5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* Clean Image Container without overlaid badges */}
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-neutral-100">
              <Image
                src={pkg.image}
                alt={pkg.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Clean Title, Price Tag and Action */}
            <div className="flex flex-col flex-1 justify-between pt-4 pb-1 gap-2.5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-heading text-base sm:text-lg font-bold text-neutral-900 group-hover:text-brand transition-colors leading-snug line-clamp-2">
                  {pkg.title}
                </h3>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 transition-all duration-200 group-hover:bg-brand group-hover:text-white mt-0.5">
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>

              {pkg.price && (
                <div>
                  <span className="inline-flex items-center text-xs font-heading font-bold text-brand bg-brand/10 border border-brand/20 px-2.5 py-1 rounded-full">
                    {pkg.price}
                  </span>
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
