const nums = [document.getElementById("num1"), document.getElementById("num2"), document.getElementById("num3"), document.getElementById("num4"), document.getElementById("num5"), document.getElementById("num6")];
nums.forEach((value) => {
    value.readOnly = true
})
nums[0].readOnly = false
nums.forEach((value, index) => {
  value.addEventListener('input', () => {
    const regex = /\d/
    if(regex.test(nums[index].value)){
        // Disable the current input field
        nums[index].readOnly = true;
        nums[index].disabled = true

        // Move focus to the next input field if it exists
        if (nums[index+1]) {
        nums[index+1].readOnly = false;
        nums[index+1].focus();
        }
    }else nums[index].value = ""
    
  });
});