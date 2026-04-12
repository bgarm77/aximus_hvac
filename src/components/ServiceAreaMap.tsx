import Link from "next/link";
import { getActiveServiceAreas, type ServiceArea } from "@/config/service-areas";

function groupByCounty(areas: ServiceArea[]): Map<string, ServiceArea[]> {
  const map = new Map<string, ServiceArea[]>();
  for (const area of areas) {
    const list = map.get(area.county) ?? [];
    list.push(area);
    map.set(area.county, list);
  }
  return map;
}

export default function ServiceAreaMap() {
  const areas = getActiveServiceAreas();
  const grouped = groupByCounty(areas);

  if (areas.length === 0) {
    return null;
  }

  return (
    <section className="py-16 sm:py-20" aria-labelledby="service-areas-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 id="service-areas-heading" className="text-3xl sm:text-4xl font-bold text-brand-navy">
            Service Areas
          </h2>
          <p className="mt-3 text-text-secondary">
            Same-week scheduling and 4-hour emergency response across these California cities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from(grouped.entries()).map(([county, cities]) => (
            <div
              key={county}
              className="rounded-2xl bg-white border border-card-border p-6"
            >
              <h3 className="text-lg font-semibold text-brand-navy">{county} County</h3>
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                {cities.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/service-areas/${c.slug}`}
                      className="inline-flex items-center gap-1 text-sm text-brand-blue hover:text-brand-navy hover:underline"
                    >
                      <span aria-hidden>→</span>
                      {c.city}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
