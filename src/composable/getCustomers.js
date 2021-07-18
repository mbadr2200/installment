import {ref} from "vue";
import axios from "axios";

const getCustomers = () => {


    const customers = ref([]);
    let customersNames = [];
    const isPending = ref(false);

    const load = async () => {
        isPending.value = true

      

        try
        {
            await setTimeout( async () => {
                await console.log("ss")
        }, 3000 );
        let res = await axios("http://localhost:3000/customers");

        customers.value = res.data ;
        res.data.forEach(customer => {
            customersNames.push(customer.custName)
        });
        isPending.value = false
        }
        catch(err)
        {
            console.log(err.message);
            isPending.value = false
        }

    }

    return {customers , load , customersNames , isPending}
}

export default getCustomers;