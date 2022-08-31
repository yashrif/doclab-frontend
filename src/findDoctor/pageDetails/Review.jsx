import React from "react";
import { faker } from "@faker-js/faker";

const Review = () => {
  const today = new Date();

  return (
    <div
      style={{
        padding: "2.4rem 4.8rem",
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        columnGap: "1.6rem",
      }}
    >
      <img
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
        }}
        src={faker.image.avatar()}
        alt="Profile pic"
      />
      <div>
        <div
          style={{
            display: "flex",
            columnGap: "1.2rem",
            alignItems: "center",
            marginBottom: "1.2rem",
          }}
        >
          <h3 style={{ fontSize: "1.4rem", fontWeight: "500" }}>
            {faker.name.findName()}
          </h3>
          <p
            style={{ fontSize: "1.2rem", color: "#999" }}
          >{`${today.toLocaleDateString()} ${today.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}`}</p>
        </div>
        <p
          style={{
            fontSize: "1.4rem",
            lineHeight: "1.4",
            marginBottom: "1.6rem",
          }}
        >
          {faker.lorem.paragraph(3)}
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "1.2rem",
            color: "#999",
          }}
        >
          <div style={{ display: "flex", columnGap: "2.4rem" }}>
            <p>Replay</p>
            <p>Like</p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              columnGap: ".8rem",
            }}
          >
            <ion-icon
              style={{
                fontSize: "1.4rem",
                "--ionicon-stroke-width": "4.8rem",
              }}
              name="heart-outline"
            ></ion-icon>
            <span>{Math.floor(Math.random() * 100)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
