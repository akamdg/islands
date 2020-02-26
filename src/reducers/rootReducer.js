const initState = {
    posts: [
        {id: '1', title: 'Pitcairn Island', location: 'Located 3,240 miles from the coast of New Zealand', population: 'Population is around 50 people', climate: 'The island has a subtropical oceanic climate with a hot summer from December to March', wildlife: 'The wildlife consists of lions, tigers, and bears', body: 'Considered the most remote island in the world, Pitcairn was inhabited by the crew of the HMS Bounty. The island is part of a group of four volcanic islands that include Henderson, Ducie, and Oneo. All of the other islands are uninhabited'},
        {id: '2', title: 'Easter Island', location: 'Located 2,2182 miles from Chile', population: 'Population is around 5,761 people', climate: 'The climate is...', wildlife: 'The wildlife consists of lions, tigers, and bears', body: 'Famous for its monumental stone satues, Easter Island is owned by Chile.'},
        {id: '3', title: 'The Keguelen Islands', location: 'Located 2,050 miles from the coast of Madgascar', population: 'Population is around 130 people', climate: 'The climate is...', wildlife: 'The wildlife consists of lions, tigers, and bears', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem velit recusandae quibusdam voluptates iusto aliquid nulla quisquam dolor aliquam quaerat quidem aspernatur, dolore, beatae asperiores deleniti? Asperiores minima ducimus possimus!'},
        {id: '4', title: 'Amsterdam Island', location: 'Located 2,500 miles from Africa', population: 'Population is 28 people', climate: 'The climate is...', wildlife: 'The wildlife consists of lions, tigers, and bears', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem velit recusandae quibusdam voluptates iusto aliquid nulla quisquam dolor aliquam quaerat quidem aspernatur, dolore, beatae asperiores deleniti? Asperiores minima ducimus possimus!'},
        {id: '5', title: 'Bouvet Island', location: 'Located more than 1,000 miles from Antartica', population: 'Population is 0', climate: 'The climate is...', wildlife: 'The wildlife consists of lions, tigers, and bears', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem velit recusandae quibusdam voluptates iusto aliquid nulla quisquam dolor aliquam quaerat quidem aspernatur, dolore, beatae asperiores deleniti? Asperiores minima ducimus possimus!'},
        {id: '6', title: 'Niue', location: 'Located 1,500 miles east of New Zealand', population: 'Population is around 1,624 people', climate: 'The climate is...', wildlife: 'The wildlife consists of lions, tigers, and bears', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem velit recusandae quibusdam voluptates iusto aliquid nulla quisquam dolor aliquam quaerat quidem aspernatur, dolore, beatae asperiores deleniti? Asperiores minima ducimus possimus!'}


    ]
}


const rootReducer = (state = initState, action) => {
    console.log(action);
    if(action.type === 'DELETE_POST'){
        let newPosts = state.posts.filter(post => {
            return post.id !== action.id
        });
        return {
            ...state,
            posts: newPosts
    }
}
return state;
}
export default rootReducer

