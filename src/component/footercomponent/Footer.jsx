import './footer.css'
import { NavLink } from "react-router-dom";
import icon1 from '../../img/icon/face_white.svg'
import icon2 from '../../img/icon/insta_white.svg'
import icon3 from '../../img/icon/twiter_white.svg'
import logow from '../../image_orched/logow.png'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Footer() {

  return <div>

    <footer>
      <div >
        <img className='mt-4' src={logow} width={190} alt="" />
       
      </div>


      <div className='m-2'>
        <NavLink activeclassname="active" to={"/"} className='m-3 link-nav' >Home</NavLink>
        <NavLink activeclassname="active" to={"/prodect"} className='m-3 link-nav' >prodect</NavLink>
        <NavLink activeclassname="active" to={"/contact"} className='m-3 link-nav' > contact us</NavLink>
        <NavLink activeclassname="active" to={"/other"} className='m-3 link-nav' >other </NavLink>

      </div>

      <div className='d-flex justify-content-between '>

        <a href='https://www.facebook.com/orchid.perfume?mibextid=ZbWKwL'><img src={icon1} className='m-4' alt="" /></a>
        <a href='https://instagram.com/orchid_aperfume?igshid=YWJhMjlhZTc='><img src={icon2} className='m-4' alt="" /></a>
        <a href='https://wa.me/+9647714751409'><font color='white' ><WhatsAppIcon className='m-4'/></font></a>

      
      </div>


    </footer>

  </div>;
}
