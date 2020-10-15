export enum BattleResult {
    DRAW,
    FIRST_WINS,
    SECOND_WINS
}

export interface Item {
    name: string;
    value: number;
}

export interface Warrior {
    name: string;
    life: number;
    speed: number;
    muscle: number;
    items: Item[];
}

export function battleOfWarriors(firstWarrior: Warrior, secondWarrior: Warrior): BattleResult {
    const firstForce: number = getWarriorForce(firstWarrior);
    const secondForce: number = getWarriorForce(secondWarrior);

    if (firstForce === secondForce) {
        firstWarrior.life--;
        secondWarrior.life--;
        return BattleResult.DRAW;
    }

    if (firstForce > secondForce) {
        transferItemsAndDecrementHealth(firstWarrior, secondWarrior);
        return BattleResult.FIRST_WINS;
    }

    transferItemsAndDecrementHealth(secondWarrior, firstWarrior);
    return BattleResult.SECOND_WINS;
}

function getWarriorForce(warrior: Warrior): number {
    return warrior.life + warrior.muscle + warrior.speed;
}

function transferItemsAndDecrementHealth(winner: Warrior, loser: Warrior): void {
    loser.life--;

    const winnerItems: Item[] = winner.items;
    const loserItems: Item[] = loser.items;

    if (loser.items.length === 0) {
        return;
    }

    // get item with highest value
    const item: Item = loserItems.sort((item1, item2) => item2.value - item1.value)[0];
    loserItems.splice(loserItems.indexOf(item), 1);
    winnerItems.push(item);
}