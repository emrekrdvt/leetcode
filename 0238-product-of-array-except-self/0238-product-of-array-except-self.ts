function productExceptSelf(nums: number[]): number[] {
 const n: number = nums.length;
    let outputArr: number[] = new Array(n);
    let multi: number = 1;

    for (let i: number = 0; i < n; i++) {
        outputArr[i] = multi;
        multi *= nums[i];
    }

    multi = 1;

    for (let i: number = n - 1; i >= 0; i--) {
        outputArr[i] *= multi;
        multi *= nums[i];
    }

    return outputArr;
};