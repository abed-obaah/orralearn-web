import ReactPlayer from 'react-player'
const DashVidCard = () => {
    return (
      <div
        className={
          "w-full flex flex-col rounded-[20px] p-4 bg-white font-openSans"
        }
      >
        <div className={"w-full relative"}>
          <ReactPlayer
            url="https://youtu.be/NuFgMvk3sbg?si=USVBR5R3KXXjtk4S"
            width={"100%"}
            height={"200px"}
            style={{ borderRadius: "20px" }}
          />
        </div>
        <div className={"flex flex-col gap-y-1 mt-2"}>
          <h1 className={"font-bold text-base"}>Watch Tutorials</h1>
          <p className={"text-sm"}>Learn the basics</p>
        </div>
      </div>
    );
};

export default DashVidCard;