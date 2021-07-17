<script>
    import { fade } from 'svelte/transition';

    let name;
    let email;
    let message;
    let honeypot = "";
    let phone;
    let display_message=false;

    async function handleSubmit() {
        const res = await fetch("https://weblime-email.edan.workers.dev",  {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            body: JSON.stringify({
              "name": name,
              "eml": email,
              "message": message,
              "eml2": honeypot,
              "phone": phone
              }) // body data type must match "Content-Type" header
        })
        display_message = (res.status == 200) ? true : false ;
    }
</script>

<svelte:head>
	<title>WebLime - Get In Touch</title>
  <meta name="description" content="A Web Development & Digital Marketing Agency with experience in building results-driven custom web-based solutions.">
</svelte:head>

<main class="mx-auto">
    <!-- Hero section -->
    <div class="sm:pt-16 lg:pt-8 lg:pb-14">
      <div class="pb-5 text-center">
        <h1
          class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
        >
          <span class="xl:inline">Got a project </span>
          <span class="px-3 text-primary-500 bg-gray-900 xl:inline">in mind?</span>
        </h1>
      </div>
    </div> 

<div class="max-w-2xl px-4 pb-20 mx-auto mt-10 transform sm:px-6 lg:px-8">
  <h1 class="mb-2">Let's talk!</h1>
  <p
    class="mx-auto mb-4 text-gray-600 sm:text-lg md:mt-5 md:text-base md:max-w-3xl"
  >
    If there's something we can help you with, just let us know. We'll be more
    than happy to offer you our help.
  </p>
  <form on:submit|once|preventDefault={handleSubmit} class="space-y-3" method="POST" id="form-contact">
    <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
      <div class="sm:col-span-6">
      <input
      class="w-full px-4 py-2 border border-gray-200 rounded-md border-1"
      type="text"
      name="name"
      placeholder="Name"
      required
      bind:value={name}
    />
  </div>
  <div class="sm:col-span-3">
    <input
      class="w-full px-4 py-2 border border-gray-200 rounded-md border-1"
      type="email"
      name="eml"
      placeholder="Email"
      required
      bind:value={email}
    />
  </div>
  <div class="sm:col-span-3">
    <input
    class="w-full px-4 py-2 border border-gray-200 rounded-md border-1"
    type="tel"
    name="phone"
    placeholder="Phone"
    required
    bind:value={phone}
  />
</div>
<div class="sm:col-span-6">
    <textarea
      class="w-full px-4 py-2 border border-gray-200 rounded-md border-1"
      name="message"
      cols="30"
      rows="5"
      placeholder="Tell us what we can help you with!"
      required
      bind:value={message}
    ></textarea>
  </div>
    <input
      class="hidden w-full px-4 py-2 border border-gray-200 rounded-md border-1"
      type="tel"
      name="eml2"
      placeholder=""
      bind:value={honeypot}
    />
    <button class="sm:col-span-6 px-6 py-3 text-lg font-medium text-primary-500 rounded-md bg-gray-900 hover:bg-gray-800"
    >
      Send your message
    </button>
    {#if display_message === true}
      <div transition:fade class="sm:col-span-6 px-6 py-3 bg-primary-500 text-gray-800 text-center rounded-md
      ">    
        <p>Your message has been sent!</p>
      </div>
    {/if}
  </div>
  </form>

</div>




  </main>


 