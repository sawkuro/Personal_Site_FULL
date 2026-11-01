import React from "react";

function Footer() {
	return (
		<footer className="text-center fade-in">
			<div className="contact-icons">
				<a
					href="https://www.youtube.com/@ariya_kc"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Youtube"
				>
					<i className="fab fa-youtube social-icon"></i>
				</a>
				<a
					href="https://github.com/sawkuro"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="GitHub"
				>
					<i className="fab fa-github social-icon"></i>
				</a>
				<a
					href="https://www.instagram.com/kacysouvanna"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Instagram"
				>
					<i className="fab fa-instagram social-icon"></i>
				</a>
			</div>
			<p>© 2025 Kacy Souvanna</p>
		</footer>
	);
}

export default Footer;
