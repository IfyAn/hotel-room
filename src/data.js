import room1 from './images/room1.jpg';
import room2 from './images/room2.jpg';
import room3 from './images/room3.jpg';
import room4 from './images/room4.jpg';
import pic1 from './images/pic1.jpg';
import pic2 from './images/pic2.jpg';
import pic3 from './images/pic3.jpg';
import pic4 from './images/pic4.jpg';
import pic5 from './images/pic5.jpg';
import pic6 from './images/pic6.jpg';
import pic7 from './images/pic7.jpg';
import pic8 from './images/pic8.jpg';
import pic9 from './images/pic9.jpg';
import pic10 from './images/pic10.jpg';
import pic11 from './images/pic11.jpg';
import pic12 from './images/pic12.jpg';

export default [
    {
        sys : {
            id: '1'
        },
        fields : {
            name: 'single-economy',
            slug: 'single-economy',
            type: 'single',
            price: 100,
            size: 200,
            capacity: 1,
            pets: false,
            breakfast: false,
            featured: false,
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, autem consectetur nisi repudiandae mollitia itaque.',
            extras:[
                'Plush pillows & breathable linens',
                'Soft, oversizebath towels',
                'Full-sized ph-balanced toiletries',
                'Complimentries refershment',
                'Adequate safety/Security',
                'Internet',
                'Confortable beds' 
            ],
            images:[
                {
                    fields:{
                        file:{
                            url: pic1
                        }
                    }
                },
                {
                    fields:{
                        file:{
                            url: room2
                        }
                    }
                },
                {
                    fields:{
                        file:{
                            url: room3
                        }
                    }
                },
                {
                    fields:{
                        file:{
                            url: room4
                        }
                    }
                },
            ]
        }
    },
    {
        sys : {
            id: '2'
        },
        fields : {
            name: 'single-basic',
            slug: 'single-basic',
            type: 'single',
            price: 150,
            size: 250,
            capacity: 1,
            pets: false,
            breakfast: false,
            featured: false,
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, autem consectetur nisi repudiandae mollitia itaque.',
            extras:[
                'Plush pillows & breathable linens',
                'Soft, oversizebath towels',
                'Full-sized ph-balanced toiletries',
                'Complimentries refershment',
                'Adequate safety/Security',
                'Internet',
                'Confortable beds' 
            ],
            images:[
                {
                    fields:{
                        file:{
                            url: pic2
                        }
                    }
                },
                {
                    fields:{
                        file:{
                            url: room2
                        }
                    }
                },
                {
                    fields:{
                        file:{
                            url: room3
                        }
                    }
                },
                {
                    fields:{
                        file:{
                            url: room4
                        }
                    }
                },
            ]
        }
    },
    {
        sys : {
            id: '3'
        },
        fields : {
            name: 'single-standard',
            slug: 'single-standard',
            type: 'single',
            price: 250,
            size: 300,
            capacity: 1,
            pets: true,
            breakfast: false,
            featured: false,
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, autem consectetur nisi repudiandae mollitia itaque.',
            extras:[
                'Plush pillows & breathable linens',
                'Soft, oversizebath towels',
                'Full-sized ph-balanced toiletries',
                'Complimentries refershment',
                'Adequate safety/Security',
                'Internet',
                'Confortable beds' 
            ],
            images:[
                {
                    fields:{
                        file:{
                            url: pic3
                        }
                    }
                },
                {
                    fields:{
                        file:{
                            url: room2
                        }
                    }
                },
                {
                    fields:{
                        file:{
                            url: room3
                        }
                    }
                },
                {
                    fields:{
                        file:{
                            url: room4
                        }
                    }
                },
            ]
        }
    },
    {
        sys : {
            id: '4'
        },
        fields : {
            name: 'single-deluxe',
            slug: 'single-deluxe',
            type: 'single',
            price: 300,
            size: 400,
            capacity: 1,
            pets: true,
            breakfast: true,
            featured: false,
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, autem consectetur nisi repudiandae mollitia itaque.',
            extras:[
                'Plush pillows & breathable linens',
                'Soft, oversizebath towels',
                'Full-sized ph-balanced toiletries',
                'Complimentries refershment',
                'Adequate safety/Security',
                'Internet',
                'Confortable beds' 
            ],
            images:[
                {
                    fields:{
                        file:{
                            url: pic4
                        }
                    }
                },
                {
                    fields:{
                        file:{
                            url: room2
                        }
                    }
                },
                {
                    fields:{
                        file:{
                            url: room3
                        }
                    }
                },
                {
                    fields:{
                        file:{
                            url: room4
                        }
                    }
                },
            ]
        }
    },
    {
        sys : {
            id: '5'
        },
        fields : {
            name: 'single-standard',
            slug: 'single-standard',
            type: 'single',
            price: 350,
            size: 400,
            capacity: 1,
            pets: true,
            breakfast: false,
            featured: false,
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, autem consectetur nisi repudiandae mollitia itaque.',
            extras:[
                'Plush pillows & breathable linens',
                'Soft, oversizebath towels',
                'Full-sized ph-balanced toiletries',
                'Complimentries refershment',
                'Adequate safety/Security',
                'Internet',
                'Confortable beds' 
            ],
            images:[
                {
                    fields:{
                        file:{
                            url: pic5
                        }
                    }
                },
                {
                    fields:{
                        file:{
                            url: room2
                        }
                    }
                },
                {
                    fields:{
                        file:{
                            url: room3
                        }
                    }
                },
                {
                    fields:{
                        file:{
                            url: room4
                        }
                    }
                },
            ]
        }
    },
    {
        sys : {
            id: '6'
        },
        fields : {
            name: 'double-basic',
            slug: 'double-basic',
            type: 'double',
            price: 250,
            size: 350,
            capacity: 2,
            pets: false,
            breakfast: false,
            featured: false,
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, autem consectetur nisi repudiandae mollitia itaque.',
            extras:[
                'Plush pillows & breathable linens',
                'Soft, oversizebath towels',
                'Full-sized ph-balanced toiletries',
                'Complimentries refershment',
                'Adequate safety/Security',
                'Internet',
                'Confortable beds' 
            ],
            images:[
                {
                    fields:{
                        file:{
                            url: pic6
                        }
                    }
                },
                {
                    fields:{
                        file:{
                            url: room2
                        }
                    }
                },
                {
                    fields:{
                        file:{
                            url: room3
                        }
                    }
                },
                {
                    fields:{
                        file:{
                            url: room4
                        }
                    }
                },
            ]
        }
    },
    {
        sys : {
            id: '7'
        },
        fields : {
            name: 'single-standard',
            slug: 'single-standard',
            type: 'single',
            price: 450,
            size: 500,
            capacity: 1,
            pets: true,
            breakfast: false,
            featured: true,
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, autem consectetur nisi repudiandae mollitia itaque.',
            extras:[
                'Plush pillows & breathable linens',
                'Soft, oversizebath towels',
                'Full-sized ph-balanced toiletries',
                'Complimentries refershment',
                'Adequate safety/Security',
                'Internet',
                'Confortable beds' 
            ],
            images:[
                {
                    fields:{
                        file:{
                            url: pic7
                        }
                    }
                },
                {
                    fields:{
                        file:{
                            url: room2
                        }
                    }
                },
                {
                    fields:{
                        file:{
                            url: room3
                        }
                    }
                },
                {
                    fields:{
                        file:{
                            url: room4
                        }
                    }
                },
            ]
        }
    },
    {
        sys : {
            id: '8'
        },
        fields : {
            name: 'single-standard',
            slug: 'single-standard',
            type: 'single',
            price: 500,
            size: 550,
            capacity: 1,
            pets: true,
            breakfast: false,
            featured: false,
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, autem consectetur nisi repudiandae mollitia itaque.',
            extras:[
                'Plush pillows & breathable linens',
                'Soft, oversizebath towels',
                'Full-sized ph-balanced toiletries',
                'Complimentries refershment',
                'Adequate safety/Security',
                'Internet',
                'Confortable beds' 
            ],
            images:[
                {
                    fields:{
                        file:{
                            url: pic8
                        }
                    }
                },
                {
                    fields:{
                        file:{
                            url: room2
                        }
                    }
                },
                {
                    fields:{
                        file:{
                            url: room3
                        }
                    }
                },
                {
                    fields:{
                        file:{
                            url: room4
                        }
                    }
                },
            ]
        }
    },
    {
        sys : {
            id: '9'
        },
        fields : {
            name: 'family-economy',
            slug: 'family-economy',
            type: 'family',
            price: 300,
            size: 500,
            capacity: 3,
            pets: false,
            breakfast: false,
            featured: true,
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, autem consectetur nisi repudiandae mollitia itaque.',
            extras:[
                'Plush pillows & breathable linens',
                'Soft, oversizebath towels',
                'Full-sized ph-balanced toiletries',
                'Complimentries refershment',
                'Adequate safety/Security',
                'Internet',
                'Confortable beds' 
            ],
            images:[
                {
                    fields:{
                        file:{
                            url: pic9
                        }
                    }
                },
                {
                    fields:{
                        file:{
                            url: room2
                        }
                    }
                },
                {
                    fields:{
                        file:{
                            url: room3
                        }
                    }
                },
                {
                    fields:{
                        file:{
                            url: room4
                        }
                    }
                },
            ]
        }
    },
    {
        sys : {
            id: '10'
        },
        fields : {
            name: 'family-basic',
            slug: 'family-basic',
            type: 'family',
            price: 350,
            size: 550,
            capacity: 4,
            pets: false,
            breakfast: false,
            featured: false,
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, autem consectetur nisi repudiandae mollitia itaque.',
            extras:[
                'Plush pillows & breathable linens',
                'Soft, oversizebath towels',
                'Full-sized ph-balanced toiletries',
                'Complimentries refershment',
                'Adequate safety/Security',
                'Internet',
                'Confortable beds' 
            ],
            images:[
                {
                    fields:{
                        file:{
                            url: pic10
                        }
                    }
                },
                {
                    fields:{
                        file:{
                            url: room2
                        }
                    }
                },
                {
                    fields:{
                        file:{
                            url: room3
                        }
                    }
                },
                {
                    fields:{
                        file:{
                            url: room4
                        }
                    }
                },
            ]
        }
    },
    {
        sys : {
            id: '11'
        },
        fields : {
            name: 'family-standard',
            slug: 'family-standard',
            type: 'family',
            price: 400,
            size: 600,
            capacity: 5,
            pets: true,
            breakfast: false,
            featured: false,
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, autem consectetur nisi repudiandae mollitia itaque.',
            extras:[
                'Plush pillows & breathable linens',
                'Soft, oversizebath towels',
                'Full-sized ph-balanced toiletries',
                'Complimentries refershment',
                'Adequate safety/Security',
                'Internet',
                'Confortable beds' 
            ],
            images:[
                {
                    fields:{
                        file:{
                            url: pic11
                        }
                    }
                },
                {
                    fields:{
                        file:{
                            url: room2
                        }
                    }
                },
                {
                    fields:{
                        file:{
                            url: room3
                        }
                    }
                },
                {
                    fields:{
                        file:{
                            url: room4
                        }
                    }
                },
            ]
        }
    },
    {
        sys : {
            id: '12'
        },
        fields : {
            name: 'family-deluxe',
            slug: 'family-deluxe',
            type: 'family',
            price: 500,
            size: 700,
            capacity: 6,
            pets: true,
            breakfast: true,
            featured: true,
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, autem consectetur nisi repudiandae mollitia itaque.',
            extras:[
                'Plush pillows & breathable linens',
                'Soft, oversizebath towels',
                'Full-sized ph-balanced toiletries',
                'Complimentries refershment',
                'Adequate safety/Security',
                'Internet',
                'Confortable beds' 
            ],
            images:[
                {
                    fields:{
                        file:{
                            url: pic12
                        }
                    }
                },
                {
                    fields:{
                        file:{
                            url: room2
                        }
                    }
                },
                {
                    fields:{
                        file:{
                            url: room3
                        }
                    }
                },
                {
                    fields:{
                        file:{
                            url: room4
                        }
                    }
                },
            ]
        }
    },
    {
        sys : {
            id: '13'
        },
        fields : {
            name: 'Presidential-Suit',
            slug: 'Prasidential-Suit',
            type: 'presidential',
            price: 700,
            size: 800,
            capacity: 8,
            pets: true,
            breakfast: true,
            featured: true,
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, autem consectetur nisi repudiandae mollitia itaque.',
            extras:[
                'Plush pillows & breathable linens',
                'Soft, oversizebath towels',
                'Full-sized ph-balanced toiletries',
                'Complimentries refershment',
                'Adequate safety/Security',
                'Internet',
                'Confortable beds' 
            ],
            images:[
                {
                    fields:{
                        file:{
                            url: pic12
                        }
                    }
                },
                {
                    fields:{
                        file:{
                            url: room2
                        }
                    }
                },
                {
                    fields:{
                        file:{
                            url: room3
                        }
                    }
                },
                {
                    fields:{
                        file:{
                            url: room4
                        }
                    }
                },
            ]
        }
    }
]