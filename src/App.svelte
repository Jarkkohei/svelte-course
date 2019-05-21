<script>
    import meetups from './Meetups/meetups-store.js';
    import Header from './UI/Header.svelte';
    import MeetupGrid from './Meetups/MeetupGrid.svelte';
    import EditMeetup from './Meetups/EditMeetup.svelte';
    import Button from './UI/Button.svelte';
    import MeetupDetail from './Meetups/MeetupDetail.svelte';

    import env from '../env';

    let editMode;
    let editedId;

    let page = 'overview';
    let pageData = {};

    fetch(env.FIREBASE_DATABASE_URL + 'meetups.json')
        .then(res => {
            if(!res.ok) {
                throw new Error('Fetching meetups failed. Please try again later!');
            }
            return res.json();
        })
        .then(data => {
            const loadedMeetups = [];
            for(const key in data) {
                loadedMeetups.push({
                    ...data[key],
                    id: key
                });
            }
            meetups.setMeetups(loadedMeetups);
        })
        .catch(err => {
            console.log(err); 
        });


    function saveMeetup(event) {
        editMode = null;
        editedId = null;
    }

    function cancelEdit() {
        editMode = null;
        editedId = null;
    }

    function showDetails(event) {
        page = 'details';
        pageData.id = event.detail;
    }

    function closeDetails() {
        page = 'overview';
        pageData = {};
    }

    function startEdit(event) {
        editMode = 'edit';
        editedId = event.detail;
    }
</script>

<style>
    main {
        margin-top: 5rem;
    }
</style>

<Header />

<main>
{#if page === 'overview'}
    {#if editMode === 'edit'}
        <EditMeetup id={editedId} on:save={saveMeetup} on:cancel={cancelEdit} />
    {/if}
    
    <MeetupGrid id="meetups" meetups={$meetups} on:showdetails={showDetails} on:edit={startEdit} on:add={() => {editMode = 'edit'}} />
{:else}
    <MeetupDetail id={pageData.id} on:close={closeDetails}/>
{/if}
</main>





