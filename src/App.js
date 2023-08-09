/* 
  Buradan başlayın ve iç içe geçmiş bileşenlere doğru ilerleyin.
  Projedeki tüm dosyalara kod eklenmesi gerekmez.
  Nerelerde değişiklik yapmanız gerektiğini anlamak için her dosyayı inceleyin.
*/

// State hook u import edin
import React , {useState ,useEffect} from "react";
import AramaCubugu from "./bilesenler/AramaCubugu/AramaCubugu";
import sahteVeri from "./sahte-veri";
import Gonderiler from './bilesenler/Gonderiler/Gonderiler';

// Gönderiler (çoğul!) ve AramaÇubuğu bileşenlerini import edin, çünkü bunlar App bileşeni içinde kullanılacak
// sahteVeri'yi import edin
import "./App.css";

const App = () => {
  const [gonderiler , setGonderiler] = useState (sahteVeri);
  const [likeSayisi , setLikeSayisi] = useState(0);
  const [input, setInput] = useState('');

  useEffect(()=> {
    console.log('Gönderiler : ', gonderiler);
  },[gonderiler])

  // Gönderi nesneleri dizisini tutmak için "gonderiler" adlı bir state oluşturun, **sahteVeri'yi yükleyin**.
  // Artık sahteVeri'ye ihtiyacınız olmayacak.
  // Arama çubuğunun çalışması için , arama kriterini tutacak başka bir state'e ihtiyacımız olacak.
const gonderiyiBegen = (gonderiID) => {

    const newData = [...gonderiler];

    newData.forEach((post) =>{
      if (post.id === gonderiID) {
        post.likes += 1;
        setLikeSayisi((post.likes))
      }
    })

    setGonderiler(newData);
};

useEffect(() => {
  console.log(`postun güncel - likes sayısı : `, likeSayisi);
},[likeSayisi])

    
   

    /*
      Bu fonksiyon, belirli bir id ile gönderinin beğeni sayısını bir artırma amacına hizmet eder.

      Uygulamanın durumu, React ağacının en üstünde bulunur, ancak iç içe geçmiş bileşenlerin stateleri değiştirememesi adil olmaz!
      Bu fonksiyon, belirli bir gönderinin beğeni sayısını artırılmasına olanak sağlamak amacıyla iç içe geçmiş bileşenlere aktarılır.

	  "setGonderi" yi çağırın ve state ine "posts.map" çağrısını iletin.
      `map` içine iletilen callback aşağıdaki mantığı gerçekleştirir:
        - gönderinin idsi "gonderiID" ile eşleşirse, istenen değerlerle yeni bir gönderi nesnesi döndürün.
        - aksi takdirde, sadece gönderi nesnesini değiştirmeden döndürün.
     */


  return (
    <div className="App">

      <AramaCubugu setInput={setInput}/>
      <Gonderiler gonderiyiBegen = {gonderiyiBegen}  gonderiler =  {gonderiler} begeniSayisi = {likeSayisi} deger = {input}/>
  
    </div>
  );
};

export default App;
