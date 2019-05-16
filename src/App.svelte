<script>
    import Header from './UI/Header.svelte';
    import MeetupGrid from './Meetups/MeetupGrid.svelte';
    import TextInput from './UI/TextInput.svelte';
    import Button from './UI/Button.svelte';

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

    form {
        width: 30rem;
        max-width: 90%;
        margin: auto;
    }
</style>

<Header />

<main>
    <form on:submit|preventDefault="{addMeetup}">

        <TextInput 
            id="title"  
            label="Title" 
            value="{title}"
            inputType="text"
            on:input="{event => (title = event.target.value)}" />

        <TextInput 
            id="subtitle" 
            label="Subtitle" 
            value="{subtitle}"
            inputType="text"
            on:input="{event => (subtitle = event.target.value)}" />

        <TextInput 
            id="address" 
            label="Address" 
            value="{address}"
            inputType="text"
            on:input="{event => (address = event.target.value)}" />

        <TextInput 
            id="imageUrl"  
            label="Image URL"
            value="{imageUrl}"
            inputType="url"
            on:input="{event => (imageUrl = event.target.value)}" />

        <TextInput 
            id="contactEmail"  
            label="E-mail"  
            value="{email}"
            inputType="email"
            on:input="{event => (email = event.target.value)}" />

        <TextInput 
            id="description" 
            controlType="textarea" 
            label="Description" 
            rows="3" 
            value="{description}"
            on:input="{event => (description = event.target.value)}" />

        <Button type="submit" caption="Save" />

    </form>
    <MeetupGrid id="meetups" {meetups} />
</main>





