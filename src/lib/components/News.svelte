    <script lang="ts">
        let {news}: {
            news: {
                title: string;
                description: string;
                imgUrl?: string;
            }

        } = $props()

    </script>

    <div class="card">
        {#if news.imgUrl}
            <img src={news.imgUrl} alt={news.title} class="card-image" />
        {/if}
        <h2>{news.title}</h2>
        <p>{news.description}</p>
    </div>

    <style lang="scss">
        .card {
            border: 1px solid #ccc;
            border-radius: 8px;
            padding: 16px;
            box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);
            width: 75%;
            /*max-width: 500px;*/
            /*max-width: 500px;*/
            margin: 16px auto; /* Center the card */
            text-align: center; /* Center text for a clean look */
        }

        .card-image {
            width: 100%;
            max-width: 300px;
            height: auto;
            border-radius: 8px;
        }

        h2 {
            margin: 0;
            font-size: 1.2em;
        }

        p {
            margin: 8px 0 0;
        }
    </style>