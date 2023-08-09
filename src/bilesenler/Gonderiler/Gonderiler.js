import React from "react";
import Gonderi from "./Gonderi";
import "./Gonderiler.css";

const Gonderiler = (props) => {
  // 🔥 Gönderiler'in ebeveyninin doğru değişkenleri doğru şekilde ilettiğine emin olun!
  const { gonderiyiBegen, gonderiler,deger} = props;

  return (
    <div className="posts-container-wrapper">
      {gonderiler.filter((post) => post.username.toUpperCase().includes(deger) || post.username.toLowerCase().includes(deger))
        .map((post) =>{
          return <Gonderi key = {post.id} gonderi = {post} gonderiyiBegen = {gonderiyiBegen }></Gonderi>
        })
      }
      {/* Gönderi'nin çağırılmasında hangi propları kullanmanız gerektiğine dikkat edin! */}
    </div>
  );
};

export default Gonderiler;
