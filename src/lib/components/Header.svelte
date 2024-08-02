<script lang="ts">
import {goto} from "$app/navigation";
</script>

<style>
    .header {
        display: flex;
        justify-content: flex-end; /* Align items to the right */
        align-items: stretch; /* Stretch items to the height of the container */
        background-color: #282c34;
        padding: 30px;
        /*margin: 20px; !* Space around the header *!*/
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .nav-item {
        display: flex;
        align-items: center;
        padding: 0 20px;
        font-size: 1.5em; /* Increased font size */
        color: #ffffff;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .nav-item a{
        text-decoration: none;
        color: inherit;
        font-weight: 600;
        transition: color 0.3s;
    }

    .nav-item label{
        text-decoration: none;
        color: inherit;
        font-weight: 600;
        transition: color 0.3s;
    }

    .nav-item a:hover {
        color: #61dafb;
    }

    .nav-item label:hover {
        color: #61dafb;
    }

    .separator {
        display: flex;
        align-items: center;
        transform: rotate(45deg);
        width: 2px;
        background-color: #61dafb; /* Light blue color for the separator */
        margin: 0 15px; /* Spacing around the separator */
    }
</style>

<div class="header">
    <div class="nav-item">
        <label for="/About" onclick={async () => await goto("about")}>About</label>
    </div>
    <div class="separator"></div>
    <div class="nav-item">
        <label for="/About" onclick={async () => await goto("organizers")}>Organizers</label>
    </div>
    <div class="separator"></div>
    <div class="nav-item">
        <label for="/About" onclick={async () => await window.open("https://www.orienteeringonline.net/CompetitionBasicInfo.aspx?CompetitionID=13445")}>Registration</label>
    </div>

</div>
