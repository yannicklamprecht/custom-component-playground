import { ref, computed } from 'vue'
export const Home = {
    template: `
        <v-container>
            <v-row>
                <v-text-field v-model="message" label="Message"></v-text-field>
            </v-row>
            <v-row>
                <v-text-field v-model="test" label="Computed"></v-text-field>
            </v-row>
            <v-row>
                <v-col>
                    <v-btn @click="message = 'Hello World!'">Click me</v-btn>
                </v-col>
            </v-row>
            <v-row>
                <v-spacer></v-spacer>
            </v-row>
        </v-container>
    `,

    setup() {
        const message = ref('Hello Vue!')
        const test = computed(() => {
           return message.value + " computed"
        });

        return {
            message,
            test
        }
    }
}