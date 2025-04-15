import { getRecordings } from "@/lib/helpers/getRecordings";
import { BASE_URL } from "@/lib/utils/constants";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${BASE_URL}/register`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/login`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
  ];

  const recordings = await getRecordings();

  const recordingsRoutes =
    recordings?.map((recording) => ({
      url: `${BASE_URL}/recordings/${recording._id}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })) || [];

  return [...staticRoutes, ...recordingsRoutes];
}
