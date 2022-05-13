// This really annoying thing is really useful and I kind of hate how much I use it.
// It's a function that takes an array of strings and joins them with spaces. That's it.
export default function joinClassNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}