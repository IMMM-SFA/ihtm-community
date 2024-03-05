<script>
    import { base } from '$app/paths';

    const resources = [
        {
            name: 'IHTM 1.0',
            description: 'Lorem ipsum dolor sit amet. Placeholder for a description of this resource.',
            link: 'https://data.pnnl.gov/group/nodes/publication/13277',
            img: `${base}/ihtm1_report.jpg`,
            type: 'Report',
        },
        {
            name: 'Coastal IHTM',
            description: 'Lorem ipsum dolor sit amet. Placeholder for a description of this resource.',
            link: 'https://climatemodeling.science.energy.gov/news/coastal-integrated-hydro-terrestrial-modeling-workshop-available',
            img: `${base}/ihtmC_report.png`,
            type: 'Report',
        },
        {
            name: 'IHTM 2.0',
            description: 'Lorem ipsum dolor sit amet. Placeholder for a description of this resource.',
            link: '',
            img: `${base}/ihtm2_workshop.png`,
            type: 'Report',
        },
        {
            name: 'MultiSector Dynamics',
            description: 'Lorem ipsum dolor sit amet. Placeholder for a description of this resource.',
            link: 'https://multisectordynamics.org/',
            img: `${base}/msd_logo.webp`,
            type: 'Community',
            invert: true,
        },
        {
            name: 'Consortium of Universities for the Advancement of Hydrologic Science',
            description: 'Lorem ipsum dolor sit amet. Placeholder for a description of this resource.',
            link: 'https://www.cuahsi.org/',
            img: `${base}/cuahsi_logo.png`,
            type: 'Community',
            invert: true,
        },
        {
            name: 'Community Surface Dynamics Modeling System',
            description: 'Lorem ipsum dolor sit amet. Placeholder for a description of this resource.',
            link: 'https://csdms.colorado.edu/',
            img: `${base}/csdms_logo.png`,
            type: 'Community',
        },
    ]

</script>

<div
    class="
        bg-fixed bg-cover md:bg-cover w-full bg-no-repeat bg-[url('$lib/img/hydropower.webp')]
        h-72 -z-10 p-8
    "
>
    <h1 class="text-2xl sm:text-4xl font-semibold text-center text-white text-shadow-sm shadow-black/50">
        Community Resources
    </h1>
</div>
<div class="flex flex-col px-8 py-4 pb-16 items-center">
    <div class="flex flex-row flex-wrap gap-16 justify-center">
        {#each resources as r}
            {#if r.link}
                <a
                    class="group"
                    href={r.link}
                >
                    <div class="flex flex-row gap-8 border-b border-b-brand-primary shadow-md">
                        <img
                            alt=""
                            target="_blank"
                            rel="norefferer"
                            src={r.img}
                            class="
                                w-64 min-h-64 h-full p-1
                                {r.type === 'Report' ? 'object-cover' : 'object-contain'}
                                {r.invert ? 'invert' : ''}
                            "
                            />
                        <div class="flex flex-col w-80 gap-2 pt-2 pr-4 pb-4">
                            <div class="flex flex-col">
                                <h6 class="font-narrow font-semibold text-xs text-gray-500 uppercase">
                                    {r.type}
                                </h6>
                                <h4 class="text-lg font-semibold font-narrow text-brand-primary text-shadow-sm shadow-black/10">
                                    {r.name}
                                </h4>
                            </div>
                            <p class="text-lg text-gray-800">
                                {r.description}
                            </p>
                            <div class="ml-auto mt-auto">
                                <span class="text-brand-primary text-narrow text-semibold text-xl border-b border-b-transparent group-hover:border-b-brand-primary">
                                    View
                                </span>
                            </div>
                        </div>
                    </div>
                </a>
            {:else}
                <div class="flex flex-row gap-8 border-b border-b-brand-primary shadow-md">
                    <img alt="" src={r.img} class="w-64 min-h-64 h-full p-1 object-cover" />
                    <div class="flex flex-col w-80 gap-2 pt-2 pr-4 pb-4">
                        <div class="flex flex-col">
                            <h6 class="font-narrow font-semibold text-xs text-gray-500 uppercase">
                                {r.type}
                            </h6>
                            <h4 class="text-lg font-semibold font-narrow text-brand-primary text-shadow-sm shadow-black/10">
                                {r.name}
                            </h4>
                        </div>
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
