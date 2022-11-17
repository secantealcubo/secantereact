import { Fragment } from 'react';
import Features4Columns from './Features4Columns';
import HeroTyped from './HeroTyped';
import NavbarDefault from 'layouts/marketing/navbars/NavbarDefault';
import FooterLandings from 'layouts/marketing/footers/FooterLandings';

const LandingCourses = () => {
	return (
		<Fragment>
			<NavbarDefault />
			<HeroTyped />
			<Features4Columns />
			<hr className="my-0" />
			<FooterLandings />
		</Fragment>
	);
};
export default LandingCourses;
