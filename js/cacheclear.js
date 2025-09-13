function bustRelevantCache() {
    const timestamp = new Date().getTime();

    // List of URLs you want to bust the cache for
    const relevantPages = [
        '/about.html',       
        '/contact.html',
        '/index.html',
        '/careers.html',
        '/cloudservices.html',
        '/cybersecurity.html',
        '/erpservices.html',
        '/index.html',
        '/infraservice',
        '/integrationconsulting',
        '/itconsulting',
        '/legacyservices',
        '/pmservices'
    ];

    // Get the current page URL path
    const currentPage = window.location.pathname;

    // If the current page is one of the relevant pages, bust cache
    if (relevantPages.includes(currentPage)) {
        console.log(`Cache busting for page: ${currentPage}`);
        
        // Cache-bust CSS for this page
        const cssLink = document.getElementById('cacheBustedCSS');
        cssLink.href = 'style.css?v=' + timestamp;

        // Cache-bust JS for this page (if needed)
        const script = document.createElement('script');
        script.src = 'script.js?v=' + timestamp;
        document.body.appendChild(script);
    } else {
        console.log(`No cache busting needed for: ${currentPage}`);
    }
}

// Call the function to cache bust relevant pages
window.onload = bustRelevantCache;