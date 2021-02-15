import React from 'react'

const Dashboard = () => {
	return(
		<div className="container">
			<div className="row">
				<div className="col l6">
					<div className="slogan">The Time Is Yours</div>
					<h6 className="grey-text text-darken-4">Timely makes it easy to manage your time. The world is in your hands.</h6>
					<a href='https://play.google.com/store/apps/details?id=cszone.timely&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1' target='_blank'>
						<img className="google-badge" alt='Get it on Google Play' src='res/google-play-badge.png' />
					</a>
				</div>
				<div className="col l6">
					<img className="responsive-img" src="res/home.png" alt="intro image" />
				</div>
			</div>
		</div>
	)
}

export default Dashboard
