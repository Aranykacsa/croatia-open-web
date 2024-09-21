<script lang="ts">
    let url: string = "https://www.facebook.com/croatiaopen.orienteering"
</script>

<div class="footer">
    <a href={url} target="_blank" rel="noopener noreferrer">
<!--        <img src="/facebook.png" alt="facebook logo">-->

    </a>
    <label for="">FaceBook</label>
</div>

<style>
    .footer {
        background-color: #282C34FF;
    }
    a {
        display: inline-block;
        color: inherit;
        text-decoration: none;
        /*margin: 8px;*/
    }

    svg {
        vertical-align: middle;
    }

    label {
        display: flex;
        align-items: center;
        padding: 0 0 20px 20px;
        font-size: 1em; /* Increased font size */
        color: #ffffff;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
</style>
