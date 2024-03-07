<script>
    import { base } from '$app/paths';
    import { page } from '$app/stores';
    import LinkIf from "$lib/LinkIf.svelte";
    const resources = [
        {
            name: 'IHTM 1.0',
            description: 'Lorem ipsum dolor sit amet. Placeholder for a description of this resource.',
            link: 'https://data.pnnl.gov/group/nodes/publication/13277',
            img: `${base}/ihtm1_report.jpg`,
            type: 'Report',
            action: 'Read',
        },
        {
            name: 'Coastal IHTM',
            description: 'Lorem ipsum dolor sit amet. Placeholder for a description of this resource.',
            link: 'https://climatemodeling.science.energy.gov/news/coastal-integrated-hydro-terrestrial-modeling-workshop-available',
            img: `${base}/ihtmC_report.png`,
            type: 'Report',
            action: 'Read',
        },
        {
            name: 'IHTM 2.0',
            description: 'Lorem ipsum dolor sit amet. Placeholder for a description of this resource.',
            link: '',
            img: `${base}/ihtm2_workshop.png`,
            type: 'Report',
            action: 'Coming Soon!'
        },
    ];
</script>

<div class="flex flex-row pt-8 pb-8 items-center justify-center gap-12 px-12">
    <img
        alt=""
        class="hidden lg:block shrink-0 w-36 h-36 rounded-full overflow-hidden drop-shadow-lg"
        src="favicon.png"
    />
    <div class="flex flex-col items-center gap-4">
        <h3 class="font-narrow text-xl font-semibold text-gray-800 text-center">
            Our mission is to help establish a community of practice of Integrated Hydro-Terrestrial Modeling (IHTM) researchers and managers.
        </h3>
        <p class="text-lg text-gray-800 text-center max-w-screen-sm">
            This portal supports a multidisciplinary group of researchers and managers across government agencies and academic institutions in the United States. Our community of practice (CoP) shares an interest in creating a more robust hydro-terrestrial modeling ecosystem and strives to learn from one another’s work.
        </p>
    </div>
    <img
        alt=""
        class="hidden lg:block shrink-0 w-36 h-36 rounded-full overflow-hidden drop-shadow-lg"
        src="iso-ihtm_3.jpg"
    />
</div>

<div
    class="
        bg-fixed w-full bg-cover bg-no-repeat bg-[url('$lib/img/canyon.webp')]
        h-32 md:h-72 -z-10
    "
/>

<div class="flex flex-col p-8 gap-8 items-center max-w-screen-xl mx-auto">
    <h3 class="font-narrow text-xl font-semibold text-gray-800 text-center">
        Featured Resources:
    </h3>
    <div class="flex flex-row flex-wrap gap-12 justify-evenly w-full">
        {#each resources as r}
            <LinkIf
                href={r.link}
                condition={!!r.link}
                class='group'
                nonHoverClass=''
                hoverClass=''
            >
                <div class="flex flex-col w-64">
                    <img class="w-64 h-36 object-cover" alt="{r.name}" src="{r.img}" />
                    <h6 class="mt-2 font-narrow font-semibold text-xs text-gray-500 uppercase">
                        {r.type}
                    </h6>
                    <h4 class="font-narrow text-lg text-brand-primary text-shadow-sm shadow-black/10">
                        {r.name}
                    </h4>
                    <p class="">
                        {r.description}
                    </p>
                    <span class="w-fit uppercase font-narrow text-sm text-brand-primary">
                        {#if r.link}
                            <span>
                                › 
                            </span>
                        {/if}
                        <span
                            class="border-b border-b-transparent {r.link ? 'group-hover:border-b-brand-primary' : ''}"
                        >
                            {r.action}
                        </span>
                    </span>
                </div>
            </LinkIf>
        {/each}
    </div>
    <a class="ml-auto mr-8 text-lg font-narrow border-b border-b-transparent text-brand-primary hover:border-b-brand-primary" href="{base}/resources">
        SEE ALL
    </a>
</div>

<div
    class="
        bg-fixed bg-cover w-full bg-no-repeat bg-[url('$lib/img/river.webp')]
        h-32 md:h-72 -z-10
    "
/>

<div class="flex flex-col lg:flex-row p-8 gap-12 items-center lg:items-start justify-center">
    <p class="text-lg text-gray-800 text-center lg:text-justify flex-1 max-w-screen-sm">
        The IHTM community aims to advance science by integrating process understanding and operational practices, enhancing national capabilities for prediction and scenario-testing, and furthering government agency missions on integrated water resources management through collaborations.
    </p>
    <p class="text-lg text-gray-800 text-center lg:text-justify flex-1 max-w-screen-sm">
        Creating a seamless national IHTM capability requires close coordination across scientific, operational, and resource management communities. As such, our CoP emphasizes the “research to operations to research (R2O2R) pipeline,” using actionable intelligence and responding to advances in science and technology to address interconnected societal challenges.
    </p>
</div>

<div
    class="
        bg-fixed w-full bg-cover bg-no-repeat bg-[url('$lib/img/snow.webp')]
        h-32 md:h-72 bg-[center_top_25vh] -z-10
    "
/>

<div class="flex flex-col p-8 items-center">
    <h3 class="font-narrow text-xl font-semibold text-gray-800 text-center">
        Organizations:
    </h3>
    <div class="flex flex-row flex-wrap gap-12 items-center justify-around">
        <a
            class=""
            href="https://multisectordynamics.org/"
            target="_blank"
            rel="noreferrer"
        >
            <img class="invert w-48 h-48 object-contain opacity-95 hover:opacity-100" alt="MSD" src="{base}/msd_logo.webp" />
        </a>
        <a
            class=""
            href="https://www.cuahsi.org/"
            target="_blank"
            rel="noreferrer"
        >
            <img class="invert w-48 h-48 object-contain opacity-95 hover:opacity-100" alt="MSD" src="{base}/cuahsi_logo.png" />
        </a>
        <a
            class=""
            href="https://csdms.colorado.edu/"
            target="_blank"
            rel="noreferrer"
        >
            <img class="w-48 h-36 object-contain opacity-95 hover:opacity-100" alt="MSD" src="{base}/csdms_logo.png" />
        </a>
    </div>
</div>
