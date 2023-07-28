import React from "react";
import Gonderi from "./Gonderi";
import "./Gonderiler.css";

const Gonderiler = (props) => {
  // 🔥 Gönderiler'in ebeveyninin doğru değişkenleri doğru şekilde ilettiğine emin olun!
  const { gonderiyiBegen, gonderiler ,begeniSayisi} = props;

  return (
    <div className="posts-container-wrapper">
      {gonderiler.map((post) => <Gonderi gonderi = {post} gonderiyiBegen = {gonderiyiBegen } begeniSayisi  >

      </Gonderi> )}
      {/* Gönderi'nin çağırılmasında hangi propları kullanmanız gerektiğine dikkat edin! */}
    </div>
  );
};

export default Gonderiler;
