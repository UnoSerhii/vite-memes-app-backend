import {v4 as uuidv4} from 'uuid';

export const seed = (Mem) => {
    function generateRandomLikes() {
        return Math.floor(Math.random() * 100);
    }


    const initialMemes = [
        {
            id: uuidv4(),
            name: 'Distracted Boyfriend',
            image: 'https://i.imgflip.com/1ur9b0.jpg',
            likes: generateRandomLikes(),
        },
        {
            id: uuidv4(),
            name: 'Drake Hotline Bling',
            image: 'https://i.imgflip.com/30b1gx.jpg',
            likes: generateRandomLikes(),
        },
        {
            id: uuidv4(),
            name: 'Roll Safe Think About It',
            image: 'https://i.imgflip.com/1h7in3.jpg',
            likes: generateRandomLikes(),
        },
        {
            id: uuidv4(),
            name: 'Is This a Pigeon?',
            image: 'https://i.imgflip.com/1g8my4.jpg',
            likes: generateRandomLikes(),
        },
        {
            id: uuidv4(),
            name: 'One Does Not Simply',
            image: 'https://i.imgflip.com/1bij.jpg',
            likes: generateRandomLikes(),
        },
        {
            id: uuidv4(),
            name: 'Success Kid',
            image: 'https://i.imgflip.com/1bhk.jpg',
            likes: generateRandomLikes(),
        },
        {
            id: uuidv4(),
            name: 'Grumpy Cat',
            image: 'https://i.imgflip.com/8p0a.jpg',
            likes: generateRandomLikes(),
        },
        {
            id: uuidv4(),
            name: 'Leonardo DiCaprio Cheers',
            image: 'https://i.imgflip.com/39t1o.jpg',
            likes: generateRandomLikes(),
        },
        {
            id: uuidv4(),
            name: 'Hide the Pain Harold',
            image: 'https://i.imgflip.com/gk5el.jpg',
            likes: generateRandomLikes(),
        },
        {
            id: uuidv4(),
            name: 'Waiting Skeleton',
            image: 'https://i.imgflip.com/265k.jpg',
            likes: generateRandomLikes(),
        },
    ];

    initialMemes.forEach(async meme => {
        await Mem.create({
            ...meme
        })
    })
}