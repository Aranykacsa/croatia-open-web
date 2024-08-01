<script lang="ts">
    let { url }: {url: string} = $props();
</script>

<a href={url} target="_blank" rel="noopener noreferrer">
    <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-facebook"
    >
        <path d="M18 2h-3a6 6 0 0 0-6 6v3H6v4h3v8h4v-8h3l1-4h-4V8a2 2 0 0 1 2-2h3z"></path>
    </svg>
    Facebook
</a>

<style>
    a {
        display: inline-block;
        color: inherit;
        text-decoration: none;
        margin: 8px;
    }

    svg {
        vertical-align: middle;
    }
</style>
