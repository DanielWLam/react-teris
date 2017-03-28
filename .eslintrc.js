module.exports = {
    "extends": "airbnb",
    "installedESLint": true,
    "plugins": [
        "react"
    ],
    "rules": {
        "react/jsx-filename-extension": [2, { extensions: ['.js','.jsx'] }],
        "func-names": [0],
        "new-cap": [2, { newIsCap: true ,capIsNew: true, capIsNewExceptions: ['List', 'Map']}],
        "linebreak-style": [0],
        "react/jsx-indent": [0],
        "indent": [0],
        "react/self-closing-comp": [0],
        "react/prefer-stateless-function": [0],
        "no-mixed-spaces-and-tabs": [0]
    },
    "env": {
        "browser": true
    }
};