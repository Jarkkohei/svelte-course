<script>
    import MeetupItem from './MeetupItem.svelte';

    export let meetups;
</script>

<style>
    section {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr;
        /*grid-gap: 1rem;*/
     }

     @media (min-width: 768px) {
         section {
             grid-template-columns: repeat(2, 1fr);
         }
      }
</style>

<section>
    {#each meetups as meetup}
        <MeetupItem {...meetup} on:showdetails />
    {/each}
</section>