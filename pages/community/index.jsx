import CommunityBox from "@/components/Community/Communitybox";
import LandingLayout from "@/components/Layout/LandingLayout";

const Community = () => {
  return (
    <div>
      <CommunityBox />
    </div>
  );
};

export default Community;

Community.getLayout = function getLayout(page) {
    return <LandingLayout>{page}</LandingLayout>;
  };
