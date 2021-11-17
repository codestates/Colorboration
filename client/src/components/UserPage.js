import React from "react";
import "../styles/App.css";
import Palette from "./Palette";

function UserPage() {
  const arr = Array.from({ length: 100 }, () => 0);
  const rankingArr = Array.from({ length: 3 }, () => 0);
  return (
    <>
      {/* Body*/}
      <div className="middle">
        <section className="profile">
          <img
            className="userphoto"
            width="15%"
            height="15%"
            src="https://pbs.twimg.com/profile_images/1066362123020722176/Xk24Wksm_400x400.jpg"
            alt="프로필사진"
          />

          <div className="username">name</div>
        </section>

        <div className="feed global">
          {arr.map((v) => {
            return (
              <div className="item">
                <Palette />
                <div className="flex">
                  <div className="action flex">
                    <div
                      className="button like"
                      onClick='like("2c272e753188e599349ae66e")'
                    >
                      <img
                        width="20px"
                        height="20px"
                        className="icon"
                        src="data:image/jpeg;base64,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"
                        alt=""
                      ></img>
                      <span>53</span>
                    </div>
                  </div>
                  <span className="date">2days</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default UserPage;
