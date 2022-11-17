// ** Import from react dom
import { Route, Switch } from 'react-router-dom';

// ** Import core SCSS styles
import 'assets/scss/theme.scss';

import BlankLayout from 'layouts/marketing/BlankLayout';

// Landing menu item pages
import LandingCourses from 'components/marketing/landings/landing-courses/LandingCourses';

/* IMPORTS FOR MARKETING PAGES - END */
/* --------------------------------- */

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
	<Route
		{...rest}
		render={(props) => (
			<Layout>
				<Component {...props}></Component>
			</Layout>
		)}
	></Route>
);

function AllRoutes() {
	return (
		<Switch>
			<AppRoute
				exact
				path="/"
				layout={BlankLayout}
				component={LandingCourses}
			/>
		</Switch>
	);
}

export default AllRoutes;
