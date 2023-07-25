import PromptSync from 'prompt-sync';

const prompt = PromptSync();

export function numeroPar() {
  for (let contador = 0; contador <= 10; contador += 2) {
    console.log(contador);
  }
}
