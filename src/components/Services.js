import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
    state={
        services:[
            {
                index:1,
                icon: <FaCocktail />,
                title: 'Free coctails',
                info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur consequatur omnis quidem. Reiciendis'
            },
            {
                index:2,
                icon: <FaHiking />,
                title: 'Come Let Go For Hiking',
                info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur consequatur omnis quidem. Reiciendis'
            },
            {
                index:3,
                icon: <FaShuttleVan />,
                title: 'Pay As You Go',
                info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur consequatur omnis quidem. Reiciendis'
            },
            {
                
                index:4,
                icon: <FaBeer />,
                title: 'For the Real Men',
                info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur consequatur omnis quidem. Reiciendis'
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title='services' />
                <div className="services-center">
                    {this.state.services.map((item, index)=>{
                        return(
                            <article key={index} className="services">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                    )
                    })}
                </div>
            </section>
            
        )
    }
}
