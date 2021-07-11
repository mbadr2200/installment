import {ref} from "vue";
import axios from "axios";

const getIncome = () => {


    let incomeItems = ref([]);

    const loadIncome = async () => {


        try
        {
        let res = await axios("http://localhost:3000/income");

        incomeItems.value = res.data ;

        }
        catch(err)
        {
            console.log(err.message);
        }

    }

    return {incomeItems , loadIncome }
}

export default getIncome;