<script>
    import { createEventDispatcher } from 'svelte';
    import TextInput from '../UI/TextInput.svelte';
    import Button from '../UI/Button.svelte';

    const dispatch = createEventDispatcher();

    let title = '';
    let subtitle = '';
    let address = '';
    let imageUrl = '';
    let email = '';
    let description = '';

    function submitForm() {
        dispatch('save', {
            title: title,
            subtitle: subtitle,
            address: address,
            imageUrl: imageUrl,
            contactEmail: email,
            description: description,
            isFavorite: false,
        });
    }
</script>

<style>
    form {
        width: 30rem;
        max-width: 90%;
        margin: auto;
    }
</style>

<form on:submit|preventDefault={ submitForm }>

    <TextInput 
        id="title"  
        label="Title" 
        value="{title}"
        on:input="{event => (title = event.target.value)}" />

    <TextInput 
        id="subtitle" 
        label="Subtitle" 
        value="{subtitle}"
        on:input="{event => (subtitle = event.target.value)}" />

    <TextInput 
        id="address" 
        label="Address" 
        value="{address}"
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

    <Button type="submit">Save</Button>

</form>