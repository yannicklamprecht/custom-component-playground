import { ref, computed } from 'vue';

export const FullNameInput = {
    template: `
        <v-row>
                <v-col cols="8">
                    <v-row>
                        <v-col cols="5">
                                <v-text-field variant="underlined" v-model="firstName" label="First Name"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="5">
                            <v-text-field variant="underlined" v-model="lastName" label="Last Name"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="5">
                            <v-text-field :readOnly="true" :disabled="true" variant="underlined" v-model="fullName" label="Full Name"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-spacer></v-spacer>
                    </v-row>
                    <v-row>
                        <v-col cols="3">
                            <v-text-field :readOnly="true" :disabled="true" variant="underlined" v-model="copied" label="Full Name"></v-text-field>
                        </v-col>
                        <v-col cols="1">
                            <v-btn @click.prevent="copy">Copy</v-btn>
                        </v-col>
                        <v-col cols="1">
                            <v-btn @click.prevent="clear">Clear</v-btn>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
    `,

    setup() {
        const firstName = ref("");
        const lastName = ref("");
        const fullName = computed(() => {
            return `${firstName.value} ${lastName.value}`
        });
        const copied = ref("");
        const copy = (event) => {
            copied.value = fullName.value;
        };
        const clear = (event) => {
            copied.value = "";
        };

        return {
            firstName,
            lastName,
            fullName,
            copied,
            copy,
            clear
        }
    }
}