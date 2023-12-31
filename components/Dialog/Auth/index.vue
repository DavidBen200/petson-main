<template>
  <Transition v-bind="rootTransitionClasses">
    <BaseDialog
      v-if="currentForm && !loggedIn"
      v-model="modelSync"
      :transition="transition"
      content-class="w-[557px] auth-dialog"
    >
      <v-container ref="root" class="mb-[49px]">
        <v-row justify="center" no-gutters>
          <v-col cols="12" class="flex justify-center">
            <div
              class="w-92 h-92 rounded-full primary white--text grid mb-[24px] justify-items-center gap-y-4 content-center"
            >
              <Logo height="42.41" width="46.98" />
              <UiText
                tag="span"
                variant="body-2"
                opacity="custom"
                label="petson."
              />
            </div>
          </v-col>

          <v-col cols="12">
            <UiText
              id="dialog-title"
              tag="h2"
              :label="title"
              opacity="primary"
              variant="h5"
              class="text-center mb-[24px]"
            />
          </v-col>

          <v-col cols="12" class="px-[60px]">
            <Component :is="currentForm" ref="form" />
          </v-col>
        </v-row>
      </v-container>
    </BaseDialog>
  </Transition>
</template>

<script>
import { mapGetters } from 'vuex'
import { queryModal } from '~/components/mixins/routeQueryModal'

const validForms = ['log-in', 'sign-up']

export default {
  name: 'AuthDialog',

  mixins: [queryModal],

  data: () => ({
    currentForm: '',
    title: '',
  }),

  head() {
    return {
      title: this.modelSync ? this.title : undefined,
    }
  },

  computed: {
    ...mapGetters('user', ['loggedIn']),

    rootTransitionClasses() {
      return {
        leaveClass: 'opacity-0 will-change-[opacity]',
        leaveActiveClass:
          'will-change-[opacity] durtion-[500ms] transition-opacity',
      }
    },

    modelSync: {
      get() {
        if (typeof this.modalQuery === 'string') {
          if (validForms.includes(this.modalQuery)) {
            return true
          }
        }

        return false
      },

      set(val) {
        const setModal = (modal) =>
          this.$router.push({
            query: {
              ...this.$route.query,
              modal,
            },
          })

        if (val === false) {
          setModal(undefined)
        }

        if (typeof val === 'string' && validForms.includes(val)) {
          setModal(val)
        }
      },
    },
  },

  watch: {
    modalQuery: {
      handler: 'setCurrentForm',
      immediate: true,
    },
  },

  methods: {
    setCurrentForm(val) {
      if (val && this.modelSync) {
        this.currentForm = `form-${this.modalQuery}`

        // set title to capitalized route.query.modal
        this.title = `${this.modalQuery}`
          .replace(/-/g, ' ')
          .replace(/^\w/, (x) => x.toUpperCase())

        // scroll dialog to top
        const scrollToTop = () => {
          const rootCard = this.$refs?.root

          if (rootCard) {
            rootCard.closest('.auth-dialog')?.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth',
            })
          }
        }

        scrollToTop()
      }
    },
  },
}
</script>
