import LandingLayout from "@/components/Layout/LandingLayout";

const RealTimeData = () => {
  return <div>RealTimeData</div>;
};

export default RealTimeData;

RealTimeData.getLayout = function getLayout(page) {
    return <LandingLayout>{page}</LandingLayout>;
  };
