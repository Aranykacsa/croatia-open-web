<script lang="ts">
    import { onMount } from 'svelte';
    let angle = $state(0);

    onMount(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const { clientX, clientY } = event;
            const { innerWidth, innerHeight } = window;

            const centerX = innerWidth / 2;
            const centerY = innerHeight / 2;

            const deltaX = clientX - centerX;
            const deltaY = clientY - centerY;

            angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    });
</script>

<style>
    .compass {
        width: 100px;
        height: 100px;
        background: url('/compass.svg') no-repeat center center;
        background-size: contain;
        transform: rotate(calc(var(--angle, 0) * 1deg));
        transition: transform 0.1s ease-out;
    }
</style>

<div class="compass" style="--angle: {angle}"></div>
