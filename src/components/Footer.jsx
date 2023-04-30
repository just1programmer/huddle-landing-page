import React from 'react'
import './Footer.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
		<footer>
			<FontAwesomeIcon
				icon={faFacebook}
				style={{ color: "white" }}
				size="2xl"
			/>
			<FontAwesomeIcon icon={faTwitter} style={{ color: "white" }} size="2xl" />
			<FontAwesomeIcon
				icon={faInstagram}
				style={{ color: "white" }}
				size="2xl"
			/>
		</footer>
	);
}

export default Footer