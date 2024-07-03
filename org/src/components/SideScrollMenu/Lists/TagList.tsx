import Tag from "./Tag";
import { TagListInter } from "@//constants/TagListConst";
import { tagList } from "@//constants/TagListConst";

const TagList = () => {
  return (
    <>
        {
        tagList.map((item) =>
            <Tag key={item.id} item={item}></Tag>
        )}
    </>
  );
};

export default TagList;