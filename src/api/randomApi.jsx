const fetchRandomData = () => {
    return fetch('https://randomuser.me/api')
        .then((response) => {
            // handle success
            console.log(response);
            return response;
        })
        .catch((err) => {
            console.error(err);
        })
}

export default fetchRandomData