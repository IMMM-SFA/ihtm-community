<div class="w-full">


    <div class="absolute w-full h-screen overflow-hidden pointer-events-none z-10">
        {#each [...Array(250).keys()] as r}
            <svg
                class="raindrop"
                preserveAspectRatio="xMinYMin"
                viewBox="0 0 5 50"
                style="{`--x: ${Math.floor(Math.random() * 100)}; --y: ${Math.floor(Math.random() * 100)}; --o: ${Math.random()}; --a: ${Math.random() + 0.5}; --d: ${(Math.random() * 2) - 1}; --s: ${Math.random()}`}"
            >
                <path
                    stroke="none"
                    d="M 2.5,0 C 2.6949458,3.5392017 3.344765,20.524571 4.4494577,30.9559 5.7551357,42.666753 4.5915685,50 2.5,50 0.40843152,50 -0.75513565,42.666753 0.55054234,30.9559 1.655235,20.524571 2.3050542,3.5392017 2.5,0 Z"
                />
            </svg>
    {/each}
    </div>

    <div class="clipped w-full h-screen bg-center bg-no-repeat bg-fixed flex items-center justify-center">
        <div class="flex flex-col md:flex-row overflow-hidden rounded-lg bg-white/25 backdrop-blur-[2px]">
            <div class="w-48 h-48 sm:h-72 sm:w-72">
                <img class="h-full" alt="" src="iso-ihtm_2.jpg"/>
            </div>
            <div class="w-48 h-48 sm:h-72 sm:w-72 flex items-center justify-center p-6">
                <h1
                    class="text-xl sm:text-3xl leading-normal tracking-wider"
                    style="background-clip: text;
                           color: transparent;
                           background-color: #ffffff;
                           text-shadow: rgba(185,185,185,0.5) -1px -1px 0px, rgba(100,100,100,0.15) 1px 1px 1px;"
                >
                    <span class="block">Integrated</span>
                    <span class="block">Hydro-</span>
                    <span>Terrestrial</span>
                    <span class="block">Modeling</span>
                    <span class="block">Community</span>
                </h1>
            </div>
        </div>
    </div>

    <div class="w-full flex flex-col items-stretch py-8">

        <div class="py-12 px-24 bg-brand-green shadow-black/25 drop-shadow flex flex-row flex-wrap justify-center text-white text-center text-2xl gap-x-1">
            <h3>
                Advancing national-to-regional
            </h3>
            <h3>
                capabilities for
            </h3>
            <h3>
                understanding and managing
            </h3>
            <h3>
                coupled water-land-human systems.
            </h3>
        </div>

        <div class="mx-24 p-8 flex flex-col rounded-lg text-white">
            <h4 class="text-2xl font-semibold mb-4">
                ABOUT US
            </h4>
            <div class="flex flex-row flex-wrap justify-center gap-x-12 gap-y-6">
                <div class="flex-1 flex flex-col min-w-64">
                    <p class="text-lg">
                        Our mission is to help establish a community of practice of Integrated Hydro-Terrestrial Modeling (IHTM) researchers and managers.
                    </p>
                    <br/>
                    <p class="text-lg">
                        The IHTM community aims to advance science by integrating process understanding and operational practices, enhance national capabilities for prediction and scenario-testing, and further government agency missions on integrated water resources management through collaborations.
                    </p>
                </div>
                <div class="flex-1 flex flex-col min-w-64">
                    <p class="text-lg">
                        Creating a seamless national IHTM capability requires close coordination across scientific, operational, and resource management communities. As such, our CoP emphasizes the “research to operations to research (R2O2R) pipeline,” using actionable intelligence and responding to advances in science and technology to address interconnected societal challenges.
                    </p>
                </div>
            </div>
        </div>

        <div class="px-32 py-8 flex flex-row flex-wrap justify-center gap-12 text-white shadow-black/25">
            <div class="bg-brand-green drop-shadow rounded-lg w-72 flex flex-col px-8 py-6 gap-6 cursor-pointer card">
                <h4 class="font-semibold text-2xl text-shadow">
                    Resources
                </h4>
                <img alt="" class="w-full drop-shadow" src="iso-ihtm_3.jpg"/>
                <p class="text-lg text-shadow-sm">
                    Links to ongoing projects, agency resources, and relevant data.
                </p>
            </div>
            <div class="bg-brand-green drop-shadow rounded-lg w-72 flex flex-col px-8 py-6 gap-6 cursor-pointer card">
                <h4 class="font-semibold text-2xl text-shadow">
                    Research & Reports
                </h4>
                <img alt="" class="w-full drop-shadow" src="reports.jpg"/>
                <p class="text-lg text-shadow-sm">
                    IHTM 1.0 Report<br/>
                    Coastal-IHTM Report<br/>
                    IHTM 2.0 Report
                </p>
            </div>
            <div class="bg-brand-green drop-shadow rounded-lg w-72 flex flex-col px-8 py-6 gap-6 cursor-pointer card">
                <h4 class="font-semibold text-2xl text-shadow">
                    News & Events
                </h4>
                <img alt="" class="w-full drop-shadow" src="community.jpg"/>
                <p class="text-lg text-shadow-sm">
                    Meetings & Solicitations<br/>
                    Funding Opportunities<br/>
                    Newsletter
                </p>
            </div>
        </div>

    </div>

</div>

<style>
    .clipped {
        background: url($lib/img/hero.jpg);
        clip-path: polygon(100% 0%, 100% 90%, 50% 99%, 50% 99%, 0 90%, 0 0);
    }
    .raindrop {
        animation-delay: calc(var(--d) * 1s + 2s);
        animation-duration: calc(var(--a) * 1s);
        animation-iteration-count: 2;
        animation-name: drop;
        animation-timing-function: linear;
        height: 30px;
        left: calc(var(--x) * 1%);
        position: absolute;
        top: calc((var(--y) + 50) * -1px);
    }
    .raindrop path {
        fill: #a1c6cc;
        opacity: var(--o);
        transform: scaleY(calc(var(--s) * 1.5));
    }

    @keyframes -global-drop {
        90% {
            opacity: 1;
        }
        100% {
            opacity: 0;
            transform: translateY(100vh);
        }
    }

    .card {
        transform: scale(1.0);
        transition: transform;
        transition-duration: 250ms;
    }
    .card:hover {
        transform: scale(1.1);
    }

</style>
