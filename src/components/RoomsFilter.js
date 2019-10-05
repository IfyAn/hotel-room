import React from 'react';
import { useContext } from 'react';
import { RoomContext } from '../Context';
import Title from '../components/Title';

//get unique value
const getUnique=(items, value)=>{
    return[...new Set(items.map(item=>item[value]))]
}
export default function RoomsFilter({rooms}) {
    const context=useContext(RoomContext)
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    }=context;
    //get unique values types
    let types=getUnique(rooms, 'type')
     //add all
     types=['all', ...types]
    //map to jsx
    types=types.map((item, index)=>{
        return <option value={item} key={index}>{item}</option>
    })
    let people=getUnique(rooms, 'capacity')
    people=people.map((item, index)=>{
        return <option value={item} key={index}>{item}</option>
    })
    return (
        <section className='filter-container'>
            <Title title='search rooms' />
            <form className="filter-form">
                {/* select-type */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type" id="type" value={type} onChange={handleChange} className='form-group'>
                  {types}
                </select>
                </div>
                {/* end of select type */}
                {/* guests */}
                <div className="form-group">
                    <label htmlFor="capacity">guests</label>
                    <select name="capacity" id="capacity" value={capacity} onChange={handleChange} className='form-group'>
                  {people}
                </select>
                </div>
                {/* end of guests */}
                {/* room price */}
                <div className="form-group">
                    <label htmlFor="price">room price ${price}</label>
                    <input type="range" value={price} name={price} min={minPrice} max={maxPrice} onChange={handleChange} id="price" className="form-control"/>
                </div>
                {/*end of room price */}
                {/* size */}
                <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <div className="size-inputs">
                    <input type="number" value={minSize} name={minSize}  onChange={handleChange} id="size" className="size-inputs"/>
                    <input type="number" value={maxSize} name={maxSize}  onChange={handleChange} id="size" className="size-inputs"/>
                    </div>
                </div>
                {/* end of size */}
                {/* extras */}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange}/>
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                   <div className="single-extra">
                       <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange}/>
                      <label htmlFor="pets">pets</label>
                    </div>
                </div>
                {/* end of extras */}
            </form>
        </section>
    )
}
