import React, { useState } from "react";

import { DiaryItem } from "../diary-item/diary-item";
import { DiaryItemType } from "../../types/diaryItem";
import { format } from "date-fns";
import HTMLFlipBook from "react-pageflip";

type Props = {
  items: DiaryItemType[];
  count: number;
};

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="page page-cover" ref={ref} data-density="hard">
      <div className="page-content">
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});

const Page = React.forwardRef((props, ref) => {
  return (
    <>
      <div className="page" ref={ref}>
        <div className="page-content">
          <h2 className="page-header">Page header - {props.number}</h2>
          <div className="page-image"></div>
          <div className="page-text">{props.children}</div>
          <div className="page-footer">{props.number + 1}</div>
        </div>
      </div>
      <style jsx>{`
        .page {
          padding: 20px;
          background-color: #fdfaf7;
          color: #785e3a;
          border: 1px solid #c2b5a3;
          overflow: hidden;
        }
        .page.--right {
          border-left: 0;
          box-shadow: inset 7px 0 30px -7px rgb(0 0 0 / 40%);
        }

        .page.--left {
          border-right: 0;
          box-shadow: inset -7px 0 30px -7px rgb(0 0 0 / 40%);
        }
      `}</style>
    </>
  );
});

export const DiaryList = ({ items, count }: Props): JSX.Element => {
  const [page, setPage] = useState(0);
  const [totalPages] = useState(count);

  const nextButtonClick = () => {
    console.log("NextbuttonClicked");
  };

  const prevButtonClick = () => {
    console.log("PrevButtonClicked");
  };

  const onPage = (e) => {
    setPage(e.data);
  };

  return (
    <>
      <div className="diary-list grid">
        <HTMLFlipBook
          width={550}
          height={733}
          size="stretch"
          minWidth={315}
          maxWidth={1000}
          minHeight={400}
          maxHeight={1533}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          onFlip={onPage}
          className="demo-book"
          /*           ref={(el) => (this.flipBook = el)} */
        >
          <PageCover>My diary</PageCover>
          {items.length &&
            items.map((item, index) => {
              return (
                <Page number={index} key={index}>
                  {item.dateCreated && (
                    <h2>{format(new Date(item.dateCreated), "dd-MM-yyyy")}</h2>
                  )}
                  <DiaryItem
                    text={item.text}
                    textArea={item.textArea}
                    image={item.image}
                    video={item.video}
                    audio={item.audio}
                  />
                </Page>
              );
            })}
          <PageCover>THE END</PageCover>
        </HTMLFlipBook>
        <button type="button" onClick={prevButtonClick}>
          Previous page
        </button>
        [<span>{page}</span> of
        <span>{count}</span>]
        <button type="button" onClick={nextButtonClick}>
          Next page
        </button>
      </div>
      <style jsx>{`
        /*.grid {
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
        } */
      `}</style>
    </>
  );
};

export default DiaryList;
