export function validation(input:HTMLInputElement){
    if(input.value === ""){
        return false;
    }
    else{
        return true;
    }

}