import React, { Component } from 'react';
import { RoomContext } from '../Context';
import Title from './Title';
import Room from './Room'
//import Loading from './Loading';

export default class FeaturedRooms extends Component {
    static contextType=RoomContext;
    render() {
        
        let { featuredRooms: rooms } = this.context;
        rooms=rooms.map(room=>{ return<Room key={room.id} room={room}/> })
        
        return (
            <section className='featured-rooms'>
                <Title title='featured rooms' />
                <div className="featured-rooms-center">
                {rooms}
                </div>
            </section>
        )
    }
}
