<template>
  <div class="flex flex-row h-full w-full overflow-hidden">
    <div class="w-64 border-r border-grey-lightest font-sans overflow-auto text-grey-lightest">
      <div class="border-b border-blue-darkest bg-blue-lighter text-blue-dark px-2 py-1 text-sm">
        <div class="font-bold">{{ activeSnippet.name ? activeSnippet.name : '[No Active Snippet]' }}</div>
        <div class="my-1">{{ status }}</div>
      </div>
      <div
        class="border-b border-grey-lightest px-2 py-1"
        v-for="(val, key) in trainData"
        :key="key"
      >
        <div class="font-bold tracking-wide uppercase text-xs mb-1">{{ key }}</div>
        <div class="font-mono text-sm">{{ val }}</div>
      </div>
    </div>
    <div class="flex flex-row h-full w-full">
      <div class="w-1/2 overflow-hidden flex flex-col h-full border-r border-grey-lightest">
        <div
          class="w-full bg-green-darkest text-grey-lightest font-mono text-sm h-8 p-2 border-b border-grey-lightest"
        >Positive</div>
        <div class="flex flex-row w-full h-full flex-wrap overflow-auto items-start">
          <exemplar
            v-for="exId in positiveExamples"
            :key="exId + activeSnippet.name"
            v-bind:snippet-name="activeSnippet.name"
            v-bind:id="exId"
          ></exemplar>
        </div>
      </div>
      <div class="w-1/2 overflow-hidden flex flex-col h-full border-r border-grey-lightest">
        <div
          class="w-full bg-red-darkest text-grey-lightest font-mono text-sm h-8 p-2 border-b border-grey-lightest"
        >Negative</div>
        <div class="flex flex-row w-full h-full flex-wrap overflow-auto items-start">
          <exemplar
            v-for="exId in negativeExamples"
            :key="exId + activeSnippet.name"
            v-bind:snippet-name="activeSnippet.name"
            v-bind:id="exId"
          ></exemplar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Exemplar from '../Samples/Exemplar';

export default {
  name: 'snippet-inspector',
  components: {
    Exemplar
  },
  computed: {
    activeSnippet() {
      return this.$store.state.snippets.activeSnippet;
    },
    positiveExamples() {
      const ex = [];
      if (this.activeSnippet.data) {
        for (let i = 0; i < this.activeSnippet.data.length; i++) {
          if (this.activeSnippet.data[i].y > 0) {
            ex.push(i);
          }
        }
      }

      return ex;
    },
    negativeExamples() {
      const ex = [];
      if (this.activeSnippet.data) {
        for (let i = 0; i < this.activeSnippet.data.length; i++) {
          if (this.activeSnippet.data[i].y <= 0) {
            ex.push(i);
          }
        }
      }

      return ex;
    },
    status() {
      return this.activeSnippet.trained ? 'Trained' : 'Not Trained';
    },
    trainData() {
      if (this.activeSnippet.trained) {
        const filtered = {};
        const val = this.activeSnippet.trainData;

        for (const key of Object.keys(val)) {
          if (key !== 'code' && key !== 'message') {
            filtered[key] = val[key];
          }
        }

        return filtered;
      }

      return {};
    }
  }
};
</script>