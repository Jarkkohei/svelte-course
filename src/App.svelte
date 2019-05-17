<script>
    import Header from './UI/Header.svelte';
    import MeetupGrid from './Meetups/MeetupGrid.svelte';
    import EditMeetup from './Meetups/EditMeetup.svelte';
    import Button from './UI/Button.svelte';
    
    let meetups = [
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
    ];

    let editMode;

    function addMeetup(event) {
        const newMeetup = event.detail;
        meetups = [newMeetup, ...meetups];
        editMode = null;
    }

    function toggleFavorite(event) {
        const id = event.detail;
        const updatedMeetup = { ...meetups.find(m => m.id === id) };
        updatedMeetup.isFavorite = !updatedMeetup.isFavorite;
        const meetupIndex = meetups.findIndex(m => m.id === id);
        const updatedMeetups = [...meetups];
        updatedMeetups[meetupIndex] = updatedMeetup;
        meetups = updatedMeetups;
    }

    function cancelEdit() {
        editMode = null;
    }
</script>

<style>
    main {
        margin-top: 5rem;
    }

    .meetup-controls {
        margin: 1rem;
    }
</style>

<Header />

<main>
    <div class="meetup-controls">
        <Button on:click="{ () =>  editMode = 'add' }">New Meetup</Button>
    </div>
    
    {#if editMode === 'add'}
        <EditMeetup on:save={addMeetup} on:cancel={cancelEdit} />
    {/if}
    
    <MeetupGrid id="meetups" {meetups} on:togglefavorite="{toggleFavorite}" />
</main>





