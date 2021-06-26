import React, { useReducer } from "react";
import "./TagList.css";

const listReducer = (state, action) => {
  switch (action.type) {
    case "REMOVE_ITEM":
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.id),
      };
    default:
      throw new Error();
  }
};

const initialList = [
  {
    id: 1,
    text: "Tag1",
  },
  {
    id: 2,
    text: "Tag2",
  },
  {
    id: 3,
    text: "Tag3",
  },
  {
    id: 4,
    text: "Tag4",
  },
  {
    id: 5,
    text: "Tag5",
  },
];

const TagList = () => {
  const [listData, dispatchListData] = useReducer(listReducer, {
    list: initialList,
    isShowList: true,
  });

  const handleRemove = (id) => {
    dispatchListData({ type: "REMOVE_ITEM", id });
  };

  if (!listData.isShowList) {
    return null;
  }

  return (
    <ul className="tags">
      {listData.list.map((item) => (
        <li key = {item.id} className="tag">
          {item.text}
          <span key = {item.id} className="tagClose" onClick={() => handleRemove(item.id)}>
            x
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TagList;
