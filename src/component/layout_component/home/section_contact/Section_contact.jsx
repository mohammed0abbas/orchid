import React from 'react';
import './section_contact.css'
import ContactBox from './Contact_box';
import phonicon from '../../../../img/icon/phon.svg'
import faceicon from '../../../../img/icon/face_black.svg'
import insticon from '../../../../img/icon/insta_black.svg'
import tweticon from '../../../../img/icon/tweter_black.svg'
import Btn from '../../Btn';

export default function Section_contact() {
    return <div>
 
        <section>

            
                <h1 className='text-center m-5'>اتصل بنا</h1>
            
            
                <div className="div-contact-link" >
                    <div className="row m-0 d-flex justify-content-around" dir='rtl'>
                    <ContactBox
                     
                            id='1'
                            name='رقم الهاتف'
                            img1={phonicon}
                            link='tel:+9647714751409'
                            contact1="9647714751409+"
                            

                        />
                       

                        <ContactBox
                            id='2'
                            name='البريد الالكتروني '
                            img1={phonicon}
                            contact1="orchid.perfum19@gmail.com"
                            link='mailto:orchid.perfum19@gmail.com'
                           

                        />
                        
                        <ContactBox
                        id ='3'
                            name='التواصل الاجتماعي '
                            img1={faceicon}
                            contact1="  أوركيد للعطور"
                            img2={insticon}
                            contact2="orchid_aperfume"
                            
                            link1="https://instagram.com/orchid_aperfume?igshid=YWJhMjlhZTc="
                            link='https://www.facebook.com/orchid.perfume?mibextid=ZbWKwL'

                        />



                    </div>
                </div>
                <div className='d-flex justify-content-center mt-5'>
                    <Btn value="تواصل معنا" link="/contact" />
                </div>
         





        </section>

    </div>;
}
