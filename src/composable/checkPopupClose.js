const checkPopupClose = (fields = []) => {

    const fields_value = [];

    fields.forEach(field => {
        if(field.value)
        {
            fields_value.push(field.value);
        }
    })
    if (fields_value.length > 0)
    {
        // the form is not empty 
        return false;
    }
    else if ( fields_value.length == 0)
    {
        // form is empty 
        return true ;
    }

}

export default checkPopupClose ;