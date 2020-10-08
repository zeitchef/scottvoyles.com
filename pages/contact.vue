<template>
  <client-only>
    <main class="flex items-center max-w-6xl px-8 mx-auto mt-8">

      <section class="flex-1 p-8 mb-16 md:mb-0 contact contact-left">
        <form name="contact" method="post" netlify-honeypot="bot-field" netlify>
          <div class="hidden">
            <label for="bot-field">
              Don't input text here if you're human:
              <input type="text" name="bot-field" id="bot-field">
            </label>
          </div>
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" class="block w-full">
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" class="block w-full">
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea name="message" id="message" cols="30" rows="10" class=""></textarea>
          </div>
          <button type="submit" class="transiton-colors duration-500 ease-in-out hover:bg-snazzy-gray-900 hover:text-snazzy-gray-100 dark:border-snazzy-white dark:hover:text-snazzy-gray-800 dark:hover:bg-snazzy-white">
            Send
          </button>
        </form>
      </section>

      <section class="flex flex-col items-start flex-1 p-8 mb-16 contact contact-right">
        <h1 class="mb-4 font-medium">Thanks for stopping by</h1>
        <p class="mb-4">If you like my work, please feel free to write to me. I look forward to seeing what we can do together.</p>
      </section>
    </main>
  </client-only>
</template>

<style scoped>
@media (max-width: 768px) {
  main {
    flex-direction: column;
  }
  section { flex: 0; }

  .contact {
    padding: 0;
    min-width: 100%;
  }
  .contact-left { order: 2; }
  .contact-right { order: 1; }
}

input, textarea {
  @apply block w-full
}

.form-group {
  @apply border-b border-snazzy-gray-300 mb-4
}
</style>
