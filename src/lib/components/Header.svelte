<script lang="ts">
    import {goto} from "$app/navigation";
    import Hamburger from "./Hamburger.svelte"

    type navItem = {
        name: string,
        onClick: () => void,
    }

    let pages: navItem[] = [
        {
            name: "About",
            onClick: async () => await goto("about"),
        },
        {
            name: "Organizers",
            onClick: async () => await goto("organizers"),
        },
        {
            name: "Registration",
            onClick: async () => window.open("https://www.orienteeringonline.net/CompetitionBasicInfo.aspx?CompetitionID=13445")
        },
        {
            name: "Gallery",
            onClick: async () => await goto("gallery"),
        }
    ]
</script>

<div class="header">
    <div class="title-container" onclick={async () => goto("/")}>
        <div class="title">
            <label for="title">Croatia Open</label>
        </div>
        <div class="subtitle">
            <label for="subtitle">2025 aug. 01 - 03</label>
        </div>
    </div>

    <div class="nav-container">
        {#each pages as page, i}
            <div class="nav-item">
                <label class="label-style" for={page.name} onclick={page.onClick}>{page.name}</label>
            </div>
            {#if i + 1 !== pages.length}
                <div class="separator"></div>
            {/if}
        {/each}
        <img src="../../mik-logo.png" alt="">

        <Hamburger pages={pages} />
    </div>
</div>

<style lang="scss">

  @import "../../app.scss";

  .header {
    display: flex;
    justify-content: space-between; /* Space between title and navigation items */
    align-items: center; /* Center items vertically */
    background-color: #282c34;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    @include xs {
      //background-color: red;
      padding: 10px;
    }

    @include sm {
      //background-color: blue;
      padding: 15px;
    }

    @include md {
      //background-color: green;
    }

    @include lg {
      //background-color: yellow;
      padding: 20px;
    }
  }

  .title-container {
    display: flex;
    flex-direction: column; /* Stack title and subtitle vertically */
    justify-content: flex-start; /* Align title and subtitle to the left */
    flex: 1; /* Take available space to push navigation to the right */
  }

  .title {
    color: #ffffff;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bold;
    white-space: nowrap;

    @include xs {
      font-size: 1.40em;
    }

    @include md {
      font-size: 1.70em; /* Adjusted font size */
    }

    @include lg {
      font-size: 2em; /* Adjusted font size */
    }
  }

  .subtitle {
    font-size: 1.25em; /* Smaller font size for subtitle */
    color: #cccccc; /* Lighter color for subtitle */
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    white-space: nowrap; /* Prevent text from wrapping */
    margin-top: 5px; /* Small space between title and subtitle */
    padding-left: 50px; /* Push text a little to the right */

    @include xs {
      font-size: 1em; /* Decreased font size */
    }

    @include lg {
      font-size: 1.25em; /* Adjusted font size */
    }
  }


  .nav-container {
    display: flex;
    justify-content: flex-end; /* Align navigation items to the right */
    align-items: center;
  }

  .nav-item {
    display: flex;
    align-items: center;
    padding: 0 20px;
    font-size: 1.5em; /* Increased font size */
    color: #ffffff;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    @include xs {
      //background-color: red;
      font-size: 0;
    }

    @include sm {
      //background-color: blue;
      padding: 0 10px;
      font-size: 1em; /* Decreased font size */
    }

    @include md {
      //background-color: green;
      padding: 0 15px;
      font-size: 1.25em; /* Adjusted font size */
    }

    @include lg {
      //background-color: yellow;
      padding: 0 20px;
      font-size: 1.5em; /* Adjusted font size */
    }
  }

  .label-style {
    text-decoration: none;
    color: inherit;
    font-weight: 600;
    transition: color 0.3s;
  }

  .nav-item a:hover, .label-style:hover {
    color: #61dafb;
  }

  .separator {
    display: flex;
    align-items: center;
    transform: rotate(45deg);
    height: 50px; /* Set a consistent height */
    width: 4px; /* Set a consistent width */
    background-color: #61dafb; /* Light blue color for the separator */
    margin: 0 15px; /* Spacing around the separator */

    @include xs {
      width: 0;
    }

    @include sm {
      margin: 0 5px; /* Spacing around the separator */
      width: 2px;
      //height: 15px; /* Adjusted height */
    }

    @include md {
      margin: 0 10px; /* Spacing around the separator */
      width: 3px;
      //height: 18px; /* Adjusted height */
    }

    @include lg {
      margin: 0 15px; /* Spacing around the separator */
      width: 4px;
      //height: 20px; /* Adjusted height */
    }
  }

  img {
    position: relative;
    @include xs {
      //width: 30px;
      width: 0;
    }

    @include sm {
      width: 40px;
    }

    @include md {
      width: 50px;
    }

    @include lg {
      width: 60px;
    }
  }
</style>
