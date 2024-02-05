"use client";

import AppCard from "./AppCard";
import MyAppsSearchBar from "./MyAppsSearchBar";
import Button from "./Button";
import AddIcon from "./icons/AddIcon";
import { useState } from "react";
import { useDebounce } from "@/lib/hooks";
import ApplicationForm from "./ApplicationForm";
import { H2, H3 } from "./Text";

type Props = {
  applications: IApplication[];
  type?: "short" | "card";
  category?: string;
};

const UserApps: React.FC<Props> = ({
  applications,
  type = "card",
  category,
}) => {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [filteredApps, setFilteredApps] = useState(applications);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const search = () => {
    const items = query
      ? applications.filter((item) =>
          item.title.toLowerCase().includes(query.toLowerCase())
        )
      : applications;

    setFilteredApps(items);
  };

  useDebounce(search, query, 500);

  return (
    <>
      <div className="flex items-center gap-4 mt-10 justify-center lg:justify-start">
        <MyAppsSearchBar handleSearch={handleSearch} query={query} />
        <Button
          onClick={() => setOpen(true)}
          className="rounded-full bg-gradient-to-br from-primary to-slate-500 px-8 py-[0.60rem]"
        >
          <AddIcon /> <span className="hidden lg:block">New Application</span>
        </Button>
      </div>

      {!filteredApps.length ? (
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-semibold text-gray-700">
            No applications found
          </h2>
          <p className="text-gray-500">
            {applications.length
              ? "Try changing your search query or create a new application."
              : "Create a new application to get started."}
          </p>
        </div>
      ) : null}

      <div className="mt-10">
        {category && filteredApps.length > 0 ? (
          <H2 className="capitalize font-semibold">{category}</H2>
        ) : (
          <H2>All apps</H2>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 mt-10">
          {filteredApps.map((data) => (
            <AppCard type={type} key={data.id} application={data} />
          ))}
        </div>
      </div>

      <ApplicationForm
        modalOpen={open}
        closeModal={() => setOpen(false)}
        isEditMode={false}
      />
    </>
  );
};

export default UserApps;
