import removeZero from '../../utils/helpers'

export default function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    if((nums1.length > 0) || (nums2.length > 0)){
      const removeZeroNums1 =  removeZero(nums1);
      const removeZeroNums2 =  removeZero(nums2);
      
      const result = [...removeZeroNums1 , ...removeZeroNums2];
      result.sort((a , b)=> a-b);
   
      console.log(result);
   }
};


merge([1,2,3,0,0,0],3,[2,5,6],3)
merge([1],1,[],0)
merge([0],0,[1],1)