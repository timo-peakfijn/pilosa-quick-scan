import { AssetsResult } from "@/app/scan/components/AssetsResult";
import { QuickScanResult } from "@/app/scan/hooks/useSyntheticScan";
import { CarbonResult } from "@/app/scan/components/ CarbonResult";

type ResultProps = {
  result: QuickScanResult;
};

export const Result = ({ result }: ResultProps) => {
  console.log(result);
  return (
    <div className="space-y-6 pt-4">
      <div>
        <h1 className="text-4xl dark:text-white mb-1">
          {result.total.pageTitle || "Result"}
        </h1>

        {result.total.hosting[0].green ? (
          <span className="py-[5px] px-2.5 inline-flex items-center gap-x-1 text-xs rounded-full bg-teal-100 text-teal-800 dark:bg-teal-500/10 dark:text-teal-500">
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
              className="size-2.5 inline-block"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
            Hosted on sustainable infrastructure
          </span>
        ) : (
          <span className="py-[5px] px-2.5 inline-flex items-center gap-x-1 text-xs rounded-full bg-red-100 text-red-800 dark:bg-red-500/10 dark:text-red-500">
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
              className="size-2.5 inline-block"
            >
              <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
              <path d="m15 9-6 6" />
              <path d="m9 9 6 6" />
            </svg>
            Not hosted on sustainable infrastructure
          </span>
        )}
      </div>

      <hr className="border-neutral-200 dark:border-neutral-800" />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-5">
        <div className="p-4 sm:p-5 bg-white border border-stone-200 rounded-xl shadow-sm dark:bg-neutral-800 dark:border-neutral-700">
          <div className="sm:flex sm:gap-x-3">
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
              className="sm:order-2 mb-2 sm:mb-0 flex-shrink-0 size-6 text-stone-400 dark:text-neutral-600"
            >
              <circle cx="12" cy="5" r="3" />
              <path d="M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z" />
            </svg>
            <div className="sm:order-1 grow space-y-1">
              <h2 className="sm:mb-3 text-sm text-stone-500 dark:text-neutral-400">
                Total size
              </h2>
              <p className="text-lg md:text-xl font-semibold text-stone-800 dark:text-neutral-200">
                {result.total.totalBytesFormatted}
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-5 bg-white border border-stone-200 rounded-xl shadow-sm dark:bg-neutral-800 dark:border-neutral-700">
          <div className="sm:flex sm:gap-x-3">
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
              className="sm:order-2 mb-2 sm:mb-0 flex-shrink-0 size-6 text-stone-400 dark:text-neutral-600"
            >
              <line x1="22" x2="2" y1="12" y2="12" />
              <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
              <line x1="6" x2="6.01" y1="16" y2="16" />
              <line x1="10" x2="10.01" y1="16" y2="16" />
            </svg>
            <div className="sm:order-1 grow space-y-1">
              <h2 className="sm:mb-3 text-sm text-stone-500 dark:text-neutral-400">
                Cacheable
              </h2>
              <p className="text-lg md:text-xl font-semibold text-stone-800 dark:text-neutral-200">
                {result.total.cachePercentage.toFixed(2)}%
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-5 bg-white border border-stone-200 rounded-xl shadow-sm dark:bg-neutral-800 dark:border-neutral-700">
          <div className="sm:flex sm:gap-x-3">
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
              className="sm:order-2 mb-2 sm:mb-0 flex-shrink-0 size-6 text-stone-400 dark:text-neutral-600"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
              <path d="M2 12h20" />
            </svg>
            <div className="sm:order-1 grow space-y-1">
              <h2 className="sm:mb-3 text-sm text-stone-500 dark:text-neutral-400">
                CDN hits
              </h2>
              <p className="text-lg md:text-xl font-semibold text-stone-800 dark:text-neutral-200">
                {result.total.cdnPercentage.toFixed(2)}%
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-5 bg-white border border-stone-200 rounded-xl shadow-sm dark:bg-neutral-800 dark:border-neutral-700">
          <div className="sm:flex sm:gap-x-3">
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
              className="sm:order-2 mb-2 sm:mb-0 flex-shrink-0 size-6 text-stone-400 dark:text-neutral-600"
            >
              <path d="m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9" />
              <path d="m18 15 4-4" />
              <path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5" />
            </svg>
            <div className="sm:order-1 grow space-y-1">
              <h2 className="sm:mb-3 text-sm text-stone-500 dark:text-neutral-400">
                Compressed
              </h2>
              <p className="text-lg md:text-xl font-semibold text-stone-800 dark:text-neutral-200">
                {result.total.compressedPercentage.toFixed(2)}%
              </p>
            </div>
          </div>
        </div>
      </div>

      <CarbonResult result={result.total} />
      <AssetsResult result={result.total} />
    </div>
  );
};
