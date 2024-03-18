import SimpleImageSlider from "react-simple-image-slider";
import img from '../../public/imgs/hassan2.png'



const SlickCard = () => {
    const images = [
        { url: '../../public/imgs/hassan2.png' },
        { url: "../../public/imgs/hassan2.png" },
        { url: "../../public/imgs/hassan2.png" },
        { url: "images/4.jpg" },
        { url: "images/5.jpg" },
        { url: "images/6.jpg" },
        { url: "images/7.jpg" },
      ];
  return (
    
        <div className="mt-4">
          <SimpleImageSlider
            width={896}
            height={504}
            images={images}
            showBullets={true}
            showNavs={true}
            bgColor="#fefe"
            
          />
        </div>
    
  )
}

export default SlickCard