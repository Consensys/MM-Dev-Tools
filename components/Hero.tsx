import { getApplications } from "@/lib/actions";
import { SearchBar } from "./SearchBar";
import { H1, Text } from "./Text";

type Props = {
  total: number;
};

const Hero = async ({ total }: Props) => {
  const data = await getApplications({
    limit: total,
  });

  const filteredApps = data.applications.filter((app) => app.isEditorsPick);

  return (
    <section className="mt-20">
      <H1 className="font-semibold text-center">
        Discover Awesome Dev Tools
        <br /> and Web3 templates
      </H1>
      <Text className="mx-auto mt-3 text-opacity-70 dark:text-opacity-70 text-center dark:text-white max-w-2xl text-md">
        Explore our collection of web3 templates and essential tools, curated to
        empower developers in their quest to create outstanding projects.
      </Text>
      <SearchBar applications={filteredApps} />
    </section>
  );
};

export default Hero;
