import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

const HeroSection = () => {

    const [isContainerFluid, setIsContainerFluid] = useState(window.innerWidth >= 1150)

    useEffect(() => {
        const updateContainerClass = () => {
            setIsContainerFluid(window.innerWidth >= 1150)
        }

        updateContainerClass();

        window.addEventListener("resize", updateContainerClass);

        return() => {
            window.removeEventListener("resize", updateContainerClass);
        }
    }, []);

    return (
        <>
            <section className="hero" id="hero">
                <div className={`container ${isContainerFluid ? "container-fluid" : ""} hero-section`} id="hero-section">
                    <div className="row">
                        {/* Left Section Text */}
                        <div className="col left-hero-section" id="left-hero-section-style">
                            <h1 className="heading-hero">
                                Sewa & Rental Mobil Terbaik di kawasan Semarang
                            </h1>
                            <p className="detail-heading detail-heading-hero-style lh-lg">
                                Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangaku. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                            </p>
                            <button className="btn-green btn-hero" style={{ borderRadius: '10px', width:'200px' }}>
                                <div className="btn">
                                    <Link to="/cari-mobil" style={{ textDecoration: 'none', color: 'white' }} className="white">Mulai Sewa Mobil</Link>
                                    {/* <a href="/cars" style={{ textDecoration:'none', color: 'white' }}>Mulai Sewa Mobil</a> */}
                                </div>
                            </button>
                        </div>


                        {/* Right Section Image */}
                        <div className="col imagehero-section">
                            <div className="position-relative image-wrap-hero">
                                <div className="bottom-0 end-0">
                                    <img src="https://i.ibb.co/x320NJr/img-car.png" alt="img-car" className="imagehero-style" style={{ width: '280px', border:'0' }} />
                                    <img src="https://i.ibb.co/x320NJr/img-car.png" alt="img-car" className="image-desktop-style" style={{ width: '580px', border:'0' }}/>
                                    <img src="https://i.ibb.co/x320NJr/img-car.png" alt="img-car" className="image-desktop-style-1440" style={{ width: '700px', border:'0' }} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection
