const Footer = () => {
return (
<footer className="text-center text-lg-start bg-body-tertiary text-muted"  bg="dark" data-bs-theme="dark">
    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
        </div>
    </section>
    <section>
        <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">
                        Used to build The Website
                    </h6>

                <p><a href="https://react.dev/" className="text-reset">React</a></p>
                <p><a href="https://getbootstrap.com/" className="text-reset">Bootstrap</a></p>

                </div>
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">
                        links
                    </h6>

                    <p><a href="#!" className="text-reset">Placeholder</a></p>
                    <p><a href="#!" className="text-reset">Placeholder</a></p>
                    <p><a href="#!" className="text-reset">Placeholder</a></p>
                    <p><a href="#!" className="text-reset">Placeholder</a></p>

                </div>
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                    <p>
                        <i className="me-3"></i>   
                        <a href="/Contact" className="text-reset">Contact</a>
                    </p>
                    <p>
                        <i className="me-3"></i> 
                        <a href="#Daten_Schutz" className="text-reset">Privacy</a>
                    </p>
                </div>
            </div>

        </div>
    </section>
    <div className="text-center p-4">
        © 2024 Copyright:
        Yannick Müller
    </div>
</footer>
);
}

export default Footer;