<script>
  import Testimonials from '$lib/components/testimonials/Testimonials.svelte';
  import SeoForm from '$lib/components/seoChecker/SeoForm.svelte';
  import ProjectInMind from '$lib/Cta/project-In-mind.svelte';
  import { fade } from 'svelte/transition';
  import { site_name } from '$lib/info';
  import { page } from '$app/stores';

  let name;
  let email;
  let message;
  let honeypot = '';
  let phone;
  let display_message = false;

  async function handleSubmit() {
    const res = await fetch(
      'https://hook.us1.make.com/38umae64e4jyqn5ysvwsctoqeeqgayun',
      {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        body: JSON.stringify({
          name: name,
          eml: email,
          message: message,
          eml2: honeypot,
          phone: phone.replace(/[^+\d]+/g, ''),
          page_source: $page.url.href,
        }), // body data type must match "Content-Type" header
      },
    );
    display_message = res.status == 200 ? true : false;
  }
</script>

<svelte:head>
  <title>Maryland SEO Company</title>
  <meta
    name="description"
    content="WebLime is a trusted web design company in Maryland with experience building results-driven web-based solutions."
  />
  <link rel="canonical" href={$page.url.href} />

  <!-- Open Graph / Facebook -->
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content={site_name} />
  <meta property="og:url" content={$page.url.href} />
  <meta property="og:title" content="Maryland Web Design Company" />
  <meta
    property="og:description"
    content="WebLime is a trusted web design company in Maryland with experience building results-driven web-based solutions."
  />
  <meta
    property="og:image"
    content="https://www.weblime.com/images/seo/weblime-digital-agency.jpg"
  />
</svelte:head>

