<template>
  <v-footer
    absolute
    app
    color="primary-50"
    class="min-h-[300px]"
    aria-label="Footer. Quick links and actions"
  >
    <v-container class="max-w-[1200px]">
      <v-row class="space-x-72">
        <v-col class="flex-grow-0 min-w-fit">
          <UiText tag="h2" class="inline-grid justify-items-center relative">
            <span class="primary--text">
              <Logo :width="55.07" :height="52.39" />
              petson.
              <NuxtLink
                to="/"
                title="Home page"
                class="absolute inset-0 text-transparent"
              />
            </span>
          </UiText>
        </v-col>

        <v-col
          v-for="([title, links], i) in menuItems"
          :key="title"
          class="flex-grow-0 min-w-fit"
        >
          <AnimateInView :delay="`${(i + 1) * 50}ms`" appear-from="opacity-0">
            <UiText
              tag="h2"
              variant="h6"
              opacity="primary"
              :label="title"
              class="mb-[4px]"
            />

            <ul class="p-0">
              <li v-for="link in links" :key="link.title" class="mb-[4px]">
                <UiText
                  :tag="link.type === 'default' ? 'NuxtLink' : 'a'"
                  :props="{
                    to: link.to,
                  }"
                  :href="link.to === 'default' ? undefined : link.to"
                  opacity="secondary"
                  variant="subtitle-1"
                  :label="link.title"
                />
              </li>
            </ul>
          </AnimateInView>
        </v-col>

        <v-col>
          <AnimateInView
            :delay="`${(menuItems.length + 1) * 50}ms`"
            appear-from="opacity-0"
          >
            <h2 class="opacity-0 select-none mb-4 pointer-events-none">
              Customer service
            </h2>

            <UiText opacity="secondary" class="mb-0">
              If you can't find answer to your question, please contact our
              <NuxtLink to="#"> customer service </NuxtLink>
            </UiText>
          </AnimateInView>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
import { menuItem, link } from './utils'

export default {
  data: () => ({
    menuItems: [
      menuItem('Petson', [
        link('About us'),
        link('Blog'),
        link('Store locator'),
      ]),
      menuItem('Contact', [
        link('contact@petson.com', 'email'),
        link('+385 000 000', 'tel'),
        link('35 Shnauzer avenue, Dogville AL', 'address'),
      ]),
      menuItem('Information', [
        link('Ordering and shipping'),
        link('FAQ'),
        link('GDPR statement'),
      ]),
    ],
  }),
}
</script>
