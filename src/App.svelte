<script>
    import Header from './UI/Header.svelte';
    import MeetupGrid from './Meetups/MeetupGrid.svelte';

    let title = '';
    let subtitle = '';
    let address = '';
    let imageUrl = '';
    let email = '';
    let description = '';

    let meetups = [
        {
            id: 'm1',
            title: 'Coding bootcamp',
            subtitle: 'Learn to code in 2 hours',
            description: 'In this meetup we have experts to teach us how to code.',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Meetup_Logo.png',
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

    function addMeetup() {
        const newMeetup = {
            id: Math.random().toString(),
            title: title,
            subtitle: subtitle,
            address: address,
            imageUrl: imageUrl,
            contactEmail: email,
            description: description
        };

        meetups = [newMeetup, ...meetups];
    }
</script>

<style>
    main {
        margin-top: 5rem;
    }
</style>

<Header />

<main>
    <form on:submit|preventDefault="{addMeetup}">
        <div class="form-control">
            <label for="title">Title</label>
            <input type="text" id="title" bind:value={title}>
        </div>

        <div class="form-control">
            <label for="subtitle">Subtitle</label>
            <input type="text" id="subtitle" bind:value={subtitle}>
        </div>

        <div class="form-control">
            <label for="address">Address</label>
            <input type="text" id="address" bind:value={address}>
        </div>

        <div class="form-control">
            <label for="imageUrl">Image URL</label>
            <input type="url" id="imageUrl" bind:value={imageUrl}>
        </div>

        <div class="form-control">
            <label for="contactEmail">E-mail</label>
            <input type="email" id="contactEmail" bind:value={email}>
        </div>

        <div class="form-control">
            <label for="description">Description</label>
            <textarea rows="3" id="description"  bind:value={description}/>
        </div>

        <button type="submit">Save</button>

    </form>
    <MeetupGrid id="meetups" {meetups} />
</main>





