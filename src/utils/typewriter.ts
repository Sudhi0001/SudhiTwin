export async function typeWriter(
  text: string,
  onUpdate: (text: string) => void,
  speed = 15
) {
  let current = "";

  for (const char of text) {
    current += char;

    onUpdate(current);

    await new Promise((resolve) =>
      setTimeout(resolve, speed)
    );
  }
}