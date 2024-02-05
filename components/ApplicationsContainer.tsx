import React, { FC } from "react";
import AppCard from "./AppCard";
import { cn } from "@/lib/utils";
import Link from "next/link";

type ApplicationsContainerProps = {
  applications: IApplication[];
  header?: string;
  className?: string;
  type?: "short" | "card";
};

const ApplicationsContainer: FC<ApplicationsContainerProps> = ({
  header,
  applications,
  className,
  type = "card",
}) => {
  const categories = applications.map((app) =>
    app.category.map((cat) => cat.trim().toLowerCase())
  );

  const last3Apps = applications.slice(0, 3);

  return (
    <section
      className={cn(
        className,
        "pb-2 mx-auto w-full lg:max-w-screen-xl space-y-20"
      )}
    >
      {header && type === "card" ? (
        <div className="flex justify-between items-center h-fit">
          <h2
            className={`text-3xl font-semibold text-transparent bg-gradient-to-br bg-clip-text from-primary to-slate-500 dark:from-white dark:to-slate-400`}
          >
            {header}
          </h2>
          <Link
            className="text-blue-500 hover:text-blue-400 duration-150"
            href={`/all_apps`}
          >
            View All
          </Link>
        </div>
      ) : (
        <div className="flex justify-between items-center h-fit">
          <h3 className="text-2xl capitalize font-semibold text-transparent bg-gradient-to-br bg-clip-text from-primary to-slate-500 dark:from-white dark:to-slate-400">
            {categories[0][0]}
          </h3>
          <Link
            className="text-blue-500 hover:text-blue-400 duration-150"
            href={`/all_apps?cat=${categories[0][0]}`}
          >
            View All
          </Link>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-7">
        {last3Apps?.map((data) => (
          <AppCard type={type} key={data.id} application={data} />
        ))}
      </div>
      {type === "short" && (
        <div className="w-ful bg-black bg-opacity-20 dark:bg-opacity-20 dark:bg-white h-[0.1px] mx-auto">
          &nbsp;
        </div>
      )}
    </section>
  );
};

export default ApplicationsContainer;
