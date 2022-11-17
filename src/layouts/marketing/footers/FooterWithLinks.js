// import node module libraries
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, Container} from 'react-bootstrap';

// import MDI icons
import Icon from '@mdi/react';
import { mdiTwitter, mdiLinkedin, mdiGithub } from '@mdi/js';

// import media files
import FooterLogo from 'assets/images/secante/secanteweb.png';

const FooterWithLinks = () => {
	return (
		<Fragment>
			{/*  footer */}
			<div className="pt-lg-10 pt-5 footer bg-white">
				<Container>
					<Row>
						<Col lg={4} md={6} sm={12}>
							{/* about company  */}
							<div className="mb-4">
								<Image src={FooterLogo} alt="" />
								<div className="mt-4">
									{/* social media */}
									<div className="fs-4 mt-4">
										<Link to={{ pathname: "https://www.linkedin.com/in/reinaldozerpaplaza" }} target="_blank" className="mdi mdi-facebook text-muted me-2">
											<Icon path={mdiLinkedin} size={1} />
										</Link>
										<Link to={{ pathname: "https://twitter.com/secantealcubo" }} target="_blank" className="mdi mdi-twitter text-muted me-2">
											<Icon path={mdiTwitter} size={1} />
										</Link>
										<Link to={{ pathname: "https://github.com/secantealcubo" }} target="_blank" className="mdi mdi-instagram text-muted ">
											<Icon path={mdiGithub} size={1} />
										</Link>
									</div>
								</div>
							</div>
						</Col>

						<Col lg={3} md={12} sm={12}>
							{/* contact info */}
							<div className="mb-4">
								<h3 className="fw-bold mb-3">Datos de contacto</h3>
								<p className="mb-1">
									Email: <Link to="#">cesczerpa@gmail.com</Link>
								</p>
								<p>
									Teléfono:{' '}
									<span className="text-dark fw-semi-bold">
										(+56) 997704728
									</span>
								</p>
							</div>
						</Col>
					</Row>
					<Row className="align-items-center g-0 border-top py-2 mt-6">
						<Col lg={4} md={5} sm={12}>
							<span>© 2022 Secantealcubo. Todos los derechos reservados</span>
						</Col>
					</Row>
				</Container>
			</div>
		</Fragment>
	);
};
export default FooterWithLinks;
