import { FollowersChart } from "./(home-components)/Charts/FollowersChart";
import { FollowingChart } from "./(home-components)/Charts/FollowingChart";
import { EngagementRateChart } from "./(home-components)/Charts/EngagementRateChart";
import Targeting from "./(home-components)/Targeting";
import Settings from "./(home-components)/Settings";
import Listings from "./(home-components)/Listings";
import UserInfo from "./(home-components)/UserInfo";
// import Alert from "./Alert";
import { StatusName } from "./(home-components)/Settings/statusData";

export default function Demo(
  {}:
{
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}
) {
  //   const status = (searchParams.status || StatusName.Analytics) as StatusName;

  return (
    <div className="px-4 py-4 sm:py-6">
      <main className="mx-auto max-w-4xl">
        <UserInfo />

        <Settings status={StatusName.Active} />

        <FollowersChart />

        <div className="h-6"></div>

        <div className="mb-6 grid gap-4 sm:grid-cols-2 sm:gap-6">
          <FollowingChart />
          <EngagementRateChart />
        </div>

        <Targeting />

        <div className="h-6"></div>

        <Listings />

        <div className="my-6 flex flex-col items-end text-tremor-label leading-relaxed text-tremor-content-subtle dark:text-dark-tremor-content-subtle">
          <p>
            Started tracking on <strong>May 13th, 2024.</strong>
          </p>
          <p>
            Last updated <strong>a few seconds ago.</strong>
          </p>
        </div>
      </main>
    </div>
  );
}
