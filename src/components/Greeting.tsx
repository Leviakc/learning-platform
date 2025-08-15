import { createSignal } from "solid-js";

type GreetingProps = {
  messages: string[];
};

export default function Greeting({ messages }: GreetingProps) {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];

  const [greeting, setGreeting] = createSignal(messages[0]);

  return (
    <div>
      <h3>{greeting()}! Thank you for visiting!</h3>
      <button onClick={() => setGreeting(randomMessage())}>New Greeting</button>
    </div>
  );
}
