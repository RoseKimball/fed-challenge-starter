import React from 'react';
import {Timer, Straighten} from '@material-ui/icons';
import '../Styles.css';
import Playlist from './Playlist';

const WorkoutCard = ({workout}) => {
    return (
        
        <>
            {workout.map((w) => {
                // console.log(w.image);
                return (
                    <div key={w.title} className='WorkoutCard'>
                        <div className='Image'>
                            <img src={process.env.PUBLIC_URL +'/assets/' + w.image} alt='workoutImg'></img>
                            {w.workouts > 1 ? (<Playlist number={w.workouts}/>) : null}
                        </div>
                            <div className='Title'>
                                <h3 className='TitleText'>{w.title}</h3>
                            <div>
                                <img src={process.env.PUBLIC_URL +'/assets/' + w.instructorImage} alt='trainer'></img>
                            </div>
                        </div>
                        {w.length && w.distance ? (
                            <div className='TimeDistance'>
                            <span className='Item'><Timer /><p>{w.length}</p></span>
                            <span className='Item'><Straighten /><p>{w.distance}</p></span>
                        </div>
                        ) : null}
                        {w.viewDetails ? (<p className='Link'>VIEW DETAILS</p>) : null}
                    </div>
                )
                })}         
        </>
    )
}

export default WorkoutCard;