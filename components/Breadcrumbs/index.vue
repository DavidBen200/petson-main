<template>
  <v-breadcrumbs :items="items" class="p-0">
    <template #item="{ item: { to, href, disabled, title } }">
      <v-breadcrumbs-item
        :to="to"
        :href="href"
        :target="href ? '_blank' : undefined"
        :nuxt="!!to"
        :disabled="disabled"
      >
        <UiText
          tag="span"
          :label="title"
          :opacity="disabled ? 'primary' : 'secondary'"
          class="pointer-events-none"
        />
      </v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>
</template>

<script>
import { requiredProp } from '../utils'
export default {
  name: 'Breadcrumbs',
  props: {
    items: requiredProp(Array),
  },
}
</script>
