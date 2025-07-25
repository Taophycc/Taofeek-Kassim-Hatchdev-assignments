function merge(arr: number[], low: number, mid: number, high: number): void {
  const n = high - low + 1;
  const temp: number[] = new Array(n);
  let i = low;
  let j = mid + 1;
  let k = 0;

  while (i <= mid && j <= high) {
    if (arr[i] <= arr[j]) {
      temp[k++] = arr[i++];
    } else {
      temp[k++] = arr[j++];
    }
  }

  while (i <= mid) {
    temp[k++] = arr[i++];
  }

  while (j <= high) {
    temp[k++] = arr[j++];
  }

  for (let p = 0; p < n; p++) {
    arr[low + p] = temp[p];
  }
}

function mergeSort(arr: number[], low: number, high: number): void {
  if (low < high) {
    const mid = Math.floor((low + high) / 2);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);
    merge(arr, low, mid, high);
  }
}

const nums = [10, 5, 30, 15, 7];
mergeSort(nums, 0, nums.length - 1);
console.log(nums);
