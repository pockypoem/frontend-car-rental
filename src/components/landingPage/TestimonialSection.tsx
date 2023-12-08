import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useMediaQuery } from 'react-responsive';


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PrevArrow = (props: any) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <img
          src="https://i.ibb.co/cLSvczx/Left-button.png"
          alt="Left-button"
          style={{ border: 0 }}
        />
      </div>
    );
};
  
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const NextArrow = (props: any) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
        <img
            src="https://i.ibb.co/kBGY2NS/Right-button.png"
            alt="Right-button"
            style={{ border: 0 }}
        />
        </div>
    );
};

const TestimonialSection: React.FC = () => {

  const isDesktop = useMediaQuery({ minWidth: 1200 });
  const isTablet = useMediaQuery({ minWidth: 600, maxWidth: 1199 });

  const settings = {
    dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: isDesktop ? 3 : isTablet ? 2 : 1,
      slidesToScroll: 3,
      initialSlide: 0,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow/>,
      
  }

    return (
        <>
            <section className="testimonial mt-4" id="testimoni">
            <div className="container">
                <div className="testimonial-text">
                <h1 className="heading-service text-center">Testimonial</h1>
                <h3 className="detail-heading detail-testimonial text-center ">
                    Berbagai testimonial positif dari para pelanggan kami
                </h3>
                </div>

                <div className="container-fluid">
                <div className="testimonial-contents" >
                    <Slider {...settings}>
                    {/* Your carousel items */}
                        <div className="item">
                            <div className="card card-body body-testi" style={{ paddingLeft: '15px', paddingRight: '15px', marginLeft: '5px', marginRight: '5px' }}>
                                <div className="row">
                                    <div className="col-md-3">
                                        <img src="https://i.ibb.co/FB9TD6r/profile-Testi.png" alt="profile-Testi" className="profile-testi mx-auto" style={{ width: '100px', border: 0 }} />
                                    </div>
                                    <div className="col-md-6" style={{ marginLeft: '-10px' }}>
                                        <div className="text-center">
                                            <img src="https://i.ibb.co/kBf3Kwd/Rate.png" alt="Rate" className="mt-3 mb-3 rate-testimonial" style={{ width: '100px', border: 0 }} />
                                        </div>
                                        <div className="text-testimonial">
                                            <p className="card-detail-testi">"Saya sangat puas dengan layanan rental mobil dari Binar Car Rental. Mobil yang saya sewa dalam kondisi prima dan pelayanan dari tim mereka sangat ramah dan profesional."</p>
                                            <p className="person-name"><strong>Kevin 23, Semarang</strong></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="card card-body body-testi" style={{ paddingLeft: '15px', paddingRight: '15px', marginLeft: '5px', marginRight: '5px' }}>
                                <div className="row">
                                    <div className="col-md-3">
                                        <img src="https://i.ibb.co/FB9TD6r/profile-Testi.png" alt="profile-Testi" className="profile-testi mx-auto" style={{ width: '100px', border: 0 }} />
                                    </div>
                                    <div className="col-md-6" style={{ marginLeft: '-10px' }}>
                                        <div className="text-center">
                                            <img src="https://i.ibb.co/kBf3Kwd/Rate.png" alt="Rate" className="mt-3 mb-3 rate-testimonial" style={{ width: '100px', border: 0 }} />
                                        </div>
                                        <div className="text-testimonial">
                                            <p className="card-detail-testi">"Saya sangat puas dengan layanan rental mobil dari Binar Car Rental. Mobil yang saya sewa dalam kondisi prima dan pelayanan dari tim mereka sangat ramah dan profesional."</p>
                                            <p className="person-name"><strong>Kevin 23, Semarang</strong></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="card card-body body-testi" style={{ paddingLeft: '15px', paddingRight: '15px', marginLeft: '5px', marginRight: '5px' }}>
                                <div className="row">
                                    <div className="col-md-3">
                                        <img src="https://i.ibb.co/FB9TD6r/profile-Testi.png" alt="profile-Testi" className="profile-testi mx-auto" style={{ width: '100px', border: 0 }} />
                                    </div>
                                    <div className="col-md-6" style={{ marginLeft: '-10px' }}>
                                        <div className="text-center">
                                            <img src="https://i.ibb.co/kBf3Kwd/Rate.png" alt="Rate" className="mt-3 mb-3 rate-testimonial" style={{ width: '100px', border: 0 }} />
                                        </div>
                                        <div className="text-testimonial">
                                            <p className="card-detail-testi">"Saya sangat puas dengan layanan rental mobil dari Binar Car Rental. Mobil yang saya sewa dalam kondisi prima dan pelayanan dari tim mereka sangat ramah dan profesional."</p>
                                            <p className="person-name"><strong>Kevin 23, Semarang</strong></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="card card-body body-testi" style={{ paddingLeft: '15px', paddingRight: '15px', marginLeft: '5px', marginRight: '5px' }}>
                                <div className="row">
                                    <div className="col-md-3">
                                        <img src="https://i.ibb.co/FB9TD6r/profile-Testi.png" alt="profile-Testi" className="profile-testi mx-auto" style={{ width: '100px', border: 0 }} />
                                    </div>
                                    <div className="col-md-6" style={{ marginLeft: '-10px' }}>
                                        <div className="text-center">
                                            <img src="https://i.ibb.co/kBf3Kwd/Rate.png" alt="Rate" className="mt-3 mb-3 rate-testimonial" style={{ width: '100px', border: 0 }} />
                                        </div>
                                        <div className="text-testimonial">
                                            <p className="card-detail-testi">"Saya sangat puas dengan layanan rental mobil dari Binar Car Rental. Mobil yang saya sewa dalam kondisi prima dan pelayanan dari tim mereka sangat ramah dan profesional."</p>
                                            <p className="person-name"><strong>Kevin 23, Semarang</strong></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Slider>
                </div>
                </div>
            </div>
            </section>
            <br />
        </>
    );
};

export default TestimonialSection;
