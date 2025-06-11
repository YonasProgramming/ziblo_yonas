<template>
    <q-page class="q-pa-md">
        <div class="q-py-md q-mt-lg">
            <LanguageSwitcher />
        </div>

        
        <div class="q-pt-md text-body2">
            <router-link to="/instructions" class=" q-pa-md  text-body2">{{ $t('Instructions') }}</router-link>
        </div>

        <div class="q-pt-md text-body2">
            <router-link to="/terms" class="q-pa-md text-body2">{{ $t('Terms') }}</router-link>
        </div>
        <q-separator class="q-my-lg" />
        <h2 class="text-h5 q-mb-md q-mt-lg">{{$t('contact')}}</h2>
        <div class="q-py-md text-body2 text-center">
            {{ $t('email') }}<br>
            <a href="mailto:info@dikobraz.hr">info@dikobraz.hr</a><br>
                 {{ $t('or') }}
        </div>
        <q-form @submit.prevent="submitForm" class="q-gutter-md">
            <q-input filled v-model="name" :label="$t('your_name')" required />
<q-input filled v-model="email" type="email" :label="$t('email_address')" required />
<q-input filled v-model="message" type="textarea" :label="$t('your_message')" required />
<q-btn :label="$t('send_message')" type="submit" color="primary" />
        </q-form>
        <q-banner v-if="submitted" class="bg-green-1 text-green-10 q-mt-md">
            Message sent successfully. Thank you!
        </q-banner>





    </q-page>

</template>

<script setup>
import { ref } from 'vue'
import LanguageSwitcher from 'components/LanguageSwitcher.vue'
const name = ref('')
const email = ref('')
const message = ref('')
const submitted = ref(false)

function submitForm() {
    console.log('Sending message:', { name: name.value, email: email.value, message: message.value })
    submitted.value = true

    // Reset form (optional)
    name.value = ''
    email.value = ''
    message.value = ''
}
</script>
