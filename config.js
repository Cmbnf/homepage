var config = {
    
    // if none of the keys are matched, this is used for searching.
    defaultSearch: 'https://www.google.fr/#q=',
    // defaultSearch: 'https://search.lilo.org/searchweb.php?q=',

    // the delimiter between the key and your search query.
    // e.g. to search GitHub for potatoes you'd type "g:potatoes".
    searchDelimiter: ':',

    // the delimiter between the key and a path.
    // e.g. type "r/r/unixporn" to go to "reddit.com/r/unixporn".
    pathDelimiter: '/',

    // set to true to instantly redirect when a key is matched.
    // put a space before any search queries to prevent unwanted redirects.
    instantRedirect: false,

    // suggest your most popular queries as you type.
    suggestions: false,

    // max amount of suggestions to display.
    suggestionsLimit: 4,

    // open queries in a new tab.
    newTab: false,

    // the delimiter between the hours and minutes in the clock.
    clockDelimiter: '&#58;',

    // used for determining when to redirect directly to a url.
    urlRegex: /^(?:(http|https)?:\/\/)?(?:[\w-]+\.)+([a-z]|[A-Z]|[0-9]){2,6}/i,

    // if "urlRegex" matches but this doesn't, "http://" will be
    // prepended to the beginning of the query before redirecting.
    protocolRegex: /^[a-zA-Z]+:\/\//i
};