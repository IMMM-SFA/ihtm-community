<script>
    import "../app.css";
    import { onDestroy, onMount } from "svelte";
    import LinkIf from "$lib/LinkIf.svelte";
    import { base } from '$app/paths';
    import { page } from '$app/stores';

    let invert = false;
    let intersect;
    let observer;

    onMount(() => {
        observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    invert = false;
                }
                else {
                    invert = true;
                }
            });
        });
        observer.observe(intersect);
    });

    onDestroy(() => {
        observer?.disconnect();
    });


</script>


<div
    class="
        bg-fixed w-screen
        bg-contain bg-no-repeat bg-[linear-gradient(to_bottom,rgba(0,0,0,0.25),rgba(0,0,0,0)_4rem),url('$lib/img/enchantments.webp')]
        flex flex-col items-center justify-start
        h-auto md:h-96
    "
>
    <div
        class="
            fixed flex flex-col w-full py-4 backdrop-blur-[2px] z-10 items-center
            {invert ? 'bg-white shadow-sm py-2' : ''}
        "
    >
        <div
            class="
                flex flex-row items-center justify-start gap-4 max-w-screen-xl w-full px-8 lg:px-24
            "
        >
            <h1
                class="
                    text-2xl font-semibold text-shadow-sm shadow-black/5
                    {invert ? 'text-brand-primary' : 'text-white'} transition-colors
                "
            >
                <LinkIf
                    href="{base}/"
                    condition={$page.url.pathname !== (base || '/')}
                    hoverClass={invert ? 'hover:border-b-brand-primary' : 'hover:border-b-white'}
                >
                    IHTM <span class="hidden sm:inline-block">Community</span>
                </LinkIf>
            </h1>
            <div
                class="
                    flex flex-row flex-1 items-center justify-between gap-4 text-shadow-sm shadow-black/5
                    font-narrow text-lg uppercase ml-8 sm:ml-16 md:ml-24 lg:ml-36 xl:ml-48
                    {invert ? 'text-brand-primary' : 'text-white'} transition-colors
                "
            >
                {#each ['about', 'resources', 'events'] as nav}
                    <LinkIf
                        href="{base}/{nav}"
                        condition={$page.url.pathname !== `${base}/${nav}`}
                        hoverClass={invert ? 'hover:border-b-brand-primary' : 'hover:border-b-white'}
                    >
                        {nav}
                    </LinkIf>
                {/each}
            </div>
        </div>
    </div>
    <h1 class="mt-16 font-narrow text-2xl md:text-4xl font-semibold text-center text-white text-shadow-sm shadow-black/25">
        Integrated Hydro-Terrestrial Modeling Community
    </h1>
    <div class="mt-auto mb-6 md:mb-12" bind:this={intersect} />
</div>

<div class="w-full">
    <slot/>
</div>
