<template>
  <div :class="classStyle" :style="containerStyle">
    <div class="font_awesome_icon">
      <i
        v-for="(value, idx) in socialSharing"
        :key="idx"
        :class="setFontAwesome(value)"
        :style="{ color: value.color }"
        v-show="hasSocialsharing(value.social)"
        @click="goToUrl(hasSocialsharing(value.social))"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "vue-social-sharing",
  props: {
    fixed: { type: Boolean, default: false },
    background: { type: String, default: "#ffc107" },
    block: { type: Boolean, default: false },
    animated: { type: Boolean, default: false },
    top: { type: Number, default: 20 },
    right: { type: Boolean, default: false },
    twitter: { type: String, default: null },
    facebook: { type: String, default: null },
    youtube: { type: String, default: null },
    soundcloud: { type: String, default: null },
    pinterest: { type: String, default: null },
    gitlab: { type: String, default: null },
    github: { type: String, default: null },
    discord: { type: String, default: null },
  },
  data() {
    return {
      socialSharing: [
        { color: "#00acee", social: "twitter", icon: "fab fa-twitter" },
        { color: "#3b5998", social: "facebook", icon: "fab fa-facebook" },
        { color: "#bb0000", social: "youtube", icon: "fab fa-youtube" },
        { color: "#FF5700", social: "soundcloud", icon: "fab fa-soundcloud" },
        { color: "#cb2027", social: "pinterest", icon: "fab fa-pinterest" },
        { color: "#FD7E14", social: "gitlab", icon: "fab fa-gitlab" },
        { color: "#333333", social: "github", icon: "fab fa-github" },
        { color: "#6F85D4", social: "discord", icon: "fab fa-discord" },
      ],
    };
  },
  computed: {
    containerStyle() {
      let vPos = this.top;
      vPos = vPos < 0 ? 0 : vPos > 100 ? 100 : vPos;

      return {
        "--vPos": parseInt(vPos) + "%",
        "--background": this.background,
      };
    },
    classStyle() {
      let alignVertical = this.right ? "verticalRight" : "verticalLeft";
      let position = this.fixed ? "fixed" : "absolute";
      return [position, "vertical", alignVertical];
    },
  },
  methods: {
    setFontAwesome(value) {
      const fa_animated = this.animated ? "fa_animated" : "";

      return [this.block ? "block" : "inline", value.icon, fa_animated];
    },
    hasSocialsharing(social) {
      switch (social) {
        case this.twitter && "twitter":
          return "https://twitter.com/" + this.twitter;
        case this.facebook && "facebook":
          return "https://www.facebook.com/" + this.facebook;
        case this.youtube && "youtube":
          return "https://www.youtube.com/channel/" + this.youtube;
        case this.soundcloud && "soundcloud":
          return "https://soundcloud.com/" + this.soundcloud;
        case this.pinterest && "pinterest":
          return "https://www.pinterest.fr/" + this.pinterest;
        case this.gitlab && "gitlab":
          return "https://gitlab.com/" + this.gitlab;
        case this.github && "github":
          return "https://github.com/" + this.github;
        case this.discord && "discord":
          return "https://discord.gg/" + this.discord;
        default:
          return false;
      }
    },
    goToUrl(url) {
      if (!url) return;
      let a = document.createElement("a");
      a.target = "_blank";
      a.href = url;
      a.click();
    },
  },
};
</script>

<style scoped>
:root {
  --vPos: 25%;
  --background: "#ffc107aa";
}
@keyframes move {
  1% {
    transform: translate3d(2px, 0, 0) scale(1.2);
  }
  2% {
    transform: translate3d(4px, 0, 0) scale(1.4);
  }
  3% {
    transform: translate3d(6px, 0, 0) scale(1.6);
  }
  4% {
    transform: translate3d(8px, 0, 0) scale(1.8);
  }
  5% {
    margin-left: 0.5em;
    background: white;
    border-radius: 20px;
    transform: translate3d(10px, 0, 0) scale(2);
  }
  20% {
    margin-left: 0em;
    transform: translate3d(0px, 0, 0) scale(1);
  }
}
.block {
  display: block;
}
.absolute {
  position: absolute;
}
.fixed {
  position: fixed;
}
.vertical {
  top: var(--vPos);
  padding: 0 0.1em;
  background: var(--background);
}
.verticalLeft {
  left: 0;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}
.verticalRight {
  right: 0;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
.vertical .font_awesome_icon i {
  text-align: center;
  padding: 0.1em;
  color: white;
  font-size: 2em;
  cursor: pointer;
  transition: 0.1s;
}
.vertical .font_awesome_icon i:hover {
  background: rgb(255, 255, 255, 1);
  border-radius: 10px;
  font-size: 4em;
  animation: none;
}
.fa_animated {
  animation: move 5s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite;
}
@media screen and (max-height: 700px) {
  .container {
    display: none;
  }
}
</style>
