const validate = values => {
  //  console.log("value:",values.nominee);
  var percentageSum = 0;
  // console.log(percentageSum);
  const errors = {}

  if (!values.nominee || !values.nominee.length) {
    errors.nominee = { _error: 'At least one member must be entered' }
  } else {
    const nomineeArrayErrors = []
    values.nominee.forEach((member, memberIndex) => {
        percentageSum = percentageSum + parseInt(member.percentage);
        window.percentage = percentageSum

      const memberErrors = {}
      if (!member || !member.nomineeFirstName) {
        console.log("member ", member.nomineeFirstName)
        memberErrors.nomineeFirstName = 'Required'
        nomineeArrayErrors[memberIndex] = memberErrors
      } else if (!/^[a-zA-Z '-]+$/i.test(member.nomineeFirstName)) { 
        memberErrors.nomineeFirstName = 'Enter text only'
        nomineeArrayErrors[memberIndex] = memberErrors
      }
      if (!member || !member.nomineeLastName) {
        memberErrors.nomineeLastName = 'Required'
        nomineeArrayErrors[memberIndex] = memberErrors
      }else if (!/^[a-zA-Z '-]+$/i.test(member.nomineeLastName)) {
        memberErrors.nomineeLastName = 'Enter text only'
        nomineeArrayErrors[memberIndex] = memberErrors
      }
      if (!member || !member.percentage) {
        memberErrors.percentage = 'Required'
        nomineeArrayErrors[memberIndex] = memberErrors
      } else if (percentageSum > 100) {
        memberErrors.percentage = 'Enter correct percentage'
        nomineeArrayErrors[memberIndex] = memberErrors
        alert("Total allocation should be equal to 100%");
      }
      if (!member || !member.nomineeAddress) {
        memberErrors.nomineeAddress = 'Required'
        nomineeArrayErrors[memberIndex] = memberErrors
      }

      if (!member || !member.nomineeState) {
        memberErrors.nomineeState = 'Required'
        nomineeArrayErrors[memberIndex] = memberErrors
      }
      if (!member || !member.nomineeCountry) {
        memberErrors.nomineeCountry = 'Required'
        nomineeArrayErrors[memberIndex] = memberErrors
      }


    })

    if (nomineeArrayErrors.length) {
      errors.nominee = nomineeArrayErrors
    }
  }

  return errors
}

export default validate