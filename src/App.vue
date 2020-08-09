<template>
  <VueSocialSharing
    fixed
    background="darkstategrey"
    block
    :top="30"
    left
    twitter="12"
    facebook="12"
    youtube="12"
    soundcloud="12"
    pinterest="12"
    gitlab="12"
    github="12"
    discord="12"
  />
</template>

<script>
// fixed: { type: Boolean, default: true },
// background: { type: String, default: "#ffc107" },
// block: { type: Boolean, default: false },
// animated: { type: Boolean, default: false },
// top: { type: Number, default: 20 },
// right: { type: Boolean, default: false },
// twitter: { type: String, default: null },
// facebook: { type: String, default: null },
// youtube: { type: String, default: null },
// soundcloud: { type: String, default: null },
// pinterest: { type: String, default: null },
// gitlab: { type: String, default: null },
// github: { type: String, default: null },
// discord: { type: String, default: null },
export default {
  components: {
    VueSocialSharing: () => import("./vue-social-sharing"),
  },
};
</script>
