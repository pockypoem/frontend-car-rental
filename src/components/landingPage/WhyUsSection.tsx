const WhyUsSection = () => {
  return (
    <>
        <section className="whyus mt-4" id="about">

            <div className="container">

                <div className="whyus-section">
                    <h1 className="heading-service title-whyus">Why Us?</h1>
                    <p className="detail-heading detail-whyus">Mengapa harus pilih Binar Car Rental?</p>
                </div>

                <div className="whyus-detail">
                    <div className="row card-whyus">
                        <div className="col-md-6 col-lg-3 card-item-whyus">
                            <div className="card" style={{ width: '16.75rem', height:'12rem' }}>
                                <div className="card-body">
                                    <img src="https://i.ibb.co/h28LtjP/icon-complete.png" className="mb-4" alt="icon-complete" style={{ border:'0' }} />
                                    <h5 className="card-title bold-card-title">Mobil Lengkap</h5>
                                    <p className="card-detail-list">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 card-item-whyus">
                            <div className="card" style={{ width: '16.75rem', height:'12rem' }}>
                                <div className="card-body">
                                    <img src="https://i.ibb.co/BGp7RHM/icon-price.png" className="mb-4" alt="icon-price" style={{ border: '0' }} />
                                    <h5 className="card-title bold-card-title">Harga Murah</h5>
                                    <p className="card-detail-list">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 card-item-whyus">
                            <div className="card" style={{ width: '16.75rem', height:'12rem' }}>
                                <div className="card-body">
                                    <img src="https://i.ibb.co/3WWdkQB/icon-24hrs.png" className="mb-4" alt="icon-24hrs" style={{ border: '0' }} />
                                    <h5 className="card-title bold-card-title">Layanan 24 Jam</h5>
                                    <p className="card-detail-list">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 card-item-whyus">
                            <div className="card" style={{ width: '16.75rem', height:'12rem' }}>
                                <div className="card-body">
                                    <img src="https://i.ibb.co/6tysGwY/icon-professional.png" className="mb-4" alt="icon-professional" style={{ border: '0' }} />
                                    <h5 className="card-title bold-card-title">Sopir Profesional</h5>
                                    <p className="card-detail-list">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    </>
  )
}

export default WhyUsSection
