export class BubbleSortByStep {
    static numbers: number[] = [8, 3, 6, 1, 4, 10, 2, 50];

    static bubbleSortByStep(list: number[]) {
        let needNextPass: boolean = true;
        for (let i = 1; i < list.length; i++) {
            needNextPass = false;
            for (let j = 0; j < list.length - i; j++) {
                if (list[j] > list[j + 1]) {
                    console.log(`Swap ${list[j]} with ${list[j + 1]}`);
                    [list[j], list[j + 1]] = [list[j + 1], list[j]];
                    needNextPass = true;
                }
            }
            if (needNextPass == false) {
                break;
            }
            console.log("List after the  " + i + "' sort: ");
            console.log(BubbleSortByStep.numbers);
        }
    }
}