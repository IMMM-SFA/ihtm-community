<script>
    import { base } from '$app/paths';

    const resources = [
        {
            name: 'IHTM 1.0 Report',
            description: 'Lorem ipsum dolor sit amet. Placeholder for a description of this resource.',
            link: 'https://data.pnnl.gov/group/nodes/publication/13277',
            img: `${base}/ihtm1_report.jpg`,
        },
        {
            name: 'Coastal IHTM Report',
            description: 'Lorem ipsum dolor sit amet. Placeholder for a description of this resource.',
            link: 'https://climatemodeling.science.energy.gov/news/coastal-integrated-hydro-terrestrial-modeling-workshop-available',
            img: `${base}/ihtmC_report.png`,
        },
        {
            name: 'IHTM 2.0 Report',
            description: 'Lorem ipsum dolor sit amet. Placeholder for a description of this resource.',
            link: '',
            img: `${base}/ihtm2_workshop.png`,
        },
    ]

</script>

<div
    class="
        bg-fixed bg-cover md:bg-cover w-full bg-no-repeat bg-[url('$lib/img/hydropower.webp')]
        h-72 -z-10
    "
/>

<div class="flex flex-col px-8 py-4 pb-16 items-center">
    <h3 class="text-xl text-narrow font-semibold text-gray-800 text-center mb-8">
        Resources
    </h3>
    <div class="flex flex-col gap-16">
        {#each resources as r}
            {#if r.link}
                <a
                    class="group"
                    href={r.link}
                >
                    <div class="flex flex-row gap-8 border border-brand-primary shadow shadow-black/25">
                        <div class="w-96 h-64 p-1">
                            <img alt="" src={r.img} class="w-full h-full object-cover" />
                        </div>
                        <div class="flex flex-col w-96 gap-2 pt-2 pr-4 pb-4">
                            <h4 class="text-lg font-semibold font-narrow text-gray-800">
                                {r.name}
                            </h4>
                            <p class="text-lg text-gray-800">
                                {r.description}
                            </p>
                            <div class="ml-auto mt-auto">
                                <span class="text-brand-primary text-narrow text-semibold text-xl border-b border-b-transparent group-hover:border-b-brand-primary">
                                    Download Report
                                </span>
                            </div>
                        </div>
                    </div>
                </a>
            {:else}
                <div class="flex flex-row gap-8 border border-brand-primary shadow shadow-black/25">
                    <div class="w-96 h-64 p-1">
                        <img alt="" src={r.img} class="w-full h-full object-cover" />
                    </div>
                    <div class="flex flex-col w-96 gap-2 pt-2 pr-4 pb-4">
                        <h4 class="text-lg font-semibold font-narrow text-gray-800">
                            {r.name}
                        </h4>
                        <p class="text-lg text-gray-800">
                            {r.description}
                        </p>
                        <div class="ml-auto mt-auto">
                            <span class="text-brand-primary text-narrow text-semibold text-xl border-b border-b-transparent group-hover:border-b-brand-primary">
                                Coming Soon!
                            </span>
                        </div>
                    </div>
                </div>
            {/if}
        {/each}
    </div>
</div>

<div
    class="
        bg-fixed bg-cover md:bg-cover w-full bg-no-repeat bg-[url('$lib/img/horseshoe.webp')]
        h-72 -z-10
    "
/>
