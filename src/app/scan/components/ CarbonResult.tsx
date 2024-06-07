import { QuickScanResult } from "@/app/scan/hooks/useSyntheticScan";

type CarbonResultProps = {
  result: QuickScanResult["total"];
};

const carbonEmissionToScore = (co2: number): string => {
  if (co2 < 0.095) return "A+";
  if (co2 < 0.186) return "A";
  if (co2 < 0.341) return "B";
  if (co2 < 0.493) return "C";
  if (co2 < 0.656) return "D";
  if (co2 < 0.846) return "E";
  return "F";
};

const scoreToPercentage = (score: string): number => {
  switch (score) {
    case "A+":
      return 100;
    case "A":
      return 80;
    case "B":
      return 60;
    case "C":
      return 40;
    case "D":
      return 20;
    case "E":
      return 10;
    case "F":
      return 0;
    default:
      return 0;
  }
};

const percentageToColor = (percentage: number): string => {
  if (percentage >= 80) return "bg-green-500";
  if (percentage >= 60) return "bg-yellow-500";
  if (percentage >= 40) return "bg-yellow-500";
  if (percentage >= 20) return "bg-red-500";
  return "bg-red-500";
};

export const CarbonResult = ({ result }: CarbonResultProps) => {
  const score = carbonEmissionToScore(result.estimatedCo2);
  const percentage = scoreToPercentage(score);
  const color = percentageToColor(percentage);

  return (
    <div className="p-5 space-y-3 flex flex-col bg-white border border-gray-200 rounded-xl shadow-sm xl:shadow-none dark:bg-neutral-800 dark:border-neutral-700">
      <div className="flex justify-between items-center">
        <h1 className="inline-block text-4xl font-semibold text-gray-800 dark:text-neutral-200">
          Score: {score}
        </h1>
      </div>

      <div className="my-4">
        <div className="mb-1 flex justify-between items-center">
          <div className="inline-flex items-center w-1/4">
            <span className="hidden sm:inline-block flex-shrink-0 size-2.5 bg-red-500 rounded-sm me-1.5"></span>
            <span className="text-sm text-gray-800 dark:text-neutral-200">
              Bad
            </span>
          </div>
          <div className="inline-flex items-center w-1/4">
            <span className="hidden sm:inline-block flex-shrink-0 size-2.5 bg-orange-500 rounded-sm me-1.5"></span>
            <span className="text-sm text-gray-800 dark:text-neutral-200">
              Average
            </span>
          </div>
          <div className="inline-flex items-center w-1/4">
            <span className="hidden sm:inline-block flex-shrink-0 size-2.5 bg-yellow-200 rounded-sm me-1.5"></span>
            <span className="text-sm text-gray-800 dark:text-neutral-200">
              Good
            </span>
          </div>
          <div className="inline-flex items-center w-1/4">
            <span className="hidden sm:inline-block flex-shrink-0 size-2.5 bg-teal-400 rounded-sm me-1.5"></span>
            <span className="text-sm text-gray-800 dark:text-neutral-200">
              Excellent
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="flex w-full h-2.5 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700">
            <div
              className="flex flex-col justify-center overflow-hidden bg-gradient-to-r from-red-500 via-yellow-400 to-teal-400 text-xs text-white text-center whitespace-nowrap w-full"
              role="progressbar"
              aria-valuenow={percentage}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
          </div>
          <div
            className={`absolute top-1/2 w-2 h-5 ${color} border-2 border-white rounded-full transform -translate-y-1/2 dark:border-neutral-800`}
            style={{ left: `${percentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};
