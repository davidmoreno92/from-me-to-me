import Player from "@components/fields/video/videoPlayer";
import { DiaryItemType } from "types/diaryItem";
import React from "react";

export const DiaryItem = ({
  text,
  textArea,
  image,
  video,
  audio,
  dateCreated,
}: DiaryItemType): JSX.Element => {
  return (
    <>
      <div className="card">
        {text && (
          <h3 className="diary-item-title">
            {text} {dateCreated && dateCreated}
          </h3>
        )}
        {textArea && <p>{textArea}</p>}
        {image && <img src={image} className="img-responsive" />}
        {video && <Player url={"https://www.w3schools.com/html/mov_bbb.mp4"} />}
        {audio && <Player url={"https://www.w3schools.com/html/horse.ogg"} />}
      </div>
      <style jsx>{`
        img {
          max-width: 100%;
          width: 100%;
        }
        /* .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card .diary-item-title {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
          font-style: italic;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        } */
      `}</style>
    </>
  );
};
