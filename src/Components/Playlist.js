import React from 'react';
import '../Styles.css';
import {PlaylistPlay} from '@material-ui/icons';

const Playlist = ({number}) => {
    return (
        <>
        <div className='Backdrop'></div>
        <div className='Playlist'>
            <p className='Number'>{number}</p>
            <p className='WorkoutsText'>Workouts</p>
            <PlaylistPlay fontSize='large'/>
        </div>
        </>
    )
}

export default Playlist;