<main class="mx-auto">
  <!-- Hero section -->
  <div class="bg-slate-900">
    <div class="mx-auto max-w-7xl lg:pb-14">
      <div class="lg:grid lg:grid-cols-12 lg:gap-8">
        <div
          class="px-4 sm:px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left"
        >
          <div>
            <h1
              class="text-4xl font-extrabold tracking-tight text-white sm:leading-none lg:text-5xl xl:text-6xl"
            >
              Maryland
              <span class="text-primary-400"> Web Design Company</span>
              <!-- <span class=" md:block">Web Design Company</span> -->
            </h1>
            <p
              class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
            >
              Get your Maryland business to stand out from the competition with
              an online presence that improves your bottom line.
            </p>
            <p
              class="mt-8 text-sm font-semibold uppercase tracking-wide text-white sm:mt-10"
            >
              The best solutions in the game
            </p>
            <div class="mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0">
              <div class="flex flex-wrap items-start justify-between">
                <div class="flex justify-center px-1">
                  <!-- Stripe logo -->
                  <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    class="h-9 sm:h-10"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 200.4 66.5"
                    ><defs
                      ><style>
                        .cls-1,
                        .cls-2 {
                          fill: #1f2937;
                        }
                        .cls-1 {
                          fill-rule: evenodd;
                        }
                      </style></defs
                    ><title>stripe</title><g id="layer1"
                      ><g id="Stripe"
                        ><path
                          id="path5516"
                          class="cls-1"
                          d="M175.32,34.29c0-10.68-5.17-19.11-15.06-19.11s-15.95,8.43-15.95,19c0,12.56,7.1,18.91,17.28,18.91a23.22,23.22,0,0,0,11.56-2.72V42.06a22.27,22.27,0,0,1-10.22,2.29c-4.05,0-7.64-1.42-8.1-6.34h20.41C175.24,37.47,175.32,35.29,175.32,34.29Zm-20.62-4c0-4.72,2.88-6.68,5.51-6.68s5.26,2,5.26,6.68Z"
                        /><path
                          id="path5518"
                          class="cls-1"
                          d="M128.2,15.18A11.81,11.81,0,0,0,120,18.43l-.54-2.58H110.3V64.51l10.43-2.21,0-11.81a11.82,11.82,0,0,0,7.39,2.63c7.47,0,14.27-6,14.27-19.24,0-12.11-6.92-18.7-14.23-18.7Zm-2.5,28.75a6.25,6.25,0,0,1-4.93-2l0-15.48a6.23,6.23,0,0,1,5-2c3.8,0,6.43,4.26,6.43,9.73S129.54,43.93,125.7,43.93Z"
                        /><polygon
                          id="polygon5520"
                          class="cls-1"
                          points="106.42 10.46 106.42 1.99 95.94 4.2 95.94 12.72 106.42 10.46"
                        /><rect
                          id="rect5522"
                          class="cls-1"
                          x="95.94"
                          y="15.89"
                          width="10.48"
                          height="36.52"
                        /><path
                          id="path5524"
                          class="cls-1"
                          d="M84.72,19l-.67-3.09H75V52.41H85.47V27.66c2.46-3.22,6.63-2.63,7.93-2.17v-9.6c-1.34-.5-6.22-1.42-8.68,3.09Z"
                        /><path
                          id="path5526"
                          class="cls-1"
                          d="M63.85,6.83,53.67,9l-.05,33.43A10.49,10.49,0,0,0,64.43,53.16a16.15,16.15,0,0,0,7.31-1.38V43.31c-1.34.54-7.93,2.46-7.93-3.72V24.78h7.93V15.89H63.81Z"
                        /><path
                          id="path5528"
                          class="cls-1"
                          d="M35.64,26.49c0-1.63,1.33-2.25,3.54-2.25a23.26,23.26,0,0,1,10.35,2.67V17.1a27.43,27.43,0,0,0-10.35-1.92c-8.47,0-14.1,4.42-14.1,11.81,0,11.52,15.86,9.68,15.86,14.65,0,1.92-1.67,2.54-4,2.54a25.94,25.94,0,0,1-11.39-3.33v9.93a28.9,28.9,0,0,0,11.39,2.38c8.68,0,14.65-4.3,14.65-11.77,0-12.44-15.94-10.23-15.94-14.9Z"
                        /></g
                      ></g
                    ></svg
                  >
                </div>
                <div class="flex justify-center px-1">
                  <!-- Shopify logo -->
                  <svg
                    id="Layer_1"
                    class="h-9 sm:h-10"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 200.4 66.5"
                    ><defs
                      ><style>
                        .cls-1 {
                          fill: #d3dce6;
                        }
                        .cls-2 {
                          fill: #1f2937;
                        }
                      </style></defs
                    ><title>shopify</title><path
                      class="cls-1"
                      d="M44.23,14.92a.54.54,0,0,0-.48-.45c-.21,0-4.14-.08-4.14-.08L36,10.87a1.32,1.32,0,0,0-1.21-.15l-1.66.51a11.91,11.91,0,0,0-.79-2c-1.17-2.24-2.89-3.42-5-3.42h0l-.43,0-.19-.21a4.36,4.36,0,0,0-3.45-1.4c-2.68.08-5.35,2-7.52,5.45a21.68,21.68,0,0,0-3,7.81L7.48,19.17c-1.55.49-1.6.53-1.8,2-.15,1.11-4.22,32.54-4.22,32.54L35.53,59.6l14.76-3.67ZM31.42,11.76l-2.65.81A14.67,14.67,0,0,0,28,7.7C30,8.08,31,10.38,31.42,11.76ZM27,13.13,21.3,14.89a13.53,13.53,0,0,1,2.88-5.58,5.6,5.6,0,0,1,1.93-1.4A12.79,12.79,0,0,1,27,13.13ZM23.34,6.05A2.74,2.74,0,0,1,25,6.48,7.64,7.64,0,0,0,22.87,8.1a15.61,15.61,0,0,0-3.53,7.39l-4.67,1.45C15.59,12.63,19.2,6.17,23.34,6.05Z"
                    /><path
                      class="cls-1"
                      d="M43.75,14.47l-4.14-.07s-3.3-3.2-3.62-3.53a.85.85,0,0,0-.46-.21V59.6l14.76-3.67-6.06-41A.54.54,0,0,0,43.75,14.47Z"
                    /><path
                      class="cls-2"
                      d="M27.35,22.06l-1.72,6.42a9.76,9.76,0,0,0-4.18-.73c-3.32.21-3.36,2.31-3.33,2.84.19,2.86,7.73,3.49,8.16,10.21.33,5.29-2.81,8.9-7.33,9.19a11,11,0,0,1-8.41-2.86l1.15-4.89s3,2.27,5.41,2.12a2.13,2.13,0,0,0,2.08-2.28c-.24-3.75-6.38-3.53-6.77-9.68C12.08,27.23,15.48,22,23,21.51A9.34,9.34,0,0,1,27.35,22.06Z"
                    /><path
                      class="cls-1"
                      d="M69.74,35.5c-1.7-.92-2.57-1.7-2.57-2.77,0-1.36,1.21-2.23,3.1-2.23a11.12,11.12,0,0,1,4.17.92L76,26.67s-1.42-1.12-5.62-1.12c-5.85,0-9.9,3.35-9.9,8.05,0,2.67,1.89,4.71,4.42,6.16,2,1.17,2.76,2,2.76,3.2s-1,2.28-2.91,2.28a13.09,13.09,0,0,1-5.48-1.45l-1.65,4.75a12.63,12.63,0,0,0,6.6,1.65c6,0,10.33-3,10.33-8.29C74.54,39,72.36,37,69.74,35.5Z"
                    /><path
                      class="cls-1"
                      d="M93.7,25.51a9,9,0,0,0-7.08,3.54l-.1-.05,2.57-13.44h-6.7L75.9,49.75h6.69l2.23-11.68c.87-4.42,3.15-7.13,5.29-7.13,1.5,0,2.08,1,2.08,2.47a14.85,14.85,0,0,1-.29,3L89.38,49.76h6.69l2.62-13.83a25.06,25.06,0,0,0,.49-4.36C99.18,27.78,97.19,25.51,93.7,25.51Z"
                    /><path
                      class="cls-1"
                      d="M114.31,25.51c-8,0-13.39,7.27-13.39,15.37,0,5.19,3.2,9.36,9.22,9.36,7.9,0,13.24-7.08,13.24-15.37C123.38,30.06,120.56,25.51,114.31,25.51ZM111,45.1c-2.28,0-3.25-1.94-3.25-4.37,0-3.83,2-10.08,5.63-10.08,2.37,0,3.15,2,3.15,4C116.54,38.79,114.55,45.1,111,45.1Z"
                    /><path
                      class="cls-1"
                      d="M140.5,25.51c-4.52,0-7.08,4-7.08,4h-.1l.39-3.59h-5.92c-.29,2.43-.82,6.11-1.36,8.88l-4.65,24.49h6.69l1.84-9.89h.15a7.8,7.8,0,0,0,3.93.87c7.85,0,13-8.05,13-16.2C147.38,29.53,145.39,25.51,140.5,25.51ZM134.1,45.2a4.27,4.27,0,0,1-2.77-1L132.45,38c.77-4.17,3-6.94,5.28-6.94,2,0,2.67,1.9,2.67,3.69C140.4,39,137.83,45.2,134.1,45.2Z"
                    /><path
                      class="cls-1"
                      d="M156.94,15.9a3.82,3.82,0,0,0-3.83,3.88,3.08,3.08,0,0,0,3.15,3.35h.1a3.79,3.79,0,0,0,3.93-3.88A3.19,3.19,0,0,0,156.94,15.9Z"
                    /><path
                      class="cls-1"
                      d="M147.58,49.75h6.69L158.83,26h-6.74Z"
                    /><path
                      class="cls-1"
                      d="M175.85,26H171.2l.24-1.11c.39-2.28,1.75-4.32,4-4.32a6.94,6.94,0,0,1,2.13.34l1.31-5.24a8.84,8.84,0,0,0-3.64-.58,10,10,0,0,0-6.55,2.23,12.74,12.74,0,0,0-3.88,7.57L164.6,26h-3.1l-1,5.05h3.1l-3.54,18.72h6.69L170.33,31h4.6Z"
                    /><path
                      class="cls-1"
                      d="M192,26s-4.18,10.54-6.06,16.3h-.1c-.12-1.86-1.64-16.3-1.64-16.3h-7l4,21.77a1.39,1.39,0,0,1-.15,1.12,11.46,11.46,0,0,1-3.63,4,14.54,14.54,0,0,1-3.79,1.89l1.85,5.67A15.19,15.19,0,0,0,182,56.89c3.06-2.87,5.87-7.28,8.78-13.29L198.94,26Z"
                    /></svg
                  >
                </div>
                <div class="flex justify-center px-1">
                  <!-- WordPress logo -->
                  <svg
                    id="Layer_1"
                    class="h-9 sm:h-10"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 200.4 66.5"
                    ><defs
                      ><style>
                        .cls-1 {
                          fill: #d3dce6;
                        }
                      </style></defs
                    ><title>wordpress</title><path
                      class="cls-1"
                      d="M116.06,27h-7.79v.82c2.43,0,2.83.53,2.83,3.62v5.57c0,3.09-.4,3.66-2.83,3.66-1.88-.26-3.14-1.26-4.88-3.18l-2-2.18c2.7-.47,4.13-2.17,4.13-4.09,0-2.39-2-4.22-5.88-4.22H92v.82c2.44,0,2.83.53,2.83,3.62v5.57c0,3.09-.39,3.66-2.83,3.66v.83h8.67v-.83c-2.44,0-2.83-.57-2.83-3.66V35.49h.74l4.83,6h12.67c6.23,0,8.93-3.31,8.93-7.27S122.29,27,116.06,27ZM97.82,34.13V28.34H99.6a2.67,2.67,0,0,1,2.83,2.92,2.66,2.66,0,0,1-2.83,2.88H97.82Zm18.37,6.06h-.3c-1.57,0-1.79-.39-1.79-2.4V28.34h2.09c4.53,0,5.36,3.31,5.36,5.88S120.72,40.19,116.19,40.19Z"
                    /><path
                      class="cls-1"
                      d="M67.73,35.75l3-8.89c.87-2.57.48-3.31-2.31-3.31v-.87h8.19v.87c-2.74,0-3.4.66-4.49,3.84l-5,14.89h-.57L62.15,28.65,57.62,42.28h-.56L52.22,27.39c-1-3.18-1.74-3.84-4.26-3.84v-.87h9.66v.87c-2.57,0-3.26.61-2.35,3.31l2.92,8.89,4.4-13.07h.83Z"
                    /><path
                      class="cls-1"
                      d="M82.53,42.1c-4.79,0-8.71-3.52-8.71-7.83s3.92-7.8,8.71-7.8,8.71,3.53,8.71,7.8S87.32,42.1,82.53,42.1Zm0-14.28c-4,0-5.4,3.62-5.4,6.45s1.4,6.44,5.4,6.44S88,37.14,88,34.27,86.58,27.82,82.53,27.82Z"
                    /><path
                      class="cls-1"
                      d="M135.74,40.67v.87h-10v-.87c2.92,0,3.44-.74,3.44-5.1v-7c0-4.35-.52-5.05-3.44-5.05v-.87h9c4.48,0,7,2.31,7,5.4s-2.48,5.36-7,5.36H132.3v2.13C132.3,39.93,132.83,40.67,135.74,40.67Zm-1-16.42H132.3v7.58h2.49c2.43,0,3.57-1.7,3.57-3.75S137.22,24.25,134.79,24.25Z"
                    /><path
                      class="cls-1"
                      d="M171.67,37.45l-.22.78c-.39,1.44-.87,2-4,2h-.61c-2.27,0-2.66-.52-2.66-3.62v-2c3.4,0,3.66.31,3.66,2.57h.83V30.65h-.83c0,2.27-.26,2.57-3.66,2.57V28.34h2.4c3.09,0,3.57.53,4,2l.22.83h.69l-.3-4.09h-12.8v.82c2.44,0,2.83.53,2.83,3.62v5.57c0,2.83-.34,3.54-2.26,3.65-1.83-.28-3.08-1.28-4.8-3.17l-2-2.18c2.7-.47,4.14-2.17,4.14-4.09,0-2.39-2.05-4.22-5.88-4.22h-7.67v.82c2.44,0,2.84.53,2.84,3.62v5.57c0,3.09-.4,3.66-2.84,3.66v.83h8.67v-.83c-2.44,0-2.83-.57-2.83-3.66V35.49h.74l4.83,6h17.9l.26-4.09Zm-23.08-3.32V28.34h1.78a2.68,2.68,0,0,1,2.84,2.92,2.67,2.67,0,0,1-2.84,2.88h-1.78Z"
                    /><path
                      class="cls-1"
                      d="M180.51,42.1a6.42,6.42,0,0,1-3.92-1.48,3.14,3.14,0,0,0-.7,1.48h-.82v-6h.87a4.83,4.83,0,0,0,4.92,4.57,2.24,2.24,0,0,0,2.52-2.09c0-1.13-1-2-2.78-2.83l-2.49-1.18a4.73,4.73,0,0,1-3-4.18c0-2.09,2-3.87,4.65-3.87a5.45,5.45,0,0,1,3.4,1.13,2.49,2.49,0,0,0,.57-1.18h.82v5.14h-.91c-.3-2.05-1.44-3.75-3.74-3.75-1.22,0-2.36.7-2.36,1.79s.92,1.74,3,2.7l2.39,1.18a4.54,4.54,0,0,1,2.92,3.92C185.82,40.19,183.43,42.1,180.51,42.1Z"
                    /><path
                      class="cls-1"
                      d="M193.92,42.1A6.42,6.42,0,0,1,190,40.62a3.14,3.14,0,0,0-.7,1.48h-.82v-6h.87a4.83,4.83,0,0,0,4.92,4.57,2.24,2.24,0,0,0,2.52-2.09c0-1.13-1-2-2.78-2.83l-2.48-1.18a4.72,4.72,0,0,1-3.05-4.18c0-2.09,2-3.87,4.66-3.87a5.44,5.44,0,0,1,3.39,1.13,2.49,2.49,0,0,0,.57-1.18h.83v5.14H197c-.3-2.05-1.44-3.75-3.74-3.75-1.22,0-2.35.7-2.35,1.79s.91,1.74,3,2.7l2.39,1.18a4.53,4.53,0,0,1,2.92,3.92C199.23,40.19,196.84,42.1,193.92,42.1Z"
                    /><path
                      class="cls-1"
                      d="M4.41,31.82A19.27,19.27,0,0,0,15.27,49.16L6.08,24A19.21,19.21,0,0,0,4.41,31.82Z"
                    /><path
                      class="cls-1"
                      d="M36.69,30.84a10.15,10.15,0,0,0-1.59-5.31c-1-1.59-1.89-2.93-1.89-4.52a3.33,3.33,0,0,1,3.23-3.42h.25A19.28,19.28,0,0,0,7.58,21.23l1.24,0c2,0,5.13-.25,5.13-.25a.8.8,0,0,1,.13,1.59s-1.05.12-2.21.18l7,20.88L23.11,31l-3-8.23c-1-.06-2-.18-2-.18A.8.8,0,0,1,18.21,21s3.18.24,5.07.24S28.42,21,28.42,21a.8.8,0,0,1,.12,1.59s-1,.12-2.2.18l7,20.72,1.92-6.43C36.06,34.41,36.69,32.49,36.69,30.84Z"
                    /><path
                      class="cls-1"
                      d="M24,33.5,18.24,50.3a19.13,19.13,0,0,0,5.44.79A19.37,19.37,0,0,0,30.08,50a2.29,2.29,0,0,1-.14-.27Z"
                    /><path
                      class="cls-1"
                      d="M40.59,22.57a15.19,15.19,0,0,1,.13,2,18.14,18.14,0,0,1-1.47,6.9l-5.88,17a19.27,19.27,0,0,0,7.22-25.9Z"
                    /><path
                      class="cls-1"
                      d="M23.68,9.35A22.47,22.47,0,1,0,46.15,31.82,22.5,22.5,0,0,0,23.68,9.35Zm0,43.9A21.44,21.44,0,1,1,45.11,31.82,21.46,21.46,0,0,1,23.68,53.25Z"
                    /></svg
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-16 sm:mt-24 sm:pb-10 lg:col-span-6 lg:mt-0">
          <div
            class="bg-white sm:mx-auto sm:w-full sm:max-w-md sm:overflow-hidden sm:rounded-lg"
          >
            <div class="px-4 py-8 sm:px-10">
              <div class="mt-6">
                <form
                  on:submit|once|preventDefault={handleSubmit}
                  class="space-y-6"
                  method="POST"
                  id="form-contact"
                >
                  <div
                    class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6"
                  >
                    <div class="sm:col-span-6">
                      <input
                        class="border-1 w-full rounded-md border border-gray-200 px-4 py-2 focus:border-primary-500 focus:ring-primary-500"
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                        bind:value={name}
                      />
                    </div>
                    <div class="sm:col-span-3">
                      <input
                        class="border-1 w-full rounded-md border border-gray-200 px-4 py-2 focus:border-primary-500 focus:ring-primary-500"
                        type="email"
                        name="eml"
                        placeholder="Email"
                        required
                        bind:value={email}
                      />
                    </div>
                    <div class="sm:col-span-3">
                      <input
                        class="border-1 w-full rounded-md border border-gray-200 px-4 py-2 focus:border-primary-500 focus:ring-primary-500"
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        required
                        bind:value={phone}
                      />
                    </div>
                    <div class="sm:col-span-6">
                      <textarea
                        class="border-1 w-full rounded-md border border-gray-200 px-4 py-2 focus:border-primary-500 focus:ring-primary-500"
                        name="message"
                        cols="30"
                        rows="5"
                        placeholder="How can we help?"
                        required
                        bind:value={message}
                      />
                    </div>
                    <input
                      class="border-1 hidden w-full rounded-md border border-gray-200 px-4 py-2"
                      type="tel"
                      name="eml2"
                      placeholder=""
                      bind:value={honeypot}
                    />
                    <button
                      class="rounded-md bg-slate-900 px-6 py-3 text-lg font-medium text-primary-500 hover:bg-slate-800 sm:col-span-6"
                    >
                      Get a Quote
                    </button>
                    {#if display_message === true}
                      <div
                        transition:fade
                        class="rounded-md bg-primary-500 px-6 py-3 text-center text-gray-800 sm:col-span-6
                "
                      >
                        <p>Your message has been sent!</p>
                      </div>
                    {/if}
                  </div>
                </form>
                <!-- <form action="#" method="POST" class="space-y-6">
                  <div>
                    <label for="name" class="sr-only">Full name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autocomplete="name"
                      placeholder="Full name"
                      required
                      class="block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div>
                    <label for="mobile-or-email" class="sr-only"
                      >Mobile number or email</label
                    >
                    <input
                      type="text"
                      name="mobile-or-email"
                      id="mobile-or-email"
                      autocomplete="email"
                      placeholder="Mobile number or email"
                      required
                      class="block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div>
                    <label for="password" class="sr-only">Password</label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Password"
                      autocomplete="current-password"
                      required
                      class="block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-md font-medium text-gray-800 bg-primary-500 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      Get a Quote
                    </button>
                  </div>
                </form> -->
              </div>
            </div>
            <!-- <div
              class="px-4 py-6 bg-gray-50 border-t-2 border-gray-200 sm:px-10"
            >
              <p class="text-xs leading-5 text-gray-500">
                By signing up, you agree to our <a
                  href="#"
                  class="font-medium text-gray-900 hover:underline">Terms</a
                >,
                <a href="#" class="font-medium text-gray-900 hover:underline"
                  >Data Policy</a
                >
                and
                <a href="#" class="font-medium text-gray-900 hover:underline"
                  >Cookies Policy</a
                >.
              </p>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- HERO END -->
  <div class="overflow-hidden bg-gray-50 py-16 lg:py-24">
    <div class="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div class="relative">
        <h2
          class="text-center text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl"
        >
          Our Maryland SEO <span class="text-primary-600"
            >clients get results.</span
          >
        </h2>
        <p class="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-500">
          WebLime’s Maryland SEO services include competitor analysis, link
          development, content marketing, local business listing, and on-page
          optimization.
        </p>
      </div>

      <div
        class="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8"
      >
        <div class="relative">
          <h3
            class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl"
          >
            Maryland SEO Services
          </h3>
          <p class="mt-3 text-lg text-gray-500">
            Our SEO services help rank your website and make it an asset for
            your business.
          </p>

          <dl class="mt-10 space-y-10">
            <div class="relative">
              <dt>
                <div
                  class="absolute flex h-12 w-12 items-center justify-center rounded-md bg-primary-500 text-white"
                >
                  <!-- Heroicon name: outline/globe-alt -->
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <p class="ml-16 text-lg font-medium leading-6 text-gray-900">
                  Keyword Research & Strategy
                </p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                WordPress, Shopify or custom builds. We implement the best
                practices possible so that your brand reaches both far and wide.
              </dd>
            </div>

            <div class="relative">
              <dt>
                <div
                  class="absolute flex h-12 w-12 items-center justify-center rounded-md bg-primary-500 text-white"
                >
                  <!-- Heroicon name: outline/lightning-bolt -->
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <p class="ml-16 text-lg font-medium leading-6 text-gray-900">
                  Link Building
                </p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                We will carefully monitor your website’s performance to
                understand how we can optimize your online presence.
              </dd>
            </div>

            <div class="relative">
              <dt>
                <div
                  class="absolute flex h-12 w-12 items-center justify-center rounded-md bg-primary-500 text-white"
                >
                  <!-- Heroicon name: lock-closed -->
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <p class="ml-16 text-lg font-medium leading-6 text-gray-900">
                  Technical SEO
                </p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                Our content specialists follow the best <a
                  sveltekit:prefetch
                  href="/maryland-seo-company">SEO</a
                >
                practices, perform extensive research and optimize content for search
                intent.
              </dd>
            </div>
          </dl>
        </div>

        <div class="relative -mx-4 mt-10 lg:mt-0" aria-hidden="true">
          <img
            class="relative mx-auto"
            width="490"
            src="/svg/design-weblime-illustration.svg"
            alt="WebLime solutions design illustration"
          />
        </div>
      </div>

      <div class="relative mt-12 sm:mt-16 lg:mt-24">
        <div
          class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-8"
        >
          <div class="lg:col-start-2">
            <h3
              class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl"
            >
              SEO to rank your site
            </h3>
            <p class="mt-3 text-lg text-gray-500">
              We identify current keyword rankings and capture new SEO
              opportunities for your business.
            </p>

            <dl class="mt-10 space-y-10">
              <div class="relative">
                <dt>
                  <div
                    class="absolute flex h-12 w-12 items-center justify-center rounded-md bg-primary-500 text-white"
                  >
                    <!-- Heroicon name: outline/annotation -->
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>
                  </div>
                  <p class="ml-16 text-lg font-medium leading-6 text-gray-900">
                    Local SEO
                  </p>
                </dt>
                <dd class="mt-2 ml-16 text-base text-gray-500">
                  We'll develop and maintain an ecommerce solutions that's
                  backed by powerful tools that help you find customers, drive
                  sales, and manage your day-to-day.
                </dd>
              </div>

              <div class="relative">
                <dt>
                  <div
                    class="absolute flex h-12 w-12 items-center justify-center rounded-md bg-primary-500 text-white"
                  >
                    <!-- Heroicon name: outline/mail -->
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <p class="ml-16 text-lg font-medium leading-6 text-gray-900">
                    Ecommerce SEO
                  </p>
                </dt>
                <dd class="mt-2 ml-16 text-base text-gray-500">
                  Building your store is only the first step. Reach your ideal
                  shopper with content marketing, through SEO, and on social
                  media.
                </dd>
              </div>
            </dl>
          </div>

          <div class="relative -mx-4 mt-10 lg:col-start-1 lg:mt-0">
            <img
              class="relative mx-auto"
              width="490"
              src="/svg/weblime-shopify.svg"
              alt="WebLime Solutions ecommerce illustration"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <Testimonials />

  <div
    class="relative mx-auto mt-12 max-w-7xl px-6 pb-20 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8"
  >
    <div class="relative">
      <h3
        class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl"
      >
        Get Your FREE Instant SEO Audit Report
      </h3>

      <p class="mt-3 text-lg text-gray-500">
        We are passionate about technology and focus on integrating the latest
        advancements into your business to propel substantial growth.
      </p>

      <SeoForm />
    </div>
    <div class="relative mt-10 lg:mt-0" aria-hidden="true">
      <img src="/svg/weblime-laying-down-illustration.svg" alt="" />
    </div>
  </div>
  <ProjectInMind />
</main>
