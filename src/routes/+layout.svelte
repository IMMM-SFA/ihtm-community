<script>
    import "../app.css";
    import { page } from '$app/stores';
    import { base } from '$app/paths';
  </script>

<div class="w-full sticky top-0 z-10">
    <div class="w-full flex flex-row items-center bg-white px-2 sm:px-8 py-1 sm:py-4 gap-x-2 sm:gap-x-4 drop-shadow">
        <img
            alt=""
            class="w-10 h-10 rounded-full overflow-hidden drop-shadow-lg"
            src="favicon.png"
        />
        <h1 class="text-lg sm:text-2xl font-semibold text-brand-primary">
            {#if $page.url.pathname !== (base || '/')}
                <a
                    class="border-b border-b-transparent hover:border-brand-primary"
                    href="{base}/"
                >
                    IHTM <span class="hidden sm:inline-block">Community</span>
                </a>
            {:else}
                <span class="select-none">
                    IHTM <span class="hidden sm:inline-block">Community</span>
                </span>
            {/if}
        </h1>
        <div class="flex flex-row items-center ml-auto gap-x-4 sm:gap-x-8 text-base sm:text-lg uppercase text-gray-600 font-narrow">
            {#if $page.url.pathname !== `${base}/resources`}
                <a
                    class="border-b border-b-transparent hover:text-brand-primary hover:border-brand-primary"
                    href="{base}/resources"
                >
                    Resources
                </a>
            {:else}
                <span class="select-none border-b border-b-gray-300">
                    Resources
                </span>
            {/if}
        </div>
    </div>
</div>

<div class="w-full">
  <slot/>
</div>