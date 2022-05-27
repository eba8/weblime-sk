<script>
  import { testimonials } from '$lib/components/testimonials/testimonials.json';
</script>

<div>
  <div class="overflow-hidden bg-white py-6 md:py-8 lg:py-12">
    <div class="container mx-auto">
      <h2 class="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
        People 💚 WebLime
      </h2>
      <p
        class="mx-auto mt-3 max-w-3xl text-center text-xl text-gray-500 sm:mt-4"
      >
        WebLime was built to be a one-stop solution for your business. We'll
        focus on your online presence while you hone in on your products and
        services.
      </p>

      <div class="mt-10 bg-white pb-12 sm:pb-16" />
      <div class="grid-cols-3 gap-4 md:grid">
        {#each testimonials as testimonial}
          <div class="my-5 md:m-0">
            <div
              class="rounded-lg bg-gray-50 p-5 ring-1 ring-gray-50 hover:border-gray-100 hover:bg-white hover:shadow-lg hover:ring-gray-100"
            >
              <div class="flex items-center">
                <a
                  class="group flex items-center"
                  href={testimonial.link}
                  target="_blank"
                >
                  <img
                    class="h-full w-10 rounded-full"
                    src={testimonial.author_image}
                    alt={testimonial.author_name + ' profile image'}
                    loading="lazy"
                  />
                  <div class="ml-2 leading-tight">
                    <div class="font-bold group-hover:text-primary-500">
                      {testimonial.author_name}
                    </div>
                  </div>
                </a>
                <img
                  class="ml-auto h-full w-10"
                  src={testimonial.logo}
                  alt="testimonial source logo"
                  loading="lazy"
                />
              </div>
              <div
                class="tweet-text mt-2 cursor-text whitespace-pre-wrap text-sm"
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
