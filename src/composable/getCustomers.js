import {ref} from "vue";
import axios from "axios";

const getCustomers = () => {


    let customers = ref([]);
    let customersNames = [];

    const load = async () => {


        try
        {
        let res = await axios("http://localhost:3000/customers");

        customers.value = res.data ;
        res.data.forEach(customer => {
            customersNames.push(customer.custName)
        });

        }
        catch(err)
        {
            console.log(err.message);
        }

    }

    return {customers , load , customersNames}
}

export default getCustomers;