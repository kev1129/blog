<template>
<div>
    <base-title :title="title"></base-title>
    <v-container>
        <v-layout  align-start justify-start row wrap>
            <v-flex xs12 sm12 md6 lg6 xl6>
                <v-form
                ref="form"
                v-model="valid"
                lazy-validation
                >
                    <v-text-field
                        v-model="name"
                        :counter="20"
                        :rules="nameRules"
                        label="Name"
                        required
                    ></v-text-field>

                    <v-text-field
                        v-model="email"
                        label="Subject"
                        required
                    ></v-text-field>

                    <v-textarea
                    name="input-7-1"
                    label="Content"
                    value=""
                    rows="10"
                    ></v-textarea>
                    <v-btn dark>submit</v-btn>
                </v-form>

            </v-flex>
        </v-layout>
    </v-container>
</div>
</template>
<script>
import BaseTitle from '~/components/BaseTitle.vue'
export default {
    components: {
        BaseTitle,
    },
    data () {
        return {
            title: 'Contact Me'
        }
    }
}
</script>