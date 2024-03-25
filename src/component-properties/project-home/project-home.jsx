// import { UserLogin } from "../user-login/user-login";
import {Grid} from "../grid-demo/grid-demo"
export function ProjectHome(){
    return(
        <div className="container-fluid">
            {/* <h1>Login with Email</h1>
            <UserLogin UserLabel="Your Email Id" UserType="email" ButtonText="Verify Email"/>
            <h1>Login with Id</h1>
            <UserLogin UserLabel="Your User Id" UserType="text" ButtonText="Verify UserId"/> */}
            <h2> Products Grid</h2>
            <Grid fields={["Name","Price","Stock"]} data={[{Name:"TV",Price:54000.44,Stock:"Available"},{Name:"Mobile",Price:55000.66,Stock:"Out of Stock"}]}/>
            <h2>Students Grid</h2>
            <Grid fields={["FirstName","LastName"]} data={[{FirstName:"Raj",LastName:"Kumar"}]}/>
            <Grid title="Students Info" data={[{FirstName:"Raj",LastName:"Kumar"},{FirstName:"Nikki",LastName:"myanmar"}]}fields={["FirstName","LastName"]} theme="table-success"/>
            

        </div>
    )
}