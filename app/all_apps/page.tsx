import UserApps from "@/components/UserApplications";
import { getApplications } from "@/lib/actions";

type PageProps = {
  searchParams: {
    cat: string;
  };
};

export default async function AllAppsPage({ searchParams }: PageProps) {
  const { cat } = searchParams;

  const { applications } = await getApplications({
    filter: (node) => Boolean(node.isEditorsPick),
  });

  const filteredApps = applications.filter((node) =>
    Boolean(
      node.category
        .map((category) => category.toLocaleLowerCase())
        .includes(cat)
    )
  );

  if (!cat) {
    return (
      <div>
        <UserApps type="short" applications={applications} />
      </div>
    );
  }

  return (
    <div>
      <UserApps category={cat} type="short" applications={filteredApps} />
    </div>
  );
}
