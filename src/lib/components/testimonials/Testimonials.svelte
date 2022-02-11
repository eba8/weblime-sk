<script>
  import { testimonials } from '$lib/components/testimonials/testimonials.json';
</script>

<div>
  <div class="py-6 overflow-hidden bg-white md:py-8 lg:py-12">
    <div class="container mx-auto">
      <h2 class="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl">
        People 💚 WebLime
      </h2>
      <p
        class="max-w-3xl mx-auto mt-3 text-xl text-center text-gray-500 sm:mt-4"
      >
        WebLime was built to be a one-stop solution for your business. We'll
        focus on your online presence while you hone in on your products and
        services.
      </p>

      <div class="pb-12 mt-10 bg-white sm:pb-16" />
      <div class="md:grid gap-4 grid-cols-3">
        {#each testimonials as testimonial}
          <div class="my-5 md:m-0">
            <div class="p-5 bg-gray-100 rounded-lg shadow-md">
              <div class="flex items-center">
                <a
                  class="flex items-center group"
                  href={testimonial.link}
                  target="_blank"
                >
                  <img
                    class="w-10 rounded-full"
                    src={testimonial.author_image}
                    alt={testimonial.author_name + ' profile image'}
                  />
                  <div class="ml-2 leading-tight">
                    <div class="font-bold group-hover:text-primary-500">
                      {testimonial.author_name}
                    </div>
                  </div>
                </a>
                <a class="ml-auto" href="/" target="_blank"
                  ><img
                    class="w-10"
                    src={testimonial.logo}
                    alt="testimonial source logo"
                  /></a
                >
              </div>
              <div
                class="mt-2 text-sm whitespace-pre-wrap cursor-text tweet-text"
              >
                {testimonial.text}
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
