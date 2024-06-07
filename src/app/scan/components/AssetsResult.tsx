import {
  AssetResult,
  QuickScanResult,
} from "@/app/scan/hooks/useSyntheticScan";

type AssetsResultProps = {
  result: QuickScanResult["total"];
};

const colors = [
  "bg-blue-600",
  "bg-violet-500",
  "bg-teal-400",
  "bg-blue-400",
  "bg-neutral-200 dark:bg-neutral-400",
  "bg-red-500",
  "bg-amber-500",
];

export const AssetsResult = ({ result }: AssetsResultProps) => {
  const { fileTypes, totalBytes } = result;

  return (
    <div className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
      <div className="p-5 pb-4 grid grid-cols-2 items-center gap-x-4">
        <div>
          <h2 className="inline-block font-semibold text-gray-800 dark:text-neutral-200">
            Assets
          </h2>
        </div>
      </div>

      <div className="h-full p-5 pt-0">
        <div className="h-full flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            <div className="flex space-x-1 w-full h-2.5 rounded-full overflow-hidden">
              {Object.keys(fileTypes).map((assetName, index) => {
                const asset = fileTypes[assetName];
                const color = colors[index];

                return (
                  <div
                    key={assetName}
                    className={`flex flex-col justify-center overflow-hidden ${color} text-xs text-white text-center whitespace-nowrap`}
                    style={{
                      width: `${(100 / totalBytes) * asset.totalBytes}%`,
                    }}
                    role="progressbar"
                    aria-valuenow={(100 / totalBytes) * asset.totalBytes}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                );
              })}
            </div>

            <ul>
              {Object.keys(fileTypes).map((assetName, index) => {
                const asset = fileTypes[assetName];

                return (
                  <li
                    key={assetName}
                    className="py-2 grid grid-cols-2 justify-between items-center gap-x-4"
                  >
                    <div className="flex items-center">
                      <span
                        className={`flex-shrink-0 size-2.5 inline-block ${colors[index]} rounded-sm me-2.5`}
                      ></span>
                      <span className="text-sm text-gray-800 dark:text-neutral-200">
                        {asset.count} {assetName} (
                        {asset.estimatedCo2.toFixed(3)}g CO2e)
                      </span>
                    </div>
                    <div className="text-end">
                      <span className="text-sm text-gray-500 dark:text-neutral-500">
                        {asset.totalBytesFormatted}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
