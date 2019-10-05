import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import {withRoomConsumer} from '../Context'


function RoomsContainer({context}){
    const {sortedRooms, rooms} = context;
    return(
              <>
                <RoomsFilter rooms={rooms}/>
                <RoomsList rooms={sortedRooms} />
              </>
           )
}

export default withRoomConsumer(RoomsContainer)
// import React from 'react';
// import RoomsFilter from './RoomsFilter';
// import RoomsList from './RoomsList';
// import {withRoomConsumer} from '../Context'

// export default function RoomsContainer() {
//     return (
//         <RoomConsumer>
//             {value=>{
//                 const {sortedRooms, rooms} = value
//                 return(
//                     <>
//                         hello from Rooms container
//                       <RoomsFilter rooms={rooms}/>
//                       <RoomsList rooms={sortedRooms} />
//                   </>
//                 )
//             }}
//         </RoomConsumer> 
//     )
// }
