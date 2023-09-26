<script>
    /** @type {import('./$types').PageData} */
    export let data;
    const calculatorList= data?.calculatorList ?? [];

</script>

<div>
    Pick your calculator
</div>

<ul>
    {#each calculatorList as calculator}
    <li>
        <a href="/calculator/{calculator.name}?id={calculator.id}">{calculator.name}</a>
    </li>
    {/each}
</ul>
