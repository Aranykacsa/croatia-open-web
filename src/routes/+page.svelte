<script lang="ts">
    import Header from "$lib/components/Header.svelte";
    import News from "$lib/components/News.svelte";
    import Footer from "$lib/components/Footer.svelte";

    type CardData = {
        title: string;
        description: string;
        imgUrl?: string;
    };

    const cards: CardData[] = [
        {title: 'Card 1', description: 'This is the first card', imgUrl:'./favicon.png'},
        {title: 'Card 2', description: 'This is the second card'},
        {title: 'Card 3', description: 'This is the third card'},
    ];

</script>

<Header/>
{#each cards as card}
    <News news={card}/>
{/each}

<Footer url={"https://www.facebook.com/croatiaopen.orienteering"}/>