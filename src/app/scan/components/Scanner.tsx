"use client";

import { useEffect, useState } from "react";
import { Result } from "@/app/scan/components/Result";
import { isValidUrl } from "@/app/scan/util/isValidUrl";
import {
  QuickScanResult,
  useSyntheticScan,
} from "@/app/scan/hooks/useSyntheticScan";
import { useRouter, useSearchParams } from "next/navigation";

export const Scanner = () => {
  const params = useSearchParams();
  const { push } = useRouter();

  const [url, setUrl] = useState<string | null>(() => params.get("url"));
  // @ts-ignore
  const { isLoading, data, error } = useSyntheticScan(url);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const url = formData.get("url") as string;

    if (!isValidUrl(url)) {
      console.log("Please enter a valid URL");

      return;
    }

    setUrl(url);
  };

  useEffect(() => {
    if (url && !error) {
      push("?url=" + url);
      return;
    }

    push("/");
  }, [push, url, error]);

  console.log({ error });

  return (
    <>
      {!isLoading && !data && (
        <div className="max-w-[85rem] h-full mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
          <div className="text-center">
            <div className="mt-7 sm:mt-12 mx-auto max-w-xl relative">
              <form onSubmit={handleSubmit}>
                <div className="relative z-10 flex space-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-gray-900/20">
                  <div className="flex-[1_0_0%] ">
                    <label
                      htmlFor="url"
                      className="block text-sm text-gray-700 font-medium dark:text-white"
                    >
                      <span className="sr-only">Enter a URL to scan</span>
                    </label>
                    <input
                      type="url"
                      name="url"
                      autoFocus
                      id="url"
                      className="py-2.5 px-4 block w-full border-transparent rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder="Enter a URL to scan"
                    />
                  </div>

                  <div className="flex-[0_0_auto] ">
                    <button
                      className="size-[46px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 disabled:pointer-events-none"
                      type="submit"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-scan-line"
                      >
                        <path d="M3 7V5a2 2 0 0 1 2-2h2" />
                        <path d="M17 3h2a2 2 0 0 1 2 2v2" />
                        <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
                        <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
                        <path d="M7 12h10" />
                      </svg>
                    </button>
                  </div>
                </div>
              </form>
              {error instanceof Error && (
                <>
                  <div
                    className="mt-2 bg-red-100 border border-red-200 text-sm text-red-800 rounded-lg p-4 dark:bg-red-800/10 dark:border-red-900 dark:text-red-500"
                    role="alert"
                  >
                    <span className="font-bold">Oops!</span> {error.message}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {isLoading && (
        <div className="max-w-[85rem] h-full mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
          <div className="flex flex-col items-center">
            <div
              className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-green-500 rounded-full dark:text-green-600"
              role="status"
              aria-label="loading"
            >
              <span className="sr-only">Loading...</span>
            </div>
            <p className="text-neutral-500 pt-2">Scanning {url}</p>
          </div>
        </div>
      )}

      {data && (
        <>
          <button
            type="reset"
            onClick={() => setUrl(null)}
            className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg text-gray-800 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:text-white/70"
          >
            ◂ Scan another site
          </button>
          <Result result={data as QuickScanResult} />
        </>
      )}
    </>
  );
};
