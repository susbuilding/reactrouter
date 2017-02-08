import React from 'react';
import {Link} from 'react-router';

export default class Artist extends React.Component{
	constructor(props){
		super(props);
	}

	componentDidMount(){
		const artistId = this.props.routeParams.artistId;
		const selectArtist = this.props.selectArtist;

		selectArtist(artistId);
	}

	render(){
		console.log(this.props)
		const artist = this.props.artist;
		return (
			<div>
  				<h3>{artist.name}</h3>
  				<h4>ALBUMS</h4>
				<div className="row">

				</div>

  				<h4>SONGS</h4>
			</div>

		)
	}
 }
