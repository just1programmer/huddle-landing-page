import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import './scss/resets.scss'
import './App.scss'
import Heading from './components/Heading'
import Paragraph from './components/Paragraph'
import Register from './components/Register'
import Footer from './components/Footer'
import illustrations from "./assets/illustration-mockups.svg";

function App() {
  
  const [heading, setHeading] = useState(
		"Build The Community Your Fans Will Love"
	);
  const [content,setContent] = useState(`Huddle re-imagines the way we
          build communities. You have a voice, but so does your audience. Create
          connections with your users as you engage in genuine discussion.`)

  return (
		<>
			<div className="app">
				<Header />
				<div className="app_teaser">
					<img src={illustrations} alt="image" className="illustration" />
					<div className="app_teaser-text">
						<Heading heading={heading} />
						<Paragraph content={content} />
						<div className="register">
							<Register />
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
}

export default App
