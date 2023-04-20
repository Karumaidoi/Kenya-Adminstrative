export const loadData = async function getData()  {
    try {
        console.log("Fetching Data")

        const  res = await fetch("http://127.0.0.1:3000/getData");

        if(!res.ok) throw new Error("Unable to Load data")

        const data = await res.json();

        const dataCountries = data.data.data;

        console.log(dataCountries);
        
    } catch (error) {
        throw new Error('Something went wrong!. Please try out again')
    }
}



