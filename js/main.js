require.config({
    shim: {
        "semantic": ["jquery"],
        "modules/search_hint": ["jquery"],
        "user_seed": ["jquery"]
    },
    base_path: "/js/",
    paths: {
        main: "main",
        jquery : ["https://cdn.bootcss.com/jquery/1.11.3/jquery.min"],
        semantic: ["../semantic/dist/semantic.min"],
        "modules/search_hint": ["module/search_hint.js"],
        localStorage: ["js/lib/localStorage"],
        "user_seed": ["data/user_seed"],
        "login": ["modules/login"],
        "angular":["lib/angular.min"]
    }


});
