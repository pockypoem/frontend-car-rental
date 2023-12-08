const ServiceSection = () => {
  return (
    <>
      <section className="service" id="service">
        <div className="container service-section">

            <div className="row">

                {/* Left Section Image */}
                <div className="col imageservice-section">
                    <div className="position-relative">
                        <div className="top-50 start-50">
                            <img src="https://i.ibb.co/D8vNt8C/img-service.png" alt="img-service" style={{ border: '0' }}/>
                        </div>
                    </div>
                </div>

                {/* Right Section Text */}
                <div className="col right-service-section">
                    <h1 className="heading-service">Best Car Rental for any kind of trip in Semarang!</h1>
                    <p className="detail-heading detail-heading-service-style">Sewa mobil di Semarang bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                    <ol className="service-list">
                        <li className="list-detail">
                            <span><img src="https://i.ibb.co/Tcwn0PN/service-list.png" alt="service-list" style={{ border:'0' }}/></span>
                            <p>Sewa Mobil Dengan Supir di Semarang 12 Jam</p>
                        </li>
                        <li className="list-detail">
                            <span><img src="https://i.ibb.co/Tcwn0PN/service-list.png" alt="service-list" style={{ border:'0' }}/></span>
                            <p>Sewa Mobil Lepas Kunci di Semarang 24 Jam</p>
                        </li>
                        <li className="list-detail">
                            <span><img src="https://i.ibb.co/Tcwn0PN/service-list.png" alt="service-list" style={{ border:'0' }}/></span>
                            <p>Sewa Mobil Jangka Panjang Bulanan</p>
                        </li>
                        <li className="list-detail">
                            <span><img src="https://i.ibb.co/Tcwn0PN/service-list.png" alt="service-list" style={{ border:'0' }}/></span>
                            <p>Gratis Antar - Jemput Mobil di Bandara</p>
                        </li>
                        <li className="list-detail">
                            <span><img src="https://i.ibb.co/Tcwn0PN/service-list.png" alt="service-list" style={{ border:'0' }}/></span>
                            <p>Layanan Airport Transfer / Drop In Out</p>
                        </li>
                    </ol>
                </div>

            </div>

        </div>
      </section>
    </>
  )
}

export default ServiceSection
