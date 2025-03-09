import Heading from "@/app/(main)/_components/heading";

const MainContent = () => {
  return (
    <div className={"overflow-x-hidden max-w-[100vw]"}>
      <Heading />
      <div className="flex flex-col items-center justify-center w-full py-40 bg-[#ffffff]">Main Content Example</div>
    </div>
  );
};

export default MainContent;
