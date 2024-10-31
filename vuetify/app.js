import {createApp} from 'vue'
import { createVuetify } from 'vuetify'
import {Home} from "./components/Home.js";
const vuetify = createVuetify()

createApp({
    template: "#app-template",
    components: {
        Home: Home
    }
}).use(vuetify).mount('#app')
