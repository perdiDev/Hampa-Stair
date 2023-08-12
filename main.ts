// TODO: Change this function to make all the tests pass
export function stair(num: number) {
    let ans: Array<Array<string>> = new Array();
    for(let i=0; i<num; i++) {
        let temp: Array<string> = new Array();
        for(let j=0; j<i; j++) {
            temp[j] = " ";
        }

        for(let j=i; j<num; j++) {
            temp[j] = "*";
        }
        ans.push(temp);
    }
    return ans;
}
