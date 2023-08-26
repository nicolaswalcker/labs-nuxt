<script lang="ts" setup>
const subject = ref('')
const sending = ref(false)
const mailSuccess = ref(false)
const send = () => {
  useFetch('/api/send', {
    query: {
      subject: subject.value
    },
    onRequest: () => {
      sending.value = true
    },
    onResponse: ({ response }) => {
      if (response.status === 200) {
        subject.value = ''
        sending.value = false
        mailSuccess.value = true

        setTimeout(() => {
          mailSuccess.value = false
        }, 2000)
      } else {
        sending.value = false
        throw new Error('Error sending email')
      }
    }
  })
}
</script>
<template>
  <div class="h-screen w-full flex items-center justify-center bg-slate-200">
    <form class="flex flex-col justify-center items-center gap-4 border p-5 border-gray-600 rounded-md bg-white" @submit.prevent="send">
      <div class="flex flex-col items-start">
        <label for="subject">Assunto</label>
        <input
          id="subject"
          v-model="subject"
          required
          placeholder="Assunto do email"
          class="border border-gray-500 rounded p-2"
          type="text"
        >
      </div>
      <button type="submit" :disabled="sending" class="w-full bg-sky-500 text-white p-2 rounded">
        <Icon v-if="sending" name="svg-spinners:6-dots-rotate" />
        <p v-else>
          Enviar email
        </p>
      </button>
      <small v-if="mailSuccess" class="text-red-400">email sended</small>
    </form>
  </div>
</template>

<style>

</style>
