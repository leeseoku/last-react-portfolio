import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

export default function Banner(props){
    return(
    <Swiper
	    autoplay={{
	    delay: 350000,
        disableOnInteraction: false,
	    }}
        modules={[Autoplay]}
        className="bannerslide"
>
        {props.data.swiperslide.map((v,i)=>{
            return(
        <SwiperSlide className='sws' >
            <div className='position-relative' style={{ height: 0, paddingTop: "80%"}} >
               <div className='position-absolute' style={{ backgroundImage:`url(${v.url})`, top:0, left:0, right:0, bottom:0 }}></div>
            </div>
            
        </SwiperSlide>)})}
    </Swiper>
    )
}
