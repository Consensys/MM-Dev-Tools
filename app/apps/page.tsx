import Button from "../../components/Button";
import AddIcon from "../../components/icons/AddIcon";
import MyAppsSearchBar from "../../components/MyAppsSearchBar";
import UserApps from "../../components/UserApplications";
import { getApplications } from "../../lib/applications";

  const applications = await getApplications(
    (applications) => applications.user === user
  );

  return (
    <div>
      <div className="flex items-center gap-4 mt-10 justify-center lg:justify-start">
        <MyAppsSearchBar />
        <Button className="rounded-full bg-gradient-to-br from-primary to-slate-500 px-8 py-[0.60rem]">
          <AddIcon /> <span className="hidden lg:block">New Application</span>
        </Button>
      </div>
      <UserApps allApplications={applications} />
    </div>
  );
};

export default MyApplications;