<script>
    export let condition;
    export let href;
    export let nonHoverClass = 'border-b border-b-transparent';
    export let hoverClass = 'hover:border-b-brand-primary';
    export let external = false;
</script>

{#if condition}
    <a
        href={href}
        class="{$$restProps.class || ''} {nonHoverClass} {hoverClass}"
        target={external ? '_blank' : null}
        rel={external ? 'noreferrer' : null}
    >
        <slot/>
    </a>
{:else}
    <span
        class="{$$restProps.class || ''} {nonHoverClass}"
    >
        <slot/>
    </span>
{/if}
