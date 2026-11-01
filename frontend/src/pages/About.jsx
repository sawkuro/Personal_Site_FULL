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
									Hi, my name is Kacy. I am currently a 20 year old computer
									science student in my second year of university.
								</p>
								<p>
									My parents are from Laos, and I was born and raised in Idaho.
									Growing up I had a lot of interest in computers because of my
									father, who introduced technology to me at a young age.
									Because of my background, I am extremely open to new skills
									and experiences.
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
										<li>Lifting</li>
										<li>Reading</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="col-md-4 mb-4">
							<div className="card h-100">
								<div className="card-body text-start">
									<h5 className="card-title">Goals</h5>
									<ul className="card-text">
										<li>Internship</li>
										<li>Creating Content</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="col-md-4 mb-4">
							<div className="card h-100">
								<div className="card-body text-start">
									<h5 className="card-title">Current Works</h5>
									<ul className="card-text">
										<li>Youtube</li>
										<li>CS Projects</li>
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
