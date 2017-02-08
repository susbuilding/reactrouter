import React from 'react';
import {Link} from 'react-router';


export default class Artists extends React.Component {

    constructor(props){
        super(props)
    }


    render(){
        const artists = this.props.artists;
        const selectArtist = this.props.selectArtist;
        return (
            <div>
                <h3>Artists</h3>
                    <div className="list-group">
                    {
                    artists.map(artist => {
                        return (
                        <div className="list-group-item" key={artist.id}>
                            {/* determine where to actually Link to later! */}
                            <Link to={ `/artists/${artist.id}`}>{ artist.name }</Link>
                        </div>
                        )
                    })
                    }
                    </div>
            </div>
        )
    }
}






// const Artists = (props) => {


//     return (

//         JSX
//         props.name
//         )
// }
