import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const UsShapeTab = () => {
	return (
		<>
			<div className="video-wrap">
				<Tabs>
					<TabPanel>
						<div className="video-area">
							<div className="d-table">
								<div className="d-table-cell">
									<div className="container">
										<div className="video-item">
											<div className="video-content">
												<h3>Social Justice</h3>
												<p>
													The concept of social justice is based on human
													rights, its foundational principles. Human rights and
													social justice are interdependent. Societies that
													respect civil, economic, cultural, political, and
													legal rights are fundamental to their development.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</TabPanel>

					<TabPanel>
						<div className="video-area">
							<div className="d-table">
								<div className="d-table-cell">
									<div className="container">
										<div className="video-item">
											<div className="video-content">
												<h3>Healthcare</h3>
												<p>
													A variety of healthcare providers are available in the
													United States, including hospitals, clinics, physician
													practices, and specialized facilities. Health care is
													a dynamic and evolving subject, and policies and
													regulations change over time.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</TabPanel>

					<TabPanel>
						<div className="video-area">
							<div className="d-table">
								<div className="d-table-cell">
									<div className="container">
										<div className="video-item">
											<div className="video-content">
												<h3>Advocacy</h3>
												<p>
													In advocacy, you receive support from another person
													in order to express your thoughts and wishes and to
													ensure that your rights are protected. A well-defined
													definition of advocacy involves influencing public
													policy and social change on behalf of individuals and
													organizations.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</TabPanel>

					<TabPanel>
						<div className="video-area">
							<div className="d-table">
								<div className="d-table-cell">
									<div className="container">
										<div className="video-item">
											<div className="video-content">
												<h3>Poverty Alleviation</h3>
												<p>
													American society has made poverty alleviation a
													priority by reducing the number of individuals and
													families living in poverty and enhancing their overall
													well-being. Common approaches have been used to
													address poverty over time and across administrations.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</TabPanel>

					<TabPanel>
						<div className="video-area">
							<div className="d-table">
								<div className="d-table-cell">
									<div className="container">
										<div className="video-item">
											<div className="video-content">
												<h3>Education</h3>
												<p>
													In the United States, public schools, private schools,
													and homeschooling are the most common forms of
													education. Moreover, each state sets its own standards
													and regulations for the education system in the United
													States.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</TabPanel>

					<TabList>
						<Tab>Social Justice</Tab>
						<Tab>Healthcare</Tab>
						<Tab> Advocacy</Tab>
						<Tab>Poverty Alleviation</Tab>
						<Tab>Education</Tab>
					</TabList>
				</Tabs>
			</div>
		</>
	);
};

export default UsShapeTab;
