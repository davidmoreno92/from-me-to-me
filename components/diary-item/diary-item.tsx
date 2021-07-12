import React from "react";

type Props = {
  text: string;
  textArea: string;
  image?: string;
  video?: string;
  audio?: string;
};

export const DiaryItem = ({
  text,
  textArea,
  image,
  video,
  audio,
}: Props): JSX.Element => {
  return (
    <>
      <div className="card">
        {text && <h3>{text}</h3>}
        {textArea && (
          <textarea name="text-area" value={textArea}>
            Default value
          </textarea>
        )}
        {image && <img src="image" className="img-responsive" />}
        {video && (
          <video>
            <source
              src={video}
              type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
            />
          </video>
        )}
        {audio && (
          <audio controls>
            <source src="horse.ogg" type="audio/ogg" />
            <source src="horse.mp3" type="audio/mpeg" />
          </audio>
        )}
      </div>
      <style jsx>{`
        .card {
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

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }
      `}</style>
    </>
  );
};
