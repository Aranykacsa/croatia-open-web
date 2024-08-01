<script lang="ts">
    import Header from "$lib/components/Header.svelte";
    import News from "$lib/components/News.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import descriptions from '$lib/content/content.json';

    type CardData = {
        title: string;
        description: string;
        imgUrl?: string;
        date: string;
    };

    const cards: CardData[] = [
        {title: 'Card 1', date: '2024.08.01', description: descriptions.description1, imgUrl:'./favicon.png'},
        {title: 'Card 2', date: '2024.08.01', description: descriptions.description2},
        {title: 'Card 3', date: '2024.08.01', description: 'This is the third card🤣'},
        {title: 'Card 4', date: '2024.08.01', description: descriptions.description4},
    ];

</script>

<Header/>
{#each cards as card}
    <News news={card}/>
{/each}

<Footer url={"https://www.facebook.com/croatiaopen.orienteering"}/>