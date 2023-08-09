// 26. satırdaki beğeni sayısına bakın. Şu anda '100' olarak kodlanmış durumda.
// Doğru beğeni sayısını görüntülemek için proplardan gelen bir veri parçasını kullanın.
// Beğeni sayısını artırmak için "gonderiyiBegen" fonksiyonunu kullanan bir onClick işleyicisi de ekleyeceksiniz.
// (Ek görev olarak, kullanıcınızın aynı gönderiyi birden fazla kez "beğenmesini" engelleyin.)
import React,{useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";

const BegenBolumu = (props) => {
  // 🔥 Bu bileşenin parentının aşağıdaki propları düzgün gönderdiğinden emin olun.
  const { gonderiyiBegen, post  } = props;
  const [durum , setDurum] = useState(false);

  const theme= {
   color:durum && 'red',
   fontSize : durum && '20px'
  }
const renkDegis = () => {
  setDurum(durum => !durum);
}

  return (
    <div>
      <div className="like-section" key="likes-icons-container">
        <div className="like-section-wrapper" onClick={() => gonderiyiBegen(post.id)}>
         <FontAwesomeIcon style={theme} onClick={renkDegis} icon={faHeart} />
        </div>
        <div className="like-section-wrapper">
          <FontAwesomeIcon icon={faComment} />
        </div>
      </div>
      <p className="like-number">{post.likes}</p>
    </div>
  );
};

export default BegenBolumu;
