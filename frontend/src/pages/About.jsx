import Layout from "../components/Layout";

function About() {
	return (
		<Layout>
			{/* Hero Section */}
			<div className="hero text-center fade-in">
				<h1>About Me</h1>
			</div>

			{/* Main Content */}
			<div className="container fade-in">
				<div className="content-section text-center">
					<section className="row align-items-center">
						<div className="col-md-8 mb-4 mb-md-0">
							<section
								className="intro-section"
								style={{ textAlign: "left" }}
							>
								<p>
									Hi, my name is Kacy. I am currently a 21 year old computer
									science student in my third year of university.
								</p>
								<p>
									I was born and raised in Idaho and my parents are from Laos.
									Growing up I had a lot of interest in computers because of my
									father, who introduced technology to me at a young age along
									with a natural curiosity. I am extremely open to new skills
									and experiences due to a diverse yet cohesive collection of
									interests and experiences which include technical
									guitar/music, tactile hobbies, and an analytical gaming
									approach.
								</p>
							</section>
						</div>
						<div className="col-md-4 image-container text-center fade-in">
							<div>
								<br />
								<img
									src="https://i.imgur.com/sjPA3Cx.jpeg"
									alt="Kacy Souvanna portrait"
									className="portrait-img"
								/>
							</div>
						</div>
					</section>

					<hr />

					<section className="row">
						<div className="col-md-4 mb-4">
							<div className="card h-100">
								<div className="card-body text-start">
									<h5 className="card-title">Hobbies</h5>
									<ul className="card-text">
										<li>Guitar &amp; Music</li>
										<li>Gaming</li>
										<li>Rubiks Cube</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="col-md-4 mb-4">
							<div className="card h-100">
								<div className="card-body text-start">
									<h5 className="card-title">Main Goals</h5>
									<ul className="card-text">
										<li>Internship</li>
										<li>Developing CS Skills</li>
										<li>Creating/contributing to valuable projects</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="col-md-4 mb-4">
							<div className="card h-100">
								<div className="card-body text-start">
									<h5 className="card-title">Side Goals</h5>
									<ul className="card-text">
										<li>Alexi Laiho Solos</li>
										<li>Youtube Channel</li>
										<li>R6 Siege Grind</li>
									</ul>
								</div>
							</div>
						</div>
					</section>

					<hr />
				</div>
			</div>
		</Layout>
	);
}

export default About;
