// import node module libraries
import { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
	Image,
	Navbar,
	Nav,
	Container,
} from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import Icon from '@mdi/react';
import {mdiGithub } from '@mdi/js';
import 'simplebar/dist/simplebar.min.css';

// import media files
import Logo from 'assets/images/secante/secanteweb.png';


const NavbarDefault = ({ headerstyle, login }) => {
	const isDesktop = useMediaQuery({
		query: '(min-width: 1224px)'
	});
	const isLaptop = useMediaQuery({
		query: '(min-width: 1024px)'
	});

	const [expandedMenu, setExpandedMenu] = useState(false);

	return (
		<Fragment>
			<Navbar
				onToggle={(collapsed) => setExpandedMenu(collapsed)}
				expanded={expandedMenu}
				expand="lg"
				className={`${login ? 'bg-white' : ''} navbar p-2 ${
					headerstyle === 'dark' ? 'navbar-dark bg-dark' : 'navbar-default py-2'
				}`}
			>
				<Container fluid className="px-0 ps-2">
					<Navbar.Brand as={Link} to="/">
						<Image src={Logo} alt="" />
					</Navbar.Brand>
					<div
						className={`navbar-nav navbar-right-wrap ms-auto d-lg-none nav-top-wrap ${
							login ? (isDesktop || isLaptop ? 'd-none' : 'd-flex') : 'd-none'
						}`}
					>
			
					</div>
					<Navbar.Collapse id="basic-navbar-nav">

						<Nav className="navbar-nav navbar-right-wrap ms-auto d-flex nav-top-wrap">
							<span
								className={`ms-auto mt-3 mt-lg-0  ${login ? 'd-none' : ''}`}
							>
								<Nav.Link
									as={Link}
									to={{ pathname: "https://github.com/secantealcubo" }} target="_blank"
									bsPrefix="btn"
									className="btn btn-primary shadow-sm"
								>
									<Icon path={mdiGithub} size={0.7} /> GITHUB
								</Nav.Link>
							</span>

							<span
								className={`${
									login
										? isDesktop || isLaptop
											? 'd-flex'
											: 'd-none'
										: 'd-none'
								}`}
							>
							
							</span>
						</Nav>
						{/* end of right side quick / shortcut menu  */}
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</Fragment>
	);
};

// Specifies the default values for props
NavbarDefault.defaultProps = {
	headerstyle: 'navbar-default',
	login: false
};

// Typechecking With PropTypes
NavbarDefault.propTypes = {
	headerstyle: PropTypes.string,
	login: PropTypes.bool
};

export default NavbarDefault;
