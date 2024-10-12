<script>
    import "../app.css";
    import { page } from '$app/stores';
    import { 
        Navbar, NavBrand, NavLi, NavUl, NavHamburger,
        Footer, FooterCopyright, FooterLinkGroup, FooterBrand, FooterLink 
    } from 'flowbite-svelte';
    $: activeUrl = $page.url.pathname;

</script>
<Navbar>
    <NavBrand href="/">
        <img src="/favicon.png" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Quantum Data and Machine Learning</span>
    </NavBrand>
    <NavHamburger />
    <NavUl {activeUrl}>
        <NavLi href="/">Home</NavLi>
        <NavLi href="/docs/aims">Aims & Scope</NavLi>
        <NavLi href="/docs/dates">Important Dates</NavLi>
        <NavLi href="/docs/committee">Program Committee</NavLi>
        <NavLi href="/docs/eval">Evaluation of Papers</NavLi>
        <NavLi href="/docs/papers">Accepted Papers</NavLi>
        <NavLi href="/docs/program">Program</NavLi>
        <NavLi href="/docs/submit">Submit</NavLi>
        <NavLi href="/docs/contact">Contact</NavLi>
    </NavUl>
</Navbar>

<main class="lg:ml-0 mt-8 w-full mx-auto p-12">
    <slot />
</main>

<Footer footerType="logo">
    <!-- <div class="sm:flex sm:items-center sm:justify-between">
        <FooterBrand href="https://flowbite.com" src="/images/flowbite-svelte-icon-logo.svg" alt="Flowbite Logo" name="Flowbite" />
        <FooterLinkGroup ulClass="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
        <FooterLink href="/">About</FooterLink>
        <FooterLink href="/">Privacy Policy</FooterLink>
        <FooterLink href="/">Licensing</FooterLink>
        <FooterLink href="/">Contact</FooterLink>
        </FooterLinkGroup>
    </div> -->
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <FooterCopyright href="https://www.wis.ewi.tudelft.nl" by="Web Information Systems, Delft University of Technology, Delft, The Netherlands" />
</Footer>