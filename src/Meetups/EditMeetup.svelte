<script>
    import meetups from './meetups-store.js';
    import { createEventDispatcher } from 'svelte';
    import TextInput from '../UI/TextInput.svelte';
    import Button from '../UI/Button.svelte';
    import Modal from '../UI/Modal.svelte';
    import { isEmpty, isValidEmail } from '../helpers/validation.js';

    const dispatch = createEventDispatcher();

    export let id = null;

    let title = '';
    let subtitle = '';
    let address = '';
    let imageUrl = '';
    let email = '';
    let description = '';

    if(id) {
        const unsubscribe = meetups.subscribe(items => {
            const selectedMeetup = items.find(i => i.id === id);

            title = selectedMeetup.title;
            subtitle = selectedMeetup.subtitle;
            address = selectedMeetup.address;
            imageUrl = selectedMeetup.imageUrl;
            email = selectedMeetup.contactEmail;
            description = selectedMeetup.description;
        });

        unsubscribe();
    }

    $: titleValid = !isEmpty(title);
    $: subtitleValid = !isEmpty(subtitle);
    $: addressValid = !isEmpty(address);
    $: imageUrlValid = !isEmpty(imageUrl);
    $: emailValid = isValidEmail(email);
    $: descriptionValid = !isEmpty(description);

    $: formIsValid = titleValid && subtitleValid && addressValid && imageUrlValid && emailValid && descriptionValid;

    function submitForm() {
        const meetupData = {
            title: title,
            subtitle: subtitle,
            address: address,
            imageUrl: imageUrl,
            contactEmail: email,
            description: description,
        };

        if(id) {
            meetups.updateMeetup(id, meetupData);
        } else {
            meetups.addMeetup(meetupData);
        }

        dispatch('save');
    }

    function deleteMeetup() {
        meetups.deleteMeetup(id);
        dispatch('save');
    }

    function cancel() {
        dispatch('cancel');
    }
</script>

<style>
    form {
        width: 100%;
    }
</style>

<Modal title="Edit Meetup Data" on:cancel>
    <form on:submit|preventDefault={ submitForm }>
        <TextInput 
            id="title"  
            label="Title"
            valid={titleValid}
            validityMessage="Please enter a valid title."
            value="{title}"
            on:input="{event => (title = event.target.value)}" />

        <TextInput 
            id="subtitle" 
            label="Subtitle" 
            value="{subtitle}"
            valid={subtitleValid}
            validityMessage="Please enter a valid subtitle."
            on:input="{event => (subtitle = event.target.value)}" />

        <TextInput 
            id="address" 
            label="Address" 
            value="{address}"
            valid={addressValid}
            validityMessage="Please enter a valid address."
            on:input="{event => (address = event.target.value)}" />

        <TextInput 
            id="imageUrl"  
            label="Image URL"
            value="{imageUrl}"
            valid={imageUrlValid}
            validityMessage="Please enter a valid URL."
            on:input="{event => (imageUrl = event.target.value)}" />

        <TextInput 
            id="contactEmail"  
            label="E-mail"  
            value="{email}"
            valid={emailValid}
            validityMessage="Please enter a valid email."
            inputType="email"
            on:input="{event => (email = event.target.value)}" />

        <TextInput 
            id="description" 
            controlType="textarea" 
            label="Description" 
            rows="3" 
            value="{description}"
            valid={descriptionValid}
            validityMessage="Please enter a valid description."
            on:input="{event => (description = event.target.value)}" />
    </form>

    <div slot="footer">
        <Button type="button" mode="outline" on:click={cancel}>Cancel</Button>
        <Button type="button" on:click={submitForm} disabled={!formIsValid}>Save</Button>

        {#if id}
            <Button type="button" on:click={deleteMeetup}>Delete</Button>
        {/if}
    </div>
</Modal>
