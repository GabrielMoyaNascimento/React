import MyComponent from "./MyComponent";

const TemplateExpressions = () => {
    const name = 'Moya';

    const data = {
        age: 45,
        job: 'programmer',
    }

    return (
        <div>
            <h1>Hello {name}, How are you?</h1>
            <p>You are {data.age} and work as a {data.job}.</p>
            
            {/*JavaScript*/}
            <p>{3 + 3}</p>
            <MyComponent />
        
        </div>
    );
}

export default TemplateExpressions;