export default {
  created() {
    this.$store.dispatch('getParts');
  },
  computed: {
    parts() {
      return this.$store.state.robot.parts || {
        heads: [],
        arms: [],
        torsos: [],
        bases: [],
      };
    },
  },
};
