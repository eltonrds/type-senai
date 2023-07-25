import PromptSync from 'prompt-sync';

const prompt = PromptSync();

export function numeroLoop() {

  for (let contador = 1; contador <= 10; contador++) {
    console.log(contador);
  }
}
