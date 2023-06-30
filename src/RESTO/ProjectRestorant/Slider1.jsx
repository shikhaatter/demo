import Carousel from 'react-bootstrap/Carousel';
function Slider1() {
    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1>Heading</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos enim rem illum ducimus suscipit delectus porro optio? Laudantium, minus? Repellat corporis eligendi tempore saepe dolore fugit aliquam autem vitae asperiores?</p>
                            <button className='btn btn-success'>Primary</button>
                        </div>
                        <div className="col">
                            <Carousel fade>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        alt="First slide"
                                    />

                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="./images/1.jpg"
                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="./images/r2.jpg"
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Slider1;