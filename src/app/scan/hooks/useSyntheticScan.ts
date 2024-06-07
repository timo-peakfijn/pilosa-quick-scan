import { useState } from "react";
import { useQuery } from "react-query";

export type AssetResult = {
  count: number;
  totalBytes: number;
  totalBytesFormatted: string;
  estimatedCo2: number;
};

export type QuickScanResult = {
  total: {
    pageTitle: string | null;
    domain: null;
    hosting: {
      domain: string;
      green: boolean;
    }[];
    numberOfRequests: number;
    time: {
      domReady: number;
      load: number;
      networkIdle: number;
    };
    totalBytes: number;
    totalBytesFormatted: string;
    estimatedCo2: number;
    cdnPercentage: number;
    compressedPercentage: number;
    cachePercentage: number;
    fileTypes: Record<string, AssetResult>;
  };
  domains: [];
};

export const useSyntheticScan = (url?: string | null) => {
  return useQuery<QuickScanResult>({
    queryKey: ["scan", url],
    queryFn: async () => {
      const res = await fetch(`https://app.pilosa.io/v1/synthetic-scan`, {
        // const res = await fetch(`http://localhost:4000/v1/synthetic-scan`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url,
        }),
      });
      if (!res.ok) {
        throw new Error("Failed to scan URL. Please try another URL.");
      }
      return await res.json();
    },
    enabled: !!url,
    retry: false,
    refetchInterval: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
};
