var links = [
    { name: "Vie quotidienne", commands: [
        { key: 'm', name: 'Webmail Zaclys', url: 'https://webmail.zaclys.net/roundcubemail/' },
        { key: 'gmail', name: 'Gmail', url: 'https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin' },
        { key: 'cloud', name: 'Nextcloud', url: 'https://ncloud.zaclys.com/index.php/apps/files/?dir=/&fileid=92537519' },
        { key: 'dy', name: 'Dynalist', url: 'https://dynalist.io/d/QpBwOW_nwlP0jKda9rICjPEq' },
        { key: 'ag', name: 'Agenda', url: 'https://ncloud.zaclys.com/index.php/apps/calendar/' },
        { key: 'dy', name: 'Dynalist', url: 'https://dynalist.io/' },
        { key: 'feed', name: 'Feedly', url: 'https://feedly.com/' },
        { key: 'pocket', name: 'Pocket', url: 'https://app.getpocket.com/' },
        { key: 'rain', name: 'Raindrop', url: 'https://app.raindrop.io/' },
        { key: 'ag', name: 'Agenda', url: 'https://ncloud.zaclys.com/index.php/apps/calendar/' },
    ] },
    
    { name: "Recherche", commands: [
        { key: 'gi', name: '# Google Images', url: 'https://www.google.fr', search: '/#q=', add: '&safe=active&tbm=isch' },
        { key: 'w', name: '# Wikipédia', url: 'https://fr.wikipedia.org/wiki', search: '/' },
        { key: 'wen', name: '# Wikipedia (en)', url: 'https://en.wikipedia.org/wiki', search: '/' },
        { key: 'y', name: '# Youtube', url: 'https://www.youtube.com', search: '/results?search_query=' },
        { key: 'map', name: '# Google Maps', url: 'https://www.google.fr/maps/search', search: '/' },
    ] },
    
    { name: "Dictionnaires", commands: [
        { key: 'en', name: '# WordRef EN-FR', url: 'http://www.wordreference.com', search: '/enfr/' },
        { key: 'fr', name: '# WordRef FR-EN', url: 'http://www.wordreference.com', search: '/fren/' },
        { key: 'wr', name: '# Wiktionnaire', url: 'https://fr.wiktionary.org/wiki', search: '/' },
        { key: 'sy', name: '# Synonymes', url: 'http://www.synonymes.com', search: '/synonyme.php?mot=' },
        { key: 'cj', name: '# Conjugaison', url: 'http://leconjugueur.lefigaro.fr', search: '/conjugaison/verbe/' },
    ] },
    
    { name: "Réseaux", commands: [
        { key: 'fb', name: 'Facebook', url: 'https://fr-fr.facebook.com/' },
        { key: 'pin', name: 'Pinterest', url: 'https://fr.pinterest.com/' },
        { key: 'insta', name: 'Instagram', url: 'https://www.instagram.com/' },
        { key: 'tw', name: 'Twitter', url: 'https://twitter.com/Cm_Bnf/' },
        { key: 'li', name: 'LinkedIn', url: 'http://fr.linkedin.com/in/camillebonenfant' },
        { key: 'via', name: 'Viadeo', url: 'http://viadeo.fr/profile/camillebonenfant' },
        { key: 'later', name: 'Later', url: 'https://app.later.com/' },
    ] },

    { name: "Outils", commands: [
        { key: 'timer', name: 'Timer Tab', url: 'http://www.timer-tab.com/' },
        { key: 'canva', name: 'Canva', url: 'https://www.canva.com' },
        { key: 'framapic', name: 'Framapic', url: 'https://framapic.org/' },
        { key: 'optimiz', name: 'Optimizilla', url: 'http://optimizilla.com/' },
        { key: 'clocki', name: 'Clockify', url: 'https://clockify.me/' },
        { key: 'char', name: 'Special characters', url: 'hhttps://brajeshwar.github.io/entities/' },
        { key: 'mdp', name: 'Générateur mdp', url: 'https://www.motdepasse.xyz/' },
    ] },

    { name: "Code : ressources", commands: [
        { key: 'projets', name: 'projets', url: 'file:///home/cam/Projets/' },
        { key: 'git', name: '# GitHub', url: 'https://github.com', search: '/search?q=' },
        { key: 'oc', name: 'Open Classrooms', url: 'https://openclassrooms.com/' },
        { key: 'codeac', name: 'Code Academy', url: 'https://www.codecademy.com/fr' },
        { key: 'codepen', name: '# Codepen', url: 'https://codepen.io', search: '/search/pens?limit=all&type=type-pens&q=' },
        { key: 'regexr', name: 'Regexr', url: 'https://regexr.com/' },
        { key: 'w3c', name: 'W3C validator', url: 'https://validator.w3.org/' },
        { key: 'caniuse', name: 'Can I use', url: 'https://caniuse.com/' },
        { key: 'autoprefix', name: 'Autoprefixer', url: 'https://autoprefixer.github.io/' },
        { key: 'wireflow', name: 'Wireflow', url: 'https://wireflow.co/' },
        { key: 'divi', name: 'Divi Library', url: 'https://www.elegantthemes.com/layouts/' },
    ] },

    { name: "Ressources : images", commands: [
        { key: 'commons', name: '# Wikimedia Commons', url: 'https://commons.wikimedia.org/wiki', search: '/' },
        { key: 'flickr', name: '# Flickr', url: 'https://www.flickr.com/search/?license=2%2C3%2C4%2C5%2C6%2C9', search: '&text=' },
        { key: 'pixabay', name: '# Pixabay', url: 'https://pixabay.com/fr', search: '/photos/?q='},
        { key: 'librestock', name: '# LibreStock', url: 'http://librestock.com', search: '/search/?query=' },
        { key: 'unsplash', name: '# Unsplash', url: 'https://unsplash.com', search: '/search/' },
        { key: 'pexels', name: '# Pexels', url: 'https://www.pexels.com', search: '/search/' },
        { key: 'every', name: '# Everypixel', url: 'https://everypixel.com', search: '/search?q=' },
        { key: 'thestocks', name: 'The Stocks', url: 'http://thestocks.im/' },
        { key: 'duotone', name: 'Duotone', url: 'https://duotone.shapefactory.co/' },
        { key: 'mazwai', name: 'Mazwai', url: 'http://mazwai.com' },
        { key: 'uifaces', name: 'UI faces', url: 'https://uifaces.co/' },
    ] },

    { name: "Ressources : couleurs", commands: [
        { key: 'contrast', name: 'Contrast ratio', url: 'https://contrast-ratio.com/' },
        { key: 'goomat', name: 'Google material colors', url: 'https://material.io/guidelines/style/color.html#color-color-palette' },
        { key: 'hunt', name: 'Color Hunt', url: 'http://colorhunt.co/hot' },
        { key: 'flat', name: 'Flat UI colors', url: 'http://flatuicolors.com/' },
        { key: 'coolors', name: 'Coolors', url: 'https://coolors.co/' },
        { key: 'w3colors', name: 'W3Schools colors', url: 'https://www.w3schools.com/colors/colors_names.asp' },
        { key: '0to255', name: '0to255', url: 'http://www.0to255.com' },
        { key: 'paletton', name: 'Paletton', url: 'http://paletton.com/' },
        { key: 'lol', name: 'LOL colors', url: 'https://www.webdesignrankings.com/resources/lolcolors/' },
        { key: '100pal', name: '100 palettes', url: 'https://www.canva.com/learn/100-color-combinations/' },
        { key: 'gradient', name: 'UI gradient', url: 'https://uigradients.com/' },
        { key: 'webgrad', name: 'Web gradients', url: 'https://webgradients.com/' },
    ] },

    { name: "Ressources : polices & icônes", commands: [
        { key: 'font', name: 'Font Library', url: 'https://fontlibrary.org/fr' },
        { key: 'gfonts', name: 'Google Fonts', url: 'https://www.google.com/fonts' },
    ] },

    { name: "Ressources : icônes", commands: [
        { key: 'car', name: 'Caractères spéciaux', url: 'https://alexandre.alapetite.fr/doc-alex/alx_special.html' },
        { key: 'fontaw', name: 'Font Awesome', url: 'https://fontawesome.com/icons?d=gallery' },
        { key: 'fontawcss', name: 'Font Awesome CSS', url: 'http://astronautweb.co/snippet/font-awesome/' },
        { key: 'flaticon', name: 'Flaticon', url: 'https://www.flaticon.com/' },
        { key: 'preloader', name: 'Preloader', url: 'https://loading.io/' },
    ] },

    { name: "Design : inspiration", commands: [
        { key: 'collectui', name: 'Collect UI', url: 'http://collectui.com/' },
        { key: 'onepage', name: 'One Page Love', url: 'https://onepagelove.com/' },
        { key: 'siteinspi', name: 'Site Inspire', url: 'https://www.siteinspire.com/' },
        { key: 'lapa', name: 'Landing Page Inspiration', url: 'https://www.lapa.ninja/' },
        { key: 'awwwards', name: 'Awwwards', url: 'https://www.awwwards.com/' },
        { key: 'bestfo', name: 'Bestfolios', url: 'http://bestfolios.com/portfolios' },
    ] },

    { name: "Ressources : patterns", commands: [
        { key: 'subtle', name: 'Subtle patterns', url: 'https://www.toptal.com/designers/subtlepatterns/' },
        { key: 'hero', name: 'Hero patterns', url: 'http://www.heropatterns.com/' },
        { key: 'patternlib', name: 'The Pattern library', url: 'http://thepatternlibrary.com/' },
        { key: 'svgback', name: 'SVG backgrounds', url: 'https://www.svgbackgrounds.com/' },
    ] },

];