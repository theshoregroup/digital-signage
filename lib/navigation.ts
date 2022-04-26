// Handles navigation paths
// Want to handle this in admin!

// Maybe this becomes a function that maps to db?

export default function GetPages() {
    // This should actually run code, for now is hardcoded
    return [
        {
            title: 'Home',
            href: '/',
        },
        {
            title: 'About',
            href: '/about',
        },
    ]
}