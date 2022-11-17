// Section : Features
// Style : Four Columns Features Section

// import node module libraries
import { Col, Row, Container } from 'react-bootstrap';

// import custom components
import SectionHeadingCenter from 'components/marketing/common/section-headings/SectionHeadingCenter';
import FeatureTopIcon from 'components/marketing/common/features/FeatureTopIcon';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Features4Columns = () => {
	const [response, setResponse] = useState(null);
	const fetchQuotes = async () => {
		try {
			const res = await axios.get(`https://shazam.p.rapidapi.com/search`, {
				headers: {
					'X-RapidAPI-Key': 'cce22f83admshe734dda0907a6dbp170505jsn189917446f56',
                    'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
				  },
                  params: {term: 'Linkin park', locale: 'en-US', offset: '0', limit: '5'},
			});
			setResponse(res.data);
			console.log(response.tracks.hits);
		} catch (err) {
			console.log(err);
		}
	};
	useEffect(() => {
		// Trigger the API Call
		fetchQuotes();
	}, []);

	const title = 'Banda favorita';
    const subtitle = 'Linkin Park';
	const description = `Esta información proviene de la API https://rapidapi.com/`;

	const features = [
		{
			id: 1,
			icon: 'disc',
			title: 'Learn the latest skills',
			description: `Lorem ipsum dolor sit amet, lorem consectetur adipiscing elit.`
		},
		{
			id: 2,
			icon: 'disc',
			title: 'Get ready for a career',
			description: `Pellentesque eu mi rhoncus, rhoncus tortor a, interdum nisi.`
		},
		{
			id: 3,
			icon: 'disc',
			title: 'Earn a Certificate',
			description: `Quisque tempus lectus cursus, imperdiet eros vel, pulvinar arcu.`
		},
		{
			id: 4,
			icon: 'disc',
			title: 'Upskill your organization',
			description: `Etiam dignissim est tristique ex porta, bibendum commodo.`
		}
	];

	return (
		<div className="py-8 py-lg-18 bg-white">
			{
				response && 
				<Container>
					<SectionHeadingCenter
						title={title}
						description={description}
                        subtitle={subtitle}
					/>
					<Row>
						{response.tracks.hits.map((item, index) => {
							return (
								<Col lg={4} md={6} sm={12} key={index}>
									<div className="mb-4 text-center">
										{/* Icon */}
										<div className="display-4 text-primary">
											<i className={`fe fe-disc`}></i>
										</div>
										{/* Para */}
										<div className="mt-4">
											<h3>{item.track.title}</h3>
											<p className="fs-4">{item.track.subtitle}</p>
										</div>
									</div>
								</Col>
							);
						})}
					</Row>
				</Container>
			}
			
		</div>
	);
};

export default Features4Columns;
