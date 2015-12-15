require.config({
    shim: {
        "semantic": ["jquery"],
        "modules/search_hint": ["jquery"]
    },
    paths: {
        main: "main",
        jquery : ["https://cdn.bootcss.com/jquery/1.11.3/jquery.min"],
        semantic: ["../semantic/dist/semantic.min"],
        "modules/search_hint": ["module/search_hint.js"],
        localStorage: ["lib/localStorage"]
    }


});
