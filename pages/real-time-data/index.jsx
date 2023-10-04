import LandingLayout from "@/components/Layout/LandingLayout";
import PublicRealTimeData from "@/components/RealTimeData/PublicRealTimeData";

const RealTimeData = () => {
  return <div><PublicRealTimeData/></div>;
};

export default RealTimeData;

RealTimeData.getLayout = function getLayout(page) {
    return <LandingLayout>{page}</LandingLayout>;
  };
