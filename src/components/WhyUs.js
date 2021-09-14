import React from "react";
import styled from "styled-components";
import whyusimg from '../assets/img/why-us.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  FaBox
} from "react-icons/fa";


import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
const WhyUs =  () => {
return (
    <>
<WhyUsContainer>

<section id="why-us" className="why-us">
      <div className="container-fluid" data-aos="fade-up">

        <header className="section-header">
          <h3>Niyə biz?</h3>
          <p> Biz ən yeni texnologiyalardan istifadə edərək, biznes təyinatlı proqram təminatları hazırlayırıq. Məqsədimiz ondan ibaretdir ki, asan istifadə ilə bol funksionallığı birləşdirib, sizə ən uyğun xidməti təqdim edək.</p>
        </header>

        <div className="row">

          <div className="col-lg-6" data-aos="zoom-in" data-aos-delay="100">
            <div className="why-us-img">
              <img src={whyusimg} alt="" className="img-fluid" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="why-us-content">
              <p> Jretail proqramı məhsul qalıqlarınızın qeydiyyatından, malların giriş- çıxışından, qalıqlara nəzarətə qədər bir çox əməliyyatı asanlıqla həyata keçirir. Geniş hesabat və filtrləmə imkanları və istənilən vaxt üçün statistik məlumatların əldə edilməsi üçün mühüm əhəmiyyət kəsb edir. </p>
              <p>
              Jretail modulu məhsulun anbarınıza daxil olduğu andan etibarən satılana qədər bütün hərəkətlərini təqib edir. Rəflərinizdə satış hərəkətliliyi olmayan malları təsbit edə biləcəyiniz bir proqramdır. Bu proqram vasitəsilə siz barkodlu mal satış və təqibini həyata keçirərək müştərilərin tələblərinə daha sürətli cavab verəcək və anbarınızı nəzarətdə saxlayacaqsınız. </p>

              <div className="features clearfix" data-aos="fade-up" data-aos-delay="100">
                <FaBox  id="icon1"/>
                <h4>Corporis dolorem</h4>
                <p> Eləcə də satış dövrlərinin hesabatını çıxarmaq və bu istiqamətdə strategiyalar hazırlamaq imkanına malikdir. Satışların idarə olunmasında rahat texnoloji hell yolu teqdim edirik. Bir pəncərədən emeliyyatları daha asanlıqla yerinə yetirəcəksiniz və kassa sisteminizdə satışlarınızı rahatlıqla avtomatlaşdıra biləcəksiniz </p>
              </div>

              <div className="features clearfix" data-aos="fade-up" data-aos-delay="200">
              <FaBox  id="icon1"/>
                <h4>Eum ut aspernatur</h4>
                <p>Molestias eius rerum iusto voluptas et ab cupiditate aut enim. Assumenda animi occaecati. Quo dolore fuga quasi autem aliquid ipsum odit. Perferendis doloremque iure nulla aut.</p>
              </div>
              <div className="features clearfix" data-aos="fade-up" data-aos-delay="300">
              <FaBox id="icon1"/>
                <h4>Voluptates dolores</h4>
                <p>Voluptates nihil et quis omnis et eaque omnis sint aut. Ducimus dolorum aspernatur. Totam dolores ut enim ullam voluptas distinctio aut.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</WhyUsContainer>
    </>
)
}
export default WhyUs;

const WhyUsContainer = styled.div`
#why-us {
  padding: 60px 0;
}

@media (max-width: 991px) {
  #why-us .why-us-content {
    padding-top: 30px;
  }
}

#why-us .why-us-content .features {
  margin: 0 0 15px 0;
  padding: 0;
}

#icon1 {
  font-size: 36px;
  float: left;
}

#why-us .why-us-content .features h4 {
  font-size: 24px;
  font-weight: 600;
  margin-left: 56px;
  color: #413e66;
  margin-bottom: 5px;
}

#why-us .why-us-content .features p {
  font-size: 16px;
  margin-left: 56px;
  color: #555186;
}
.section-header h3 {
  font-size: 36px;
  color: #413e66;
  text-align: center;
  font-weight: 700;
  position: relative;
  font-family: "Montserrat", sans-serif;
}

.section-header p {
  text-align: center;
  margin: auto;
  font-size: 15px;
  padding-bottom: 60px;
  color: #535074;
  width: 50%;
}
a {
  text-decoration: none;
}
@media (max-width: 767px) {
  .section-header p {
    width: 100%;
  }
}




`