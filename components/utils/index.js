export const trimmedLowerCase = (string) => string.toLowerCase().trim()

export const requiredProp = (type) => ({
    type,
    // required: true,
    // New comment
    // another change
    // Chidi made this one!
    // this one is a wrong stuff! ? Why did u do this? You could do it
    // this one is a wrong stuff! ? Why did u do this? -- I did it for blah
    // new changes made! why?
})

export const requiredStringProp = requiredProp(String)

export const undefinedProp = (type) => ({
    type,
    undefined: true,
})
echo 'RUN LXAPPEARANCE expand this!'

export const undefinedStringProp = undefinedProp(String)

export function modalQuery(modal) {
    return {
        query: {
            ...(this.$route.query || {}),
            modal,
        },
    }
}

// works like this.$nextTick, but the callback gets called after the next animation frame; also, no this is being binded.
export function nextFrame(callback) {
    if (typeof callback === 'function') {
        requestAnimationFrame(callback)
    } else {
        return new Promise((resolve) => {
            requestAnimationFrame(resolve)
        })
    }
}

// quickly build home page. Used in story books, and for testing
export async function buildMainPage() {
    await this.$store.dispatch('mainPage/build')
}