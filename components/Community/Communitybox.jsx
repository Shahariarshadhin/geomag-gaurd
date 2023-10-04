import { TextareaAutosize } from "@mui/base/TextareaAutosize";

const CommunityBox = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center  text-white">
        <div className=" px-20 py-10 ">
          <h1 className="text-3xl font-semibold ">Chat Box</h1>

          <div className="my-4">
            <div className="bg-white px-2 py-2 text-black my-4 rounded-lg">
              <li>What is Space Weather?</li>
            </div>
            <div>
              <TextareaAutosize
                className="w-[430px]  text-sm font-normal font-sans leading-5 p-3 rounded-lg    border border-solid border-slate-300 g-white  text-slate-900"
                placeholder="Enter Your Answer"
              />
            </div>
            <div className="bg-white px-2 py-2 text-black my-4 rounded-lg">
              <li>Is there any chance for Geomagnetic Storm in this year?</li>
            </div>
            <div>
              <TextareaAutosize
                className="w-[430px]  text-sm font-normal font-sans leading-5 p-3 rounded-lg   border border-solid border-slate-300 g-white  text-slate-900"
                placeholder="Enter Your Answer"
              />
            </div>
          </div>

          <div>
            <h1 className="text-2xl font-semibold ">Ask Your Question</h1>
            <h1 className="my-2 font-semibold">Enter Your Name</h1>
            <TextareaAutosize
              className="w-[430px]  text-sm font-normal font-sans leading-5 p-3 rounded-lg   border border-solid border-slate-300 g-white  text-slate-900"
              placeholder="name"
            />
          </div>

          <div>
            <h1 className="my-2 font-semibold">Leave Your Comments Here</h1>
            <TextareaAutosize
              className="w-[430px]  text-sm font-normal font-sans leading-5 p-3 rounded-lg   border border-solid border-slate-300 g-white  text-slate-900"
              placeholder="Empty"
            />
          </div>
          <div className="mt-2 flex justify-end">
            <button className="bg-teal-600 rounded-lg px-8 py-1 text-xl font-semibold">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityBox;
