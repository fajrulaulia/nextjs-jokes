import Axios from "axios";


const Services = {

    getJokes: () => {
        return new Promise((resolve, reject) => {
            Axios.get("https://api.chucknorris.io/jokes/random")
                .then((res => resolve(res)))
                .catch(err => reject(err))

        })
    }

}

export default Services