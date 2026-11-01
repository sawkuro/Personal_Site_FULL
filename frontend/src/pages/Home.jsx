import Layout from "../components/Layout";

function Home() {
	return (
		<Layout>
			{/* Hero Section */}
			<div className="hero text-center animated">
				<h1>Welcome</h1>
			</div>

			{/* Main Content Area */}
			<div className="container animated">
				<div className="image-container text-center animated">
					<img
						src="https://i.imgur.com/6wmwEgU.jpeg"
						alt="Kacy's hero"
						className="mainimg"
					/>
				</div>
				<div className="content-section text-center">
					<hr style={{ color: "white" }} />
					<p>
						<i>
							"Life can only be understood backwards; but it must be lived
							forwards."
						</i>
					</p>
					<hr style={{ color: "white" }} />
				</div>
			</div>
		</Layout>
	);
}

export default Home;
