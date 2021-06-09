<script>
    let first_name;
    let last_name;

    async function handleSubmit() {
        const res = await fetch("/get-in-touch",  {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({ first_name, last_name }) // body data type must match "Content-Type" header
        })
    }
</script>

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
  <form on:submit|preventDefault={handleSubmit} class="space-y-3" method="POST" action="" id="form-contact">
    <input
      class="w-full px-4 py-2 border border-gray-200 rounded-md border-1"
      type="text"
      name="first_name"
      placeholder="First Name"
      bind:value={first_name}
    />
    <input
      class="w-full px-4 py-2 border border-gray-200 rounded-md border-1"
      type="text"
      name="last_name"
      placeholder="Last Name"
      bind:value={last_name}
    />
    <input
      class="w-full px-4 py-2 border border-gray-200 rounded-md border-1"
      type="email"
      name="email"
      placeholder="Email"
    />
    
    
    <input
      class="w-full px-4 py-2 border border-gray-200 rounded-md border-1"
      type="tel"
      name="phone"
      placeholder="Phone number"
    />
    <textarea
      class="w-full px-4 py-2 border border-gray-200 rounded-md border-1"
      name="message"
      id=""
      cols="30"
      rows="5"
      placeholder="Tell us what we can help you with!"
    ></textarea>
    <button
      class="w-full px-6 py-3 mt-6 text-lg font-medium text-primary-500 rounded-md bg-gray-900 hover:bg-gray-800"
    >
      Send your message
    </button>
  </form>
</div>




  </main>


 