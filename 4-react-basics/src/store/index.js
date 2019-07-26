


const store = {
    getState() {
        return {
            topics: [
                "java",
                "scala",
                "python",
                "javascript"
            ],
            comments: {
                "java": [
                    "best language",
                    "poular",
                    "..."
                ]
            }
        }
    },
    subscribe(listener) {
        //
    },
    //...
}
export default store;