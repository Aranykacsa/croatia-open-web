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
        <div class="nav-item">
            <label class="label-style" onclick={async () => await goto("about")}>{"About"}</label>
        </div>
        <div class="separator"></div>

        <div class="nav-item">
            <label class="label-style" onclick={async () => await goto("organizers")}>{"Organizers"}</label>
        </div>
        <div class="separator"></div>

        <div class="nav-item">
            <label class="label-style"
                   onclick={async () => window.open("https://www.orienteeringonline.net/CompetitionBasicInfo.aspx?CompetitionID=13445")}>{"Registration"}</label>
        </div>

        <Hamburger pages={pages}/>
    </div>
    <img src="../../mik-logo.png" alt="">

</div>

<style lang="scss">

  @import "../../app.scss";

  .header {
    z-index: 1;
    display: flex;
    top: 0;
    left: 0;
    width: 100%;
    position: fixed;
    justify-content: space-between; /* Space between title and navigation items */
    align-items: center; /* Center items vertically */
    background-color: #282c34;
    padding: 25px;
    //height: auto;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    height: 40px;
  }

  .title-container {
    display: flex;
    flex-direction: column; /* Stack title and subtitle vertically */
    justify-content: flex-start; /* Align title and subtitle to the left */
    flex: 1; /* Take available space to push navigation to the right */
    transition: color 0.3s;
  }

  .title {
    padding-right: 10px;
    font-size: 1.5em; /* Smaller font size for subtitle */
    color: #ffffff;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bold;
    white-space: nowrap;
  }

  .subtitle {
    font-size: 1em; /* Smaller font size for subtitle */
    color: #cccccc; /* Lighter color for subtitle */
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    white-space: nowrap; /* Prevent text from wrapping */
    margin-top: 5px; /* Small space between title and subtitle */
    padding-left: 50px; /* Push text a little to the right */
  }


  .nav-container {
    display: flex;
    justify-content: flex-end; /* Align navigation items to the right */
    align-items: center;
  }

  .nav-item {
    position: relative;
    right: 60px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    font-size: 1.25em; /* Increased font size */
    color: #ffffff;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
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
    position: relative;
    right: 60px;
    display: flex;
    align-items: center;
    transform: rotate(45deg);
    height: 50px; /* Set a consistent height */
    width: 4px; /* Set a consistent width */
    background-color: #61dafb; /* Light blue color for the separator */
    margin: 0 15px; /* Spacing around the separator */
  }

  img {
    position: relative;
    right: 50px;
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
