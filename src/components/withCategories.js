import React from 'react'

const WithCategories = (WrappedComponent) => {
    class NewComponent extends React.Component {

        state = {
            data : [],
            CategoryId : 0
        };



        async componentDidMount() {
            const url = "http://localhost:64666/Categories";
            const response = await fetch(url);
            const data = await response.json();
            this.setState({
                data: data
            });
    
           // console.log(this.state.data);

        }

        GetCategoryId(catId){

            this.setState({CategoryId : catId})
        }


    
        render() {
            return <WrappedComponent
                     CategoryList={this.state.data}
                    {...this.props} 
                     />
        }

        
    }
    return NewComponent;
}

export default WithCategories;