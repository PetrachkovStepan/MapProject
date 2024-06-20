import tagImg from "../../assets/TagImages/nature.svg"

const Tag = () => {
  return (
    <div className=" flex flex-row w-full items-center mb-[10px]">
        <img src={tagImg} className="h-[30px] w-[30px]"></img>
        <div className="text-dark-grey text-[16px] mx-[20px] text-clip overflow-hidden ">Природа</div>
    </div>
  );
};

export default Tag;