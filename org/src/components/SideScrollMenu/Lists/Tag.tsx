import tagImg from "@tags/nature.svg"

const Tag = (props: any) => {
  const changeOnSearch = () => {
    props.item.onSearch = !props.item.onSearch;
    console.log(props.item.onSearch);
  }
  return (
    <button className=" flex flex-row w-full items-center mb-[10px]"
      onClick={changeOnSearch}>
        <img src={props.item.image} alt="" className="h-[30px] w-[30px]"/>
        <div className="text-dark-grey text-[16px] mx-[20px] text-clip overflow-hidden ">{props.item.name}</div>
    </button>
  );
};

export default Tag;