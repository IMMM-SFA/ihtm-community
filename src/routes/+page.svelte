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
    ];
</script>

<div
    class="
        bg-fixed w-screen h-fit
        bg-cover bg-no-repeat bg-[url('$lib/img/hero.webp')]
        flex flex-col items-center justify-between gap-8
        px-8 py-8
    "
    style="clip-path: polygon(100% 0%, 100% 90%, 50% 99%, 50% 99%, 0 90%, 0 0);"
>
    <h1 class="text-2xl sm:text-4xl font-semibold text-center text-white text-shadow-sm shadow-black/50">
        Integrated Hydro-Terrestrial Modeling Community
    </h1>
    <div
        class="
            bg-white/75 backdrop-blur-sm shadow-black/50 shadow-lg
            w-full max-w-screen-lg
            flex flex-row flex-wrap
            mb-24
        "
    >
        <div class="w-full md:w-80 p-0.5">
            <img alt="" class="w-full h-full object-cover" src="{base}/ihtm2_workshop.png"/>
        </div>
        <div class="flex-1 flex flex-col py-1 sm:py-4 px-2 sm:px-8 sm:min-w-96">
            <h6 class="font-narrow text-gray-500 font-semibold text-base">
                NEWS
            </h6>
            <h2 class="font-narrow text-2xl font-semibold text-black">
                IHTM 2.0 Workshop
            </h2>
            <p class="font-narrow text-lg text-gray-500">
                13 December, 2023
            </p>
            <p class="text-lg text-gray-800 my-4">
                Over 160 experts from 32 academic institutions, 9 federal agencies, and various organizations met to provide updates on emerging IHTM capabilities and research gaps.
                Attendees discussed moving from community concepts towards actionable collaborative testbeds to accelerate innovations into societally relevant applications,
                with a focus on facilitating interagency engagements to inform and strengthen bridges between the research and operational communities.
            </p>
        </div>
    </div>
</div>
<div class="flex flex-col p-8 items-center">
    <h3 class="font-narrow text-xl font-semibold text-gray-800 text-center">
        Our mission is to help establish a community of practice of Integrated Hydro-Terrestrial Modeling (IHTM) researchers and managers.
    </h3>
    <p class="text-lg text-gray-800 text-center my-4 max-w-screen-sm">
        This portal supports a multidisciplinary group of researchers and managers across government agencies and academic institutions in the United States. Our community of practice (CoP) shares an interest in creating a more robust hydro-terrestrial modeling ecosystem and strives to learn from one another’s work.
    </p>
</div>
<div
    class="
        bg-fixed w-full bg-cover bg-no-repeat bg-[url('$lib/img/canyon.webp')]
        h-72 -z-10
    "
    style="clip-path: polygon(0% 10%, 50% 1%, 100% 10%, 100% 100%, 0% 100%, 0% 10%);"
/>
<div class="flex flex-col p-8 gap-8 items-center">
    <h3 class="font-narrow text-xl font-semibold text-gray-800 text-center">
        Featured Resources:
    </h3>
    <div class="flex flex-col lg:flex-row gap-8">
        {#each resources as r}
            {#if r.link}
                <a
                    class="flex flex-row shadow-md border-b border-b-brand-primary group"
                    href="{r.link}"
                    target="_blank"
                >
                    <img class="w-24 h-full p-1 object-cover" alt="{r.name}" src="{r.img}" />
                    <div class="flex flex-col gap-2 p-2">
                        <div class="flex flex-col">
                            <h6 class="font-narrow font-semibold text-xs text-gray-500 uppercase">
                                {r.type}
                            </h6>
                            <h4 class="font-narrow text-lg text-brand-primary text-shadow-sm shadow-black/10">
                                {r.name}
                            </h4>
                        </div>
                        <p class="">
                            {r.description}
                        </p>
                        <p
                            class="ml-auto font-narrow text-lg text-brand-primary border-b border-b-transparent group-hover:border-b-brand-primary"
                        >
                            View
                        </p>
                    </div>
                </a>
            {:else}
                <div
                    class="flex flex-row shadow-md border-b border-b-brand-primary"
                >
                    <img class="w-24 h-full p-1 object-cover" alt="{r.name}" src="{r.img}" />
                    <div class="flex flex-col gap-2 p-2">
                        <div class="flex flex-col">
                            <h6 class="font-narrow font-semibold text-xs text-gray-500 uppercase">
                                {r.type}
                            </h6>
                            <h4 class="font-narrow text-lg text-brand-primary text-shadow-sm shadow-black/10">
                                {r.name}
                            </h4>
                        </div>
                        <p class="">
                            {r.description}
                        </p>
                        <p
                            class="ml-auto font-narrow text-lg text-brand-primary border-b border-b-transparent"
                        >
                            Coming Soon
                        </p>
                    </div>
                </div>
            {/if}
        {/each}
    </div>
    <a class="ml-auto mr-8 text-lg font-narrow border-b border-b-transparent text-brand-primary hover:border-b-brand-primary" href="{base}/resources">
        SEE ALL
    </a>
</div>
<div
    class="
        bg-fixed bg-cover w-full bg-no-repeat bg-[url('$lib/img/river.webp')]
        h-72 -z-10
    "
    style="clip-path: polygon(0% 0%, 100% 0%, 100% 90%, 50% 99%, 0% 90%, 0% 0%);"
/>
<div class="flex flex-col lg:flex-row p-8 gap-12 items-center lg:items-start justify-center">
    <p class="text-lg text-gray-800 text-center lg:text-justify max-w-screen-sm">
        The IHTM community aims to advance science by integrating process understanding and operational practices, enhancing national capabilities for prediction and scenario-testing, and furthering government agency missions on integrated water resources management through collaborations.
    </p>
    <p class="text-lg text-gray-800 text-center lg:text-justify max-w-screen-sm">
        Creating a seamless national IHTM capability requires close coordination across scientific, operational, and resource management communities. As such, our CoP emphasizes the “research to operations to research (R2O2R) pipeline,” using actionable intelligence and responding to advances in science and technology to address interconnected societal challenges.
    </p>
</div>
<div
    class="
        bg-fixed w-full bg-cover bg-no-repeat bg-[url('$lib/img/snow.webp')]
        h-72 bg-[center_top_25vh] -z-10
    "
    style="clip-path: polygon(0% 10%, 50% 1%, 100% 10%, 100% 100%, 0% 100%, 0% 10%);"
/>
<div class="flex flex-col p-8 items-center">
    <h3 class="font-narrow text-xl font-semibold text-gray-800 text-center">
        Agencies Involved:
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