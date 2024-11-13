import { ref, computed } from "vue";

import { StyledTitle } from "@/utils/components";

interface Props {
  initialCount?: number;
}

export default {
  props: {
    initialCount: { type: Number, default: 0 },
  },
  setup(props: Props) {
    const count:any = ref(props.initialCount);
    const title = computed(() => `Current count: ${count.value}`);

    const increment = () => count.value++;
    const decrement = () => count.value--;

    return () => (
      <div>
        <StyledTitle>何故弄玄虚</StyledTitle>
        <h2>{title.value}</h2>
        <p>Count: {count.value}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    );
  },
};
