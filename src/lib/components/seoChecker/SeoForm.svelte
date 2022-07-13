<script>
  import SeoModal from './SeoModal.svelte';

  let showModal = false;
  let domain;

  function soSubmit(event) {
    const target = event.currentTarget;

    if (!validateData(target)) {
      event.preventDefault();
      return false;
    }

    const data = new FormData(target);

    domain = data.get('domain');
    showModal = true;
  }

  function formatDomain(domain) {
    return domain ? domain.trim().replace(/\/$/, '') : '';
  }

  function validateData(form) {
    const data = new FormData(form);

    const domain = formatDomain(data.get('domain'));
    const email = data.get('email');
    const firstName = data.get('first_name');
    const lastName = data.get('last_name');

    if (domain.length == 0) {
      alert('Please enter a correct Website URL. Only homepages are accepted.');
      return false;
    }

    if (
      !domain.match(
        /^(https?:\/\/)?[a-z\d-]{1,62}\.[a-z\d-]{1,62}(\.[a-z\d-]{1,62})*$/i,
      )
    ) {
      alert('Please enter a correct Website URL. Only homepages are accepted.');
      return false;
    }

    if (email) {
      if (0 == email.length) {
        alert('Please enter a valid email address.');
        return false;
      }

      const regex =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

      if (!regex.test(email)) {
        alert('Please enter a valid email address.');
        return false;
      }
    }

    if (firstName && !firstName.length) {
      alert('Please enter your First Name');
      return false;
    }

    if (lastName && !lastName.length) {
      alert('Please enter your Last Name');
      return false;
    }

    setTimeout(() => form.reset(), 50);

    return true;
  }
</script>

<SeoModal title="Website Report for " {domain} bind:open={showModal} />

<div class="so-container">
  <div id="so-boxso1657414046">
    <h3 class="py-5 text-3xl font-semibold text-slate-900">
      Free Instant SEO Audit Report
    </h3>
    <form
      class="so-widget-form"
      id="so1657414046"
      action="https://analytics.weblime.com/process-embedded.inc"
      target="so-iframe"
      on:submit={soSubmit}
    >
      <input id="so-typeso1657414046" type="hidden" name="type" value="web" />
      <input type="hidden" name="uid" value="42866" />
      <input type="hidden" name="behaviour" value="modal" />
      <input type="hidden" name="template" value="0" />

      <div
        id="so-fieldswrapso1657414046"
        class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6"
      >
        <div class="sm:col-span-6">
          <input
            type="text"
            name="domain"
            id="so-domainso1657414046"
            class="w-full rounded-md border-none bg-slate-200 p-4 focus:ring-2 focus:ring-primary-500"
            placeholder="Website URL"
          />
        </div>
        <div class="sm:col-span-3">
          <input
            type="text"
            name="first_name"
            class="w-full rounded-md border-none bg-slate-200 p-4 focus:ring-2 focus:ring-primary-500"
            placeholder="First Name"
          />
        </div>
        <div class="sm:col-span-3">
          <input
            type="text"
            name="last_name"
            class="w-full rounded-md border-none bg-slate-200 p-4 focus:ring-2 focus:ring-primary-500"
            placeholder="Last Name"
          />
        </div>
        <div class="sm:col-span-6">
          <input
            type="text"
            name="email"
            class="w-full rounded-md border-none bg-slate-200 p-4 focus:ring-2 focus:ring-primary-500"
            placeholder="Email"
          />
        </div>
        <button
          type="submit"
          class="rounded-md bg-gray-900 px-6 py-3 text-lg font-medium text-primary-500 hover:bg-gray-800 sm:col-span-6"
        >
          Get Free Report Now
        </button>
      </div>
    </form>
  </div>
</div>

<style>
  .so-fieldso1657414046 {
    background-color: #ffffff !important;
    border: 1px solid #e3e3e3 !important;
    border-radius: 4px !important;
    color: #565656 !important;
    padding: 7px 12px !important;
    font-size: 18px !important;
    box-sizing: border-box !important;
    height: 45px !important;
    width: 100% !important;
    display: block !important;
    margin-top: 5px !important;
  }

  .so-fieldso1657414046::placeholder {
    color: #777777 !important;
  }

  @media screen and (max-width: 345px) {
    .so-fieldso1657414046 {
      min-width: 100px !important;
    }
  }

  @media screen and (max-width: 500px) {
    .so-fieldso1657414046 {
      font-size: 12px !important;
      height: 30px !important;
    }

    #so-submitso1657414046 {
      font-size: 12px !important;
      height: 30px;
    }

    #so-fieldswrapso1657414046 {
      width: 100%;
    }
  }

  #so-submitso1657414046 {
    background-color: #0f172a !important;
    border: 1px solid #0f172a !important;
    color: #ffffff !important;
    border-radius: 4px !important;
    text-decoration: none !important;
    cursor: pointer !important;
    box-sizing: border-box !important;
    height: 45px !important;
    font-size: 18px !important;
    display: block !important;
    padding: 8px 50px !important;
    margin: 5px auto !important;
  }

  #so-submitso1657414046:hover {
    background-color: #1e293b !important;
    border: 1px solid #1e293b !important;
  }

  @media screen and (max-width: 500px) {
    #so-submitso1657414046 {
      font-size: 12px !important;
      height: 30px !important;
    }
  }

  .so-container {
    width: 100%;
    text-align: center;
  }
  .so-widget-form {
    display: inline-block !important;
  }
  #so-boxso1657414046 {
    display: inline-block;
  }

  #so-boxso1657414046 {
    width: 100%;
    padding: 35px !important;
    background-color: #84cc16 !important;
    border: 1px solid #84cc16 !important;
    border-radius: 5px;
  }

  @media screen and (max-width: 1039px) {
    #so-boxso1657414046 {
      padding: 50px 10px !important;
      background-color: #fcfcfc !important;
      border: 1px solid #e3e3e3 !important;
    }
  }

  @media screen and (max-width: 1039px) {
    #so-boxso1657414046 {
      padding: 25px 5px !important;
    }
  }
</style>
