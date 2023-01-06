import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { urlFor, client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Certification.scss';
import { Navigation, Pagination, Keyboard } from "swiper";

const Certifications = () => {
  const [certifications, setCertifications] = useState([]);
  console.log(certifications)
  useEffect(() => {
    const query = '*[_type == "certifications"]';

    client.fetch(query)
      .then(data => setCertifications(data))
  }, []);

  return (
    <>
      <h2 className='head-text'>My <span>Certifications</span></h2>

      <Swiper
        cssMode={true}
        spaceBetween={100}
        navigation={true}
        pagination={{clickable: true}}
        keyboard={true}
        modules={[Navigation, Pagination, Keyboard]}
        className="app__certification-container app__flex"
      >
        {certifications.map((certificate) => (
          <SwiperSlide key={certificate.title}>
            <a href={certificate.url} target="_blank">
              <img src={urlFor(certificate.image)} alt={certificate.name} />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default AppWrap(
  MotionWrap(Certifications, "app__certifications"),
  "certifications",
  "app__primarybg"
);