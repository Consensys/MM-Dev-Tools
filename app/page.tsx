import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import { getApplications } from "@/lib/actions";
import ApplicationsContainer from "@/components/ApplicationsContainer";
import { cn } from "@/lib/utils";
import { DEFAULT_FETCH_LIMIT } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"] });

type PageProps = {
  searchParams: {
    page?: string;
    limit?: string;
  };
};

const Home = async ({
  searchParams: { page: pageStr, limit: limitStr },
}: PageProps) => {
  const page = pageStr ? parseInt(pageStr) : 1;
  const limit = limitStr ? parseInt(limitStr) : DEFAULT_FETCH_LIMIT;

  const { total } = await getApplications({
    page,
    limit,
  });

  const { applications: editorPickedApplications } = await getApplications({
    filter: (node) => Boolean(node.isEditorsPick),
  });

  const marketplacesApps = editorPickedApplications.filter((node) =>
    Boolean(
      node.category
        .map((category) => category.toLocaleLowerCase())
        .includes("marketplace")
    )
  );

  const blockchainApps = editorPickedApplications.filter((node) =>
    Boolean(
      node.category
        .map((category) => category.toLocaleLowerCase())
        .includes("blockchain")
    )
  );

  const nftApps = editorPickedApplications.filter((node) =>
    Boolean(
      node.category
        .map((category) => category.toLocaleLowerCase())
        .includes("nft")
    )
  );

  // const isAllFetched = applications.length === total;

  return (
    <div className={cn(inter.className, "pb-10")}>
      {/* @ts-expect-error Server Component */}
      <Hero total={total} />
      
      <section className="grid grid-cols-1 w-full gap-20 md:px-5 lg:max-w-screen-2xl">
        {editorPickedApplications.length > 0 ? (
          <ApplicationsContainer
            header="Most Popular Tools"
            applications={editorPickedApplications}
            className="mt-24"
          />
        ) : null}

        {marketplacesApps.length > 0 ? (
          <ApplicationsContainer
            header="Marketplaces"
            applications={marketplacesApps}
            type="short"
          />
        ) : null}
    
        {blockchainApps.length > 0 ? (
          <ApplicationsContainer
            header="Blockchain"
            applications={blockchainApps}
            type="short"
          />
        ) : null}

        {nftApps.length > 0 ? (
          <ApplicationsContainer
            header="NFT tools"
            applications={nftApps}
            type="short"
          />
        ) : null}

        {/* <ApplicationsContainer
        header="All Available Tools"
        applications={applications}
        className="mt-24"
      />
      {!isAllFetched ? <Pagination currentPage={page} limit={limit} /> : null} */}
      </section>
    </div>
  );
};

export default Home;
