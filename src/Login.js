import { useQuery } from "@tanstack/react-query";
import "./Login.css"
import React, { useState } from "react"
import { useNavigate } from 'react-router-dom';






const Login = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    // const [user, setUser] = useState(null);


    async function getUsers(email, password) {
        const response = await fetch("http://localhost:53102/api/auth", {
            method: 'POST', // Change the HTTP method to POST
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }), // Include email and password in the request body
        });

        // const { IsSuccess, ResponseMessage } = await response.json();


        const data = await response.json();

        // Convert the data object to a list (array) of values
        // const dataList = Object.values(data);

        // Now you can access IsSuccess and ResponseMessage from the dataList using array indexing
        // const IsSuccess = dataList[0];
        // const ResponseMessage = dataList[1];

        // console.log(dataList);

        return data; // Assuming the API response contains user information or validation result
    }





    const query = useQuery(["login", email, pass], () => getUsers(email, pass), {
        enabled: false,
        retry: false,
        onError: (error) => {
            alert("An error occurred: " + error.message);
        },
        onSuccess: (x) => {
            if (x.isSuccess)
                navigate("/dashboard");
            else{
                if (typeof x.email === "undefined" && typeof x.password !== "undefined")
                    alert(x.password)
                else if(typeof x.email === "undefined")
                    alert(x.responseMessage)
                else 
                    alert(x.email);
            }
        }
    });
    








    // const query = useQuery(["login", email, pass], () => getUsers(email, pass), {
    //     enabled: false, retry: false,
        
    //     onSuccess: (x) => {
    //         if(x.isSuccess)
    //             navigate("/dashboard") //retry false kullandık
    //         else
    //             alert(x.responseMessage)
    //     }

    //     // Don't run the query automatically on component mount
    // });










    // const query = useQuery({
    //     queryKey: ['todos'],
    //     queryFn: () => getUsers(email, pass), // Pass the email and password as parameters to getUsers
    // });









    // async function getUsers() {
    //     const response = await fetch("http://localhost:53102/api/auth");
    //     const movies = await response.json();
    //     setUser(movies)
    //     return movies;
    // }

    // const query = useQuery({
    //     queryKey: ['todos'], queryFn: getUsers
    // })

    const navigate = useNavigate();



    // const mockData = [
    //     { email: 'john@gmail.com', password: 'pass123', user: "John" },
    //     { email: 'jane@gmail.com', password: 'secret987' },
    //     { email: 'mike@gmail.com', password: 'myPassword' },
    //     { email: 'emma@gmail.com', password: 'securePass' }
    // ];

    // const navigate = useNavigate();
    // let authStatus = localStorage.getItem("auth");
    // useEffect(() => {if(authStatus === "false") {nav-igate("/")}},[]);

    // C# -> POST localhost:53102/api/auth {LoginRequestModel}

    const validation = async (email, pass, e) => {
        e.preventDefault()

        // if (email === "" && pass === "") {
        //     alert("Please enter your email and password!");
        // }

        // else if (email === "") {
        //     alert("Please enter your email!");
        // }

        // else if (pass === "") {
        //     alert("Please enter your password!");
        // }

        // if (email !== "" && pass !== "") {
            // Fetch the data using useQuery when the login button is clicked
        query.refetch();
        // }




        // if (await query.data === true) {

        //     // navigate("/dashboard");
        // }


        // else{
        //     console.log("Try Again!");
        // }







        // // Check if the user input is correct by calling the getUsers function
        // const result = getUsers(email, pass);

        // if (result === true) {
        // // If the API returns true, navigate to the dashboard
        // navigate("/dashboard");
        // }









        // let foundEmail = mockData.find((user) => user.email === email && user.password === pass);
        // if (foundEmail) {
        //     navigate("/dashboard");

        // }

    }


    return (
        <div>
            <div className="container">
                <form>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="example@gmail.com" id="email" name="email" onChange={e => setEmail(e.target.value)}></input>
                    <span asp-validation-for="Email" class="text-danger"></span>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="*********" id="password" name="password" onChange={k => setPass(k.target.value)}></input>
                    <button className="log-In-button" type="submit" onClick={(e) => validation(email, pass, e)}>Log In</button>
                    <p><a className="forgot" rel='noreferrer' href="https://www.google.com.tr/?hl=tr" title="Reset password" target="_blank">Forgot password?</a></p>
                </form>
            </div>
            <img className="logo" width={400} src="https://download.logo.wine/logo/University_of_Cambridge/University_of_Cambridge-Logo.wine.png" alt="logoOfCambridge"></img>

        </div>
    )
}


export default Login;