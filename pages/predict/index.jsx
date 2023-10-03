import LandingLayout from "@/components/Layout/LandingLayout";
import PredictPublicData from "@/components/Predict/PredictPublicData"

const Predict = () => {
  return (
    <div><PredictPublicData/></div>
  )
}

export default Predict

Predict.getLayout = function getLayout(page) {
    return <LandingLayout>{page}</LandingLayout>;
  };