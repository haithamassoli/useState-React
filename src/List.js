import React from "react";

const List = ({ pepole }) => {
  return (
    <>
      {pepole.map((e) => {
        const { id, name, image, age } = e;
        return (
          <article key={id} className="person">
            <img src={image} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
