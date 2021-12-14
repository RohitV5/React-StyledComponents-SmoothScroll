module.exports = {
    babel : {
        plugin:["babel-plugin-macros"],
    },
    style:{
        postcss:{
            plugins:[require("tailwindcss"), require("autoprefixer")],
        }
    }
}