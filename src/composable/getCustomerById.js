import {ref} from "vue";
import axios from "axios";

const getCustomerById = (id) => {


    let customer = ref(null);

    const load = async () => {

        try{

            let res = await axios(`http://localhost:3000/customers/${id}`);
            customer.value = await res.data ; 
            
        }
        catch(err)
        {
            console.log(err);
        }

    }

    return { customer , load }
};
 
export default getCustomerById ;