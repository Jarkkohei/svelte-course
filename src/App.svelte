<script>
    import Header from './UI/Header.svelte';
    import MeetupItem from './Meetups/MeetupItem.svelte';

    const meetups = [
        {
            id: 'm1',
            title: 'Coding bootcamp',
            subtitle: 'Learn to code in 2 hours',
            description: 'In this meetup we have experts to teach us how to code.',
            imageUrl: 'https://commons.wikimedia.org/wiki/File:Meetup_Logo_2015.png',
            address: '27th Nerd Road, 432543 New York',
            contactEmail: 'code@test.com',
        },
        {
            id: 'm2',
            title: 'Coding bootcamp 2',
            subtitle: 'Learn to code in 4 hours',
            description: 'In this meetup we have experts to teach us how to code some more.',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Meetup_Logo.png',
            address: '27th Nerd Road, 432543 New York',
            contactEmail: 'code@test.com',
        }
    ];
</script>

<style>
    #meetups {
        margin-top: 5rem;
     }
</style>

<Header />

<section id="meetups">
    {#each meetups as meetup}
        <MeetupItem />
    {/each}
</section>


