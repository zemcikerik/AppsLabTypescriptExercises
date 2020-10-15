export interface RoundResult {
    gameOver: boolean;
    words: string[];
}

function createGameOverResult(): RoundResult {
    return { gameOver: true, words: null };
}

function createRoundOverResult(words: string[]): RoundResult {
    return { gameOver: false, words: words };
}

export class Shiritori {
    
    private words: string[];
    private gameOver: boolean;

    constructor() {
        this.restart();
    }

    restart(): void {
        this.words = [];
        this.gameOver = false;
    }

    runGame(...words: string[]): RoundResult[] {
        return words.map(word => this.play(word));
    }

    play(word: string): RoundResult {
        if (this.gameOver) {
            return createGameOverResult();
        }

        // trim leading and trailing whitespace
        word = word?.trim();

        if (this.isWordValid(word)) {
            this.words.push(word);
            return createRoundOverResult([...this.words]);
        }

        this.gameOver = true;
        return createGameOverResult();
    }

    private isWordValid(word: string): boolean {
        if (word === undefined || word === null || word.length === 0) {
            return false;
        }

        // check if every character is a letter
        if (!word.match(/^[a-zA-Z]+$/)) {
            return false;
        }

        // check if the word is the first played word of a game
        if (this.words.length === 0) {
            return true;
        }

        // check if the word was already played
        if (this.words.indexOf(word) !== -1) {
            return false;
        }

        // check if the last letter of last played word matches the first letter of this word
        const lastWord: string = this.words[this.words.length - 1];
        const lastChar: string = lastWord.charAt(lastWord.length - 1);
        const firstChar: string = word.charAt(0);
        return firstChar.toLowerCase() === lastChar.toLowerCase();
    }

    getWords(): string[] {
        // return a copy of the words array
        return [...this.words];
    }

    isGameOver(): boolean {
        return this.gameOver;
    }

}