<script>
  import "../app.css";
</script>

<div
  class={`
    w-full flex flex-row items-start lg:items-center pt-4 pb-8 px-5 gap-4 sticky top-0 h-60 lg:h-24
    bg-gradient-to-b from-white/20 to-white/0 via-white/15 z-10
    flex-wrap
  `}
>
  <div class="block-letter active">
    <span>I</span>
    <span>H</span>
    <span>T</span>
    <span>M</span>
  </div>
  <div class="flex-1 flex flex-col lg:flex-row gap-4 items-end">
    <div class="ml-auto block-letter sm">
      <span>R</span>
      <span>E</span>
      <span>S</span>
      <span>O</span>
      <span>U</span>
      <span>R</span>
      <span>C</span>
      <span>E</span>
      <span>S</span>
    </div>
    <div class="block-letter sm">
      <span>R</span>
      <span>E</span>
      <span>P</span>
      <span>O</span>
      <span>R</span>
      <span>T</span>
      <span>S</span>
    </div>
    <div class="block-letter sm">
      <span>N</span>
      <span>E</span>
      <span>W</span>
      <span>S</span>
    </div>
  </div>
</div>

<div class="w-full h-full overflow-x-none overflow-y-auto mt-[-15rem] lg:mt-[-6rem] overscroll-contain bg-brand-blue">
  <slot />
</div>

<style>
  .block-letter {
    font-size: 32px;
    font-weight: 500;
    color: black;
    display: flex;
    flex-direction: row;
    cursor: default;
  }
  .block-letter:not(.active) {
    cursor: pointer;
  }
  .block-letter.sm {
    font-size: 24px;
  }
  .block-letter span {
    display: block;
    width: 36px;
    padding: 0 2px;
    background-color: rgba(255,255,255,0.5);
    backdrop-filter: blur(2px);
    margin-right: 2px;
    text-align: center;
    transition: background-color,transform;
    transition-duration: 250ms;
  }
  .block-letter span:first-child {
    border-radius: 7px 0 0 7px;
  }
  .block-letter span:last-child {
    border-radius: 0 7px 7px 0;
  }
  .block-letter.sm span {
    width: 28px;
  }
  .block-letter:hover span, .block-letter.active span {
    background-color: rgba(255,255,255,1);
  }
  .block-letter:hover span:nth-child(odd), .block-letter.active span:nth-child(odd) {
    transform: skewY(4deg);
  }

  .block-letter:hover span:nth-child(even), .block-letter.active span:nth-child(even) {
    transform: skewY(-4deg);
  }
  
</style>
