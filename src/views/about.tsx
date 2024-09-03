import { ref, computed } from 'vue';

interface Props {
  initialCount?: number;
}

export default {
  props: {
    initialCount: { type: Number, default: 0 }
  },
  setup(props: Props) {
    const count = ref(props.initialCount);
    const title = computed(() => `Current count: ${count.value}`);

    const increment = () => count.value++;
    const decrement = () => count.value--;

    return () => (
      <div>
        123123
        <h2>{title.value}</h2>
        <p>Count: {count.value}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    );
  }
};