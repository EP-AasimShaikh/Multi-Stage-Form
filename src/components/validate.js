
const validate = (values, event) =>{
     const errors = {};
        if(!values.firstName){
            errors.firstName = 'Required'
        }else if(!/^[a-zA-Z '-]+$/i.test(values.firstName)){
            errors.firstName = 'Enter text only'
        }
        if(!values.lastName){
            errors.lastName = 'Required'
        }else if(!/^[a-zA-Z '-]+$/i.test(values.lastName)){
            errors.lastName = 'Enter text only'
        }
        if(!values.dob){
           errors.dob = 'Required'
        }else {
            var dob = new Date(values.dob);
            var now = new Date();
            if(now - dob > 568024668000) {
                console.log("Older than 18 years"); 
            }else{
                console.log("underage");
                errors.dob = 'Should be 18+'
                alert("should be 18+")
            }
        }
        
        if(!values.gender){
            errors.gender = 'Required'
        }
        if(!values.address1){
            errors.address1 = 'Required'
        }
        if(!values.state){
            errors.state = 'Required'
        }
        if(!values.country){
            errors.country = 'Required'
        }
        if(!values.accountType){
            errors.accountType = 'Required'
        }
        if(!values.pan){
            errors.pan = 'Required'
        }else if(!/[A-Z]{5}[0-9]{4}[A-Z]{1}/i.test(values.pan)){
            errors.pan = 'Enter Correct PAN No.'
        }
        if(!values.nationality){
            errors.nationality = 'Required'
        }
        if(!values.profession){
            errors.profession = 'Required'
        }else if(!/^[a-zA-Z\s]+$/i.test(values.profession)){
            errors.profession = 'Enter text only'
        }
        if(!values.netWorth){
            errors.netWorth = 'Required'
        }
        if(!values.ifscCode){
            errors.ifscCode = 'Required'
        }else if(!/^[A-Z]{4}0[A-Z0-9]{6}$/i.test(values.ifscCode)){
            errors.ifscCode ="Enter Correct IFSC Code"
        }
        if(!values.accountNo){
            errors.accountNo = 'Required'
        }else if(!/^\d{9,18}$/i.test(values.accountNo)){
            errors.accountNo ="Enter Correct Account No."
        }
        if(!values.accountName){
            errors.accountName = 'Required'
        } else if(!/^[a-zA-Z '-]+$/i.test(values.accountName)){
            errors.accountName = 'Enter text only'
        }
    
        return errors;
        
        
    }

    export default validate;
