import {ref} from "vue";
import axios from "axios";

const getOutcome = () => {


    let outcomeItems = ref([]);

    const loadOutcome = async () => {


        try
        {
        let res = await axios("http://localhost:3000/outcome");

        outcomeItems.value = res.data ;

        }
        catch(err)
        {
            console.log(err.message);
        }

    }

    return {outcomeItems , loadOutcome }
}

export default getOutcome;