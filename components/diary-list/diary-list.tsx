import React from "react";

import { DiaryItem } from "../diary-item/diary-item";
import { DiaryItemType } from "../../types/diaryItem";
import { format, compareAsc } from "date-fns";

type Props = {
  items: DiaryItemType[];
};

export const DiaryList = ({ items }: Props): JSX.Element => {
  return (
    <>
      <div className="diary-list grid">
        {items.length &&
          items.map((item, index) => {
            return (
              <React.Fragment key={index}>
                {item.date && (
                  <h2>{format(new Date(item.date), "dd-MM-yyyy")}</h2>
                )}
                <DiaryItem
                  text={item.text}
                  textArea={item.textArea}
                  image={item.image}
                  video={item.video}
                  audio={item.audio}
                />
              </React.Fragment>
            );
          })}
      </div>
      <style jsx>{`
        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
};

export default DiaryList;
