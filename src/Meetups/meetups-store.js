import { writable } from 'svelte/store';

const meetups = writable([
    {
        id: 'm1',
        title: 'Coding bootcamp',
        subtitle: 'Learn to code in 2 hours',
        description: 'In this meetup we have experts to teach us how to code.',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Meetup_Logo.png',
        address: '27th Nerd Road, 432543 New York',
        contactEmail: 'code@test.com',
        isFavorite: false,
    },
    {
        id: 'm2',
        title: 'Coding bootcamp 2',
        subtitle: 'Learn to code in 4 hours',
        description: 'In this meetup we have experts to teach us how to code some more.',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Meetup_Logo.png',
        address: '27th Nerd Road, 432543 New York',
        contactEmail: 'code@test.com',
        isFavorite: false,
    }
]);

const customMeetupsStore = {
    subscribe: meetups.subscribe,
    addMeetup: (meetupData) => {
        const newMeetup = {
            ...meetupData,
            id: Math.random().toString(),
            isFavorite: false
        };

        meetups.update(items => {
            return [newMeetup, ...items];
        });
    },
    toggleFavorite: (id) => {
        meetups.update(items => {
            const updatedMeetup = { ...items.find(m => m.id === id) };
            updatedMeetup.isFavorite = !updatedMeetup.isFavorite;
            const meetupIndex = items.findIndex(m => m.id === id);
            const updatedMeetups = [...items];
            updatedMeetups[meetupIndex] = updatedMeetup;
            return updatedMeetups;
        });
    },
};

export default customMeetupsStore;