import React from "react";

const About = () => {
  return (
    <div>
      <section class="bg-white dark:bg-gray-900">
        <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              About Us
            </h2>
            <h3 class="mb-4 text-xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Our Story
            </h3>
            <p class="mb-4">
              Welcome to AD'S blog , where passion meets expertise in the
              world of blogging! Our journey began with a simple idea: to create
              a space where insightful content, creative expression, and
              engaging discussions come together. Founded in 2024, our mission
              is to provide high-quality articles, tips, and reviews that
              resonate with readers and inspire action.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-4 mt-8">
            <img
              class="w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              alt="office content 1"
            />
            <img
              class="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              alt="office content 2"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
