// import node module libraries
import { Fragment } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import sub components
import FooterWithLinks from './FooterWithLinks';

// import media files
import Call2ActionBackground from 'assets/images/background/course-graphics.svg';

const FooterLandings = () => {
	return (
		<Fragment>
			{/* call to action */}
			<div
				className="py-lg-16 py-10 bg-dark"
				style={{
					background: `url(${Call2ActionBackground})`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					backgroundPosition: 'top center'
				}}
			>
				<Container>
					{/*  row  */}
					<Row className="justify-content-center text-center">
						<Col md={9} sm={12}>
							{/* heading  */}
							<h2 className="display-4 text-white">
								¿Por qué Secante?
							</h2>
							<p className="lead text-white px-lg-12 mb-6">
								Desde siempre me apasionó el mundo de las matemática y de la computación, en la universidad descubrí la integral de la <b>secante cúbica</b> y la manera de resolverla me gustó tanto que tomé ese "nombre".
							</p>
							{/* button */}
							<div className="d-grid d-md-block">
								<Link
									to={{ pathname: "https://www.linkedin.com/in/reinaldozerpaplaza" }} target="_blank"
									className="btn btn-primary mb-2 mb-md-0"
								>
									Ir a Linkedin
								</Link>{' '}
								<Link to={{ pathname: "https://github.com/secantealcubo" }} target="_blank" className="btn btn-info">
									Ir a GITHUB
								</Link>
							</div>
						</Col>
					</Row>
				</Container>
			</div>

			<FooterWithLinks />
		</Fragment>
	);
};

export default FooterLandings;
