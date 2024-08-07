import {
  BatteryCharging,
  Bike,
  BatteryWarning,
  Disc2,
  Laptop,
  Laugh,
} from "lucide-react";

import Loading from "@/components/loading";
import { IStatus, IStatusData, IStatusComponentProps } from "@/types";

const statuses: Record<string, IStatus> = {
  weekend: {
    color: "text-yellow-500",
    text: "Enjoying the weekend.",
    icon: (
      <Laugh
        className="mr-1"
        color="#eab308"
        height={ 24 }
        width={ 24 }
      />
    ),
  },
  sleep: {
    color: "gray-500",
    text: "Sleeping.",
    icon: (
      <BatteryWarning
        className="mr-1"
        color="#6b7280"
        height={ 24 }
        width={ 24 }
      />
    ),
  },
  lunch: {
    color: "text-yellow-500",
    text: "Having lunch.",
    icon: (
      <BatteryCharging
        className="mr-1"
        color="#eab308"
        height={ 24 }
        width={ 24 }
      />
    ),
  },
  work: {
    color: "text-red-700",
    text: "At work.",
    icon: (
      <Laptop
        className="mr-1"
        color="#b91c1c"
        height={ 24 }
        width={ 24 }
      />
    ),
  },
  free: {
    color: "text-yellow-500",
    text: "Enjoying the life.",
    icon: (
      <Bike
        className="mr-1"
        color="#eab308"
        height={ 24 }
        width={ 24 }
      />
    ),
  },
  listening: {
    color: "text-violet-600",
    text: "Listening to music.",
    icon: (
      <Disc2
        className="mr-1"
        color="#7c3aed"
        height={ 24 }
        width={ 24 }
      />
    ),
  },
};

export default async function Status({ dataFromAPI }: IStatusComponentProps) {
  const statusContent: IStatusData = {
    time: dataFromAPI?.time,
    status: statuses[`${dataFromAPI?.status}`],
  };

  return statusContent.status ? (
    <span
      className="status
        block
        center-x
        flex
        items-center
        mt-2
        text-gray-600
        w-full
        md:ml-4"
    >
      <span
        className={ `flex
          items-center
          mr-1
          ${statusContent.status.color}` }
      >
        { statusContent.status.icon }
        <span
          className="time
            font-bold
            mr-1"
        >
          { statusContent.time }
        </span>
        <span
          className="utc-time
            text-xs"
        >
          (UTC -03:00) &#8213;
        </span>
      </span>

      { statusContent.status.text }
    </span>
  ) : (
    <Loading />
  );
}
